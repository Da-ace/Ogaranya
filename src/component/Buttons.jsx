import React from "react";
import "../styles/button.css";
import { button } from "../utils/button.js";
import Button from "./Button.jsx";

const Buttons = () => {
  return (
    <div className="button">
      <div className="button-about">
        <h2>Use Ogaranya For</h2>
        <p>
          Below is the list of things you could do with our value-added product
        </p>
      </div>

      <div className="container buttons">
        {button.map((card, index) => (
          <Button card={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Buttons;
