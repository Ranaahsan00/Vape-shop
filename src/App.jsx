import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PaymentSuccessful from "./Pages/PaymentSuccessful";
import NotFoundPage from "./Pages/NotFoundPage";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Layout Wrapper Component
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const hideLayoutPaths = [
    "/login",
    "/signup",
    "/cart",
    "/checkout",
    "/payment-successful",
  ];

  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return hideLayout ? (
    <>{children}</>
  ) : (
    <>
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </>
  );
};

// Main App
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <LayoutWrapper>
          <Routes>
            {/* With Navbar & Footer */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Without Navbar & Footer */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/payment-successful" element={<PaymentSuccessful />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </div>
  );
}

export default App;
