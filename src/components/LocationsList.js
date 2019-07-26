import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

const LocationList = () => {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(({ data: { results } }) => {
        console.log(results);
        setLocations(prevlocations => results);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="location-list grid-view">
      {locations ? (
        locations.map(location => {
          return (
            <LocationCard
              key={location.id}
              name={location.name}
              dimension={location.dimension}
              residents={location.residents.length}
            />
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default LocationList;
