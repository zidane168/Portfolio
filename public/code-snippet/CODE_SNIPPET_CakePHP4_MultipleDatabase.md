
# ------------------------- ----------------- --------------------------------
# ------------------------- Multiple Database --------------------------------
# ------------------------- ----------------- --------------------------------
# -- --

# env
export HOST1="db.goz247xxx.com"
export USER_NAME1="gozwebdev"
export PORT1=
export PASSWORD1=""
export DATABASE1="gozridebooking"   #"grab-goz"     # DB He thống

export HOST2="0.0.0.0"
export USER_NAME2=""
export PORT2=3306
export PASSWORD2=""
export DATABASE2="grab-goz-admin"

# config/app.php 
'Datasources' => [ 
    'default' => [
        'className' => Connection::class,
        'driver' => Mysql::class,
        'persistent' => false,
        'timezone' => 'UTC', 
        'flags' => [],
        'cacheMetadata' => true,
        'log' => false, 
        'quoteIdentifiers' => false,  
    ],

    'grabgozadmin' => [
        'className' => Connection::class, 
        'driver' => Mysql::class,
        'persistent' => false,
        'timezone' => 'UTC',
            
        'flags' => [],
        'cacheMetadata' => true,
        'log' => false,

        'quoteIdentifiers' => false,
    ],
]

# config/app_local.php 
'Datasources' => [
    'default' => [ 
        'logQueries' => true, 
        'host' => env('HOST1'), 
        'port'     => env('PORT1'),
        'username' => env('USER_NAME1'),
        'password' => env('PASSWORD1'),
        'database' => env('DATABASE1'),  
        'url' => env('DATABASE_URL', null),
    ], 
    'grabgozadmin' => [  
        'logQueries' => true, 
        'host' => env('HOST2'),  
        'port'     => env('PORT2'),
        'username' => env('USER_NAME2'),
        'password' => env('PASSWORD2'),
        'database' => env('DATABASE2'),  
        'url' => env('DATABASE_URL', null),
    ],
],

# src/Model/Table/AdministratorsTable.php

<?php declare(strict_types=1); 
namespace App\Model\Table; 
use App\MyHelper\MyHelper;
use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\ORM\TableRegistry;

use Cake\Core\Configure;
use Cake\Utility\Hash;
use Cake\Cache\Cache;
 
class AdministratorsTable extends Table
{ 
    public function initialize(array $config): void
    {
        parent::initialize($config); 
        $this->setTable('administrators');
        $this->setDisplayField('name');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp');

        $this->belongsToMany('Roles', [
            'foreignKey' => 'administrator_id',
            'targetForeignKey' => 'role_id',
            'joinTable' => 'administrators_roles',
        ]);
        $this->belongsToMany('Shops', [
            'foreignKey' => 'administrator_id',
            'targetForeignKey' => 'shop_id',
            'joinTable' => 'administrators_shops',
        ]);
 
        $this->addBehavior('WhoDidIt'); 
        $this->addBehavior('MyCommonFunc'); 
        $this->addBehavior('Timestamp', [
            'events' => [
                'Model.beforeSave' => [
                    'created'           => 'new',
                    'modified'          => 'always',
                ],
            ]
        ]); 
        $this->addBehavior('Audit');    
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator): Validator
    {
        $validator
            ->scalar('token')
            ->maxLength('token', 191)
            ->allowEmptyString('token');

        $validator
            ->scalar('name')
            ->maxLength('name', 191)
            ->allowEmptyString('name');

        $validator
            ->email('email')
            ->allowEmptyString('email');

        $validator
            ->scalar('phone')
            ->maxLength('phone', 191)
            ->allowEmptyString('phone'); 

        $validator
            ->integer('modified_by')
            ->allowEmptyString('modified_by');

        return $validator;
    }
 
# grabgozadmin (Có bảng Administrators); TH mình cần generate sẽ là một DB ko phải là default
# bin/cake bake model Administrators --connection grabgozadmin
# bin/cake bake controller Administrators --connection grabgozadmin --prefix Admin
# bin/cake bake template Administrators --connection grabgozadmin --prefix Admin 

# default (Bookings); TH mình cần generate sẽ là một DB là default
# bin/cake bake model Bookings 
# bin/cake bake controller Bookings  --prefix Admin
# bin/cake bake template Bookings --prefix Admin 

# below line will auto generate
    public static function defaultConnectionName(): string
    {
        return 'grabgozadmin';
    }

}
