import React from "react";
import "./footer.css";
// icons
import { FaFacebookF, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        code/Mu.
      </a>
      <ul className="permalinks">
        <li>
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#about"> About</a>
        </li>
        <li>
          <a href="#experince">Experience </a>
        </li>
        <li>
          <a href="#portfolio">Portfolio </a>
        </li>
        <li>
          <a href="#contact">Contact </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com">
          <FaFacebookF />
        </a>
        <a href="http://instgrame.com">
          <FaInstagram />
        </a>
        <a href="http://linkedin.com">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        Abrar Muthana <FaHeart />. Alrights reserved
      </div>
    </footer>
  );
};

export default Footer;
