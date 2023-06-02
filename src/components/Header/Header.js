import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";
const Header = () => {
  return (
    <header className="mt-0" id="home">
      <div className="container header__container">
        <div>
          <h5>Hello I'm , </h5>
          <h1>Abrar Muthana </h1>
          <h5>Frontend Web Developer </h5>
        </div>
        <div>
          <CTA />
        </div>
        <div>
          <HeaderSocials />
        </div>
        <div className="me">
          <img src={require("../../assets/2.png")} alt="my-image" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
