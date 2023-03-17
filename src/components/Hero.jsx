import React from "react";

const Hero = () => {
  return (
    <div className="md:w-auto">
      <section className="container mx-auto py-20 px-5">
        <h1 className="text-5xl pt-10">Streamline your</h1>
        <h1 className="text-5xl py-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-300">Dev Workflow</h1>
        <h1 className="py-10">
          This Client will really change your development workflow. Integrate
          with the tool you love
        </h1>
        <div className="flex md:w-2/5 space-x-3 py-6">
          <a
            className="bg-white border hover:border-blue-700 md:text-xl text-black py-2 px-4 rounded-full"
            href="#"
          >
            Download
          </a>
          <a
            className="bg-transparent border hover:border-blue-700 md:text-xl text-white py-2 px-4 rounded-full"
            href="#"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
