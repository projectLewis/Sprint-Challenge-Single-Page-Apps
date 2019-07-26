import React from "react";
import { Card, Icon } from "semantic-ui-react";

const LocationCard = ({ name, dimension, residents }) => {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>Planet - {dimension}</Card.Description>
      </Card.Content>
      <Card.Content extra style={{ textAlign: "right" }}>
        <Icon name="user" />
        Residents {residents}
      </Card.Content>
    </Card>
  );
};

export default LocationCard;
