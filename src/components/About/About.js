import React from "react";
import "./about.css";
import { BsPersonLinesFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiPhone } from "react-icons/bi";

const About = () => {
  return (
    <section id="about" className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container flex flex-col gap-12 lg:gap-12 items-center justify-items-center lg:flex">
        <div className="about__me">
          <div className="about__me-img">
            <img src={require("../../assets/me.jpg")} alt="/" width="99%" />
          </div>
        </div>
        <div className="about-me-details">
          <h3>General Information </h3>
          <ul>
            <li className="flex items-center gap-2">
              <span>
                <BsPersonLinesFill />
              </span>
              Abrar Muthana Rakea
            </li>

            <li className="flex items-center gap-2">
              <span>
                <GoLocation />
              </span>
              Iraq - Erbil
            </li>
            <li className="flex items-center gap-2">
              <span>
                <BiPhone />
              </span>
              +964783119024
            </li>
          </ul>
          <div className="about__content">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
