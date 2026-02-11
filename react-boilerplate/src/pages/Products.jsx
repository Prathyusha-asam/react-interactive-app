import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="page">
      <h1>Products Section</h1>

      <p>
        This page demonstrates nested routing using React Router. Each product
        has its own dynamic route.
      </p>

      <ul>
        <li>
          <Link to="/products/1">React Router Demo Product</Link>
        </li>
        <li>
          <Link to="/products/2">Dynamic Route Example</Link>
        </li>
      </ul>

      <p>
        This section showcases how dynamic URL parameters work inside a React
        application.
      </p>
    </div>
  );
}

export default Products;
