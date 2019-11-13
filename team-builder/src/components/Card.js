import React from "react";
import './Card.css';

const Card = props => {
  return (
    <div className="note-list">
      {props.members.map(item => (
        <div className="note" key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <p>{item.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;