import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3 className="product-title">{product.title}</h3>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className={product.category === "men's clothing" ? "mens-clothing" : "womens-clothing"}>
        <p className="product-price">Rs. {product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;