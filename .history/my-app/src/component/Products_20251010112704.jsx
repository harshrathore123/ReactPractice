import { Link, Outlet } from "react-router-dom";

export default function Products() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {/* Link to nested route */}
            {/* {item.name} */}
            <Link to={`/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Nested child route will render here */}
      <Outlet />
    </div>
  );
}
