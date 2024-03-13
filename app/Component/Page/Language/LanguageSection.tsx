import TitleUI from "../../UI/TitleUI";

const LanguageSection = ( {color} : { color : string } ) => {
 
    return (
        <div className="text-left"> 
            <TitleUI title="Languages" bgColor={ color } />   
            
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