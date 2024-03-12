import TitleUI from "../../UI/TitleUI";

const LanguageSection = (  { bgColor } : { bgColor : string } ) => {
    return (
        <div className="text-left">
            <div className="font-bold "> 
            
            <TitleUI title="Languages" bgcolor={ bgColor } />

            </div>
            <div className="flex"> 
                <div className="min-w-[180px]"> English </div>
                <div> Professional working proficiency </div>
            </div>
            <div className="flex"> 
                <div className="min-w-[180px]"> Chinese (Mandarin) </div>
                <div> Native or bilingual proficiency </div>
            </div>
            <div className="flex"> 
                <div className="min-w-[180px]"> Chinese (Cantonese) </div>
                <div> Native or bilingual proficiency </div>
            </div>
            <div className="flex"> 
                <div className="min-w-[180px]"> Vietnamese </div>
                <div> Native or bilingual proficiency </div>
            </div>
      </div>
    )
}

export default LanguageSection;