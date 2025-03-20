import PlanCard from "../PlanCard/PlanCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./plan.scss";
import planCardsContent from "../../data/planCardsContent.json";

export default function Plan() {
    return (
        <>
            <SectionHeader
                h="Choose your plan"
                text="Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue."
            />
            <div className="cards">
                {planCardsContent.map((item) => {
                    return (
                        <PlanCard
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            time={item.time}
                            items ={item.items}
                        />
                    );
                })}
            </div>
        </>
    );
}
