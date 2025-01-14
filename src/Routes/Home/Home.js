import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import NossosTorneios from "./NossosTorneios";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <NossosTorneios />
      <Feedback />
    </>
  );
};

export default Home;
