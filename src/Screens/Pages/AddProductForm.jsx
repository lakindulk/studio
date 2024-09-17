import React, { useState } from "react";
import { useFirebaseAuth } from "../../contexts/FirebaseContext";

const AddProductForm = () => {
  const { addProduct, productError, uploadImage } = useFirebaseAuth();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: null, // Add image state
  });
  const [imageUrl, setImageUrl] = useState(""); // State to store image URL

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const url = await uploadImage(file);
        setImageUrl(url); // Set image URL
        setProduct((prev) => ({ ...prev, image: url }));
      } catch (err) {
        console.error("Error uploading image:", err);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({
      name: "",
      category: "",
      price: "",
      description: "",
      image: null,
    });
    setImageUrl(""); // Clear image URL after submission
  };

  return (
    <div>
      <h2>Add Product</h2>
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
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        <br />
        {imageUrl && <img src={imageUrl} alt="Product preview" width="100" />}
        <br />
        <button type="submit">Add Product</button>
      </form>
      {productError && <div>Error: {productError}</div>}
    </div>
  );
};

export default AddProductForm;
