import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Welcome to <span className="font-semibold text-indigo-600">ShopSphere</span> — your one-stop destination for everything from tech gadgets to fashion accessories. 
          We're passionate about delivering high-quality products with exceptional customer service.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-indigo-700">Our Mission</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              To revolutionize online shopping by offering an unmatched blend of affordability, variety, and top-notch support.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-indigo-700">Our Story</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Founded in 2023, ShopSphere began as a passion project by a group of tech lovers and shopaholics. Today, we’re proud to serve thousands of happy customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
