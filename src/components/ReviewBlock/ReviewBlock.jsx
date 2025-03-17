import star_icon from "../../assets/review_block_assets/star_icon.svg"
import "./review_block.scss"

export default function RewiewBlock(props) {
    return (
<div className="review_wrapper">
      <div className="review">
        <div className="person">
            <div className="person_img">
                <img src={props.person_img} alt="person" />
            </div>
            <div className="person_info">
                <p className="person_name">{props.personName}</p>
                <div className="location">
                    <p>{props.location}</p>
                    <div className="mark">
                        <span>{props.mark}</span>
                        <img src={star_icon} alt="star_icon" />
                    </div>
                </div>
            </div>
        </div>
        <div className="review_text">
            <p>{props.text}</p>
        </div>
      </div>
</div>
    );
  }