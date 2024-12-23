import React from "react";
import "./Header.css";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../Meals/Button";

const Header = ({ onCartClick }) => {
  return (
    <div className="main-header">
      <h1>React Meals</h1>
      <Button onClick={onCartClick} className="cart">
        <FaCartShopping className="cart-icon" />
        <p>Your Cart</p>
        <p className="quantity">0</p>
      </Button>
    </div>
  );
};

export default Header;
