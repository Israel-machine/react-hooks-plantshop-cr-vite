import React, { useState } from "react";

function PlantCard({ image, name, price }) {
  const [isInStock, setIsInStock] = useState(true)
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={() => setIsInStock(false)}>In Stock</button>
      ) : (
        <button onClick={() => setIsInStock(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
