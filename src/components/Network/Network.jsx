import SectionHeader from "../SectionHeader/SectionHeader";
import map_img from "../../assets/network_assets/map_img.png";
import companies_img from "../../assets/network_assets/companies.png"
import "./network.scss"

export default function Network(props) {
    return (
      <>
      <SectionHeader h='Huge global network of fast VPN' 
        text='Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.' />
      <div className="map_img">
        <img src={map_img}/>
      </div>
      <div className="companies_img">
        <img src={companies_img }/>
      </div>
      </>
    );
  }