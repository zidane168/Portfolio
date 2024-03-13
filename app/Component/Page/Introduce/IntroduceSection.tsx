import TitleUI from "../../UI/TitleUI";

const IntroduceSection = ( {color} : { color : string } ) => { 
    let currentYear = new Date().getFullYear() - 2009;

    return (
        <div className=""> 
            <div className="rounded-md shadow-lg p-4">
                Welcome everybody, I have Developer with  { currentYear }   Years of Experience
                <ul className="list-disc ml-4">
                    <li> Proficient in both game (5+ years) and web development (9+ years), starting from 2009. </li>
                    <li> Passionate about learning and implementing cutting-edge technologies, with a knack for enhancing existing frameworks. </li>
                    <li> Skilled in client engagement and streamlining app development processes to conserve time and resources. </li>
                    <li> Strong analytical abilities with advanced backend expertise and frontend proficiency.</li>
                    <li> Versed in Aliyun Cloud Services, including ECS and RDS (PostgreSQL), and adept at VPS setup using Nginx, IIS, and Apache. </li>
                    <li> Database management experience with MySQL, SQL Server, PostgreSQL, and TypeORM. </li>
                    <li> Competent in Docker, PHP (especially CakePHP), NodeJS/NestJS, .NET C# (4.5), ASP.NET, Webservice, C++ 11, and Lua scripting. </li>
                    <li> Frontend development skills include HTML, CSS (TailwindCSS, Bootstrap), JavaScript ES6, jQuery, and NextJS. </li>
                    <li> Utilizes Portainer for Docker management and is proficient in a variety of technologies such as Restful API, and multi-threading. </li>
                    <li> Leadership experience in managing and mentoring a team of five. </li>
                    <li>  Proficient in .NET code obfuscation and reverse engineering, understanding of Assembly language. </li>
                    <li> Capable of creating multilingual web applications with PHP and CakePHP frameworks, and experienced in Linux shell scripting. </li>
                    <li> Familiar with RabbitMQ for asynchronous operations and proficient in graphic design and editing with Photoshop and Figma. </li>
                    <li> Effective communicator in both English and Chinese (Cantonese/Mandarin), highly responsible, detail-oriented, and adaptable. </li>
                </ul>  
            </div>
            <div> </div>
        </div>
    )
}

export default IntroduceSection;