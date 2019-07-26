import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CharacterCard = ({
  image,
  name,
  species,
  status,
  characterLocation,
  episodeQuantity
}) => {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          {species} {status}
        </Card.Meta>
        <Card.Description>Location: {characterLocation}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        Episodes {episodeQuantity}
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
