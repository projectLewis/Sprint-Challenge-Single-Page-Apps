import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(function({ data: { results } }) {
        console.log(results);
        setCharacters(prevChars => results);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {characters ? (
        characters.map(character => {
          return (
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              species={character.species}
              status={character.status}
              characterLocation={character.location.name}
              episodeQuantity={character.episode.length}
            />
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default CharacterList;
