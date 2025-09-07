import  { useState } from "react";
import { Home, Boxes, Info, Mail, Menu } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Sana Plastic</h2>
        </div>

        <nav
          className={`nav ${isMenuOpen ? "nav-open" : ""}`}
          aria-label="Main Navigation"
        >
          <ul className="nav-list">
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("home")}
                className="nav-link"
                aria-label="Home"
              >
                <Home size={20} style={{ marginRight: 8 }} /> Home
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("products")}
                className="nav-link"
                aria-label="Products"
              >
                <Boxes size={20} style={{ marginRight: 8 }} /> Products
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link"
                aria-label="About"
              >
                <Info size={20} style={{ marginRight: 8 }} /> About
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link"
                aria-label="Contact"
              >
                <Mail size={20} style={{ marginRight: 8 }} /> Contact
              </button>
            </li>
          </ul>
        </nav>

        <div
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Open Menu"
        >
          <Menu size={28} color="#2563eb" />
        </div>
      </div>
    </header>
  );
};

export default Header;
