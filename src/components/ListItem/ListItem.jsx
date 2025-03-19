import circle_icon from "../../assets/circle_icon.svg";
import "./list_item.scss";

export default function ListItem(props) {
  return (
    <div className={`item ${props.hidden}`}>
      <div className="item_img">
        <img src={circle_icon} alt="circle_icon" />
      </div>
      <p className={props.f_weight}>{props.text}</p>
    </div>
  );
}
