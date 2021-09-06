import React, { useState } from "react";
import faker from "faker";
import Form from "./Form";
import CardsList from "./CardsList";

const Home = () => {
  const userInfo = [
    {
      image: faker.image.avatar(),
      userName: "John Doe 1",
      dateOfBirth: "10.05.2000",
      country: "USA",
      data: true,
      promotions: true,
    },
    {
      image: faker.image.avatar(),
      userName: "John Doe 2",
      dateOfBirth: "10.05.2000",
      country: "USA",
      data: true,
      promotions: true,
    },
    {
      image: faker.image.avatar(),
      userName: "John Doe 3",
      dateOfBirth: "10.05.2000",
      country: "USA",
      data: true,
      promotions: true,
    },
  ];

  const [cards, setCards] = useState(userInfo);

  return (
    <div>
      <Form cards={cards} setCards={setCards} />
      <CardsList cards={cards} />
    </div>
  );
};

export default Home;
