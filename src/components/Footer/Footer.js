import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{"Shreyansh Shukla"}
       
      </span>
      <div className="iconContainer">
     
        <a href="https://www.linkedin.com/in/shreyansh-shukla/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
     
      </div>
    </div>
  );
};

export default Footer;
