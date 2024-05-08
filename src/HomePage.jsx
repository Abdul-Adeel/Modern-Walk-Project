import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Importing the ProductCard component
import './main.css'; // Importing the CSS file for styling

function HomePage({ navigateTo }) {
  // Using useState hook to manage the state of men's and women's clothing
  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);

  // Fetching men's clothing data from the API and updating state using useEffect
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=2")
      .then((res) => res.json())
      .then((json) => setMensClothing(json));
  }, []);

  // Fetching women's clothing data from the API and updating state using useEffect
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing?limit=2")
      .then((res) => res.json())
      .then((json) => setWomensClothing(json));
  }, []);

  // Generating interleaved product cards for men's and women's clothing
  const interleavedCards = [];
  for (let i = 0; i < Math.max(mensClothing.length, womensClothing.length); i++) {
    if (mensClothing[i]) {
      interleavedCards.push(<ProductCard key={mensClothing[i].id} product={mensClothing[i]} />);
    }
    if (womensClothing[i]) {
      interleavedCards.push(<ProductCard key={womensClothing[i].id} product={womensClothing[i]} />);
    }
  }

  // Render the homepage layout
  return (
    <div>
      {/* Heading for flash sale section */}
      <h2 className='subHeading'>Flash sale</h2> 
      <div>
        {/* Displaying interleaved product cards */}
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {interleavedCards}
        </ul>
      </div>
      {/* Heading for categories section */}
      <h2 className='subHeading'>Categories</h2>
      <div>
        {/* Button to navigate to men's clothing page */}
        <button onClick={() => navigateTo('mens')} className='button1'>Men's Clothing</button>
        {/* Button to navigate to women's clothing page */}
        <button onClick={() => navigateTo('womens')} className='button2'>Women's Clothing</button>
      </div>
    </div>
  );
}

export default HomePage;