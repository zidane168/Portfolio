import KeywordUI from "../../UI/KeywordUI"; 
import TitleUI from "../../UI/TitleUI";

export default function SkillSection2( { color } : { color : string } ) {
  return (
    <div className="text-left">
       <TitleUI title="Skill Set" bgColor={ color } /> 

       <div className="w-full leading-6">
        <KeywordUI title="PHP/CakePHP/Twig/Queue Job/Cron/Pagination/Router/Gregwar-Captcha/Google map/Google reCAPTCHA"  />
        <KeywordUI title="MySQL/Postgres DB/MongoDB/Microsoft SQL"     />
        <KeywordUI title="HTML/CSS/LESS/Slider/Animation/WOW"     /> 
        <KeywordUI title="Tailwind CSS/Bootstrap/ResetCSS"  />
        <KeywordUI title="CKeditor/CKfinder/Quill Text Editor Integrated"  /> 
        <KeywordUI title="Docker/docker-compose/portainer.io"    />
        <KeywordUI title="NextJS/Axios/Authentication/Zustand State Management"   />  
        <KeywordUI title="Javascript/TypeScript"      />  
        <KeywordUI title="Apply AI/ChatGPT in coding" />
        <KeywordUI title="NodeJS/NestJS/TypeORM"    />
        <KeywordUI title="Ratchet Server/Web Socket"   />  
        <KeywordUI title="C# Packet, Assembly language, Memory, Process - AutoGame/"     /> 
        <KeywordUI title="C# Obfuscation/Anti Debug/Anti Dump"  />
        <KeywordUI title="C# Net-Web/Async/Await/"    />
        <KeywordUI title="OOP"    />
        <KeywordUI title="JWT/Multiple Device Login"    />
        <KeywordUI title="RabbitMQ/Kafka"      />  
        <KeywordUI title="I18n/Multiple Language"     /> 
        <KeywordUI title="Alibaba Cloud"     />
        <KeywordUI title="Nginx as Load balancer/upstream/round robin/ip_hash/least_conn/ "  /> 
        <KeywordUI title="ChartJS"  />
        <KeywordUI title="Python/Crawl"  />
        <KeywordUI title="PayPal/PayMe HSBC/Stripe/Asia PayDollar/HangSeng-NTT Data"  /> 
        <KeywordUI title="Firebase (Push Notification)"  />
        <KeywordUI title="Jsdelivr"  /> 
        <KeywordUI title="Social Login"  />   
        <KeywordUI title="Chat RealTime/Chat Push FireBase"  />
        <KeywordUI title="Parallax effect"  />
        <KeywordUI title="Microservice/Blockchain/Dart/Flutter/Machine Learning (Knowledge)"  />
        <KeywordUI title="Figma/Photoshop/Awesome Screen Record"  />
        <KeywordUI title="CAP (Consistency/Availability/Partition Tolerance)"  />
       </div>
      
    </div>
  );
}
