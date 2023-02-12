import React from "react";
import PricingCards from "./PricingCards";

const Pricing = () => {
  return (
    <div className="container mx-auto px-5 py-20">
      <h2 className="text-3xl font-medium mb-6 text-center">Pricing</h2>
      <div className="md:flex">
        <PricingCards title="Starter" tag="Ideal For Small Business" storage="10 GB of" band="50 GB of" support="Basic Support" price="19.99"  quote="Started" />
        <PricingCards title="Premium" tag="Ideal For Growing Business" storage="100 GB of" band="500 GB of" support="24/7 Support" price="49.99" quote="Started" />
        <PricingCards title="Enterprise" tag="Ideal For Large Business" storage="Unlimited" band="Unlimited" support="Priority Support" price="-" quote="Quote" />
      </div>
    </div>
  );
};

export default Pricing;
