import React from "react";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import ProductsGrid from "../Components/ProductsGrid";
import Banner from "../Components/Banner";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import FAQ from "../Components/Faq";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <Hero />
      </div>

      <div className="features">
        <Features />
      </div>

      <div className="t-products">
        <ProductsGrid />
      </div>

      <div className="banner">
        <Banner />
      </div>

      <div className="testimonials">
        <Testimonials />
      </div>

      <div className="faq">
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
