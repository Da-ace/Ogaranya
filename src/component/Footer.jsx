import React from "react";
import "../styles/footer.css";
import Logo from "/xmas-logo-2.png";
const Footer = () => {
  return (
    <footer className="container">
      <div className=" input">
        <img src={Logo} alt="" />
        <p>
          Unlocking boundless payment opportunities for enterprises,
          individuals, small businesses, emerging markets, and startups alike.
        </p>
      </div>
      <div className="all-container">
        <div className="home">
          <h5>Product</h5>
          <p>Invoicing</p>
          <p>Bill Payment</p>
          <p>Subscription</p>
          <p>Sales Channel</p>
        </div>
        <div className="about">
          <h5>Bills receipt</h5>
          <p>Contact Us</p>
          <p>Blog</p>
          <p>How It Works</p>
          <p>Documentation</p>
          <p>Integration</p>
        </div>

        <div className="properties">
          <h5>Social</h5>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="services">
          <h5>Legal</h5>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Acceptable Channel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
