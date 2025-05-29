import React from "react";
import Vape1 from "../assets/img/vape1.png"; // Adjust the path as necessary

const Banner = () => {
  return (
    <section className="w-full bg-yellow-800 min-h-[400px] overflow-hidden flex items-center">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-4 py-5 text-center lg:text-left">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start gap-6 max-w-2xl">
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            <span>Elevate Your Vape: </span>
            <span className="block">Premium Pods, Powerful Flavor</span>
          </h1>
          <p className="text-white text-base md:text-lg font-normal max-w-md">
            Discover next-gen vaping with our cutting-edge pod systems and sleek
            disposables. Whether you're chasing clouds or flavor, we’ve got your
            perfect hit.
          </p>
        </div>

        {/* Image Content */}
        <div className="flex-1 flex justify-center items-center">
          <img
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
            src={Vape1}
            alt="Futuristic sports shoes"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
