import React, { useState, useEffect } from "react";
import { useFirebaseAuth } from "../../contexts/FirebaseContext";

const ProductList = () => {
  const { products, deleteProduct, editProduct, addProduct, productError } = useFirebaseAuth();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [productForm, setProductForm] = useState({
    name: '',
    category: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    if (editProductId) {
      const currentProduct = products.find((p) => p.id === editProductId);
      if (currentProduct) {
        setProductForm(currentProduct);
      }
    }
  }, [editProductId, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editProductId) {
      editProduct(editProductId, productForm);
      setEditProductId(null); // Reset edit state
    } else {
      addProduct(productForm);
    }
    setProductForm({
      name: '',
      category: '',
      price: '',
      description: ''
    });
    setShowAddForm(false);
  };

  const handleEdit = (productId) => {
    setEditProductId(productId);
    setShowAddForm(true);
  };

  if (productError) {
    return <div>Error: {productError}</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      {showAddForm || editProductId ? (
        <div>
          <h2>{editProductId ? "Edit Product" : "Add Product"}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Product Name:
              <input
                type="text"
                value={productForm.name}
                onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                required
              />
            </label>
            <br />
            <label>
              Category:
              <input
                type="text"
                value={productForm.category}
                onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                required
              />
            </label>
            <br />
            <label>
              Price:
              <input
                type="number"
                value={productForm.price}
                onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                required
              />
            </label>
            <br />
            <label>
              Description:
              <textarea
                value={productForm.description}
                onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                required
              />
            </label>
            <br />
            <button type="submit">{editProductId ? "Update Product" : "Add Product"}</button>
            <button type="button" onClick={() => { setEditProductId(null); setShowAddForm(false); }}>
              Cancel
            </button>
          </form>
          {productError && <div>Error: {productError}</div>}
        </div>
      ) : (
        <div>
          <button onClick={() => setShowAddForm(true)}>Add Product</button>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                {product.image && <img src={product.image} alt={product.name} width="100" />}
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductList;
