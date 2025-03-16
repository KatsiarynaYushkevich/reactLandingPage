import Button from "../Button/Button";
import "./header.scss";
import logo from '../../assets/logo.svg';
import headerImage from '../../assets/header_img.png';
import burger_icon from '../../assets/burger_icon.svg';

export default function Header() {
  return (
    <header className="header_wrapper">
      <div className="container">
        <div className="header">
         <a href="#"><img src={logo}/></a>
          <div className="nav">
            <a href="#">features</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonial</a>
            <a href="#">Help</a>
          </div>
         <div className="header_buttons">
          <Button content="Sign In" color='transparent' FontFace='regular' size='header_btn'/>
          <Button content="Sign up" color='transparent' FontFace='regular' size='header_btn'/>
         </div>
         <img src={burger_icon} alt="burger_icon" className="burger_icon" />
        </div>
        <div className="header_content">
          <div className="header_text">
            <h1>Want anything to be easy with <span>LaslesVPN</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
            <Button content="Get started" color="red" FontFace='semi_bold' size='header_txt_btn'/>
          </div>
          <div className="header_img">
            <img src={headerImage}/>
          </div>
        </div>
      </div>
    </header>
  );
}
