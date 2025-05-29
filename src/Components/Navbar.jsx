import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Sync active link with current route
  useEffect(() => {
    const currentLink = navLinks.find(
      (link) => link.path === location.pathname
    );
    if (currentLink) setActiveLink(currentLink.name);
  }, [location.pathname]);

  // Dropdown component
  const UserDropdown = () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="relative inline-block text-left">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-white hover:!text-yellow-400 transition-colors duration-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
            <div className="py-1 text-gray-800">
              <Link
                to="/login"
                className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-yellow-800 text-white p-7">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold" id="Logo">
          Vape Shop.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-yellow-400 transition duration-300 ${
                activeLink === link.name
                  ? "text-yellow-400 bg-white px-2 py-1 rounded"
                  : ""
              }`}
              onClick={() => setActiveLink(link.name)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-4 items-center">
          <UserDropdown />
          <Link to="/cart">
            <button className="hover:!text-yellow-400 transition duration-300 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 bg-yellow-800 shadow-lg z-50 
          transform origin-top transition-all duration-300 ease-in-out 
          ${
            mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-3 px-4 rounded-md hover:bg-yellow-700 hover:text-yellow-300 transition-colors duration-200 ${
                activeLink === link.name
                  ? "text-yellow-400 font-medium bg-yellow-900"
                  : "text-white"
              }`}
              onClick={() => {
                setActiveLink(link.name);
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Icons */}
          <div className="flex justify-center space-x-6 py-4 border-t border-yellow-700 mt-2">
            <UserDropdown />
            <Link to="/cart">
              <button className="p-2 text-white hover:text-yellow-300 transition-colors duration-200 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
