import VpnInfo from "../VpnInfo/VpnInfo";
import Features from "../Features/Features.jsx"
import users_icon from "../../assets/vpn_info_assets/users_icon.svg"
import locations_icon from "../../assets/vpn_info_assets/locations_icon.svg"
import servers_icon from "../../assets/vpn_info_assets/servers_icon.svg"

import "./main.scss";


export default function Main() {
  return (
    <main>
    <div className="container">
    <section className="vpn"> 
      <VpnInfo img_name={users_icon} numbers='90+' text='Users'/>
      <VpnInfo img_name={locations_icon} numbers='30+' text='Locations'/>
      <VpnInfo img_name={servers_icon} numbers='50+' text='Servers'/>
    </section>
    <section className="features_wrapper">
      <Features></Features>
    </section>
    </div>
    </main>
  );
}
