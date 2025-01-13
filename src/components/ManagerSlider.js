import React, { useState } from "react";
import "../assets/css/ManagerSlider.scss";

const managers = [
  {
    id: 1,
    name: "Nome do Time",
    team: "Jefferson",
    image:
      "https://aquatividade.com.br/wp-content/uploads/2023/12/Bagre-Africano.jpg",
  },
  {
    id: 2,
    name: "Nome do Time",
    team: "Caio",
    image:
      "https://aquatividade.com.br/wp-content/uploads/2023/12/Bagre-Africano.jpg",
  },
  {
    id: 3,
    name: "Thomas Tuchel",
    team: "Lucas",
    image:
      "https://aquatividade.com.br/wp-content/uploads/2023/12/Bagre-Africano.jpg",
  },
  {
    id: 4,
    name: "Mikel Arteta",
    team: "Rossi",
    image:
      "https://aquatividade.com.br/wp-content/uploads/2023/12/Bagre-Africano.jpg",
  },
];

export default function ManagerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextManager = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % managers.length);
  };

  const prevManager = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + managers.length) % managers.length
    );
  };

  const currentManager = managers[currentIndex];

  return (
    <div>
      <h2>Team Managers</h2>
      <div className="manager-slider">
        <button onClick={prevManager}>Previous</button>
        <div className="manager-info">
          <img
            src={currentManager.image}
            alt={currentManager.name}
            className="manager-image"
          />
          <h3>{currentManager.name}</h3>
          <p>{currentManager.team}</p>
        </div>
        <button onClick={nextManager}>Next</button>
      </div>
    </div>
  );
}
