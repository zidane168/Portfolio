import React from "react";
import useStore from "@/app/Store/store";
import Link from 'next/link';

const GuideDetailPage: React.FC = () => {
  const color = useStore((state) => state.color);
  return (
    <div> 
      <div className="flex justify-between">
         <div> This is guildline </div>
         <div> <Link href="/"> Back </Link> </div>
      </div> 
    </div>
  );
};

export default GuideDetailPage;
