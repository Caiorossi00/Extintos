import React from "react";
import { useNavigate } from "react-router-dom";
import teams from "../../assets/data/teams.js";
import "./ManagerGrid.scss";

export default function ManagerGrid() {
  const navigate = useNavigate();

  const handleManagerClick = (id) => {
    navigate(`/team/${id}`);
  };

  return (
    <div id="container-manager-grid">
      <div className="manager-explained">
        <div className="manager-details">
          <h1>Managers</h1>
          <p>Como Jogar</p>
        </div>
        <div className="manager-explanation">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>

      <div id="container-display-managers">
        {teams.map((team) => (
          <div
            key={team.id}
            className="manager-card"
            onClick={() => handleManagerClick(team.id)}
          >
            <img
              src={team.managerPicture}
              alt={team.manager}
              className="manager-image"
            />
            <div className="manager-info">
              <h3>{team.manager}</h3>
              <div className="team-details">
                {/* <img src={team.badge} alt={`${team.name} badge`} /> */}
                <p>{team.name}</p>
              </div>
              <p>{team.estadio}</p>
            </div>
          </div>
        ))}
      </div>

      <div id="table-managers"></div>
    </div>
  );
}
