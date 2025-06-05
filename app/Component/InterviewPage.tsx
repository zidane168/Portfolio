 
import useStore from "@/app/Store/store";

const InterviewPage: React.FC = () => { 

    const color = useStore((state: any) => state.color);
     return (
        <div className="text-[20px] leading-[48px] ">
            <div className="flex flex-col justify-between p-4 rounded-md shadow-lg"> 
                <div className="p-2 m-2 font-bold text-center text-white uppercase bg-orange-600 rounded-md shadow-lg"> Interview Common Question!!! </div>

                <h3  style={{ backgroundColor: color  }} className="rounded-md px-2 text-[25px] font-bold"> ✅ Can you introduce yourself? </h3>
                <ul className="ml-6 list-disc">
                    <li> Hello sir, I am Zidane. I have over 10 years of experiences working on web products. Currently, I am working as both a solution architect and a software architect.</li>
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
                <h4 className="px-2 text-white rounded-md" style={{ background: color }}> Summary  </h4>
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
            </div>
        </div>
    )
}

export default InterviewPage;
