import React from 'react';
import faker from 'faker';
import Card from './Card';

const CardsList = () => {
  const CARDS_LIST = [];

  const createUser = () => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    bio: faker.lorem.sentence(),
    image: faker.image.avatar(),
  });

  for (let i = 0; i < 12; i++) {
    const user = createUser();
    CARDS_LIST.push(
      <Card
        img={user.image}
        name={user.name}
        email={user.email}
        bio={user.bio}
        key={i}
      />,
    );
  }

  return <div className="cards-container">{CARDS_LIST}</div>;
};

export default CardsList;
