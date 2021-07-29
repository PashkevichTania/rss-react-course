import React from 'react';

const Card = (props) => {
  console.log('image:', props);

  const { img, name, email } = props;

  return (
    <div className="card">
      <img src={img} alt="Person" className="card__image" />
      <p className="card__name">{name}</p>
      <p>{email}</p>
      <div className="grid-container">
        <div className="grid-child-posts">156 Post</div>
        <div className="grid-child-followers">1012 Likes</div>
      </div>
      <button className="btn draw-border" type="button">Follow</button>
      <button className="btn draw-border" type="button">Message</button>
    </div>
  );
};

export default Card;
