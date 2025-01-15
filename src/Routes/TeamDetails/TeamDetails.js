import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import teams from "../../assets/data/teams";
import "../../assets/scss/teamDetails.scss";

const TeamDetail = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    console.log(id);
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
      <h2>Detalhes do time {team.id}</h2>
      <img src={team.badge} alt={`Badge of ${team.name}`} />
      <h3>Manager: {team.manager}</h3>
      <p>Players: {team.players.join(", ")}</p>
    </div>
  );
};

export default TeamDetail;
