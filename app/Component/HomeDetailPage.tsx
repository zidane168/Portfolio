import IntroduceSection from "@/app/Component/Section/Introduce/IntroduceSection";
import MenuSection from "@/app/Component/Section/Menu/MenuSection";
import ProjectSection from "@/app/Component/Section/Project/ProjectSection";
import ColorSectorUI from "@/app/Component/UI/ColorSelectorUI";
import React from "react";
import useStore from "@/app/Store/store";

interface PageLayoutProps {
  color: string;
}

const HomeDetailPage: React.FC<PageLayoutProps> = () => {
  const color = useStore((state) => state.color);
  return (
    <div>
      <div className="flex items-center space-x-2">
        <MenuSection color={color} />
        <ColorSectorUI />
      </div>
      <div>
        <IntroduceSection color={color} />
      </div>
      <ProjectSection color={color} />
    </div>
  );
};

export default HomeDetailPage;
