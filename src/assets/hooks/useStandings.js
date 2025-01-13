// src/hooks/useStandings.ts
import { useState, useEffect } from "react";

export function useStandings() {
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
    ];
    setStandings(mockStandings);
  }, []);

  return standings;
}
