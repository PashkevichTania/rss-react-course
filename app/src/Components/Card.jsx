import React from 'react';

const Card = (props) => {
  const { img, name, dateOfBirth, country } = props;

  return (
    <div className="card">
      <img src={img} alt="Person" className="card__image" />
      <p className="card__name">{name}</p>
      <div className="grid-container">
        <div className="grid-child-posts">{country}</div>
        <div className="grid-child-followers">{dateOfBirth}</div>
      </div>
      <button className="btn draw-border" type="button">Follow</button>
      <button className="btn draw-border" type="button">Message</button>
    </div>
  );
};

export default Card;
