import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import NossosTorneios from "./NossosTorneios";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <NossosTorneios />
    </>
  );
};

export default Home;
