import React from "react";
import "./testiminals.css";
const Testiminals = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients </h5>
      <h2>Testimonials </h2>

      <div className="container testi__container">
        <article className="testi">
          <div className="client__avatar">
            <img src={require("../../assets/me.jpg")} width="100%" alt="" />
          </div>
          <div className="cliet_content">
            <h5>Name</h5>
            <small className="claient_review">
              lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet
              !
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testiminals;
