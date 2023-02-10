import React from "react";

const Header = () => {
  return (
    <div className="px-5">
      <header className="container mx-auto py-8">
        <div className="flex items-center justify-between">
          <a href="#">
            <h1 className="text-3xl font-bold">GitClick</h1>
          </a>
          <nav className="hidden md:flex space-x-5">
            <a className="px-4 py-2 hover:bg-gray-800 rounded" href="#">
              GitClick Client
            </a>
            <a className="px-4 py-2 hover:bg-gray-800 rounded" href="#">
              Pricing
            </a>
            <a className="px-4 py-2 hover:bg-gray-800 rounded" href="#">
              About
            </a>
          </nav>
          <a
            className="bg-transparent border hover:border-blue-700 text-white py-2 px-4 rounded-full"
            href="#"
          >
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
