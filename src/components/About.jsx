import { Store, CheckCircle, Users, Truck } from "lucide-react";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: <Store size={32} color="#2563eb" />,
      title: "Established Store",
      description:
        "Located in the heart of Shani Peth, serving the community for years",
    },
    {
      icon: <CheckCircle size={32} color="#2563eb" />,
      title: "Quality Products",
      description:
        "High-quality pipes, fittings, and bathroom accessories from trusted brands",
    },
    {
      icon: <Users size={32} color="#2563eb" />,
      title: "Wholesale & Retail",
      description:
        "Catering to both individual customers and bulk business requirements",
    },
    {
      icon: <Truck size={32} color="#2563eb" />,
      title: "Quick Service",
      description:
        "Fast delivery and responsive customer service for all your needs",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Sana Plastic</h2>
            <p className="about-description">
              Sana Plastic is a trusted wholesale and retail store providing
              high-quality pipes, bathroom fittings, and accessories. We are
              located in Shani Peth and serve both businesses and households
              with reliable products and exceptional service.
            </p>
            <p className="about-description">
              With years of experience in the industry, we understand the
              importance of quality materials for your construction and plumbing
              needs. Our extensive inventory includes PVC pipes, CPVC pipes,
              bathroom taps, couplings, and various other accessories to meet
              all your requirements.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
              alt="Quality Plumbing Materials"
              className="about-main-image"
            />
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
