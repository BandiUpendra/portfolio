import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.log(error);
      });
  };

  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>

      <p>Let's work together! Feel free to send me a message.</p>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="send-message-button">
            <FaTelegramPlane className="send-icon" />
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h2>Contact Information</h2>

          <p>📧 bandiupendrabandi@gmail.com</p>

          <p>💻 github.com/BandiUpendra</p>

          <p>💼 linkedin.com/in/YOUR-LINKEDIN</p>

          <p>📍 India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
