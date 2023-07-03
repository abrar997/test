import React from "react";
import "./portfolio.css";

import { data } from "./data";
const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col gap-y-2">
      <h5>My Work</h5>
      <div className="container portfolio__container">
        {data.map((item) => {
          return (
            <article className="portfolio_item" key={item.id}>
              <div className="portfolio_item-image overflow-hidden transition-all duration-300">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="portfolio_item-content">
                <h3> {item.name}</h3>
                <p>{item.skills} </p>
              </div>
              <div className="portfolio_item-cta">
                {/* Github link */}
                <a
                  href={item.Github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {/* Demo link */}
                <a
                  href={item.Demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
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
