import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  if(!id) console.log(`ID is not present ${id}`);

  return (
    <div>
      <h3>Product Details</h3>
      <p>Showing details for product ID: {id}</p>
    </div>
  );
}
