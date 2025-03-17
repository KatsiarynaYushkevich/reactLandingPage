import PlanCard from "../PlanCard/PlanCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./plan.scss";

export default function Plan(props) {
  return (
    <>
    <SectionHeader h='Choose your plan' text='orem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.' />
    <div className="cards">
    <PlanCard plan='Free' price='Free' time='' hide4='hidden' hide5='hidden' hide6='hidden'/>
    <PlanCard plan='Standard plan' price='$ 9 /' time=' mo' hide6='hidden'/>
    <PlanCard plan='Premium plan' price='$ 12 /' time=' mo'/>
    </div>
    </>
  );
}
