import React, { useState } from 'react';
import Form from './Form';
import CardsList from './CardsList';

const Home = () => {
  const [cards, setCards] = useState([]);
  return (
    <div>
      <Form cards={cards} setCards={setCards} />
      <CardsList cards={cards} />
    </div>
  );
};

export default Home;
