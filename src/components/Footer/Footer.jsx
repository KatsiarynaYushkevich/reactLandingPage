import logo from "../../assets/logo.svg"
import facebook_icon from "../../assets/footer_assets/facebook_icon.svg"
import phone_icon from "../../assets/footer_assets/phone_icon.svg"
import youtube_icon from "../../assets/footer_assets/youtube_icon.svg"
import "./footer.scss";
import contentFooterLinks from "../../data/contentFooterLinks.json";

export default function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="container footer">
                <div className="footer_text">
                    <div className="footer_img">
                        <a href="#"><img src={logo} alt="vpn logo"/></a>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel
                        vel erat semper augue.</p>
                    <div className="icons">
                        <a href="#"><img src={facebook_icon} alt="facebook icon"/></a>
                        <a href="#"><img src={phone_icon} alt="phone icon"/></a>
                        <a href="#"><img src={youtube_icon} alt="youtube icon"/></a>
                    </div>
                </div>
                <div className="footer_block">
                    {contentFooterLinks.map((item) => (
                        <div className="faq_block" key={item.id}>
                            <span>{item.title}</span>
                            {item.items.map((subItem, subIndex) => (
                                <a key={subIndex}><span >{subItem}</span></a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
