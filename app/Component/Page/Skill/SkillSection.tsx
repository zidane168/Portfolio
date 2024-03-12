import Progressbar from "../../UI/ProgressbarUI";

export default function SkillSection() {
  return (
    <div>
       <Progressbar name="CakePHP" percent={95} width="95%" />
       <Progressbar name="HTML/CSS/LESS" percent={95} width="95%"/>
    </div>
  );
}
