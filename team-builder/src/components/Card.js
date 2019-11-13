import React from "react";
import './Card.css';

const Card = props => {
  return (
    <div className="cardList">
      {props.members.map(item => (
        <div className="cardStyle" key={item.id}>
          <h2>{item.userName}</h2>
          <p>{item.email}</p>
          <p>{item.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;