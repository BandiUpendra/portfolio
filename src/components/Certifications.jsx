function Certifications() {
  const certificates = [
    "React Development",
    "JavaScript Essentials",
    "Responsive Web Design",
    "Git & GitHub",
  ];

  return (
    <section className="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="certificate-grid">
        {certificates.map((item, index) => (
          <div className="certificate-card" key={index}>
            🏆 {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
