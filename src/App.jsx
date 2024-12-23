import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Modal from "./Components/Modal/Modal";
import Content from "./Components/Layout/Content";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const mealsData = [
    { dish: "Sushi", info: "Finest fish and veggies", price: "$22.99" },
    { dish: "Schnitzel", info: "A German specialty!", price: "$16.50" },
    { dish: "Barbecue Burger", info: "American, raw, meaty", price: "$12.99" },
    { dish: "Green Bowl", info: "Healthy...and green...", price: "$18.99" },
  ];

  const handleAddMeal = (meal) => {
    setOrderDetails([...orderDetails, meal]);
    setTotalAmount(totalAmount + parseFloat(meal.price.replace("$", "")));
    setShowModal(true);
  };

  const handleCartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header onCartClick={handleCartClick} />
      <Content />
      <Meals data={mealsData} onAddMeal={handleAddMeal} />
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        orderDetails={orderDetails}
        totalAmount={`$${totalAmount.toFixed(2)}`}
      />
    </div>
  );
};

export default App;
