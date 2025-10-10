import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h3>Product Details</h3>
      <p>Showing details for product ID: {id}</p>
    </Outlet>
    </div>
    
  );
}
