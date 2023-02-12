import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";

const LandingPage = () => {
  return (
    <div className="bg-neutral-900 bg-cover text-gray-200 h-full font-poppins">
      <div className="sticky top-0 z-30 w-full backdrop-filter bg-neutral-900 bg-opacity-10 backdrop-blur-md">
        <Header />
      </div>
      <Hero />
      <Services />
      <Pricing />
      <footer className="bg-gray-900 text-center text-gray-500 py-10">
        <p>&copy; My Enterprise App 2023</p>
      </footer>
    </div>
  );
};

export default LandingPage;
