import FooterLinks from "../FooterLinks/FooterLinks";
import logo from "../../assets/logo.svg"
import facebook_icon from "../../assets/footer_assets/facebook_icon.svg"
import phone_icon from "../../assets/footer_assets/phone_icon.svg"
import youtube_icon from "../../assets/footer_assets/youtube_icon.svg"
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer_wrapper">
     <div className="container footer">
      <div className="footer_text">
      <div className="footer_img">
      <a href="#"><img src={logo} alt="vpn logo" /></a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
          <div className="icons">
           <a href="#"> <img src={facebook_icon} alt="facebook icon" /></a>
           <a href="#"><img src={phone_icon} alt="phone icon" /></a>
           <a href="#"><img src={youtube_icon} alt="youtube icon" /></a>
        </div>
      </div>
      <div className="footer_block">
      <FooterLinks title='Product' hidden='visible'
      link1='Download'
      link2='Pricing'
      link3='Locations'
      link4='Server'
      link5='Countries'
      link6='Blog'
      />
      <FooterLinks title='Engage' hidden='visible'
      link1='LaslesVPN?'
      link2='FAQ'
      link3='Tutorials'
      link4='About us'
      link5='Privacy policy'
      link6='Terms of service'
      />
      <FooterLinks title='Earn money'
      link1='Become partner'
      link2='Affilite'
      hidden='hidden'
      />
      </div>
     </div>
    </div>
  );
}
