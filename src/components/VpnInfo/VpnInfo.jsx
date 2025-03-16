import "./vpnInfo.scss";


export default function VpnInfo(props) {
  return (
    <div className="vpn_info">
        <div className="vpn_img">
            <img src={props.img_name} className={`vpn_info_img`} />
        </div>
        <div className="vpn_info_text">
            <span className={`vpn_info_text semi_bold`}>{props.numbers}</span>
            <span className={`vpn_info_text regular`}>{props.text}</span>
        </div>
    </div>
  );
}