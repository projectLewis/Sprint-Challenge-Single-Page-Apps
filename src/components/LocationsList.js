import React, { useEffect, useState } from "react";
import axios from "axios";

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
            <div style={{ border: "1px solid blue" }} key={location.id}>
              {location.name}
              <br />
              Planet - {location.dimension}
              <br />
              {location.residents.length}
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default LocationList;
