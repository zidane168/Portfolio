import Link from "next/link"; 
import TitleUI from "../../UI/TitleUI";  
import ImageSliderUI from "../../UI/ImageSliderUI"; 
 
const ProjectSection = ({ color }: { color: string }) => {
  const projects = [  
    {
      id: "ecommerce",
      title: "Ecommerce",  
      name: "Project with cart, list products, list food, takeaway, login, register member",
      screenshot: [
        { src: '/project/chicken-pot-1.png' },
        { src: '/project/chicken-pot-2.png' },
        { src: '/project/chicken-pot-3.png' },
        { src: '/project/chicken-pot-4.png' },
        { src: '/project/chicken-pot-5.png' },
        { src: '/project/chicken-pot-6.png' },
      ],
      description: [
        "NestJS - Prisma - MySQL - NextJS", 
        "CURD, Customize View, Responsive, API, Swagger", 
      ], 
      library: [
        { src: '/library/chickenpot-be-dockercompose.yml',  name: 'Docker Compose (BE)' },
        { src: '/library/chickenpot-be-dockerfile',  name: 'DockerFile (BE)' },
        { src: '/library/chickenpot-be-package.json',  name: 'Package.json' },
        { src: '/library/chickenpot-fe-dockercompose.yml',  name: 'Docker Compose (FE)' },
        { src: '/library/chickenpot-fe-dockerfile',  name: 'DockerFile (FE)' },
      ], 
    },   

    {
      id: "webzonetechtips-blogs",
      title: "Webzone Tech Tips Blogs", 
      role: "Author's Technical blog <span class='bg-sky-600 text-white px-2' ><a class='underline' href='https://learn-tech-tips.blogspot.com/'>   https://learn-tech-tips.blogspot.com/ </a>  </span>  ",
      name: "Feel free to explore the blog at Learn-Tech-Tips for valuable insights and knowledge, This blog covers a wide range of web development topics, including Next.js, NestJS, CakePHP, and other frameworks. It delves into subjects like RabbitMQ, Apache Kafka, HTML, CSS, Photoshop, and Office 365. The blog aims to help readers build amazing websites using modern technologies and best practices",
      screenshot: [
        { src: '/project/webzone-1.png' },
        { src: '/project/webzone-2.png' }, 
        { src: '/project/webzone-3.png' },
        { src: '/project/webzone-4.png' }, 
      ],
      description: [
        "Blogspot", 
        "CSS, TailwindCSS, js", 
      ],
      library: [
        { src: 'https://learn-tech-tips.blogspot.com/',  name: 'Link URL' },
      ]
    },   

    {
      id: "blockchain-topic",
      title: "BlockChain topic",
      name: "This tutorial how to make a project for web3, and we go through Blockchain, how to make it with PHP language, how to create virtual current mining technology",
      screenshot: [
        { src: '/project/blockchain-2A.png' },
        { src: '/project/blockchain-2B.png' },
        { src: '/project/blockchain-2C.png' },
      ],
      description: [
        "What is blockchain",
        "Blockchain Technology - Using PHP develop Blockchain technology",  
        "Loophples of the current Blockchain",  
        "Create virtual currency mining technology",
        "How to create own bitcoin virtual currency",
        "Apply blockchain application in the life",
      ],
      library: [  
        { src: 'https://learn-tech-tips.blogspot.com/2021/12/what-is-blockchain.html',  name: 'Link URL' },    
        { src: 'https://learn-tech-tips.blogspot.com/2021/12/using-php-develop-blockchain-technology.html',  name: 'Link URL' },
        { src: 'https://learn-tech-tips.blogspot.com/2021/12/loophples-of-the-current-blockchain.html',  name: 'Link URL' },
        { src: 'https://learn-tech-tips.blogspot.com/2021/12/blockchain-technology-create-virtual-currency-mining-technology.html',  name: 'Link URL' },
        { src: 'https://learn-tech-tips.blogspot.com/2021/12/blockchain-technology-how-to-create-own-bitcoin-virtual-currency.html',  name: 'Link URL' },
        { src: 'https://learn-tech-tips.blogspot.com/2022/01/block-chain-application-in-the-life.html',  name: 'Link URL' },
      ]
    },  

    {
      id: "ecpark",
      title: "Ecpark",
      name: "Project for Crawling data and social login, manage  user's information, manage administrator information login, role, permissions",
      screenshot: [
        { src: '/project/ecpark-1.png' },
        { src: '/project/ecpark-2.png' },
        { src: '/project/ecpark-3.png' },
        { src: '/project/ecpark-4.png' },
      ],
      description: [
        "PHP - MySQL - Cronjob - CrawlData - FireBase - Social Login - NestJS Socket",
        "Use CakePHP 4.2.0",
        "CURD, Customize View, Responsive, API",
        'Using Goutte/Client "fabpot/goutte": "^4.0" and "voku/simple_html_dom": "^4.8" for crawl data',
        'Using GoogleAPI "google/apiclient": "^2.12.1" for make a social login',
        'Using FirebaseAPI "kreait/firebase-php": "^5.0"',
        'Using Stripe payment gateway by using "stripe/stripe-php": "^10.5"',
        'NestJS SocketIO "socket.io": "^4.5.0" for realtime get the number of user enter a page',
      ],
      library: [
        { src: '/library/ecpark-composer-be.json',  name: 'BackEnd' },
        { src: '/library/ecpark-package-fe.json',  name: 'FrontEnd' },
        { src: '/library/ecpark-package-socket.json',  name: 'Node Socket' },  
      ],
    },
    {
      id: "crystaljade",
      title: "Crystaljade",
      name: "Project for Dynamic Menu with dynamic branches",
      screenshot: [
        { src: '/project/crystaljade-1.png' },
        { src: '/project/crystaljade-2.png' },
        { src: '/project/crystaljade-3.png' },
        { src: '/project/crystaljade-4.png' },
        { src: '/project/crystaljade-5.png' },
        { src: '/project/crystaljade-6.png' },
        { src: '/project/crystaljade-7.png' },
        { src: '/project/crystaljade-8.png' },
      ],
      description: [
        "PHP - MySQL 8.0 - FireBase - Google Map",
        "Use CakePHP 4.4.0",
        "CURD, Customize View, Responsive, API",
        'Display and use CMS to manage the content of each page', 
      ],
      library: [
        { src: '/library/crystaljade-composer-be.json',  name: 'BackEnd' },
        { src: '/library/crystaljade-package-fe.json',  name: 'FrontEnd' },
      ]
    },

    {
      id: "cityu",
      title: "Cityu",
      name: "Project for Booking (patient with pet and booking vet times, manage vet time, manage booking conflict), manage administrator information login, role, permissions, display customize Vet on Apps with dynamic config and sync data from Microsoft SQL Server to MySQL automatically",
      challenges: [
        "Phone lines are always jammed during peak hours",
        "Difficulty making and managing reservations",
        "Checking and managing appointment status is difficult" 
      ],
      objectives: [
        "Establish an online reservation system",
        "Help pet owners manage, reschedule and withdraw their booking easily",
        "Prevent double bookings and misinformation"
      ],
      results: [
        "User friendly interface enables clear scheduling and communication",
        "Facilitated real-time information exchange",
        "Resolve busy phone lines and misinformation. Phone line usage and booking errors were deeply reduced by 80%",
        "Pet owners can easily manage their appointments and view the pet history from anywhere, 24/7. Simple management and less wait time improve customer satisfaction and increase repeat business by 75%",
      ],
      screenshot: [
        { src: '/project/cityu-1.png' },
        { src: '/project/cityu-2.png' }, 
        { src: '/project/cityu-3.png' },
        { src: '/project/cityu-4.png' }, 
        { src: '/project/cityu-5.png' },
        { src: '/project/cityu-6.png' }, 
        { src: '/project/cityu-7.png' }, 
      ],
      description: [
        "PHP - MySQL 5.7 - MicrosoftSQL Server - Cronjob - Trigger Event - Sync Data - RabbitMQ",
        "Use CakePHP 4.2.0", 
        "CURD, Customize View, Responsive, API",
        "Cronjob for sync data from Client data",
        "RabbitMQ for trigger Event Created, Updated, Deleted Record on Microsoft Server and sync back to MySQL",
        "Integrated React as frame put on Wordpress webpage",
        "Use HangSheng(NTT Data) payment gateway (use CryptoJS.enc.Base64.stringify/base64_encode; CryptoJS.enc.Hex.stringify/bin2hex)"
      ],
      library: [
        { src: '/library/cityu-composer-be.json',  name: 'BackEnd' },
        { src: '/library/cityu-docker-compose.yaml',  name: 'Docker' },
        { src: 'https://learn-tech-tips.blogspot.com/2015/06/%20how-to-monitor-data-changes-in-sql-server-tables-with-triggers.html', name: 'Structure(Personal)'},
      ]
    },

    {
      id: "metrosouth",
      title: "Metrosouth",
      name: "Project for Booking, manage holiday booking, booking combined room, single room, rules refund, cancel, book by user and admin, calc expiry point rules, manage users, manage administrator",
      screenshot: [
        { src: '/project/metrosouth-1.png' },
        { src: '/project/metrosouth-2.png' }, 
      ],
      description: [
        "PHP - MySQL 8.0 - Cronjob",
        "Use CakePHP 4.2.0", 
        "CURD, Customize View, Responsive, API",
        "Cronjob for calc the expiry point, token",
        "Use Stripe Payment gateway",
      ],
      library: [
        { src: '/library/metrosouth-composer-be.json',  name: 'BackEnd' },
        { src: '/library/metrosouth-package-fe.json',  name: 'FrontEnd' },
      ]
    }, 
 
    {
      id: "todo-listapp",
      title: "TodoListApp",
      name: "Project about management the Task list from user",
      video: "https://www.youtube.com/embed/Kwx1BUP1cxM?si=I9Q9_rFGeYXYYqjI",
      screenshot: [
        { src: '' }, 
      ],
      description: [
        "NextJS, NestJS, TailWindCSS, Zustand, Axios, MongoDB, JWT",
      ],
      library: [ 
        { src: '/library/todoapp-package-be.json',  name: 'BackEnd' },
        { src: '/library/todoapp-package-fe.json',  name: 'FrontEnd' },
      ]
    }, 

    {
      id: "dragon-fire",
      title: "DragonFire",
      name: "Project about management the inventory, the client and user, project about E-commerce, allow admin can configuration and save keyboards to client, management blog, management promotion rules",
      screenshot: [
        { src: '/project/dragonfire-1.png' }, 
        { src: '/project/dragonfire-2.png' }, 
        { src: '/project/dragonfire-3.png' }, 
        { src: '/project/dragonfire-4.png' }, 
      ],
      description: [
        "PHP - MySQL 8.0",
        "Use CakePHP 4.4.0", 
        "CURD, Customize View, Responsive, API",
        "Using chartjs to write a dashboard!",
      ],
      library: [ 
        { src: '/library/dragonfire-composer-be.json',  name: 'BackEnd' }, 
      ]
    }, 

    {
      id: "cidcKids",
      title: "CidcKids",
      name: "Project for management Courses, User, Staff(Teacher), User(Student), manage Annual leave for student",
      screenshot: [
        { src: '/project/cidckids-1.png' },
        { src: '/project/cidckids-2.png' },
        { src: '/project/cidckids-3.png' },
        { src: '/project/cidckids-4.png' },
        { src: '/project/cidckids-5.png' },
      ],
      description: [
        "PHP - MySQL 5.7 - Cronjob",
        "Use CakePHP 4.2.0", 
        "Schedule manage for booking control",
        "Firebase push notification to users",
       
      ],
      library: [
        { src: '/library/cidckids-composer-be.json',  name: 'BackEnd' }, 
        { src: 'https://app.genmymodel.com/personal/projects/_qmnwAPkdEeydvaHhUPK6Jg', name: "Structure (Personal only)"}
      ]
    }, 

    {
      id: "ibmsm",
      title: "IBMSM",
      name: "Project about divination, destiny, design sales course and share Youtube video link if already register, and formula for calculating destiny",
      screenshot: [
        { src: '/project/ibmsm-1.png' },
        { src: '/project/ibmsm-2.png' }, 
        { src: '/project/ibmsm-3.png' }, 
      ],
      description: [
        "PHP - MySQL 8.0",
        "Use CakePHP 4.2.0",  
        "Use Stripe Payment gateway", 
      ],
      library: [
        { src: '/library/ibmsm-composer-be.json',  name: 'BackEnd' }, 
        { src: '/library/ibmsm-package-fe.json',  name: 'FrontEnd' }, 
        { src: '/library/ibmsm-Dockerfile',  name: 'DockerFile' }, 
        { src: '/library/ibmsm-package-fe.json',  name: 'FrontEnd' },  
      ]
    }, 

    {
      id: "chunghing",
      title: "ChungHing",
      name: "Project about management the sales, the client and the product",
      screenshot: [
        { src: '/project/chunghing-1.png' }, 
        { src: '/project/chunghing-2.png' }, 
      ],
      description: [
        "PHP - MySQL 8.0",
        "Use CakePHP 4.4.0",   
      ],
      library: [  
      ]
    },  

    {
      id: "nextjs-and-prima",
      title: "NextJS and Prisma full structure example",
      name: "Project about management MySQL with Prisma schema, demo CURD, Administrator Permissions",
      screenshot: [
        { src: '/project/nestjs-prisma.png' },  
        { src: '/project/nestjs-prisma.png' },  
      ],
      description: [
        "MySQL 8.0",
        "nestjs/core 10.0.0", 
        "Prisma ^5.22.0", 
      ],
      library: [  
        { src: '/library/nestjs-prisma-be-package.json',  name: 'BackEnd' }, 
      ]
    },  


    {
      id: "docker-nextjs-template",
      title: "Docker structure for NextJS template",
      name: "structure detail for docker NextJS template",
      screenshot: [
        { src: '/project/docker.png' },   
        { src: '/project/docker.png' },   
      ],
      description: [
        "Node16",
        "Dockerfile",  
        "docker-compose.yml",  
        "Using Docker file to build image, Docker compose to run container",
      ],
      library: [  
        { src: 'https://github.com/zidane168/docker-file-for-nextjs-template',  name: '(Personal only)' }, 
      ]
    },  


    {
      id: "docker-rabbitmq-template",
      title: "Docker structure for RabbitMQ Service",
      name: "structure detail for RabbitMQ Service",
      screenshot: [
        { src: '/project/docker.png' },   
        { src: '/project/docker.png' },   
      ],
      description: [
        "Node16",
        "Dockerfile",  
        "docker-compose.yml",  
        "Using Docker file to build image, Docker compose to run container",
      ],
      library: [  
        { src: 'https://github.com/zidane168/docker-file-for-rabbitmq-service',  name: '(Personal only)' }, 
        { src: 'https://learn-tech-tips.blogspot.com/2023/07/how-to-use-docker-compose-to-set-up-a-rabbitmq-service.html', name: 'Link URL'}
      ]
    },  


    {
      id: "nextjs-captcha-api",
      title: "NextJS Captcha simple API",
      name: "The ideas make a simple Captcha API. The project with simple Captcha instead of use Google Captcha, we can use by ourself",
      screenshot: [
        { src: '/project/captcha.png' },  
        { src: '/project/captcha2.png' },  
      ],
      description: [
        "NestJS demo",
      ],
      library: [  
        { src: ' https://github.com/zidane168/nextjs-simple-captcha-demo',  name: '(Personal only)' }, 
      ]
    },   

    {
      id: "gp-barber-portal",
      title: "BARBER",  
      name: "Salary calc system, payroll system, Shop, Category Service management",
      screenshot: [
        { src: '/project/gp-bartner-1.png' },
        { src: '/project/gp-bartner-2.png' }, 
      ],
      description: [
        "PHP - CakePHP 4+",
        "PHP Server side: Restful API",
        "CURD, Customize View, Responsive, API",
        "PHP Webpage: Bootstrap 4+, CakePHP, CSS, JS, LESS",    
      ],
      library: [
        { src: '',  name: '' },
      ]
    },  

    {
      id: "vtv-team-autoplay",
      title: "VTV Team AutoPlay", 
      role: "Co-Founder at <span class='bg-sky-600 text-white px-2 '> <a href='https://tieungaoauto.com'> https://tieungaoauto.com </a> </span>",
      name: "AutoPlay for online Game, SendPackage ASM, InjectDLL, packet, manage user, manage license, manage admin",
      screenshot: [
        { src: '/project/vtv-team-1.png' },
        { src: '/project/vtv-team-2.png' }, 
      ],
      description: [
        "PHP - MySQL - C#, DotNet framework 4.7.2",
        "PHP Server side: Restful API",
        "CURD, Customize View, Responsive, API",
        "PHP Webpage: TailwindCSS, CakePHP, CSS, JS, LESS",
        "Inject DLL, Send Packet, ASM Injection",   
        "RabbitMQ, Ratchet Server",
        "Threading, Async Await, Task, Task.Delay, API, Socket",
        "JWT multiple device login design",
      ],
      library: [
        { src: 'https://tieungaoauto.com/',  name: 'Link URL' },
      ]
    },  

    

  ]; 

  return (
    <div className="p-2 shadow-lg mt-[10px] rounded-md max-h-full p-[20px]">
      <div className="">
        <TitleUI title="My Project Background" bgColor={color} />
      </div>

      { 
      projects.map( (value, index) => { 
        let src: string[] = [];
        value['screenshot']?.map( (screenshot, index) => { 
          src.push(screenshot.src)
        } )

        return (
            <div key={ index } className="flex flex-col w-full p-2 p-4 mb-6 space-y-4 rounded-md shadow-lg md:space-x-6 md:flex-row w-fill">
                   
                { 
                
                value['video'] ?  

                  <div className="flex items-center ">
                    <div className="p-2 rounded-lg h-fit"> 

                      <iframe width="300" height="300" src={ value['video'] } title="NextJS NextJS ToDoApp" 
                          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen></iframe>
                    </div>  
                  </div>  
                  : 
                  
                  <div className="flex items-center ">
                    <div className="p-2 rounded-lg h-fit" style={ { borderColor: color, boxShadow: `2px 2px 10px ${color}` } } > 
                      <ImageSliderUI  src={ src } color={ color } />
                    </div>  
                  </div>

                }
                <div className="md:w-[70%]">
                    <TitleUI  title={ value['title'] } bgColor={ color } id={ value['id'] }/> 
                    <div className="px-4">
                      <div dangerouslySetInnerHTML={{ __html: value['role'] || '' }}></div>
                      <div> { value['name'] } </div>
                      <ul className="ml-8 list-disc">
                          { 
                              value['description'].map( (description, index) => { 
                                  return (
                                      <li key={ index }> { description }  </li>
                                  )
                              }) 
                          }  
                      </ul>  
                     
                      { value['challenges'] && <div className="font-bold text-red-800 mt-[10px] underline text-lg">  Challenges  </div> }
                      <ul className="ml-8 list-disc">
                        { 
                           value['challenges'] &&  value['challenges'].map( (ch, index) => {
                            return (
                              <li key={ index } > { ch } </li>
                            )
                          } )
                        }
                      </ul>  

                      { value['objectives'] && <div className="font-bold text-red-800 mt-[10px] underline text-lg"> Objectives </div> }
                      <ul className="ml-8 list-disc">
                        { 
                           value['objectives'] &&  value['objectives'].map( (ch, index) => {
                            return (
                              <li key={ index } > { ch } </li>
                            )
                          } )
                        }
                      </ul>  

                      { value['results'] && <div className="font-bold text-red-800 mt-[10px] underline text-lg"> Results </div> }
                      <ul className="ml-8 list-disc">
                        { 
                           value['results'] &&  value['results'].map( (ch, index) => {
                            return (
                              <li key={ index } > { ch } </li>
                            )
                          } )
                        }
                      </ul>  
                      
                      <div className="flex justify-around">
                          {  (value['library'].length > 0)  ? ( <div> --- Here are details: </div>) : null }

                          {    value['library'].map( (library, index) => {
                                return (
                                    <Link key={ index } className="underline transition hover:scale-125" target="_blank" href={ library['src'] }> { library['name'] }  </Link>
                                )
                              })
                          }
                      </div>
                    </div>
                </div>
            </div>
        ) 
      } )  
      } 
          
      <div> For a comprehensive overview of my additional projects, please explore my `public` <Link className="underline" href="https://github.com/zidane168/" target="_blank"> GITHUB</Link> profile. Thank you.
      </div>
      <div> This project hosted by  <Link className="underline" href="https://vercel.com/" target="_blank">vercel</Link> . Thank you Vercel.
      </div>

    </div>
  );
};

export default ProjectSection;

 