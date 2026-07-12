import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ownoyei",
        "template_1g29due",
        form.current,
        "9Eayu_KLOwnnzc9T1",
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.error(error);
      });
  };

  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>

      <p>Have a project or opportunity? Feel free to reach out.</p>

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

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Connect With Me</h2>

          <p>📧 bandiupendrabandi@gmail.com</p>
          <p>💻 github.com/yourusername</p>
          <p>💼 linkedin.com/in/yourusername</p>
          <p>📍 India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
