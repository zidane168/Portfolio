import KeywordUI from "../../UI/KeywordUI"; 
import TitleUI from "../../UI/TitleUI";

export default function SkillSection2( { color } : { color : string } ) {
  return (
    <div className="text-left">
       <TitleUI title="Skill Set" bgColor={ color } /> 

       <div className="w-full">
        <KeywordUI title="PHP/CakePHP"  />
        <KeywordUI title="MySQL"     />
        <KeywordUI title="HTML/CSS/LESS"     /> 
        <KeywordUI title="TailwindCSS/Bootstrap"  />
        <KeywordUI title="Docker/docker-compose"    />
        <KeywordUI title="NextJS"   /> 
        <KeywordUI title="Zustand State Management"     />  
        <KeywordUI title="C# Packet, ASM - AutoPlay"     /> 
        <KeywordUI title="Javascript/TypeScript"      /> 
        <KeywordUI title="NestJS ORM"    />
        <KeywordUI title="Ratchet Server/Web Socket"   /> 
        <KeywordUI title="C# obfuscation"  />
        <KeywordUI title="C# Net-Web"    />
        <KeywordUI title="RabbitMQ"      /> 
        <KeywordUI title="Kfaka"     />
        <KeywordUI title="Microsoft SQL"  />
        <KeywordUI title="Nginx"  /> 
        <KeywordUI title="PayPal/PayMe HSBC/Stripe"  /> 
        <KeywordUI title="Firebase"  />
        <KeywordUI title="jsdelivr"  />
        <KeywordUI title="Social Login"  />
        <KeywordUI title="Parallax effect"  />
       </div>
      
    </div>
  );
}
