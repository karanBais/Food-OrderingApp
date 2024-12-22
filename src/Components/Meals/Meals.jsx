import React, { useState } from "react";
import "./Meals.css";
import Button from "./Button";
import Modal from "../Modal/Modal";

const Meals = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddClick = (meal) => {
    setOrderDetails([...orderDetails, meal]);
    setTotalAmount(totalAmount + parseFloat(meal.price.replace('$', '')));
    setShowModal(true);
  };


  return (
    <div className="main-container">
      {props.data.map((meal, index) => (
        <div className="main-div" key={index}>
          <div className="items">
            <div className="item">
              <h4>{meal.dish}</h4>
              <p>{meal.info}</p>
              <h4>{meal.price}</h4>
            </div>
            <div className="amount">
              <label htmlFor="amount">Amount</label>
              <input type="number" placeholder="1" />
              <Button onClick={() => handleAddClick(meal)}>+ Add</Button>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <Modal show={showModal}  orderDetails={orderDetails} totalAmount={`$${totalAmount.toFixed(2)}`} />
    </div>
  );
};

export default Meals;