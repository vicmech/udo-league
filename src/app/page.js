import PositionsTable from "./components/home/PositionsTable";
import Results from "./components/home/Results";
import Header from "./components/home/Header";
import React from "react";
import Welcome from "./components/home/Welcome";
import Sponsors from "./components/home/Sponsors";
import Teams from "./components/home/Teams";

export default function Home() {
  return (
    <React.Fragment class='snap-y'>
      <div class='h-full'>
        <Header/>
        <Welcome/>
        <Results/>
      </div>
      <PositionsTable class='snap-start'/>
      <Teams class='snap-start'/>
      <Sponsors/>
    </React.Fragment>
  );
}
