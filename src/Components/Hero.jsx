import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/img/Img2.jpg";

const Hero = () => {
  return (
    <div className="relative h-[90vh] text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">Cloud Culture</h1>
        <p className="text-lg text-gray-300 mb-8">
          Precision Crafted Masterpieces That Define Your Moment
        </p>
        <Link
          to="/shop"
          className="bg-yellow-800 text-white hover:bg-yellow-600 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
