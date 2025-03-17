import "./subscribe.scss"
import Button from "../Button/Button";

export default function Subscribe(props) {
    return (
       <div className="sub_block">
        <div className="subscribe_text">
            <h3>{props.h}</h3>
            <p>{props.text}</p>
        </div>
        <Button content="Subscribe now" color='red' FontFace='semi_bold' size='subscribe_btn'/>
        </div>
        
    );
}