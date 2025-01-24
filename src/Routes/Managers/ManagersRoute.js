import React from "react";
import ManagerGrid from "./ManagerGrid";
import LeagueTable from "./LeagueTable";
import ManagerArea from "./ManagerArea";

const ManagersRoute = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <ManagerGrid />
      <LeagueTable />
      <ManagerArea />
    </div>
  );
};

export default ManagersRoute;
