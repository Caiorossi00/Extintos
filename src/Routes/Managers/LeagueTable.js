import React from "react";
import groups from "../../assets/data/tabelaManagers";
import "./leagueTable.scss";

const LeagueTable = () => {
  return (
    <div id="container-league-table">
      <h1>Tabela</h1>
      {groups.map((group) => (
        <div key={group.groupId}>
          <h2>Group {group.groupId}</h2>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Vitórias</th>
                <th>Derrotas</th>
                <th>Empates</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              {group.teams
                .sort((a, b) => b.pontos - a.pontos)
                .map((team, index) => (
                  <tr key={index}>
                    <td>{team.name}</td>
                    <td>{team.vitorias}</td>
                    <td>{team.derrotas}</td>
                    <td>{team.empates}</td>
                    <td>{team.pontos}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default LeagueTable;
