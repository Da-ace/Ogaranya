import React from "react";
import "../styles/base.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

const Base = () => {
  let date = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="container footer-div">
          <div className="copyright">
            <p>© {date} Ogaranya. All rights reserved.</p>
          </div>
          <div className="social">
            <a href="#">
              <FaFacebookF
                style={{ width: "20px", fontSize: "20px", color: "#949597" }}
              />
            </a>
            <a href="#">
              <FaTwitter
                style={{ width: "20px", fontSize: "20px", color: "#949597" }}
              />
            </a>
            <a href="#">
              <IoLogoInstagram
                style={{ width: "20px", fontSize: "20px", color: "#949597" }}
              />
            </a>
            <a href="#">
              <FaLinkedinIn
                style={{ width: "20px", fontSize: "20px", color: "#949597" }}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Base;
