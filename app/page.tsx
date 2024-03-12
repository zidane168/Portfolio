import Image from "next/image";
import Link from "next/link";
import LanguageSection from './Component/Page/Language/LanguageSection';
import SocialSection from "./Component/Page/Social/SocialSection";
import SkillSection from "./Component/Page/Skill/SkillSection";
import TitleUI from "./Component/UI/TitleUI";
import ColorSectorUI from "./Component/UI/ColorSelectorUI";
 

export default function Home() { 

  return (
  
    <div className="p-[20px] border-[2px] rounded-lg m-[20px]">
    
      <div className="flex  space-x-[20px] h-[900px]">
          <div className="w-[23%] flex-col text-center border-r-[2px] pr-[20px]"> 
            <div className="flex justify-center"> 
              <Image
                  src="/zidane.jpg"
                  alt="Avatar"
                  className="rounded-full"
                  width={100}
                  height={100}
                />  
            </div>
            <div className="mt-[10px] font-bold text-blue-700 transition hover:scale-110"> 
              <div className={` bg-[#d35400] w-full rounded-md p-2 text-white`}>
                  { "LY HUU VI" } 
              </div> 
              
            </div>
            <hr className="mt-[20px] mb-[20px]" /> 
            <div className="text-left"> 
              <ul className="list-disc">
                <li>Technical Leader (Management) </li>
                <li>Fullstack developer (CakePHP/Twig/NestJS/ORM)</li>
                <li>AutoGame Developer (C#, ASM, Inject Packet, Obfuscate)  </li>
              </ul>
            </div>
            
            <SocialSection /> 
            <hr className="mt-[20px] mb-[20px]" />  
            <LanguageSection/>
            <hr className="mt-[20px] mb-[20px]" /> 
            <SkillSection/>
            
          </div>
  
          <ColorSectorUI  /> 
      </div>
      
    </div>
  );
}
