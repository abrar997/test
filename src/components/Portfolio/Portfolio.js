import React from "react";
import "./portfolio.css";

import { data } from "./data";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((item) => {
          // {data.map({id,name,img,skills,github,Demo})} instead of above code
          return (
            <article className="portfolio_item" key={item.id}>
              <div className="portfolio_item-image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="portfolio_item-content">
                <h3> {item.name}</h3>
                <p>{item.skills} </p>
              </div>
              <div className="portfolio_item-cta">
                {/* Github link */}
                <a href={item.Github} className="btn" target="_blank">
                  Github
                </a>
                {/* Demo link */}
                <a href={item.Demo} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
