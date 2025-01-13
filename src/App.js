import React from "react";
import ResultsDisplay from "./components/ResultsDisplay";
import ManagerSlider from "./components/ManagerSlider";
import LeagueTable from "./components/LeagueTable";

export default function App() {
  return (
    <main className="main-container">
      <h1 className="main-title">Soccer League Dashboard</h1>
      <LeagueTable />
      <ResultsDisplay />
      <ManagerSlider />
    </main>
  );
}
