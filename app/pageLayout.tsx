import React from 'react';
import Image from 'next/image';
import TitleUI from './Component/UI/TitleUI';
import LanguageSection from "./Component/Section/Language/LanguageSection";
import SocialSection from "./Component/Section/Social/SocialSection";   
import SkillSection2 from "./Component/Section/Skill/SkillSection2"; 
import SlideInLeft from "./Component/Animation/SlideInLeft"; 
import useStore from './Store/store';
import Link from 'next/link';
import Head from 'next/head';

interface PageLayoutProps { 
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({  children }) => {
  const color = useStore((state: any) => state.color);  
  const date = new Date();
  
  return (
 
   
      <div className={ `p-[20px] border-[2px] rounded-lg m-[20px] `} style={ { borderColor: color, boxShadow: `10px 10px 100px ${color}` } } >
        <div className="text-sm flex flex-col space-y-[20px] lg:flex-row lg:space-x-[20px] h-full">
          
          <div className="lg:w-[25%]  flex-col text-center border-r-[2px] pr-[20px]" style={{ borderRightColor: color }}>
            <div className="flex justify-center">
              <Image
                src="/zidane.jpg"
                alt="Avatar"
                className="rounded-full"
                width={150}
                height={150}
              />
            </div>
            <div className="mt-[10px]">
              <TitleUI title="LY HUU VI" bgColor={color} /> 
            </div>

            <hr className="mt-[20px] mb-[20px]" style={{ borderColor: color }} /> 
          
            <div className="text-left">
              <ul className="ml-6 list-disc">
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

            <hr className="mt-[20px] mb-[20px]" style={{ borderColor: color }} />
            <div className="underline transition hover:scale-125" >
              <Link target="_blank" href="https://learn-tech-tips.blogspot.com/"> Technical Blog </Link> 
            </div>
            <div>
              Copyright @{ date.getFullYear() } 
            </div>
          </div> 

          <div className="w-[100%] ">
            { children }
          </div> 

        </div>
      </div> 
 
  );
};

export default PageLayout;