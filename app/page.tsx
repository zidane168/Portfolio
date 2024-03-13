'use client'

import Image from "next/image";
import Link from "next/link";
import LanguageSection from "./Component/Page/Language/LanguageSection";
import SocialSection from "./Component/Page/Social/SocialSection";
import SkillSection from "./Component/Page/Skill/SkillSection";
import TitleUI from "./Component/UI/TitleUI";
import ColorSectorUI from "./Component/UI/ColorSelectorUI";

import useStore from "./Store/store";

export default function Home() {
  const color = useStore((state) => state.color);

  return (
    <div className={ `p-[20px] border-[2px] rounded-lg m-[20px] `} style={ { borderColor: color, boxShadow: `10px 10px 100px ${color}` } } >
      <div className="flex  space-x-[20px] h-[900px]">
        <div className="w-[23%] flex-col text-center border-r-[2px] pr-[20px]" style={{ borderRightColor: color }}>
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
            <ul className="list-disc">
              <li>Technical Leader (Management) </li>
              <li>Fullstack developer (CakePHP/Twig/NestJS/ORM)</li>
              <li>AutoGame Developer (C#, ASM, Inject Packet, Obfuscate) </li>
            </ul>
          </div>

          <SocialSection />
          <hr className="mt-[20px] mb-[20px]" style={{ borderColor: color }} />
          <LanguageSection color={ color } />
          <hr className="mt-[20px] mb-[20px]" style={{ borderColor: color }} />
          <SkillSection color={ color } />
        </div>

        <div>
          <ColorSectorUI />
          <div> Selected: { color }</div>
        </div>
      </div>
    </div>
  );
}
