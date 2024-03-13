import TitleUI from "../../UI/TitleUI";

const LanguageSection = ({ color }: { color: string }) => {
  const minWidth: string = "160px";

  return (
    <div className="text-left">
      <TitleUI title="Languages" bgColor={color} />

      <div className="flex justify-between">
        <div > English </div>
        <div> Professional working proficiency </div>
      </div>

      <div className="flex justify-between">
        <div > Chinese (Mandarin) </div> 
        <div> Native or bilingual proficiency </div>
      </div>
      <div className="flex justify-between">
        <div>  Chinese (Cantonese) </div>
        <div> Native or bilingual proficiency </div>
      </div>
      <div className="flex justify-between">
        <div>  Vietnamese </div>
        <div> Native or bilingual proficiency </div>
      </div>
    </div>
  );
};

export default LanguageSection;
