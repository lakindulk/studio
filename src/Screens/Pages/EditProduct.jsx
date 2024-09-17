import React, { useState, useEffect } from "react";
import { useFirebaseAuth } from "../../contexts/FirebaseContext";

const EditProduct = ({ productId }) => {
  const { products, editProduct, productError } = useFirebaseAuth();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const currentProduct = products.find((p) => p.id === productId);
    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, [products, productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(productId, product);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit">Update Product</button>
      </form>
      {productError && <div>Error: {productError}</div>}
    </div>
  );
};

export default EditProduct;
