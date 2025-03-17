import VpnInfo from "../VpnInfo/VpnInfo"
import Features from "../Features/Features"
import Plan from "../Plan/Plan"
import Network from "../Network/Network"
import Rewiews from "../Reviews/Reviews"
import Subscribe from "../Subscribe/Subscribe"

import users_icon from "../../assets/vpn_info_assets/users_icon.svg"
import locations_icon from "../../assets/vpn_info_assets/locations_icon.svg"
import servers_icon from "../../assets/vpn_info_assets/servers_icon.svg"

import "./main.scss";



export default function Main() {
  return (
    <main>
    <section className="vpn container"> 
      <VpnInfo img_name={users_icon} numbers='90+' text='Users'/>
      <VpnInfo img_name={locations_icon} numbers='30+' text='Locations'/>
      <VpnInfo img_name={servers_icon} numbers='50+' text='Servers'/>
    </section>
    <section className="features_wrapper container">
      <Features/>
    </section>
    <section className="plans container">
      <Plan/>
    </section>
    <section className="network_wrapper container">
      <Network/>
    </section>
    <section className="reviews_wrapper review_container">
      <Rewiews/>
    </section>
    <section className="subscribe_wrapper container">
      <Subscribe text='Lorem ipsum dolor sit amet '
      h='Subscribe now for get special features!'/>
    </section>
    </main>
  );
}
