import React from "react";
import ServiceCards from "./ServiceCards";

const Services = () => {
  return (
    <div className="md:w-auto container mx-auto py-20 px-5">
      <section className="md:flex">
        <ServiceCards title="Collaboration" />
        <ServiceCards title="Security" />
        <ServiceCards title="Analytics"/>
      </section>
    </div>
  );
};

export default Services;
