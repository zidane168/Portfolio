import SlideInLeft from "../../Animation/SlideInLeft";
import TitleUI from "../../UI/TitleUI";

const LanguageSection = ({ color }: { color: string }) => {
  const minWidth: string = "160px";

  return (
    <div className="leading-6 text-left">
      <TitleUI title="Languages" bgColor={color} />

      <div className="flex flex-row justify-between lg:flex-col">
        <div className="font-bold"> English </div>
        <div>  <SlideInLeft>  Professional working proficiency  </SlideInLeft>  </div> 
      </div>

      <div className="flex flex-row justify-between lg:flex-col lg:mt-2">
        <div className="font-bold"> Chinese (Mandarin) </div>
        <div>  <SlideInLeft> Native or bilingual proficiency </SlideInLeft> </div>
      </div>

      <div className="flex flex-row justify-between lg:flex-col lg:mt-2">
        <div className="font-bold"> Chinese (Cantonese) </div>
        <div>  <SlideInLeft> Native or bilingual proficiency </SlideInLeft> </div>
      </div>

      <div className="flex flex-row justify-between lg:flex-col lg:mt-2">
        <div className="font-bold"> Vietnamese </div>
        <div> <SlideInLeft>  Native or bilingual proficiency </SlideInLeft> </div>
      </div>
    </div>
  );
};

export default LanguageSection;
