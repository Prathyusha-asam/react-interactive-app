import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

  const products = {
    1: {
      title: "React Router Demonstration",
      description:
        "This product showcases nested routing and dynamic URL parameters using React Router.",
      features: [
        "Dynamic route handling",
        "useParams hook usage",
        "Reusable component structure",
      ],
    },
    2: {
      title: "State Management Demo",
      description:
        "This section explains how state is managed using React Hooks like useState.",
      features: [
        "useState implementation",
        "Interactive UI updates",
        "Component re-rendering",
      ],
    },
  };

  const product = products[productId];

  if (!product) {
    return (
      <div className="page">
        <h1>Product Not Found</h1>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <h3>Key Features:</h3>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <Link to="/products">⬅ Back to Products</Link>
    </div>
  );
}

export default ProductDetails;
