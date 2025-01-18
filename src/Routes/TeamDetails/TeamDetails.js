import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import teams from "../../assets/data/teams";
import "../../assets/scss/teamDetails.scss";

const TeamDetail = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const selectedTeam = teams.find((team) => team.id === parseInt(id));
    if (selectedTeam) {
      setTeam(selectedTeam);
    }
  }, [id]);

  if (!team) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="team-detail">
      <div className="container-left-team card">
        <div className="team-header">
          <img
            src={team.badge}
            alt={`Badge of ${team.name}`}
            className="team-badge"
          />
          <h1 className="team-name">{team.name}</h1>
        </div>
        <div className="team-info">
          <p>
            <strong>Saldo: $</strong>
            {team.saldo}
          </p>
          <p>
            <strong>Valorização: $</strong>
            {team.valorizacao}
          </p>
          <p>
            <strong>Avaliação:</strong> {team.avaliacao}
          </p>
          <p>
            <strong>Texto:</strong> {team.texto}
          </p>
        </div>
      </div>
      <div className="team-players">
        {team.players.map((player, index) => (
          <div key={index} className="player-card">
            <div>
              <h3>{player.nomeJogador}</h3>
              <p>
                <strong>Posição:</strong> {player.roleJogador}
              </p>
              <p>
                <strong>Valor:</strong> {player.valorJogador}
              </p>
            </div>
            <p className="valorizacao-player">
              <strong>
                +<span>{player.valorizacaoJogador}</span>
              </strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDetail;
