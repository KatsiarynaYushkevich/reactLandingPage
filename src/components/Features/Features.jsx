import features_img from "../../assets/features_assets/features_img.png"
import ListItem from "../ListItem/ListItem";
import './features.scss'
import contentFeaturesLinks from "../../data/contentFeaturesLinks.json"
export default function Features() {
  return (
    <>
      <div className="features_img">
        <img src={features_img} alt="features" />
      </div>
      <div className="features_text">
        <h2>We provide many features you can use</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
        <div className="features_list">
            {contentFeaturesLinks.map((item, index) => (
                <ListItem key={index} text={item} f_weight='semi_bold' />
            ))}
        </div>
      </div>
    </>
  );
}
