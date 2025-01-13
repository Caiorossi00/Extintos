import React, { useState, useEffect } from "react";

export default function ResultsDisplay() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const mockResults = [
      {
        id: 1,
        homeTeam: "Caio",
        awayTeam: "Jefferson",
        homeScore: 2,
        awayScore: 1,
        date: "2023-05-01",
      },
      {
        id: 2,
        homeTeam: "Lucas",
        awayTeam: "Rossi",
        homeScore: 0,
        awayScore: 0,
        date: "2023-05-02",
      },
      {
        id: 3,
        homeTeam: "Lorem",
        awayTeam: "Ipsum",
        homeScore: 3,
        awayScore: 2,
        date: "2023-05-03",
      },
      {
        id: 4,
        homeTeam: "Simet",
        awayTeam: "Dolor",
        homeScore: 1,
        awayScore: 1,
        date: "2023-05-04",
      },
    ];
    setResults(mockResults);
  }, []);

  return (
    <div>
      <h2>Recent Results</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Home Team</th>
            <th>Score</th>
            <th>Away Team</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.date}</td>
              <td>{result.homeTeam}</td>
              <td>
                {result.homeScore} - {result.awayScore}
              </td>
              <td>{result.awayTeam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
