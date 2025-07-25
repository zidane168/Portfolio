# SUMMARY
# ------------------- SUMMARY ---------------------
To achieve maximum efficiency and avoid the overhead of opening a new WebSocket client connection to your own server, you should combine the RabbitMQ consumer and the WebSocket server into a single process. This way, when a message is received from RabbitMQ, you can directly call the broadcast method on your WebSocket server instance.

Your current flow is standard for PHP and works well for most use cases.
For maximum efficiency, combine the RabbitMQ consumer and WebSocket server into one process and broadcast directly.
If you want to keep them separate, your current use of CSocketClient and connect is acceptable.
# ----------------------------------------
 

# We need to install this one
  
composer require "php-amqplib/php-amqplib"
composer require "cboden/ratchet"


# API / Controller Call
$rabbitMQService = new RabbitMQService(); 
$data = [
    'cmd'       => CSocketClient::PRINT_INVOICE,
    'id'        => $id,         // invoice number (invoices table)
    'token'     => '17994071636842B52E867143LI9W4TJKAY72EXZUSP5RNF8VMCBD61OQHG',
];   
$rabbitMQService->sendMessage($data); 
  
# src/Service/RabbitMQService.php
<?php  
namespace App\Service;

use Cake\Core\Configure;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;
use App\MyHelper\CSocketClient;
use App\MyHelper\MyHelper;

class RabbitMQService
{
    public function sendMessage($message): void
    { 
        $connection = new AMQPStreamConnection(
            Configure::read('RabbitMQ.host'),
            Configure::read('RabbitMQ.port'),
            Configure::read('RabbitMQ.username'),
            Configure::read('RabbitMQ.password'),
            Configure::read('RabbitMQ.vhost')
        );

        $channel = $connection->channel();
        
        $exchangeName =  MyHelper::EXCHANGE_NAME;
        $queueName = MyHelper::QUEUE_NAME;
        $channel->exchange_declare($exchangeName, 'direct', false, true, false);
        $channel->queue_declare($queueName, false, true, false, false);
        $channel->queue_bind($queueName, $exchangeName);
          
        $messageBody = json_encode($message);  

        $message = new AMQPMessage($messageBody);  
        $channel->basic_publish($message, $exchangeName);   
 
        $channel->close(); 
    }
} 


# Trigger this one on RabbitMQ Queue and will broadcast to RatchetSocket
# Start Socket and RabbitMQ together process.
src/Command/SocketWithRabbitmqCommand.php


# Example Code
----------------------------
bin/cake socket_with_rabbitmq
----------------------------

<?php
namespace App\Command;

use Cake\Command\Command;
use Cake\Console\Arguments;
use Cake\Console\ConsoleIo;
use Cake\Core\Configure;
use React\EventLoop\Factory as LoopFactory;
use React\Socket\Server as ReactServer;
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use App\MyHelper\MyHelper;
use App\Command\RatchetServerCommand;

class SocketWithRabbitmqCommand extends Command
{
    public function execute(Arguments $args, ConsoleIo $io)
    {
        $io->out('Starting WebSocket server and RabbitMQ consumer in one process...');

        $loop = LoopFactory::create();

        // 1. Start WebSocket server
        $webSock = new ReactServer('0.0.0.0:2052', $loop);
        $ratchetServer = new RatchetServerCommand(); // Your WebSocket server class
        $wsServer = new WsServer($ratchetServer);
        $httpServer = new HttpServer($wsServer);
        $ioServer = new IoServer($httpServer, $webSock, $loop);

        // 2. Start RabbitMQ consumer in the same loop
        $connection = new AMQPStreamConnection(
            Configure::read('RabbitMQ.host'),
            Configure::read('RabbitMQ.port'),
            Configure::read('RabbitMQ.username'),
            Configure::read('RabbitMQ.password'),
            Configure::read('RabbitMQ.vhost')
        );
        $channel = $connection->channel();

        $exchangeName = MyHelper::EXCHANGE_NAME;
        $queueName = MyHelper::QUEUE_NAME;

        $channel->exchange_declare($exchangeName, 'direct', false, true, false);
        $channel->queue_declare($queueName, false, true, false, false);
        $channel->queue_bind($queueName, $exchangeName);

        $callback = function ($message) use ($ratchetServer) {
            $row = json_decode($message->body, true);

            // Directly broadcast to all WebSocket clients
            if (isset($row['cmd'])) { 
                $ratchetServer->broadcast_message($row);
            }
        };

        $channel->basic_consume($queueName, '', false, true, false, false, $callback);

        // 3. Add a periodic timer to process RabbitMQ messages
        $loop->addPeriodicTimer(0.1, function() use ($channel) {
            $channel->wait(null, true);
        });

        $loop->run();
    }
} 

