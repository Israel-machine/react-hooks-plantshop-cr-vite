import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => console.log(data))
  },[]);

  
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
