import Progressbar from "../../UI/ProgressbarUI";
import TitleUI from "../../UI/TitleUI";

export default function SkillSection( { color } : { color : string } ) {
  return (
    <div>
        <TitleUI title="Skills" bgColor={ color } />
       <Progressbar name="CakePHP" percent={95} width="95%" color={ color } />
       <Progressbar name="HTML/CSS/LESS" percent={95} width="95%" color={ color } />
    </div>
  );
}
