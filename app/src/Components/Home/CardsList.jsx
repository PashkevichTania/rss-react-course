import React from "react";
import Card from "./Card";

const CardsList = (props) => {
  const { cards } = props;

  const cardsList = [];

  for (let i = 0; i < cards.length; i++) {
    cardsList.push(
      <Card
        img={cards[i].image}
        name={cards[i].userName}
        dateOfBirth={cards[i].dateOfBirth}
        country={cards[i].country}
        key={i}
      />
    );
  }

  return <div className="cards-container">{cardsList}</div>;
};

export default CardsList;
