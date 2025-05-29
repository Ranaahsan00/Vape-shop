import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pod1 from "../assets/img/pod1.png"; // adjust path based on your project structure
import Pod2 from "../assets/img/pod2.png"; // adjust path based on your project structure
import {
  faShoppingCart,
  faTrash,
  faLock,
  faShieldAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";

const Cart = () => {
  // Static cart items data
  const cartItems = [
    {
      name: "Pod ",
      model: "XPS 13",
      hsCode: "847130",
      quantity: 1,
      weight: 2.5,
      perPieceRate: 34,
      totalPrice: 34,
      color: "Golden",
      deliveryMethod: "Air",
      description:
        "A powerful and lightweight laptop with excellent performance.",
      image: Pod1,
    },
    {
      name: "Smartphone",
      model: "iPhone 14",
      hsCode: "851712",
      quantity: 2,
      weight: 0.5,
      perPieceRate: 799.99,
      totalPrice: 1599.98,
      color: "Black",
      deliveryMethod: "Ship",
      description:
        "The latest iPhone with advanced camera and processing power.",
      image: Pod2,
    },
  ];

  // Static calculated values
  const subtotal = 2599.97;
  const shippingCost = 5;
  const tax = 194.99;
  const total = 2799.96;

  // Helper function for color
  const getColorHex = (color) => {
    const colorMap = {
      Black: "#000000",
      Silver: "#C0C0C0",
      Blue: "#0047AB",
      Red: "#FF0000",
      White: "#FFFFFF",
    };
    return colorMap[color] || "#000000";
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="container mx-auto p-4 max-w-6xl">
        {/* Header with cart count */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Shopping Cart
          </h1>
          <div className="bg-yellow-800 text-white px-3 py-1 rounded-full flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            <span>{cartItems.length}</span>{" "}
            <span className="hidden sm:inline ml-1">items</span>
          </div>
        </div>

        {/* Empty Cart Message */}
        {cartItems.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-gray-300 text-5xl mb-4"
            />
            <p className="text-xl text-gray-500">Your cart is empty</p>
            <a
              href="#"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Continue Shopping
            </a>
          </div>
        )}

        {/* Mobile View (< sm breakpoint) */}
        <div className="sm:hidden">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-3">
                  <img
                    src={item.image}
                    alt="Product"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-600">{item.model}</p>
                  </div>
                </div>
                <button className="!text-yellow-600 !bg-transparent hover:text-red-700">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">HS Code:</span>
                  <span>{item.hsCode}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Color:</span>
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 ml-2 rounded-full"
                      style={{ backgroundColor: getColorHex(item.color) }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Quantity:</span>
                  <div className="flex items-center border rounded">
                    <span className="w-12 text-center">{item.quantity}</span>
                  </div>
                </div>

                <div className="flex justify-between font-medium">
                  <span>Price:</span>
                  <span>${item.perPieceRate.toFixed(2)}</span>
                </div>

                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${item.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet/Desktop View (≥ sm breakpoint) */}
        <div className="hidden sm:block">
          <div className="responsive-table">
            {cartItems.length > 0 && (
              <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="py-3 px-4 text-left">Product</th>
                    <th className="py-3 px-4 text-center">Quantity</th>
                    <th className="py-3 px-4 text-right">Price</th>
                    <th className="py-3 px-4 text-right">Total</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.image}
                            alt="Product"
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-600">
                              {item.model}
                            </p>
                            <p className="text-xs text-gray-500">
                              HS: {item.hsCode}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center">
                          <span className="w-12 text-center">
                            {item.quantity}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="font-medium">
                          ${item.perPieceRate.toFixed(2)}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="font-bold">
                          ${item.totalPrice.toFixed(2)}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button className="!text-yellow-700 !bg-transparent hover:text-red-700 p-1">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Order Summary */}
        {cartItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2">
              {/* Shipping Options */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Shipping Options</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="standard"
                      checked
                      readOnly
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Standard Shipping</div>
                      <div className="text-sm text-gray-600">
                        Delivery in 5-7 business days
                      </div>
                    </div>
                    <div className="ml-auto font-medium">$5.00</div>
                  </label>

                  <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="express"
                      readOnly
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Express Shipping</div>
                      <div className="text-sm text-gray-600">
                        Delivery in 1-3 business days
                      </div>
                    </div>
                    <div className="ml-auto font-medium">$15.00</div>
                  </label>

                  <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="overnight"
                      readOnly
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Overnight Shipping</div>
                      <div className="text-sm text-gray-600">
                        Next day delivery
                      </div>
                    </div>
                    <div className="ml-auto font-medium">$25.00</div>
                  </label>
                </div>
              </div>

              {/* Promo Code */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">Promo Code</h2>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    readOnly
                    className="flex-grow border rounded-l p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Order Total */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      ${shippingCost.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link to={"/checkout"}>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center">
                    <FontAwesomeIcon icon={faLock} className="mr-2" /> Proceed
                    to Checkout
                  </button>
                </Link>
                <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
                  <FontAwesomeIcon icon={faShieldAlt} className="mr-2" /> Secure
                  Checkout
                </div>
                <div className="flex justify-center space-x-2 mt-4">
                  <FontAwesomeIcon
                    icon={faCcVisa}
                    className="text-2xl text-blue-900"
                  />
                  <FontAwesomeIcon
                    icon={faCcMastercard}
                    className="text-2xl text-red-600"
                  />
                  <FontAwesomeIcon
                    icon={faCcAmex}
                    className="text-2xl text-blue-500"
                  />
                  <FontAwesomeIcon
                    icon={faCcPaypal}
                    className="text-2xl text-blue-700"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Continue Shopping */}
        {cartItems.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
            <Link
              to={"/shop"}
              className="flex items-center !text-yellow-600 hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Continue Shopping
            </Link>
            <button className="!text-yellow-600 !bg-transparent hover:!text-yellow-800">
              <FontAwesomeIcon icon={faTrash} className="mr-1" /> Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
