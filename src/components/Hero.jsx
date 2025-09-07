import { ArrowRight } from "lucide-react";
import "./Hero.css";

const HERO_BG =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"; // Better plumbing/construction image

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="hero"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(120deg, rgba(37,99,235,0.7) 0%, rgba(30,41,59,0.7) 100%)",
          zIndex: 1,
        }}
      />
      <div
        className="hero-container"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="hero-content">
          <h1
            className="hero-title"
            style={{ color: "#fff", textShadow: "0 2px 16px rgba(0,0,0,0.18)" }}
          >
            Sana Plastic – Wholesale & Retail for Pipes and Bathroom Items
          </h1>
          <p
            className="hero-subtitle"
            style={{ color: "#e0e7ef", fontWeight: 500 }}
          >
            Trusted quality for your home and business needs.
          </p>
          <button onClick={scrollToProducts} className="cta-button">
            View Products <ArrowRight size={20} style={{ marginLeft: 8 }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
