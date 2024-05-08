import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Importing the ProductCard component
import './main.css'; // Importing the CSS file for styling

function WomensClothing() {
  // Using useState hook to manage the state of women's clothing
  const [womensClothing, setWomensClothing] = useState([]);

  // Fetching women's clothing data from the API and updating state using useEffect
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => setWomensClothing(json));
  }, []);

  // Render the women's clothing page layout
  return (
    <div>
      {/* Heading for women's clothing section */}
      <h2 className='subHeading'>Womens Clothing</h2>
      <div>
        {/* Displaying product cards for women's clothing */}
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {/* Mapping through the women's clothing data to render product cards */}
          {womensClothing.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WomensClothing;