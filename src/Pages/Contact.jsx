import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <form action="https://fabform.io/f/xxxxx" method="post">
            <div
              className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
              id="contact-form"
            >
              {/* Left Content */}
              <div className="md:w-1/3 w-full">
                <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
                  Contact Us
                </h1>
                <p className="leading-relaxed text-xl text-gray-900">
                  We're here to assist you! If you have any questions or need
                  assistance, please feel free to reach out to us.
                  <br />
                  <br />
                  You can also email us. Click here to reveal email address
                  <a
                    href="#"
                    className="font-medium text-yellow-600 dark:text-blue-500 hover:underline ml-1"
                  >
                    https://veilmail.io/irish-geoff
                  </a>
                </p>
                <p className="leading-relaxed text-xl text-gray-900 mt-8">
                  We use VeilMail.io to{" "}
                  <a
                    className="font-medium text-yellow-600 dark:text-blue-500 hover:underline"
                    href="#"
                  >
                    hide email address from spammers
                  </a>
                </p>
                <span className="inline-flex mt-6 justify-center sm:justify-start">
                  {/* Icons if needed */}
                </span>
              </div>

              {/* Right Form */}
              <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
                <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
                  Contact Form
                </h1>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 py-4 text-lg text-gray-900"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 py-4 text-lg text-gray-900"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 py-4 text-lg text-gray-900"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="cursor-pointer flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center"
                  >
                    Send Message ✉
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
