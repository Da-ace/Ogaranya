import React, { useState } from "react";
import { faqs } from "../utils/faq";
import Faq from "./Faq";
import { pictures } from "../utils/pictures";
import "../styles/faq.css";
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [test, setTest] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex == index ? null : index);
    setTest(index);
  };

  return (
    <div className="container customer-network">
      <div>
        {faqs.map((faq, index) => (
          <Faq
            faq={faq}
            key={index}
            index={index}
            onClick={handleClick}
            isOpen={openIndex === index}
          />
        ))}
      </div>
      <div>
        <img
          src={pictures[test]}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Faqs;
