import React from 'react';
import Card from './Card';

const CardsList = (props) => {
  console.log('cardlist', props);

  const { cards } = props;

  const CARDS_LIST = [];

  for (let i = 0; i < cards.length; i++) {
    CARDS_LIST.push(
      <Card
        img={cards[i].image}
        name={cards[i].userName}
        dateOfBirth={cards[i].dateOfBirth}
        country={cards[i].country}
        key={i}
      />,
    );
  }

  return <div className="cards-container">{CARDS_LIST}</div>;
};

export default CardsList;
