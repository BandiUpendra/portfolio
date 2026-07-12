import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Modern websites using React.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Mobile-friendly websites.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI Design",
      desc: "Clean and attractive interfaces.",
    },
  ];

  return (
    <section className="services">
      <h2 className="section-title">Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
