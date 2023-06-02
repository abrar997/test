import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__Social">
      <a
        href="https://www.linkedin.com/in/abrar-muthanna-658027205"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/abrar997" target="_blank">
        <FaGithub />
      </a>
{/* 
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
