import ListItem from "../ListItem/ListItem";
import Button from "../Button/Button";
import card_img from "../../assets/plan_card_assests/box_img.png"
import "./plan_card.scss"

export default function PlanCard(props) {
    return (
        <>
            <div className="card_wrapper">
                <div className="card">
                    <div className="card_plan">
                        <div className="card_img">
                            <img src={card_img} alt="plan image"/>
                        </div>
                        <h3>{props.title}</h3>
                        <div className="card_list">
                            {props.items.map((item, index) => (
                                <ListItem key={index} text={item} f_weight='regular' />
                            ))}
                        </div>
                    </div>
                    <div className="plan_price">
        <span>{props.price}
            <span className="regular">{props.time}</span>
        </span>
                        <Button content="Select" color="red" FontFace='semi_bold' size='card_btn'/>
                    </div>
                </div>
            </div>
        </>
    );
}