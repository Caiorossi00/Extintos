import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamDetails from "./Routes/TeamDetails/TeamDetails";
import ManagersRoute from "./Routes/Managers/ManagersRoute";
import Navbar from "./Routes/Home/Navbar";
import Footer from "./Routes/Home/Footer";
import LeagueTable from "./Routes/Managers/LeagueTable";
import ManagerArea from "./Routes/Managers/ManagerArea";

export default function App() {
  return (
    <Router>
      <main className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<ManagersRoute />} />
          <Route path="/managers" element={<ManagersRoute />} />
          <Route path="/tabela" element={<LeagueTable />} />
          <Route path="/mercado" element={<ManagerArea />} />
          <Route path="/team/:id" element={<TeamDetails />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
