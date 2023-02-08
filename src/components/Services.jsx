import React from "react";
import ServiceCards from "./ServiceCards";

const Services = () => {
  return (
    <div className="container mx-auto py-20">
      <section className="flex">
        <ServiceCards title="Collaboration" />
        <ServiceCards title="Security" />
        <ServiceCards title="Analytics"/>
      </section>
    </div>
  );
};

export default Services;
