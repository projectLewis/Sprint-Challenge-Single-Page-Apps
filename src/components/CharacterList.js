import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(function({ data: { results } }) {
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
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
}
