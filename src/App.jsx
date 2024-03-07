import React from "react";
import NavBar from "./Components/NavbarLike/NavBar";
import Crawler from "./Components/NavbarLike/Crawler";
import MainCard from "./Components/MainCard";
import Analysis from "./Components/StockDetails/Analysis";
import Performance from "./Components/StockDetails/Performance";
import Sentiment from "./Components/Sentiment/Sentiment";
import About from "./Components/About/About";
import Tokenomics from "./Components/Static/Tokenomics";
import Team from "./Components/Static/Team";
import YouMayLike from "./Components/Recomendations/Recommend";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-[1200px] m-auto">
        <Crawler />
        <MainCard />
        <Analysis />
        <Performance />
        <Sentiment />
        <About />
        <Tokenomics />
        <Team />
      </div>
      <YouMayLike />
    </>
  );
};

export default App;
