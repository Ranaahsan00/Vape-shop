import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccessful = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-2xl p-4 bg-white shadow-2xl dark:bg-gray-900 sm:p-10 sm:rounded-3xl">
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-yellow-50 rounded-full dark:bg-green-700">
                <svg
                  className="h-12 w-12 text-yellow-600 dark:text-green-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  ></path>
                </svg>
              </div>
              <h1 className="text-4xl font-extrabold text-yellow-700">
                Payment Successful!
              </h1>
              <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
                Thank you for your purchase.
              </p>
              <p className="mt-4 text-sm text-slate-400">
                If you have any questions or need further assistance, feel free
                to contact us at:
                <a
                  href="#"
                  className="font-medium text-yellow-600 dark:text-indigo-400 underline"
                >
                  info@Ahsan.com
                </a>
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link
                to={"/"}
                className="text-white bg-yellow-800 inline-block px-6 py-2 text-lg font-medium text-white transition-transform rounded-full hover:scale-105"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
