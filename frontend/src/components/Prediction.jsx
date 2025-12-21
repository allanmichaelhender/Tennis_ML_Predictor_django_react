import React from "react";
import "../styles/Note.css";

export default function Prediction({ prediction, onDelete }) {
  const formattedDate = new Date(prediction.submission_date).toLocaleDateString(
    "en-UK"
  );

  return (
    <div className="note-container">
      <h1>ID: {prediction.id}</h1>
      <p className="note-title">player1_id {prediction.player1_id}</p>
      <p className="note-content">player2_id {prediction.player2_id}</p>
      <p className="note-content">match_date {prediction.match_date}</p>
      <p className="note-content">submission_date {formattedDate}</p>
      {/* <p className="note-content">submission_date {prediction.submission_date}</p> */}
      <button className="delete-button" onClick={() => onDelete(prediction.id)}>
        Delete
      </button>
    </div>
  );
}
