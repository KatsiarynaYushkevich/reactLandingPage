import "./footer_links.scss"

export default function FooterLinks(props) {
    return (
<div className="faq_block">
    <span>{props.title}</span>
    <a href="#"><p>{props.link1}</p></a>
    <a href="#"><p>{props.link2}</p></a>
    <div className={props.hidden}>
     <a href="#"><p>{props.link3}</p></a>
     <a href="#"><p>{props.link4}</p></a>
     <a href="#"><p>{props.link5}</p></a>
     <a href="#"><p>{props.link6}</p></a>
    </div>
</div>
    )
};