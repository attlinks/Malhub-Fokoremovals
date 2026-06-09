import React from "react";

import Hero from "../components/Hero";
import Offer from "../components/Offer";
import Motor from "../components/Motor";
import About from "../components/About";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Offer />
      <Motor />
      <About />
      <WhyUs />
    </div>
  );
};

export default Home;
