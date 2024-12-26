"use client";

import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import Footer from "../_components/Footer";
import { useState } from "react";
import "./style.css"

const Restaurant = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <div className="container">
        <RestaurantHeader />
        <h1>Restaurant Login/Signup Page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignup />}
        <div>
          <button className="button-link" onClick={() => setLogin(!login)}>
            {login
              ? "Do not have account? Signup"
              : "Already have account? Login"}
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Restaurant;
