import React from "react";
import Image from "next/image";
import ExploreCards from "@/assets/explore-cards";

const Explore = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ExploreCards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg overflow-hidden`}
          >
            <Image
              src={card.image}
              alt={card.title}
              className="h-48 w-full object-cover"
              height="200"
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
