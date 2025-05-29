import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div>
        <div className="text-center animate-fadeIn min-h-screen flex flex-col items-center justify-center p-8">
          <img
            src="https://i.pinimg.com/originals/63/ab/e1/63abe189905c035be66de6c3b548b825.gif"
            alt="404 Illustration"
            className="mx-auto w-96 animate-[float_3s_infinite] shadow-xl rounded-lg"
          />
          <h1 className="text-7xl font-extrabold text-yellow-700 mt-6">
            Looks Like You're Lost!
          </h1>
          <p className="text-xl text-gray-700 mt-2">
            We can't seem to find the page you're looking for.
          </p>
          <Link
            to={"/"}
            className="mt-6 inline-block bg-yellow-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-blue-700"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
