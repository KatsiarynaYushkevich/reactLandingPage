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
             <img src={card_img} alt="plan image" />
         </div>
         <h3>{props.plan}</h3>
         <div className="card_list">
          <ListItem f_weigth='regular' text='Unlimited bandwitch'/>
          <ListItem f_weigth='regular' text='Encrypted connection'/>
          <ListItem f_weigth='regular' text='Yes trafic logs'/>
          <ListItem hidden={props.hide4} f_weigth='regular' text='Works on all devices'/>
          <ListItem hidden={props.hide5} f_weigth='regular' text='Connect anyware'/>
          <ListItem hidden={props.hide6} f_weigth='regular' text='Get new features'/>
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