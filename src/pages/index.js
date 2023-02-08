import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "@/components/Services";

const LandingPage = () => {
  return (
    <div className="bg-neutral-900 bg-cover text-gray-200 h-full font-poppins">
      <div className="sticky top-0 z-30 w-full backdrop-filter backdrop-blur-sm bg-opacity-10">
        <Header />
      </div>
      <Hero />
      <Services />
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-200 mb-5">Pricing</h2>
          <div className="flex">
            <div className="w-1/3 px-5 text-center">
              <div className="bg-gray-900 p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-gray-200">Starter</h3>
                <p className="text-gray-500 mb-3">For small teams</p>
                <p className="text-5xl font-bold text-blue-500 mb-5">$50</p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-gray-200 py-2 px-4 rounded"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-1/3 px-5 text-center">
              <div className="bg-gray-900 p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-gray-200">Business</h3>
                <p className="text-gray-500 mb-3">For growing businesses</p>
                <p className="text-5xl font-bold text-blue-500 mb-5">$100</p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-gray-200 py-2 px-4 rounded"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-1/3 px-5 text-center">
              <div className="bg-gray-900 p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-gray-200">
                  Enterprise
                </h3>
                <p className="text-gray-500 mb-3">For large enterprises</p>
                <p className="text-5xl font-bold text-blue-500 mb-5">$200</p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-gray-200 py-2 px-4 rounded"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-center text-gray-500 py-10">
        <p>&copy; My Enterprise App 2023</p>
      </footer>
    </div>
  );
};

export default LandingPage;
