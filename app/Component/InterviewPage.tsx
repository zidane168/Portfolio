 
import useStore from "@/app/Store/store";

const InterviewPage: React.FC = () => { 

    const color = useStore((state: any) => state.color);
     return (
        <div className="text-[20px] leading-[48px] ">
            <div className="flex flex-col justify-between p-4 rounded-md shadow-lg"> 
                <div className="p-2 m-2 font-bold text-center text-white uppercase bg-orange-600 rounded-md shadow-lg"> Interview Common Question!!! </div>

                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold"> ✅ Can you introduce yourself? </h3>
                <ul className="ml-6 list-disc">
                    <li> Hello sir, I am Zidane. I have over 10 years of experiences working on web products. </li>
                    <li> Currently, I am working as both a solution architect and a software architect.</li>
                    <li> As a solution architect, I design high level solutions and provide technical recommendations to the team </li>
                    <li> As a software architect, I help the team implement those solutions and turn them into reality </li>
                </ul> 

                <hr  className="m-4"/>
                <h3   style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold">  ✅ Can you tell me about a challenging project you’ve worked on, and how you solved it?</h3>
                <ul className="ml-6 list-disc">
                    <li> Yes, definitely. One of the most challenging projects I worked on was the CityU project</li>
                    <li> CityU is a healthcare platform designed for doctors and customer, helping them manage quest wellness more effectively</li>
                    <li> In this project, we needed to synchronize data between two systems — from an old Microsoft SQL Server database to a new MySQL database.</li>
                    <li> To solve this, we used RabbitMQ to create a real-time data pipeline that synced data from the old system to our new one.</li>
                    <li> This allowed us to integrate their product with ours seamlessly.</li>
                </ul>

                <hr  className="m-4"/>
                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold">  ✅ How do you usually work with frontend developers or other team members?</h3>
                <ul className="ml-6 list-disc">
<li> Yes, absolutely. When working on a project, I always make sure to communicate clearly with the frontend developers and other team members. </li>
<li> I review the product requirements and their implementation ideas. If something doesn’t make sense, I ask questions and offer suggestions to improve the solution. </li>
<li> I focus on understanding the reason behind each decision — why something should be done, or why it might not be necessary. </li>
<li> Besides that, I support other teams by reviewing their architecture and helping them choose the right technologies for each case. </li>
<li> When working with the product team, I also help translate technical ideas into business-friendly explanations so they can communicate better with the client..</li>
                </ul>

                <hr  className="m-4"/>
                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold">  ✅ To handle deadlines and pressure, I always start with a clear and detailed plan. (Ban xu ly decline and ap luc nhu the nao)?</h3>
                <h4 className="underline uppercase " >  Summary  </h4>
                <ul className="ml-6 list-disc">
<li> “To handle pressure and deadlines, I always create a clear plan. I break the project into small tasks and track the progress. This helps me deliver on time and keep the team aligned.” </li>
                </ul>

                  <h4 className="underline uppercase " >    Long Explain </h4>
                <ul>
<li> I break the project into smaller tasks and assign timelines to each part.</li>
<li> This helps me and the team stay focused and avoid last-minute rushes.</li> 
<li>I also make sure to communicate frequently with other teams and the client, so if any issues arise, we can adjust the plan early.</li>
<li>Thanks to this planning approach, I’m usually able to deliver on time — even when the project is complex or stressfuf </li>
                </ul> 

                <hr  className="m-4"/>
                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold">  ✅ To handle deadlines and pressure, I always start with a clear and detailed plan. (Ban xu ly decline and ap luc nhu the nao)?</h3>
                <h4 className="underline uppercase " > Summary  </h4>
                <ul className="ml-6 list-disc">
<li> “To handle pressure and deadlines, I always create a clear plan. I break the project into small tasks and track the progress. This helps me deliver on time and keep the team aligned.” </li>
                </ul> 

                <hr  className="m-4"/>
                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold">  ✅ What are your strengths and weaknesses?</h3>
                  <h4 className="underline uppercase " > Summary  </h4>
                <ul className="ml-6 list-disc">
<li> “My strength is patience, focus, and good communication. My weakness is being too detail-oriented, but I’m working to improve that.” </li>
                </ul>

                <hr  className="m-4"/>
                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold" > ✅ What do you join our company?</h3>
                <h4 className="underline uppercase " > Summary  </h4>
                <ul className="ml-6 list-disc">               
<li> I saw your company on LinkedIn and was really impressed by your culture. </li>
<li> I’m looking for a company that values innovation and teamwork, </li>
<li> and I believe this is a great place for me to grow and contribute” </li>
                </ul>
                
                <h4 className="underline uppercase " >  Long explain  </h4>
                <ul className="ml-6 list-disc">               
<li>  I saw your company on LinkedIn, and I was really impressed by the culture and the way your team works together.</li>

<li> I’m looking for a workplace where I can both contribute my technical skills and continue growing professionally, and I feel that your company offers that kind of environment. </li>
<li> From what I’ve read and seen, your company values innovation, collaboration, and continuous improvement  — which align closely with my own values and work style. </li>
<li> That’s why I’m excited about the opportunity to join your team. </li>
                </ul>


                <hr  className="m-4"/>

                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold" > ✅ Câu hỏi: How do you solve technical problems? </h3>
                <h4 className="underline uppercase " > 🗣 Gợi ý luyện nói phiên bản ngắn:  </h4>
                <ul className="ml-6 list-disc">               
<li>“First, I identify the systems involved — frontend, backend, API, or client. Then I check the logs, trace the problem, and confirm the root cause. </li>
<li>After that, I fix the issue and try to prevent it from happening again.”</li>
                </ul>


                <h4 className="underline uppercase " > 🔹 Mẫu trả lời tiếng Anh chuyên nghiệp: </h4>
                <ul className="ml-6 list-disc">               
<li> When solving a technical problem, the first thing I do is identify which systems are involved. </li>
<li> I analyze both frontend and backend services, as well as any APIs or client-related components. </li> 
<li> Once I understand where the issue might be, I check the logs and trace the data flow to confirm the root cause.</li> 
<li> After identifying the source of the problem, I validate it by testing possible scenarios.</li> 
<li> Finally, I work on fixing the issue and also propose preventive solutions to avoid the same issue in the future. </li>
                </ul>

                
                
                <hr  className="m-4"/>

                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold" > ✅ Câu hỏi:  What technologies are you most comfortable with? </h3>
                
                <ul className="ml-6 list-disc">               
<li>I’m most comfortable working with PHP, especially with the CakePHP framework. </li>
<li> I’ve been using it for many years, so I know it inside and out. </li>
<li> Besides PHP, I also have strong experience with JavaScript frameworks like Next.js, Node.js, Vue.js, and React.js. </li>
<li> I enjoy working on both backend and frontend, and I’m confident in building full-stack applications using these technologies.</li> 
                </ul>




                <hr  className="m-4"/>

                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold" > ✅ Câu hỏi: Can you tell me about a successful project you worked on? </h3>
                
                <ul className="ml-6 list-disc">               
<li>
One of the most successful projects I worked on was the CityU project. </li>
<li> In this project, I was responsible for designing and implementing a solution to synchronize data between Microsoft SQL Server and MySQL</li>
<li> I created a real-time data pipeline using RabbitMQ to handle to data transfer smoothly and efficiently </li>
<li> This project was successful because we delivered it on time, and the solution has been running stably in prodution</li>
<li> I am proud of this project because it required both architectural planning and hands-on development</li>

                </ul>

                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold" > ✅ Câu hỏi:   What do you think is the biggest achievement or goal for a developer? </h3>              
                <h4 className="underline uppercase " >  🗣 Gợi ý câu ngắn để luyện nói: </h4>
                <ul className="ml-6 list-disc">       
                    <li> “A great developer understands both code and the business. That way, they build things that really matter to users and the company.” </li>
                </ul>

                <h4 className="underline uppercase " > Long explain </h4>
                <ul className="ml-6 list-disc">   
                    <li> I believe the biggest achievement for a developer is not just writing good code, but understanding the business context behind the product. </li>
                    <li> When a developer truly understands the business goals and user needs, they can build features that are more effective, more valuable, and easier to scale. </li>
                    <li> This mindset helps turn technical work into real business impact, and that’s what makes a developer stand out. </li>
                </ul>

                <hr  className="m-4"/>
                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold" > ✅ Câu hỏi: How do you solve a problem thoroughly? </h3>              

                <h4 className="underline uppercase " >🔹 Câu trả lời chuyên nghiệp bằng tiếng Anh:  </h4>

                <ul className="ml-6 list-disc">   
                    <li>  When I want to solve a problem thoroughly, I always start by fully understanding the system and the root cause of the issue.</li>
                    <li> I try to break the problem down into smaller parts and analyze how each part of the system contributes to it. </li>
                    <li> Once I understand the full picture, I can design a clear and efficient solution. </li> 
                    <li> I also make sure to prevent the issue from happening again by improving the process or architecture if needed. </li>
                </ul>

            </div>
        </div>
    )
}

export default InterviewPage;
