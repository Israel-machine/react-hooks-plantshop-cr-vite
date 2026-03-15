import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {
  const [plantName, setPlantName] = useState("")
  const [plantImage, setPlantImage] = useState("")
  const [plantPrice, setPlantPrice] = useState(0)

  function handleEntry(e) {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: plantName,
        image: plantImage,
        price: plantPrice
      })
    }
    ).then(response => response.json())
      .then(newPlant => setPlants([...plants, newPlant]))
      .catch((e) => console.log(e))
  }

  function newName(event) {
    setPlantName(event.target.value)
  };

  function newImage(event) {
    setPlantImage(event.target.value)
  };

  function newPrice(event) {
    setPlantPrice(event.target.value)
  };


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" onChange={(event) => newName(event)} />
        <input type="text" name="image" placeholder="Image URL" onChange={(event) => newImage(event)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(event) => newPrice(event)} />
        <button type="submit" onClick={(e) => handleEntry(e)}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
