import React from "react";
import Image from "next/image";
import ExploreCards from "@/assets/explore-cards";

const Explore = () => {
  return (
    <div className="container mx-auto px-5 py-20">
      <h2 className="text-3xl font-medium mb-6 text-center">Explore</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {ExploreCards.map((card, index) => (
          <div
            key={index}
            className={`bg-neutral-800 rounded-lg shadow-lg overflow-hidden ${
              index == 0
                ? "md:col-span-2 md:row-span-2"
                : index == 3
                ? "md:col-span-2"
                : ""
            }`}
          >
            <Image
              src={card.image}
              alt={card.title}
              className="h-fit w-full object-cover"
              height="500"
              width="300"
            />
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
