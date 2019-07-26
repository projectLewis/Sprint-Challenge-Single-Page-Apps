import React, { useEffect, useState } from "react";
import axios from "axios";

const LocationList = () => {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(function({ data: { results } }) {
        console.log(results);
        setCharacters(prevlocations => locations);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {/* {locations ? (
        locations.map(location => {
          return (
            <div style={{ border: "1px solid blue" }} key={character.id}>
              <img
                crossOrigin="anonymous"
                src={character.image}
                alt={`${character.name}`}
              />
              <br />
              {character.name}
              <br />
              {character.species} {character.status}
              <br />
              Location: {character.location.name}
              <br />
              Episodes: {character.episode.length}
            </div>
          );
        })
      ) : ( */}
      <h2>Loading...</h2>
      {/* )} */}
    </section>
  );
};

export default LocationList;
