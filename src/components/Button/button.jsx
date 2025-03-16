import "./button.scss"

export default function Button(props){
    return(  
    <button className={`custom_btn ${props.color} ${props.FontFace} ${props.size}`}>{props.content}</button>
    );
}


