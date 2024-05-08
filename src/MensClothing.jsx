import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Importing the ProductCard component
import './main.css'; // Importing the CSS file for styling

function MensClothing() {
  // Using useState hook to manage the state of men's clothing
  const [mensClothing, setMensClothing] = useState([]);

  // Fetching men's clothing data from the API and updating state using useEffect
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => setMensClothing(json));
  }, []);

  // Render the men's clothing page layout
  return (
    <div>
      {/* Heading for men's clothing section */}
      <h2 className='subHeading'>Mens Clothing</h2>
      <div>
        {/* Displaying product cards for men's clothing */}
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {/* Mapping through the men's clothing data to render product cards */}
          {mensClothing.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MensClothing;