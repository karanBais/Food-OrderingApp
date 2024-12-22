import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ show, onClose, orderDetails, totalAmount }) => {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <ul>
          {orderDetails.map((item, index) => (
            <li key={index}>{item.dish}</li>
          ))}
        </ul>
        <div className="amount">
        <h3>Total Amount:</h3>
        <h3>{totalAmount}</h3>
        </div>
        <div className="button">
        <button className='close-btn'>Order</button>
        <button className='close-btn' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;