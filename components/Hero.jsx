import React from "react";

const Hero = ({ title, subtitle }) => {
  return (
    <div className="bg-teal-500 text-white py-20 px-8  text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-lg">{subtitle}</p>
    </div>
  );
};

export default Hero;
