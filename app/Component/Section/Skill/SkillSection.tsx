import Progressbar from "../../UI/ProgressbarUI";
import TitleUI from "../../UI/TitleUI";

export default function SkillSection( { color } : { color : string } ) {
  return (
    <div>
       <TitleUI title="Skills" bgColor={ color } />
       <div className="flex justify-between mb-2">
          <div style={ { color: color } } > Name </div>
          <div style={ { color: color } }> Projects </div>
       </div>
       <Progressbar name="CakePHP" num={50}  />
       <Progressbar name="MySQL" num={50}    />
       <Progressbar name="HTML/CSS/LESS" num={30}    /> 
       <Progressbar name="Docker/docker-compose" num={30}   />
       <Progressbar name="NextJS" num={10}    /> 
       <Progressbar name="Zustand State Management" num={10}   />  
       <Progressbar name="C# Packet, ASM - AutoPlay" num={10}    /> 
       <Progressbar name="Javascript/TypeScript" num={10}    /> 
       <Progressbar name="NestJS ORM" num={8}    />
       <Progressbar name="Ratchet Server/Socket" num={5}  /> 
       <Progressbar name="C# Net-Web" num={5}    />
       <Progressbar name="RabbitMQ" num={3}    /> 
       <Progressbar name="Kfaka" num={1}    />
       <Progressbar name="Microsoft SQL" num={1}    />
      
    </div>
  );
}
