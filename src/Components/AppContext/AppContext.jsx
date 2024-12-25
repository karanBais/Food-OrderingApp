import React, { createContext } from 'react';

export const AppContext = createContext({
    showModal: false,
    orderDetails: [],
    totalAmount: 0,
    mealsData: [],
    handleAddMeal: () => {},
    handleCloseModal: () => {},
});

export const AppProvider = ({ children }) => {
  
    const addItemHandler =(item) ={}

    const onRemoveItemHandler =(id) ={}

    const cartContext ={
        orderDetails: [],
        totalAmount: 0,
        addItem : addItemHandler,
        onClose : onRemoveItemHandler
    }
  return (
    <AppContext.Provider value={{ cartContext }}>
      {children}
    </AppContext.Provider>
  );
};