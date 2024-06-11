import React from "react";
import book from "/book.png";
import "../styles/book.css";

const Book = () => {
  return (
    <div>
      <div className="container proto">
        <div className="first">
          <h3>Book</h3>
          <p>
            Text "Book 101010" to 08107600076 to book an event.", demo: "Try
            Demo",
          </p>
          <button>Try Demo</button>
        </div>
        <div className="second">
          <img src={book} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Book;
