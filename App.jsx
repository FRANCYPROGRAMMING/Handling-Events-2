import React from 'react';
import './App.css'; 
import image from './Ilrefanciullo.jpg'; 

function MyButton() {
  const handleClick = () => {
    console.log('Nome del bottone');
  };

  const handleImageClick = (event) => {
    event.stopPropagation(); 
    console.log(event.target.src); 
  };

  return (
    <button className="my-button" onClick={handleClick} name="myButton">
      <div className="image-container">
        <img 
          src={image} 
          alt="Benvenuti nell'antico Egitto"
          onClick={handleImageClick}
        />
        <span className="image-description">Benvenuti nell'antico Egitto</span>
      </div>
    </button>
  );
}

export default MyButton;