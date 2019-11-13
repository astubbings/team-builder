import React from "react";
import './Card.css';

const Card = props => {
  return (
    <div className="note-list">
      {props.Card.map(note => (
        <div className="note" key={note.id}>
          <h2>{note.name}</h2>
          <h3>{note.email}</h3>
          <h3>{note.role}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;