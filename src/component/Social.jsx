import React from "react";
import "../styles/social.css";
import { BsChatDotsFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import slack from "/slack.png";
import { BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BiLogoSkype } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <div className="socials" id="sales">
        <div className="container box-wrap">
          <p>Sales Channels</p>
          <div className="commerce">
            <h2>Make O2O commerce channel easy</h2>
            <p>Your customers can buy from our different sales channels.</p>
          </div>
          <div className="social-media">
            <a href="#">
              <BsChatDotsFill
                style={{ width: "80px", height: "80px", color: "black" }}
              />
            </a>
            <a href="#">
              <FaWhatsapp
                style={{ width: "80px", height: "80px", color: "#04c56b" }}
              />
            </a>
            <a href="#">
              <FaFacebookF
                style={{ width: "80px", height: "80px", color: "#3b5598" }}
              />
            </a>
            <a href="#">
              <img src={slack} alt="" />
            </a>
            <a href="#">
              <BsTelegram
                style={{ width: "80px", height: "80px", color: "#0088cc" }}
              />
            </a>
            <a href="#">
              <FaDiscord
                style={{ width: "80px", height: "80px", color: "#7289da" }}
              />
            </a>
            <a href="#">
              <BiLogoSkype
                style={{ width: "80px", height: "80px", color: "#00aff0" }}
              />
            </a>
            <a href="#">
              <FaPhoneAlt
                style={{ width: "80px", height: "80px", color: "#c4281d" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
