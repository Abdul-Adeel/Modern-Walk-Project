import React, { useState } from 'react';
import HomePage from './HomePage'; // Importing the HomePage component
import MensClothing from './MensClothing'; // Importing the MensClothing component
import WomensClothing from './WomensClothing'; // Importing the WomensClothing component
import './main.css'; // Importing the CSS file for styling

function App() {
  // Using useState hook to manage the current page state
  const [currentPage, setCurrentPage] = useState('home');

  // Function to navigate to different pages
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  let pageContent; // Declaring a variable to hold the content of the current page
  // Switch statement to determine which component to render based on the currentPage state
  switch (currentPage) {
    case 'home':
      // Render the HomePage component with a prop to navigate to other pages
      pageContent = <HomePage navigateTo={navigateTo} />;
      break;
    case 'mens':
      // Render the MensClothing component with a prop to navigate to other pages
      pageContent = <MensClothing navigateTo={navigateTo} />;
      break;
    case 'womens':
      // Render the WomensClothing component with a prop to navigate to other pages
      pageContent = <WomensClothing navigateTo={navigateTo} />;
      break;
    default:
      // Render the HomePage component if the currentPage is not recognized
      pageContent = <HomePage navigateTo={navigateTo} />;
  }

  // Render the application layout
  return (
    <div>
      {/* Header with a clickable title to navigate to the home page */}
      <h1 onClick={() => setCurrentPage('home')} className='heading'>Modern Walk</h1>
      {/* Render the content of the current page */}
      {pageContent}
    </div>
  );
}

export default App;