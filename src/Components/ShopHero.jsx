import React from "react";
import Pods from "../assets/img/pods.png";

const ShopHero = () => {
  return (
    <section className="relative text-white overflow-hidden h-[50vh]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Pods})`,
          filter: "brightness(0.4)",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-5 h-full flex items-center justify-center relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-600 inline-block text-transparent bg-clip-text">
              Shop
            </span>
          </h1>
        </div>
      </div>
      {/* Bottom wave shape */}
    </section>
  );
};

export default ShopHero;
