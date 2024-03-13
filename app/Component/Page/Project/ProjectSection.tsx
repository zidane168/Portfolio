import Link from "next/link";
import Image from "next/image";
import TitleUI from "../../UI/TitleUI";
import ImageCarouselUI from "../../UI/ImageCarouselUI";

const ProjectSection = ({ color }: { color: string }) => {
  const projects = [
    {
      title: "Ecpark",
      name: "Project for Crawling data and social login",
      description: [
        "Use CakePHP 4.0",
        'Using Goutte/Client "fabpot/goutte": "^4.0" and "voku/simple_html_dom": "^4.8" for crawl data',
        'Using GoogleAPI "google/apiclient": "^2.12.1" for make a social login',
        'Using FirebaseAPI "kreait/firebase-php": "^5.0"',
        'Using stripe payment gateway by using "stripe/stripe-php": "^10.5"',
      ],
    },
    {
      title: "Crystaljade",
      name: "Project for Dynamic Menu with dynamic branches",
      description: [
        "Use CakePHP 4.3",
        'Using Goutte/Client "fabpot/goutte": "^4.0" and "voku/simple_html_dom": "^4.8" for crawl data',
        'Using GoogleAPI "google/apiclient": "^2.12.1" for make a social login',
        'Using FirebaseAPI "kreait/firebase-php": "^5.0"',
        'Using stripe payment gateway by using "stripe/stripe-php": "^10.5"',
      ],
    },
  ];
  

  return (
    <div className="p-2 shadow-lg mt-[10px] rounded-md h-[800px] p-[20px]">
      <div className="">
        <TitleUI title="My Project Background" bgColor={color} />
      </div>

      { 
      
      projects.map( (value) => {
        const random = Math.floor(Math.random() * 3) + 1;
        return (
            <div className="flex space-x-6 p-2 w-fill w-full">
                <div>
                    <img
                        src={`/project/${value['title']}-${random}.png`}
                        alt={` ${random}.png `}
                        width={300}
                    />
                </div>
                <div>
                    <div> { value['name'] } </div>
                    <ul className="list-disc ml-8">
                        { 
                            value['description'].map( (description) => { 
                                return (
                                    <li> { description }  </li>
                                )
                            }) 
                        } 
                        
                    </ul>  
                </div>
            </div>
        ) 
      } )  
      } 
          
 
    </div>
  );
};

export default ProjectSection;
