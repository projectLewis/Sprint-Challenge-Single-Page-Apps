import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

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
            <EpisodeCard
              key={episode.id}
              name={episode.name}
              airdate={episode.air_date}
              episodeNumber={episode.episode}
            />
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default EpisodeList;
