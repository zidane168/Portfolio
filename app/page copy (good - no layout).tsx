'use client'

import Image from "next/image";
import Link from "next/link";
import LanguageSection from "./Component/Section/Language/LanguageSection";
import SocialSection from "./Component/Section/Social/SocialSection"; 
import TitleUI from "./Component/UI/TitleUI";
import ColorSectorUI from "./Component/UI/ColorSelectorUI";

import useStore from "./Store/store";
import MenuSection from "./Component/Section/Menu/MenuSection";
import IntroduceSection from "./Component/Section/Introduce/IntroduceSection";
import SkillSection2 from "./Component/Section/Skill/SkillSection2";
import ProjectSection from "./Component/Section/Project/ProjectSection"; 
import SlideInLeft from "./Component/Animation/SlideInLeft"; 

export default function Home() {
  const color = useStore((state) => state.color); 
  return (
    <div className={ `p-[20px] border-[2px] rounded-lg m-[20px] `} style={ { borderColor: color, boxShadow: `10px 10px 100px ${color}` } } >
      <div className="text-sm flex flex-col space-y-[20px] lg:flex-row lg:space-x-[20px] h-full">
         
        <div className="lg:w-[25%]  flex-col text-center border-r-[2px] pr-[20px]" style={{ borderRightColor: color }}>
          <div className="flex justify-center">
            <Image
              src="/zidane2.jpg"
              alt="Avatar"
              className="rounded-full"
              width={100}
              height={100}
            />
          </div>
          <div className="mt-[10px]">
            <TitleUI title="LY HUU VI" bgColor={color} /> 
          </div>

          <hr className="mt-[20px] mb-[20px]" style={{ borderColor: color }} />
          
        
          <div className="text-left">
            <ul className="list-disc ml-6">
              <SlideInLeft> Technical Leader (Management with Flexible/Tough)  </SlideInLeft>  
              <SlideInLeft> Fullstack developer (CakePHP/Twig/NestJS/ORM)  </SlideInLeft>   
              <SlideInLeft> AutoGame Developer (C#, ASM, Inject Packet, Obfuscate)  </SlideInLeft>   
            </ul>
          </div>
        

          <SocialSection />
          <hr className="mt-[20px] mb-[20px]" style={{ borderColor: color }} />
          <LanguageSection color={ color } />
          <hr className="mt-[20px] mb-[20px]" style={{ borderColor: color }} />
          <SkillSection2 color={ color } />
        </div> 

        <div className="w-[100%] ">
          <div className="flex space-x-2 items-center"> 
            <MenuSection /> 
            <ColorSectorUI />  
          </div> 
          <div>
            <IntroduceSection />
          </div> 
          <ProjectSection color={ color } />  
        </div>

      </div>
    </div>
  );
}