import React from "react";

const ServiceCards = (props) => {
  return (
    <div className="md:w-1/3 p-5">
      <div className="bg-transparent border p-6 rounded-xl space-y-4">
        <div className="">{props.image}</div>
        <h1 className="text-xl font-bold">{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et
        </p>
      </div>
    </div>
  );
};

export default ServiceCards;
