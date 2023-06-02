import React, { useState } from "react";
import "./nav.css";
// icons from react icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookHeart } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { TbMessages } from "react-icons/tb";
import { FaRProject } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { MdWork } from "react-icons/md";
const Navbar = () => {
  const [activeNav, setactiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setactiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setactiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setactiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookHeart />
      </a>
      <a
        href="#portfolio"
        onClick={() => setactiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <MdWork />
      </a>
      <a
        href="#contact"
        onClick={() => setactiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TbMessages />
      </a>
    </nav>
  );
};

export default Navbar;
