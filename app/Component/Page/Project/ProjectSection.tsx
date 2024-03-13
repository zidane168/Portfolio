import Link from "next/link";
import Image from "next/image";
import TitleUI from "../../UI/TitleUI";
import ImageCarouselUI from "../../UI/ImageCarouselUI";

const ProjectSection = ({ color }: { color: string }) => {
  return (
    <div className="p-2 shadow-lg mt-[10px] rounded-md h-[800px] p-[20px]">
      <div className="">
        <TitleUI title="My Project Background" bgColor={color} />
      </div>

      <div className="flex space-x-6 p-2 w-fill w-full">
        <div>
          <img src="/project/ecpark-1.png" alt="Image 1" width={300} />
        </div>

        <div>
          <div> Project for Parking Cars </div>
          <ul className="list-disc ml-8">
            <li> Use CakePHP 4.0 </li>
            <li>
              {" "}
              Using Goutte/Client "fabpot/goutte": "^4.0" and
              "voku/simple_html_dom": "^4.8" for crawl data{" "}
            </li>
            <li>
              {" "}
              Using GoogleAPI "google/apiclient": "^2.12.1" for make a social
              login{" "}
            </li>
            <li>
              {" "}
              Using FirebaseAPI "kreait/firebase-php": "^5.0" for making
              firebase call{" "}
            </li>
            <li>
              {" "}
              Using stripe payment gateway by using "stripe/stripe-php": "^10.5"
              for making a call{" "}
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex space-x-6 p-2 w-fill w-full">
        <div>
          <img src="/project/ecpark-1.png" alt="Image 1" width={300} />
        </div>

        <div>
          <div> Project for Parking Cars </div>
          <ul className="list-disc ml-8">
            <li> Use CakePHP 4.0 </li>
            <li>
              {" "}
              Using Goutte/Client "fabpot/goutte": "^4.0" and
              "voku/simple_html_dom": "^4.8" for crawl data{" "}
            </li>
            <li>
              {" "}
              Using GoogleAPI "google/apiclient": "^2.12.1" for make a social
              login{" "}
            </li>
            <li>
              {" "}
              Using FirebaseAPI "kreait/firebase-php": "^5.0" for making
              firebase call{" "}
            </li>
            <li>
              {" "}
              Using stripe payment gateway by using "stripe/stripe-php": "^10.5"
              for making a call{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
