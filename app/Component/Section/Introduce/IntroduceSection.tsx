const IntroduceSection = ( {color} : { color : string } ) => { 
    let currentYear = new Date().getFullYear() - 2009;
    let experience_web = currentYear - 5;
    let experience_management = currentYear - 10;
    let aws_experience_management = currentYear - 14;

    return (
        <div className=""> 
            <div className="p-4 rounded-md shadow-lg">
                <div className="text-lg">
                    Welcome everybody, I am Zidane, I have { currentYear } Years of Experience about web and auto game development
                </div>
                <ul className="mt-6 ml-6 leading-6 list-disc">
                    <li> Over ({ experience_web }+ years) in web development. </li>
                    <li> Over ({ experience_management }+ years) in team, personal management. </li>
                    <li> Over ({ aws_experience_management }+ years) in AWS, DevOps, VPS, Cyber Panel, DDEV, ngrok </li>

                    <li>
                        I wear two hats in my role: Solution Architect and Software Architect. 
                        As a Solution Architect: I propose high-level solutions, providing solutions and technology recommendations to the team, Layered Architecture, ... 
                        Then, as a Software Architect, I guide the team in turning those solutions into reality. 
                        It’s a mix of vision and hands-on execution!
                    </li>
                    <li> 
                        I have developed a  <span className={ `font-bold text-white  pl-2 pr-2 bg-blue-600` }  >comprehensive CMS-ready base template source code(include Logic + API + Database + MessageQueue + Caching + UI)</span>, meticulously designed with a full suite of UI components 
                        including advanced upload/download capabilities, export functions, scheduling tools, date pickers, sophisticated combo boxes, 
                        The dynamic loading of two or more interconnected combo boxes is mutually dependent (AJAX), 
                        responsive tables, text boxes with validation, and enhanced search, filter, and sorting features. 
                        The template is engineered with robust workflows, encompassing phone, email, and SMS verification systems, 
                        JWT authentication, API, Payment initialization, 
                        social media logins (Google, Facebook), Firebase integration, scheduled cron jobs, 
                        RabbitMQ initialization, and efficient caching mechanisms, ready for immediate deployment.
                        <span className={ `font-bold text-white  pl-1 pr-2 bg-blue-600` } >It's designed for effortless scalability and seamless integration of new features. </span>
                    </li>
                    <li> Apply AI/ChatGPT (prompt) for speed up daily works </li>
                    <li> Passionate about learning and implementing cutting-edge technologies, with a knack for enhancing existing frameworks. </li>
                    <li> Skilled in client engagement and streamlining app development processes to conserve time and resources. </li>
                    <li> Strong analytical abilities with advanced backend expertise and frontend proficiency.</li>
                    <li> Versed in Aliyun Cloud Services, including ECS and RDS (PostgreSQL), and adept at VPS setup using Nginx, IIS, and Apache. </li>
                    <li> Database management experience with MySQL, SQL Server, PostgreSQL, MongoDB in TypeORM, Prisma </li>
                    <li> Competent in Docker, PHP (especially CakePHP), NodeJS/NestJS, .NET C# (4.5), ASP.NET, Webservice, and Lua scripting. </li>
                    <li> Frontend development skills include HTML, CSS (TailwindCSS, Bootstrap), JavaScript ES6, jQuery, and NextJS. </li>
                    <li> Utilizes Portainer for Docker management and is proficient in a variety of technologies such as Restful API, and multi-threading. </li>
                    <li> Leadership experience in managing and mentoring a team.</li>
                    <li> Balance and understand when to be flexible and tough in management </li>
                    <li> Proficient in .NET code obfuscation and reverse engineering, understanding of Assembly language. </li>
                    <li> Experienced build AutoPlay Game (Hook, Auto restore hp, mp, Auto farm, Auto buy/sell items ...) </li>
                    <li> Capable of creating multilingual web applications with PHP and CakePHP frameworks, and experienced in Linux shell scripting. </li>
                    <li> Familiar with RabbitMQ for asynchronous operations and proficient in graphic design and editing with Photoshop and Figma. </li>
                    <li> Effective communicator in both English and Chinese (Cantonese/Mandarin), highly responsible, detail-oriented, and adaptable. </li>
                    <li> My contribute: <a href="https://packagist.org/packages/learntechtips/cakephp-bake-zidane" className={ `font-bold text-white  pl-1 pr-2 bg-blue-600` }>  packagist.org - learntechtips - cakephp-bake-zidane </a> </li>

                   
                </ul>  
            </div>
            <div>  
            </div>
        </div>
    )
}

export default IntroduceSection;