import features_img from "../../assets/features_assets/features_img.png"
import ListItem from "../ListItem/ListItem";
import './features.scss'
export default function Features(props) {
  return (
    <>
      <div className="features_img">
        <img src={features_img} alt="features" />
      </div>
      <div className="features_text">
        <h2>We provide many features you can use</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
        <div className="features_list">
            <ListItem  f_weight='semi_bold' text='Powerfull online protection.'/>
            <ListItem  f_weight='semi_bold' text='Internet with borders'/>
            <ListItem  f_weight='semi_bold' text='Supercharged VPN'/>
            <ListItem  f_weight='semi_bold' text='No specific time limits'/>
        </div>
      </div>
    </>
  );
}
