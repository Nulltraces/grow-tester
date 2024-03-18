import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div id="modal" className="modal-overlay">
            <div className="modal-content">
                <h2>Regsiter</h2>
                {/* Add your registration form or content here */}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
  
export default Modal;