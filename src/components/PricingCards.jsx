import React from "react";

const PricingCards = (props) => {
  return (
    <div className="flex-1 p-5">
      <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-medium text-center mb-4">
            {props.title}
          </h3>
          <p className="text-center text-gray-400 mb-4">{props.tag}</p>
          <ul className="list-none text-center">
            <li className="py-4">{props.storage} storage</li>
            <li className="py-4">{props.band} bandwidth</li>
            <li className="py-4">{props.support}</li>
          </ul>
        </div>
        <div className="bg-neutral-700 p-6">
          <h3 className="text-lg font-medium text-center mb-2">
            ${props.price}
            <span className="text-sm text-gray-500">/month</span>
          </h3>
          <button className="bg-indigo-500 text-white font-medium py-3 w-full rounded-lg hover:bg-indigo-600">
            Get {props.quote}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
