import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import teams from "../../assets/data/teams.js";
import "../../assets/css/ManagerSlider.scss";

export default function ManagerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextManager = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
  };

  const prevManager = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teams.length) % teams.length
    );
  };

  const handleManagerClick = (id) => {
    navigate(`/team/${id}`);
  };

  const currentManager = teams[currentIndex];

  return (
    <div>
      <h2>Team Managers</h2>
      <div className="manager-slider">
        <button onClick={prevManager}>Previous</button>
        <div className="manager-info">
          <img
            src={currentManager.managerPicture}
            alt={currentManager.name}
            className="manager-image"
            onClick={() => handleManagerClick(currentManager.id)}
          />
          <h3>{currentManager.name}</h3>
          <p>{currentManager.team}</p>
        </div>
        <button onClick={nextManager}>Next</button>
      </div>
    </div>
  );
}
