import React from "react";
import AllProducts from "../Components/AllProducts";
import ShopHero from "../Components/ShopHero";

const Shop = () => {
  return (
    <div>
      <div>
        <ShopHero />
      </div>

      <div>
        <AllProducts />
      </div>
    </div>
  );
};

export default Shop;
