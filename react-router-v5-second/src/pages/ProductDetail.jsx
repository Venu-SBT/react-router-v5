import { useParams } from "react-router-dom";

const ProductDetail = () => { 
  const params = useParams();     // An object with key value pairs
  console.log(params.productId);  // my-domain/product-detail/<anything>
  return (
    <section>
        <h1>Product Details</h1>
        <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;