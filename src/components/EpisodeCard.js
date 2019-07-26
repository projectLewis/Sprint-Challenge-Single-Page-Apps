import React from "react";
import { Card } from "semantic-ui-react";

const EpisodeCard = ({ name, airdate, episodeNumber }) => {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          {episodeNumber}
          {<br />}
          Aired: {airdate}
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default EpisodeCard;