# src/Command/RatchetServerCommand.php

<?php

namespace App\Command;

use App\MyHelper\MyHelper;
use App\MyHelper\CSocketClient;
use Cake\Command\Command;
use Cake\Console\Arguments;
use Cake\Console\ConsoleIo;
use Cake\ORM\TableRegistry;

 
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface; 
// add component for use 
use Cake\Console\ConsoleOptionParser; 
use Cake\Log\Log;    

// client login => check message latest is exist -> send

// buildOptionParser => bin/cake Ratchet -p 8000
class RatchetServerCommand extends Command implements MessageComponentInterface
{  
    // A property to store all connected clients
    protected $clients;
    protected $rooms;

    protected $room = 'ChungHing'; 
    protected $log = 'printer_log'; 

    protected static $instance;
 
    public function __construct()
    { 
        parent::__construct(); 
        $this->clients = new \SplObjectStorage;
        $this->rooms = [];    
    } 
 
   
    protected function write_log($msg) {
        Log::info($msg, ['scope' => $this->log]);
    }

    public function initialize(): void
    {
        parent::initialize();
    }

    // A method to define the command name and options
    protected function buildOptionParser(ConsoleOptionParser $parser): ConsoleOptionParser
    {
        $parser //->setName('chat')
            ->setDescription('Start a Webserver using Ratchet.')
            ->addOption('port', [
                'help' => 'The port number to listen on.',
                'default' =>  2052,
                'short' => 'p'
            ]);
        return $parser;
    }
 

    // A method to run the command logic
    public function execute(Arguments $args, ConsoleIo $io): int
    { 

        $port = $args->getOption('port');

        // Create an instance of WsServer and pass $this as the message component
        $wsServer = new \Ratchet\WebSocket\WsServer($this);
    
        // Create an instance of HttpServer and pass the WsServer instance
        $httpServer = new \Ratchet\Http\HttpServer($wsServer);
    
        // Create an IoServer instance from the HttpServer instance and the port number
        $server = \Ratchet\Server\IoServer::factory($httpServer, $port); 
  
         
        // Print a message
        $io->out("Starting Printer Server on port {$port}...");

        // Run the server
        $server->run();

        // Return success code
        return static::CODE_SUCCESS;
    }
    
    protected function addCorsHeaders(ConnectionInterface $conn) {
        $headers = [
            'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers' => 'Origin, X-Requested-With, Content-Type, Accept'
        ];
        foreach ($headers as $key => $value) {
           // $conn->send(sprintf("%s: %s\r\n", $key, $value));
        }
    }

    // A method to handle new connections
    public function onOpen(ConnectionInterface $conn)
    {      
        $query = $conn->httpRequest->getUri()->getQuery();
        parse_str($query, $queryParams);
        $token = isset($queryParams['token']) ? $queryParams['token'] : null;

        if ($token == null) {
            $this->clients->detach($conn);
            $msg = "Connection {$conn->resourceId} has disconnected. Because of Token pass to server = null\n";
            echo $msg;

        } else { 
            $obj_Administrators = TableRegistry::get('Administrators'); 
            $data_Administrators = $obj_Administrators->get_item_by_token($token);  
    
            if (!$data_Administrators) { 
                $this->clients->detach($conn);
                $msg = "Connection {$conn->resourceId} has disconnected. Because of Token not found on system\n";
                echo $msg;
                return;
            }

            // Store the new connection in the clients property
            $this->clients->attach($conn);    

            // Send a welcome message to the new connection 
            $data = [
                'cmd' => CSocketClient::SEND_JOIN_TYPE,
                'message' => 'Welcome to Chunghing Printer server',
            ];
            $conn->send(json_encode( $data ));

            // Add CORS headers to the response
            $this->addCorsHeaders($conn);

            // Log the new connection
            $msg = "New connection! ({$conn->resourceId})\n";
            $this->write_log($msg);
            echo $msg; 
        } 
    }

