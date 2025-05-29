import React from "react";
import { Link } from "react-router-dom";
import Pod1 from "../assets/img/pod1.png";
import Pod2 from "../assets/img/pod2.png";
import Pod3 from "../assets/img/pod3.png";
import Pod4 from "../assets/img/pod4.png";

const products = [
  {
    id: 1,
    title: "Voopoo Drag X Pod Kit",
    price: "$39.99",
    image: Pod1,
    bg: "bg-yellow-50",
    rating: 5,
    button: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 2,
    title: "Smok Nord 4 Pod System",
    price: "$34.99",
    image: Pod2,
    bg: "bg-yellow-50",
    rating: 4,
    button: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 3,
    title: "GeekVape Aegis Boost Pod",
    price: "$29.99",
    image: Pod3,
    bg: "bg-yellow-50",
    rating: 4,
    button: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 4,
    title: "Elf Bar 5000 Disposable Vape",
    price: "$19.99",
    image: Pod4,
    bg: "bg-yellow-50",
    rating: 5,
    button: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 5,
    title: "Voopoo Drag X Pod Kit",
    price: "$39.99",
    image: Pod1,
    bg: "bg-yellow-50",
    rating: 5,
    button: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 6,
    title: "Smok Nord 4 Pod System",
    price: "$34.99",
    image: Pod2,
    bg: "bg-yellow-50",
    rating: 4,
    button: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 7,
    title: "GeekVape Aegis Boost Pod",
    price: "$29.99",
    image: Pod3,
    bg: "bg-yellow-50",
    rating: 4,
    button: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 8,
    title: "Elf Bar 5000 Disposable Vape",
    price: "$19.99",
    image: Pod4,
    bg: "bg-yellow-50",
    rating: 5,
    button: "bg-blue-500 hover:bg-blue-600",
  },
];

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }).map((_, index) => (
    <svg
      key={index}
      className={`w-4 h-4 mx-px fill-current ${
        index < rating ? "text-orange-600" : "text-gray-300"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
    >
      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
    </svg>
  ));
  return <div className="flex justify-center mt-4">{stars}</div>;
};

const AllProducts = () => {
  return (
    <div>
      <div className="my-32">
        <h1 className="text-center font-bold text-6xl">ALL PRODUCTS</h1>
      </div>
      <div>
        <div className="p-2 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10 items-start">
            {products.map((product) => (
              <div
                key={product.id}
                className={`py-5 text-center transform duration-500 hover:-translate-y-2 rounded-lg ${product.bg}`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-contain rounded-lg"
                />
                <StarRating rating={product.rating} />
                <h1 className="text-2xl my-5">{product.title}</h1>
                <h2 className="font-semibold mb-5">{product.price}</h2>
                <button
                  className={`p-2 px-6 text-white rounded-md ${product.button}`}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
