import React from "react";
import "../styles/Note.css";


export default function Prediction({ prediction, onDelete }) {
  const formattedDate = new Date(prediction.submission_date).toLocaleDateString("en-UK");


  return (
    <div className="note-container">
        <h1>ID: {prediction.id}</h1>
      <p className="note-title">player1ID {prediction.player1ID}</p>
      <p className="note-content">player2ID {prediction.player2ID}</p>
      <p className="note-content">player2ID {prediction.match_date}</p>
      <p className="note-content">submission_date {formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(prediction.id)}>
        Delete
      </button>
    </div>
  );
}