    // A method to handle closed connections
    public function onClose(ConnectionInterface $conn)
    {
        // Remove the closed connection from the clients property
        $this->clients->detach($conn);

        // Log the closed connection
        $msg = "Connection {$conn->resourceId} has disconnected\n";
        $this->write_log($msg);
        echo $msg;
    }

    // A method to handle errors
    public function onError(ConnectionInterface $conn, \Exception $e)
    {
        // Log the error message
        $msg = "An error has occurred: {$e->getMessage()}\n";
        $this->write_log($msg);
        echo $msg;

        // Close the connection
        // $conn->close();
    } 

    // received message from client
    public function onMessage(ConnectionInterface $from, $msg)
    {
        // Decode the message
        $data = json_decode($msg, true); 
 
        if (!isset($data['cmd']) || empty($data['cmd']) ) {
            $this->send_error($from, "Missing cmd");

        } else {
            $room = $this->room;     /// will let client assign, this time will send group, server control this
        
            switch ($data['cmd']) {
                case CSocketClient::SEND_JOIN_TYPE:
    
                    if (!isset($data['token']) || empty($data['token']) ) {
                        $this->send_error($from, "Missing token");
    
                    } else {   
                    }  
                    break; 
    
                case 'create': 
                    $this->create_room($from, $room);
                    break;

                case CSocketClient::BROADCAST_LOGIN_TYPE:    // APP
                    $this->broadcast_message( $data );
                    break;

                case CSocketClient::PRINT_INVOICE:      // APP  
                    $this->broadcast_message( $data );  
                    break; 

                default:         // Invalid command
                    $this->send_error($from, "Invalid command");
            } 
        }  
    }  
 
    // data = ['token' => '', 'cmd' => 'join' ]
    protected function join_room(ConnectionInterface $user, $room, $token, $game_id)
    {
        // update status online on accounts
        $obj_Accounts = TableRegistry::get('Accounts');
        $obj_AccountTokens = TableRegistry::get('AccountTokens');
        $obj_AccountActions = TableRegistry::get('AccountActions');

        // get type 
        $type = MyHelper::get_app_type_by_game_id($game_id);  
 
        // get account id
        $data_AccountTokens = $obj_AccountTokens->get_obj_by_token_type($token, $type);  
                
        if ($data_AccountTokens) {
            // update online
            $obj_Accounts->update_status($data_AccountTokens->account_id, MyHelper::ONLINE); 
 
            // update online cho AccountActions
            $obj_AccountActions->update_status($game_id, $data_AccountTokens->account_id, MyHelper::ONLINE); 
        } 
      
        // Check if the room exists
        if (isset($this->rooms[$room])) {
            // Add the user to the room
            $this->rooms[$room][$user->resourceId] = $user; 

            // Send a welcome message to the new connection 
            $data = [
                'cmd'      => CSocketClient::SEND_JOIN_TYPE,
                'message'   => 'Welcome you join Yulgang room',
            ]; 
            $user->send(json_encode($data)); 
 
              
        } else {  // Room does not exist 
 
            $this->create_room($user, $room);
            $this->join_room($user, $room, $token, intval($game_id));
        }
    } 

    protected function create_room(ConnectionInterface $user, $room)
    {
        // Check if the room already exists
        if (!isset($this->rooms[$room])) {
            // Create the room as an empty array
            $this->rooms[$room] = []; 

            $msg = "Create Room succeed"; 
            $this->write_log($msg);
            echo $msg;

        } else {
            // Room already exists
            $msg = "Room {$room} already exists";
            $this->send_error($user, $msg); 
            $this->write_log($msg);
            echo $msg;
        }
    }

    // send to client
    protected function send_notification_to_client(ConnectionInterface $user, $data) {
        
        // Send the message to the user
        $user->send(json_encode($data));
    }
 
    protected function send_error(ConnectionInterface $user, $message)
    {
        // Encode the message as JSON
        $data = json_encode(['type' => 'error', 'content' => $message]); 
        $user->send($data);
    } 

    public function broadcast_message($data)
    {     
        $i = 0;
        foreach ($this->clients as $client) {   
            $client->send(json_encode($data));  
            pr ("Broadcast to client ... " .  ++$i);
        } 
        
        $msg = "Total Client connected: " .count($this->clients);
        $this->write_log($msg . "\n"); 
    }   
 
} 
 