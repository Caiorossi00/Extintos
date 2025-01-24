import React from "react";
import "./managerArea.scss";

const ManagerArea = () => {
  const playersMarket = [
    {
      id: 1,
      name: "Jogador 1",
      position: "Atacante",
      team: "Sem Clube",
      price: "R$ 15M",
    },
    {
      id: 2,
      name: "Jogador 2",
      position: "Meio-campo",
      team: "Sem Clube",
      price: "R$ 10M",
    },
    {
      id: 3,
      name: "Jogador 3",
      position: "Defensor",
      team: "Sem Clube",
      price: "R$ 12M",
    },
  ];

  const latestTransfers = [
    {
      id: 1,
      player: "Jogador 5",
      position: "Atacante",
      fromTeam: "Time A",
      toTeam: "Time B",
      transferPrice: "R$ 20M",
    },
    {
      id: 2,
      player: "Jogador 6",
      position: "Meio-campo",
      fromTeam: "Time C",
      toTeam: "Time D",
      transferPrice: "R$ 15M",
    },
    {
      id: 3,
      player: "Jogador 7",
      position: "Defensor",
      fromTeam: "Time E",
      toTeam: "Time F",
      transferPrice: "R$ 10M",
    },
  ];

  return (
    <div id="manager-area">
      <h1>Mercado da Bola</h1>

      <div id="market">
        <h2>Jogadores Disponíveis</h2>
        <div className="player-list">
          {playersMarket.map((player) => (
            <div className="player-card" key={player.id}>
              <p>
                <strong>{player.name}</strong>
              </p>
              <p>Posição: {player.position}</p>
              <p>Time: {player.team}</p>
              <p>Preço: {player.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="latest-transfers">
        <h2>Últimas Transferências</h2>
        <div className="transfer-list">
          {latestTransfers.map((transfer) => (
            <div className="transfer-card" key={transfer.id}>
              <p>
                <strong>{transfer.player}</strong> ({transfer.position})
              </p>
              <p>De: {transfer.fromTeam}</p>
              <p>Para: {transfer.toTeam}</p>
              <p>Preço: {transfer.transferPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagerArea;
