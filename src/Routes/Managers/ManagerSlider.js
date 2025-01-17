import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import teams from "../../assets/data/teams.js";
import "./ManagerSlider.scss";

export default function ManagerSlider() {
  const navigate = useNavigate();

  const handleManagerClick = (id) => {
    navigate(`/team/${id}`);
  };

  return (
    <div className="manager-slider-wrapper">
      <h2>Team Managers</h2>
      <Swiper slidesPerView={1} navigation loop>
        {teams.map((team) => (
          <SwiperSlide key={team.id}>
            <div className="manager-info">
              <img
                src={team.managerPicture}
                alt={team.manager}
                className="manager-image"
                onClick={() => handleManagerClick(team.id)}
              />
              <div className="card-text">
                <h3>{team.manager}</h3>
                <div className="team-details">
                  <img src={team.badge} alt="team-badge" />
                  <p>{team.name}</p>
                </div>
                <p>{team.estadio}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
