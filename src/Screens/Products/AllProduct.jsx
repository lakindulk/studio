import React  from "react";
import { useFirebaseAuth } from "../../contexts/FirebaseContext";

const AllProduct = () => {
  const { products,productError } = useFirebaseAuth();
  
  if (productError) {
    return <div>Error: {productError}</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                {product.image && <img src={product.image} alt={product.name} width="100" />}
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
              
              </li>
            ))}
    </div>
  );
};

export default AllProduct;
