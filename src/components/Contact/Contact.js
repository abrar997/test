import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Email js to send email from Form
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_e45l3xa",
      "template_95gt8xr",
      form.current,
      "hJoA8Klc7U63TEKnd"
    );
    e.target.reset();
  };

  const [options] = React.useState([
    {
      icon: <MdOutlineEmail />,
      option: "Email",
      syntax: "abraralrawi997@gmail.com",
      href: "mailto:abraralrawi997@gmail.com",
      text: "Send a message",
    },
    {
      icon: <SiGooglemessages />,
      option: "Messenger",
      syntax: "Abrar Alrawi",
      href: "https://m.me/Abrar Alrawi",
      text: "Send a message",
    },
    {
      icon: <BsWhatsapp />,
      option: "whats up ",
      syntax: "+9647831190254",
      href: "https:/api.whatsapp.com/send?phone=+9647831190254",
      text: "Send a message",
    },
  ]);

  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/* ledt article side  */}
          {options.map((option, index) => {
            return (
              <article className="contact__option" key={index}>
                <p className="contact_option-icon">{option.icon}</p>
                <h4> {option.option}</h4>
                <h5>{option.syntax} </h5>
                <a href={option.href} target="_blank">
                  {option.text}
                </a>
              </article>
            );
          })}
        </div>
        {/* END of conatct Option */}

        {/* Start Form  */}
        <form ref={form} onSubmit={sendEmail}>
          <h4>send me a message</h4>
          <input
            type="text"
            name="name"
            placeholder="your Full Name"
            required
          />
          <input type="email" name="email" placeholder="your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Messages{" "}
          </button>
        </form>
        {/* End Form  */}
      </div>
    </section>
  );
};

export default Contact;
