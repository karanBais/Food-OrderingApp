import React from "react";
import "./Header.css";
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
  return (
    <>
      <div className="main-header">
        <h1>React Meals</h1>
        <div className="cart">
          <FaCartShopping className="cart-icon" />
          <p>Your Cart</p>
          <p className="quantity">0</p>
        </div>
      </div>
    </>
  );
};

export default Header;
