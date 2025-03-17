import "./section_header.scss"
export default function SectionHeader(props) {
    return (
      <div className="header_section_text">
      <h2>{props.h}</h2>
      <p>L{props.text}</p>
      </div>
    );
}