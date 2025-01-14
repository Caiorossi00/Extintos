import React from "react";
import feedbacks from "../../assets/data/feedback";
import "../../assets/scss/feedback.scss";

const Feedback = () => {
  return (
    <div id="container-feedbacks">
      <h1>Feedbacks</h1>
      <div className="feedback-list">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-card">
            <img
              src={feedback.foto}
              alt={`Foto de ${feedback.nome}`}
              className="feedback-foto"
            />
            <h2 className="feedback-nome">{feedback.nome}</h2>
            <p className="feedback-texto">{feedback.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
