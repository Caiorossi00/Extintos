import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import teams from "../../assets/data/teams.js";
import "swiper/css";
import styled from "styled-components";

const ManagerSliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }

  .swiper {
    width: 100%;
    max-width: 1200px; // Ajuste conforme necessário
    margin: 0 auto;
    min-height: 400px; // Adicionando uma altura mínima para garantir o layout correto
  }
`;

const ManagerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  .manager-image {
    min-width: 400px;
    min-height: 400px;
    max-height: 400px;
    border-radius: 40px;
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
    color: #333;
  }

  p {
    font-size: 16px;
    margin-top: 5px;
    color: #666;
  }
`;

export default function ManagerSlider() {
  const navigate = useNavigate();

  const handleManagerClick = (id) => {
    navigate(`/team/${id}`);
  };

  return (
    <ManagerSliderWrapper>
      <h2>Team Managers</h2>
      <Swiper spaceBetween={50} slidesPerView={1} navigation loop>
        {teams.map((team) => (
          <SwiperSlide key={team.id}>
            <ManagerInfo>
              <img
                src={team.managerPicture}
                alt={team.manager}
                className="manager-image"
                onClick={() => handleManagerClick(team.id)}
              />
              <h3>{team.manager}</h3>
            </ManagerInfo>
          </SwiperSlide>
        ))}
      </Swiper>
    </ManagerSliderWrapper>
  );
}
