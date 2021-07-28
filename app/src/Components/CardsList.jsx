import React from 'react';
import Card from "./Card";
import faker from "faker";

const CardsList = () => {


    let cards_list = []

    const createUser = () => {
        return {
            name: faker.name.findName(),
            email: faker.internet.email(),
            address: faker.address.streetAddress(),
            bio: faker.lorem.sentence(),
            image: faker.image.avatar(),
        };
    };



    for (let i=0; i <12; i++){
        const user = createUser()
        cards_list.push(
            <Card
                img = {user.image}
                name = {user.name}
                email = {user.email}
                bio = {user.bio}
                key = {i}
            />
        )
    }

    return (
        <div className="cards-container">
            {cards_list}
        </div>
    );
};

export default CardsList;
