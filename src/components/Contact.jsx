function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>

      <p>Have a project or opportunity? Feel free to reach out.</p>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea rows="6" placeholder="Your Message"></textarea>

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
