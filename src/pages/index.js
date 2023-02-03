import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white h-screen font-poppins">
      <header className="container mx-auto py-10">
        <nav className="flex items-center justify-between">
          <a href="#">
            <h1 className="text-3xl font-bold">My Enterprise App</h1>
          </a>
          <nav className="flex">
            <a className="px-4 py-2 hover:bg-gray-800 rounded" href="#">
              Features
            </a>
            <a className="px-4 py-2 hover:bg-gray-800 rounded" href="#">
              Pricing
            </a>
            <a className="px-4 py-2 hover:bg-gray-800 rounded" href="#">
              Resources
            </a>
            <a
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              href="#"
            >
              Get Started
            </a>
          </nav>
        </nav>
      </header>

      <section className="container mx-auto py-20">
        <h2 className="text-4xl font-bold mb-5">Key Features</h2>
        <div className="flex">
          <div className="w-1/3 px-5">
            <h3 className="text-xl font-bold mb-3">Scalable</h3>
            <p className="text-gray-500">
              Our app is designed to handle the demands of large enterprises
              with ease.
            </p>
          </div>
          <div className="w-1/3 px-5">
            <h3 className="text-xl font-bold mb-3">Secure</h3>
            <p className="text-gray-500">
              We take security seriously and implement industry-standard
              protocols to keep your data safe.
            </p>
          </div>
          <div className="w-1/3 px-5">
            <h3 className="text-xl font-bold mb-3">Integrated</h3>
            <p className="text-gray-500">
              Our app integrates with your existing systems and workflow, so you
              can start using it right away.
            </p>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="w-1/3 px-5">
            <h3 className="text-xl font-bold mb-3">Customizable</h3>
            <p className="text-gray-500">
              Our app can be tailored to your specific needs, with flexible
              customization options.
            </p>
          </div>
          <div className="w-1/3 px-5">
            <h3 className="text-xl font-bold mb-3">Reliable</h3>
            <p className="text-gray-500">
              We have a track record of delivering reliable, stable, and secure
              solutions.
            </p>
          </div>
          <div className="w-1/3 px-5">
            <h3 className="text-xl font-bold mb-3">Supportive</h3>
            <p className="text-gray-500">
              We provide top-notch support to ensure your success and
              satisfaction with our app.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-5">Pricing</h2>
          <div className="flex">
            <div className="w-1/3 px-5 text-center">
              <div className="bg-gray-900 p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-white">Starter</h3>
                <p className="text-gray-500 mb-3">For small teams</p>
                <p className="text-5xl font-bold text-blue-500 mb-5">$50</p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-1/3 px-5 text-center">
              <div className="bg-gray-900 p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-white">Business</h3>
                <p className="text-gray-500 mb-3">For growing businesses</p>
                <p className="text-5xl font-bold text-blue-500 mb-5">$100</p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-1/3 px-5 text-center">
              <div className="bg-gray-900 p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Enterprise
                </h3>
                <p className="text-gray-500 mb-3">For large enterprises</p>
                <p className="text-5xl font-bold text-blue-500 mb-5">$200</p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-center text-gray-500 py-10">
        <p>&copy; My Enterprise App 2023</p>
      </footer>
    </div>
  );
};

export default LandingPage;
