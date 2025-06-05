 
import useStore from "@/app/Store/store";

const InterviewPage: React.FC = () => { 

    const color = useStore((state: any) => state.color);
    return (
        <div className="text-[20px] leading-[48px] ">
            <div className="flex flex-col justify-between p-4 rounded-md shadow-lg"> 
                <div className="p-2 m-2 text-white bg-orange-600 rounded-md shadow-lg"> Interview Common Question!!! </div>
                <h3  style={{ color: color  }} className="text-[25px] font-bold"> ✅ Can you introduce yourself? </h3>
                <ul className="ml-6 list-disc">
                    <li> Hello sir, I am Zidane. I have over 10 years of experiences working on web products. Currently, I am working as both a solution architect and a software architect.</li>
                    <li> As a solution architect, I design high level solutions and provide technical recommendations to the team </li>
                    <li> As a software architect, I help the team implement those solutions and turn them into reality </li>
                </ul> 

                <hr  className="m-4"/>

                <h3  style={{ color: color  }} className="text-[25px] font-bold" > ✅ Can you tell me about a challenging project you’ve worked on, and how you solved it?</h3>
                <ul className="ml-6 list-disc">
                    <li> Yes, definitely. One of the most challenging projects I worked on was the CityU project</li>
                    <li> CityU is a healthcare platform designed for doctors and customer, helping them manage quest wellness more effectively</li>
                    <li> In this project, we needed to synchronize data between two systems, from an old mic</li>
                </ul>
            </div>
        </div>
    )
}

export default InterviewPage;
