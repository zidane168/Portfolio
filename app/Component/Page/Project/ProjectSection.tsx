import Link from "next/link";
import Image from "next/image";
import TitleUI from "../../UI/TitleUI"; 
import { useEffect, useState } from "react";
import ImageSliderUI from "../../UI/ImageSliderUI";
 
const ProjectSection = ({ color }: { color: string }) => {
  const projects = [ 
    {
      title: "Ecpark",
      name: "Project for Crawling data and social login, manage  user's information, manage administrator information login, role, permissions",
      screenshot: [
        { src: '/project/ecpark-1.png' },
        { src: '/project/ecpark-2.png' },
        { src: '/project/ecpark-3.png' },
      ],
      description: [
        "PHP - MySQL - Cronjob - CrawlData - FireBase - Social Login - NestJS Socket",
        "Use CakePHP 4.2.0",
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
      title: "Crystaljade",
      name: "Project for Dynamic Menu with dynamic branches",
      screenshot: [
        { src: '/project/crystaljade-1.png' },
        { src: '/project/crystaljade-2.png' },
        { src: '/project/crystaljade-3.png' },
      ],
      description: [
        "PHP - MySQL 8.0 - FireBase - Google Map",
        "Use CakePHP 4.2.0",
        'Display and use CMS to manage the content of each page', 
      ],
      library: [
        { src: '/library/crystaljade-composer-be.json',  name: 'BackEnd' },
        { src: '/library/crystaljade-package-fe.json',  name: 'FrontEnd' },
      ]
    },

    {
      title: "Cityu",
      name: "Project for Booking (patient with pet and booking vet times, manage vet time, manage booking conflict), manage administrator information login, role, permissions Sync data from MicrosoftSQL Server to MySQL",
      screenshot: [
        { src: '/project/cityu-1.png' },
        { src: '/project/cityu-2.png' },
        { src: '/project/cityu-3.png' },
      ],
      description: [
        "PHP - MySQL 5.7 - MicrosoftSQL Server - Cronjob - Trigger Event - Sync Data - RabbitMQ",
        "Use CakePHP 4.2.0", 
        "Cronjob for sync data from Client data",
        "RabbitMQ for trigger Event Created, Updated, Deleted Record on Microsoft Server and sync back to MySQL",
        "Integrated React as frame put on Wordpress webpage",
        "Use HangSheng(NTT Data) payment gateway (use CryptoJS.enc.Base64.stringify/base64_encode; CryptoJS.enc.Hex.stringify/bin2hex)"
      ],
      library: [
        { src: '/library/cityu-composer-be.json',  name: 'BackEnd' },
        { src: '/library/cityu-docker-compose.yaml',  name: 'Docker' },
      ]
    },

    {
      title: "Metrosouth",
      name: "Project for Booking, manage holiday booking, booking combined room, single room, rules refund, cancel, book by user and admin, calc expiry point rules, manage users, manage administrator",
      screenshot: [
        { src: '/project/metrosouth-1.png' },
        { src: '/project/metrosouth-2.png' },
        { src: '/project/metrosouth-3.png' },
      ],
      description: [
        "PHP - MySQL 8.0 - Cronjob",
        "Use CakePHP 4.2.0", 
        "Cronjob for calc the expiry point, token",
        "Use Stripe Payment gateway",
      ],
      library: [
        { src: '/library/metrosouth-composer-be.json',  name: 'BackEnd' },
        { src: '/library/metrosouth-package-fe.json',  name: 'FrontEnd' },
      ]
    }, 


    {
      title: "VTV-Team",
      name: "Project for AutoPlay for online Game, SendPackage ASM, InjectDLL, packet, manage user, manage license, manage admin",
      screenshot: [
        { src: '/project/vtv-team-1.png' },
        { src: '/project/vtv-team-2.png' },
        { src: '/project/vtv-team-3.png' },
      ],
      description: [
        "PHP - MySQL - C#, DotNet framework 4.7.2",
        "PHP Server side: API",
        "PHP Webpage: TailwindCSS, CakePHP, CSS, JS, LESS",
        "Inject DLL, Send Packet",   
        "Threading, Async Await, Task, Task.Delay, API, Socket",
        "JWT multiple device login design",
      ],
      library: [
        { src: 'https://tieungaoauto.com/',  name: 'Link URL' },
      ]
    }, 


    {
      title: "CidcKids",
      name: "Project for management Courses, User, Staff(Teacher), User(Student), manage Annual leave for student",
      screenshot: [
        { src: '/project/cidckids-1.png' },
        { src: '/project/cidckids-2.png' },
        { src: '/project/cidckids-3.png' },
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
            <div key={ index } className="flex md:space-x-6 md:flex-row items-center space-y-4 flex-col p-2 w-fill w-full rounded-md shadow-lg p-4 mb-6">
                   
                <div className="rounded-lg p-2" style={ { borderColor: color, boxShadow: `2px 2px 10px ${color}` } } > 
                    <ImageSliderUI  src={ src } color={ color } />
                </div>  
                <div className="md:w-[70%]">
                    <div> { value['name'] } </div>
                    <ul className="list-disc ml-8">
                        { 
                            value['description'].map( (description, index) => { 
                                return (
                                    <li key={ index }> { description }  </li>
                                )
                            }) 
                        }  
                    </ul>  
                    <div className="flex justify-around">
                        {  (value['library'].length > 0)  ? ( <div> --- Here are details: </div>) : null }

                        {    value['library'].map( (library, index) => {
                              return (
                                  <Link key={ index } className="transition hover:scale-125" target="_blank" href={ library['src'] }> { library['name'] }  </Link>
                              )
                            })
                        }
                    </div>
                </div>
            </div>
        ) 
      } )  
      } 
          
      <div> Additionally, numerous projects similar to the one mentioned above will not be listed </div>
      
    </div>
  );
};

export default ProjectSection;



// <Image
//                         src={`/project/${value['title']}-1.png`}
//                         alt={`project thumbnail`}
//                         width={300}
//                         height={300} 
//                         className={` rounded-lg  `}
//                         style={{
//                           ...styles.image,
//                           ...(currentIndex === 0 && styles.active),
//                         }}
//                     />
//                     <Image
//                         src={`/project/${value['title']}-2.png`}
//                         alt={`project thumbnail`}
//                         width={300}
//                         height={300} 
//                         className={  `rounded-lg absolute top-0 left-[320px] ` } 
//                     />