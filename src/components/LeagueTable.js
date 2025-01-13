import React, { useState, useEffect } from "react";

export default function LeagueTable() {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const mockStandings = [
      {
        id: 1,
        position: 1,
        name: "Jefferson",
        played: 38,
        won: 29,
        drawn: 6,
        lost: 3,
        goalsFor: 99,
        goalsAgainst: 26,
        goalDifference: 73,
        points: 93,
      },
      {
        id: 2,
        position: 2,
        name: "Caio",
        played: 38,
        won: 28,
        drawn: 8,
        lost: 2,
        goalsFor: 94,
        goalsAgainst: 26,
        goalDifference: 68,
        points: 92,
      },
      {
        id: 3,
        position: 3,
        name: "Lucas",
        played: 38,
        won: 21,
        drawn: 11,
        lost: 6,
        goalsFor: 76,
        goalsAgainst: 33,
        goalDifference: 43,
        points: 74,
      },
      {
        id: 4,
        position: 4,
        name: "Rossi",
        played: 38,
        won: 22,
        drawn: 5,
        lost: 11,
        goalsFor: 69,
        goalsAgainst: 40,
        goalDifference: 29,
        points: 71,
      },
      {
        id: 5,
        position: 5,
        name: "Lorem",
        played: 38,
        won: 22,
        drawn: 3,
        lost: 13,
        goalsFor: 61,
        goalsAgainst: 48,
        goalDifference: 13,
        points: 69,
      },
    ];
    setStandings(mockStandings);
  }, []);

  return (
    <div>
      <h2>League Table</h2>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team) => (
            <tr key={team.id}>
              <td>{team.position}</td>
              <td>{team.name}</td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.drawn}</td>
              <td>{team.lost}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{team.goalDifference}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
