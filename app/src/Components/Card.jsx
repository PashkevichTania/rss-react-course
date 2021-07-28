import React from 'react';


const Card = (props) => {
    console.log('image:', props)

    return (

            <div className="card">
                <img
                    src={props.img}
                    alt="Person" className="card__image" />
                    <p className="card__name">{props.name}</p>
                    <div className="grid-container">
                        <div className="grid-child-posts">
                            156 Post
                        </div>

                        <div className="grid-child-followers">
                            1012 Likes
                        </div>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-codepen"></i></a></li>
                    </ul>
                    <button className="btn draw-border">Follow</button>
                    <button className="btn draw-border">Message</button>
            </div>

    );
};

export default Card;
