import React,{useState} from "react";
import './Header.css'
export const SpecialButton = ({text,onClick = () => {

}}) => {
  
  const [hovered, setHovered] = React.useState(false);
  const transparentStyle = {
    position: 'relative',
    textDecoration: 'none',
    backgroundColor : 'transparent',
    color: 'white',
    padding: '5px',
    transition: 'border 0.3s ease',
    border : hovered? '1px solid white' : 'none',
    boxShadow: hovered? '5px 3px 8px rgba(255, 255, 255, 0.52)' : null,
  };
  return (
    <button
      href="#"
      style={transparentStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
const Header = ({onContactClick}) => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={150} />
        <div className="flexCenter h-menu">
          <SpecialButton text = {"Residencies"} />
          <SpecialButton text= {"Our Value"} />
          <SpecialButton text= {"Contact Us"} />
          <SpecialButton text= {"Get Started"} />
          <SpecialButton text= {"Contact"} onClick={onContactClick}/>
        </div>
      </div>
    </section>
  );
};

export default Header;
