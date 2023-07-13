import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0i0aw5b",
      "template_584onak",
      form.current,
      "eHIyHsLzdPVBHPH31"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>parmarabhay862002@gmail.com</h5>
            <a href="mailto:parmarabhay862002@gmail.com" target="_blank">
              Send an email
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-7359441042</h5>
            <a
              href="http://wa.me/917359441042?text=Hello,%20Abhay"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FiPhoneCall className="contact__option-icon" />
            <h4>Call</h4>
            <h5>+91-7359441042</h5>
            <a href="tel:+917359441042" target="_blank">
              Call
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
