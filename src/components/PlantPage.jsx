import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]); // sets default plants to []
  const [search, setSearch] = useState(""); // sets default search term to ""

  // first pass - does nothing -- it only defines the function
  function handleData() {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => {
        setPlants(data);
      })
      .catch(error => console.log('Error fetching data:', error));
  }

  // then we do something
  useEffect(() => {
    // runs inside here
    handleData();
    // based on this array (dependency array)
    // when empty, only runs on mount
    // runs functions inside when things change in dependency array
  }, []);//can be a function, usually linked to state variable (useful when you want to run when state var changes)

  const filteredPlants = plants.filter((plant) => {
    const hasPlantName = plant.name
    if (hasPlantName){
      const lowerCasePlantName = plant.name.toLowerCase()
      const lowerCaseSearch = search.toLowerCase()
      if(lowerCasePlantName.includes(lowerCaseSearch)){
        return plant
      }
    }
    
    // return plant.name && plant.name.toLowerCase().includes(search.toLowerCase());
  })


  return (
    <main>
      <NewPlantForm setPlants={setPlants} plants={plants} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
