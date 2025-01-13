import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamDetails from "./Routes/TeamDetails/TeamDetails";
import ManagersRoute from "./Routes/Managers/ManagersRoute";
import Home from "./Routes/Home/Home";

export default function App() {
  return (
    <Router>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/managers" element={<ManagersRoute />} />
          <Route path="/team/:id" element={<TeamDetails />} />
        </Routes>
      </main>
    </Router>
  );
}
