import  { useState } from "react";
import { MapPin, Phone, Mail, Clock, User, Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Get in touch with us for all your plastic and plumbing needs
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Visit Our Store</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} color="#2563eb" />
              </div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>
                  Shani Peth, 277
                  <br />
                  Jalgaon, Maharashtra
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} color="#2563eb" />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91-9876543210</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} color="#2563eb" />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@sanaplastic.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Clock size={24} color="#2563eb" />
              </div>
              <div className="contact-details">
                <h4>Business Hours</h4>
                <p>
                  Monday - Saturday: 9:00 AM - 8:00 PM
                  <br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
              <h4 className="map-title">Find Us Here</h4>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.55085244294366!2d75.57051069491025!3d21.01640212509964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f10626cbc83%3A0xb5f33748603c467f!2sNEW%20SANA%20PLASTIC!5e0!3m2!1sen!2sin!4v1757239309508!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sana Plastic Location - Shani Peth, Jalgaon"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="contact-form-title">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <Send size={18} style={{ marginRight: 8 }} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
