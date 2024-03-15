import React from "react";
import useStore  from "@/app/Store/store";
import Link from 'next/link';

const GuideDetailPage: React.FC = () => {
  const color = useStore((state: any) => state.color);
  return (
    <div> 
      <div className="flex justify-between">
         <div> Guideline </div>
         <div> <Link href="/"> Back </Link> </div>
      </div> 
      
      <div className="flex ">
         <div> using NextJS 14 </div>
         <div> Build project use in command:  npx create-next-app@latest </div>
      </div> 
    </div>
  );
};

export default GuideDetailPage;
