import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TbFolders } from "react-icons/tb";
import { BsPersonLinesFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";

const About = () => {
  const [data] = React.useState([
    {
      id: 1,
      icons: <FaAward />,
      name: "Experience",
      time: "1.5 Year Experience ",
    },
    { id: 2, icons: <FiUsers />, name: "Clients", time: "..." },
    { id: 3, icons: <TbFolders />, name: "Projects", time: "+10" },
  ]);

  return (
    <section id="about" className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img
              src={require("../../assets/me.jpg")}
              alt="about image"
              width="99%"
            />
          </div>
        </div>
        <div className="about-me-details">
          <h3>General Information </h3>
          <ul>
            <li>
              <span>
                <BsPersonLinesFill />
              </span>
              <span>Name: </span>Abrar Muthana Rakea
            </li>

            <li>
              <span>
                <GoLocation />
              </span>
              <span>Location: </span>
              Iraq Erbil
            </li>
            <li>
              <span>
                <FaChalkboardTeacher />
              </span>
              <span>Study : </span>
              <p>
                <span>
                  <BiCheck />
                </span>
                Diploma of Frontend{" "}
                <span className="text-date">
                  ( 2021-April -- 2022-February )
                </span>
              </p>
              <p>
                <span>
                  <BiCheck />
                </span>
                Diploma of Backend{" "}
                <span className="text-date">( 2022-April -- 2022-August )</span>
              </p>
            </li>
            <li className="contact-btn"></li>
          </ul>
          <div className="about__content">
            <div className="about__cards">
              {data.map((item) => {
                return (
                  <article className="about__card" key={item.id}>
                    <span className="about__icon">{item.icons} </span>
                    <h5>{item.name} </h5>
                    <small> {item.time}</small>
                  </article>
                );
              })}
            </div>
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
