import React from "react";
import ServiceCards from "./ServiceCards";

const Services = () => {
  return (
    <div className="container mx-auto py-20 px-5">
      <section className="md:flex flex-1">
        <ServiceCards title="Collaboration" />
        <ServiceCards title="Security" />
        <ServiceCards title="Analytics"/>
      </section>
    </div>
  );
};

export default Services;
