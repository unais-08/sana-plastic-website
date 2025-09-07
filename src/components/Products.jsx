import { ShoppingCart } from "lucide-react";
import "./Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "PVC Pipes",
      description:
        "High-quality PVC and CPVC pipes for all your plumbing needs. Available in various sizes and specifications.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80", // PVC pipes
    },
    {
      id: 2,
      title: "Bathroom Taps",
      description:
        "Modern and durable bathroom fittings including taps, faucets, and water outlets for homes and businesses.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80", // Bathroom tap
    },
    {
      id: 3,
      title: "Pipe Couplings",
      description:
        "Reliable pipe couplings and connectors to ensure leak-proof joints and seamless plumbing connections.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80", // Pipe fittings
    },
    {
      id: 4,
      title: "Plumbing Accessories",
      description:
        "Complete range of plumbing accessories including elbows, tees, reducers, and other essential fittings.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80", // Plumbing tools/accessories
    },
    {
      id: 5,
      title: "Water Tank Fittings",
      description:
        "Durable tank fittings, outlets, and valves for water storage systems. Perfect for residential and commercial use.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80", // Water tank/plumbing
    },
    {
      id: 6,
      title: "Drainage Systems",
      description:
        "Complete drainage solutions including floor drains, channel drains, and waste management systems.",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80", // Drainage/construction
    },
  ];

  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Our Products</h2>
          <p className="products-subtitle">
            Comprehensive range of high-quality plastic products for your
            construction and plumbing needs
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} loading="lazy" />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <button className="product-button">
                  <ShoppingCart size={18} style={{ marginRight: 8 }} />
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
