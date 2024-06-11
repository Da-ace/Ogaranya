import React from "react";
import "../styles/button.css";
import book from "/book.png";
const Button = ({ card }) => {
  return (
    <div className="all_button">
      <button>{card.title}</button>
    </div>
  );
};

export default Button;
