import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import NossosTorneios from "./NossosTorneios";
import Feedback from "./Feedback";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <NossosTorneios />
      <Feedback />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Home;
