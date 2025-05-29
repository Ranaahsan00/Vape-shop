import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* <!-- Left Section --> */}
          <div className="bg-yellow-900 text-white p-8 md:p-12 lg:w-1/2 relative overflow-hidden">
            <div className="z-10 relative">
              <h2 className="flex justify-between items-center text-2xl font-bold mb-6">
                <span>E-Commerce by Ahsan</span>
                <span className="underline text-xl">
                  <Link to={"/"}>Go Back</Link>
                </span>
              </h2>
              <div className="mt-20 md:mt-32">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Sign in to
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                  E-Commerce by Ahsan
                </h2>
                <p className="max-w-md opacity-90">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>

            {/* <!-- Decorative Elements --> */}
            <div className="absolute right-0 top-1/3 transform translate-x-1/4">
              <div className="relative w-64 h-64">
                <svg
                  className="text-white/20 absolute top-10 left-10 w-16 h-16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>

                <svg
                  className="text-white/20 absolute bottom-10 right-10 w-20 h-20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-40 h-40">
                    <svg
                      className="text-orange-400 w-40 h-40 transform rotate-45"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <svg
              className="text-white/20 absolute bottom-10 left-10 w-24 h-24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>

          {/* <!-- Right Section --> */}
          <div className="p-8 md:p-12 lg:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
              <div className="text-right mb-4">
                <span className="text-gray-500">No Account? </span>
                <Link to={"/signup"} className="text-yellow-600 font-medium">
                  Sign up
                </Link>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 mb-1">
                  Welcome to{" "}
                  <span className="text-yellow-600 font-bold">MyWebsite</span>
                </p>
                <h1 className="text-4xl font-bold">Sign in</h1>
              </div>

              {/* <!-- Social Login Buttons --> */}
              <div className="flex flex-col space-y-4 mb-8">
                <button className="text-white flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-md hover:bg-gray-50">
                  {/* <!-- Google icon can go here --> */}
                  <svg
                    width="20px"
                    height="30px"
                    viewBox="-0.5 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>Google-color</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-401.000000, -860.000000)"
                      >
                        <g
                          id="Google"
                          transform="translate(401.000000, 860.000000)"
                        >
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          ></path>
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          ></path>
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  Sign in with Google
                </button>
                <div className="flex gap-4">
                  <button className="flex items-center gap-1 justify-center flex-1 h-12 border border-gray-200 rounded-md hover:bg-gray-50">
                    {" "}
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="url(#paint0_linear_87_7208)"
                      />
                      <path
                        d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_87_7208"
                          x1="16"
                          y1="2"
                          x2="16"
                          y2="29.917"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#18ACFE" />
                          <stop offset="1" stop-color="#0163E0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Facebook
                  </button>
                  <button className="flex items-center justify-center gap-1 text-white flex-1 h-12 border border-gray-200 rounded-md hover:bg-gray-50">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-800"
                    >
                      <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 5 7.5 1.5 0 2.5-.5 3.5-1.5"></path>
                      <path d="M9 12h13"></path>
                      <path d="M15 7c3 0 4 3 4 5.5 0 3-2 7.5-5 7.5-1.5 0-2.5-.5-3.5-1.5"></path>
                    </svg>{" "}
                    Twitter
                  </button>
                </div>
              </div>

              <form>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter your username or email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Username or email address"
                      className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      for="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter your Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      required
                      placeholder="Password"
                      className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="text-right">
                      <a href="#" className="text-yellow-600 underline text-sm">
                        Forgot Password
                      </a>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 text-white font-medium rounded-md transition duration-200"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
