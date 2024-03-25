import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const ID = process.env;

    try {
      await emailjs.sendForm(
        ID.REACT_APP_SERVICE_ID || "",
        ID.REACT_APP_TEMPLATE_ID || "",
        form.current,
        ID.REACT_APP_USER_ID || ""
      );

      e.target.reset();
    } catch (error) {
      alert("Error: Message not delivered!");
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>heyome9a@gmail.com</h5>
            <a
              href="mailto:heyome9a@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 9304982636</h5>
            <a
              href="https://api.whatsapp.com/send?phone+919304982636"
              target="_blank"
              rel="noreferrer"
            >
              Send a Massage
            </a>
          </article>
        </div>
        {/* =========== eND OF CONTACT OPTIONS =========== */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
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
