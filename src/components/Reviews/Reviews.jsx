import RewiewBlock from "../ReviewBlock/ReviewBlock";
import SectionHeader from "../SectionHeader/SectionHeader";
import person1 from "../../assets/reviews_assets/person1.png"
import person2 from "../../assets/reviews_assets/person2.png"
import person3 from "../../assets/reviews_assets/person3.png"
import rect from "../../assets/reviews_assets/rect.svg"
import dots from "../../assets/reviews_assets/dots.svg"
import "./reviews.scss"

export default function Rewiews(props) {
    return (
      <>
      <SectionHeader h='Trusted by thousands of happy customer' 
        text='Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.' />
      <div className="reviews">
        <RewiewBlock person_img={person1} location='Warsaw,pland' personName='Brooklyn Simmons' mark='4.5'
        text='“wow...iam very happy to use this vpn,it
        turned out to be more than my expectations
        and so far there have been no problems.
        laslesvpn always the best”.'/>
         <RewiewBlock person_img={person2} location='Warsaw,pland' personName='Darlene Robertson' mark='4.5'
        text='“wow...iam very happy to use this vpn,it
        turned out to be more than my expectations
        and so far there have been no problems.
        laslesvpn always the best”.'/>
         <RewiewBlock person_img={person3} location='Warsaw,pland' personName='Darrell Steward' mark='4.5'
        text='“wow...iam very happy to use this vpn,it
        turned out to be more than my expectations
        and so far there have been no problems.
        laslesvpn always the best”.'/>
      </div>
      <div className="scroll_buttons">
        <div className="buttons">
        <img src={rect}/>
        <img src={dots}/>
        </div>
        <div className="arrows">
        <button className="back_btn"/>
        <button className="forward_btn"/>
        </div>
      </div>
      </>
    );
  }