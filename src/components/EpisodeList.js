import React, { useEffect, useState } from "react";
import axios from "axios";

const EpisodeList = () => {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(function({ data: { results } }) {
        console.log(results);
        setEpisodes(prevEpisodes => results);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {episodes ? (
        episodes.map(episode => {
          return (
            <div style={{ border: "1px solid blue" }} key={episode.id}>
              Episode: {episode.name}
              <br />
              Aired: {episode.air_date}
              <br />
              Episode Number: {episode.episode}
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default EpisodeList;
