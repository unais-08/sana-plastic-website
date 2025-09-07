import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Facebook,
  Instagram,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Sana Plastic</h3>
            <p className="footer-description">
              Your trusted partner for wholesale and retail plastic products,
              pipes, and bathroom fittings in Shani Peth, Jalgaon.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Our Products</h4>
            <ul className="footer-links">
              <li>PVC Pipes</li>
              <li>Bathroom Taps</li>
              <li>Pipe Couplings</li>
              <li>Plumbing Accessories</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <p>
                <MapPin size={16} style={{ marginRight: 8 }} /> Shani Peth, 277,
                Jalgaon
              </p>
              <p>
                <Phone size={16} style={{ marginRight: 8 }} /> +91-9876543210
              </p>
              <p>
                <Mail size={16} style={{ marginRight: 8 }} />{" "}
                info@sanaplastic.com
              </p>
              <p>
                <Clock size={16} style={{ marginRight: 8 }} /> Mon-Sat: 9AM-8PM
              </p>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Sana Plastic. All rights reserved.
            </p>
            <button onClick={scrollToTop} className="back-to-top">
              <ArrowUp size={16} style={{ marginRight: 4 }} /> Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
