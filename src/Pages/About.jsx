import React from "react";
import Bg from "../assets/img/ganjipod.avif"; // adjust path based on your project structure
import Pod1 from "../assets/img/pod1.png"; // adjust path based on your project structure

export default function About() {
  const values = [
    {
      title: "Passionate About Work",
      description:
        "Passion for work is a enthusiasm and excitement for what you do.",
    },
    {
      title: "Qualitiful products",
      description:
        "Product quality refers to how well a product satisfies our customer",
    },
    {
      title: "Creative team members",
      description:
        "A creative team is to design and execute campaigns & encourage",
    },
    {
      title: "Customer satisfaction",
      description:
        "Happy customers are delighted because of the customer service",
    },
    {
      title: "Innovation solutions",
      description:
        "Using either completely concepts finding new ways of using existing",
    },
    {
      title: "Simplicity interface",
      description:
        "Simplicity is used loosely to refer to the need to minimize a process",
    },
  ];
  return (
    <div>
      <div>
        <section className="relative text-white overflow-hidden h-[50vh]">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${Bg})`,
              filter: "brightness(0.4)",
            }}
          ></div>

          {/* Content */}
          <div className="container mx-auto px-5 h-full flex items-center justify-center relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-8xl font-bold">
                <span className="bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-600 inline-block text-transparent bg-clip-text">
                  About Us
                </span>
              </h1>
            </div>
          </div>
          {/* Bottom wave shape */}
        </section>
      </div>
      <div>
        <section className="bg-white py-16 px-4 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={Pod1}
                alt="Plants"
                className="rounded-lg w-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 w-full text-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We strive to provide our customers with the highest quality
              </h2>
              <p className="text-lg mb-6 text-gray-600">
                Urban Jungle Co. was founded in 1960 by a group of plant
                enthusiasts who recognized the positive impact that plants can
                have on our lives. Whether it’s purifying the air, reducing
                stress, or simply adding a touch of beauty to your environment,
                plants are more than just decoration—they’re a lifestyle.
              </p>
              <hr className="my-6 border-gray-200" />
              <blockquote className="italic text-gray-600 mb-4">
                “We love what we do & create partnerships with our clients to
                ensure their digital transformation is positioned for long-term
                success.”
              </blockquote>
              <div className="flex items-center space-x-4 mt-6">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Karen Lynn"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Karen Lynn</p>
                  <p className="text-sm text-gray-500">
                    CEO & Co-founder @ Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          {/* Main heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2 text-center">
            Our <span className="text-yellow-700"> Core Values</span> that Drive
            Everything We Do
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h2>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
