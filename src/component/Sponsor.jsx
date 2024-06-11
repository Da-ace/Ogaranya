import React from "react";
import cleo from "/cleo.png";
import neolife from "/neolife.svg";
import logo from "/logo.gif";
import cto from "/avatar(1).png";
import "../styles/sponsor.css";

const Sponsor = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center">
          <p>Customers Stories</p>
          <h2>
            Ogaranya is absolutely fantastic. Setting up took less than 45 mins.
            Extremely easy
          </h2>
          <div className="text-center-cto">
            <img src={cto} alt="" />
            <h5>Layon Pan</h5>
            <p>CTO, Sharply Africa</p>
          </div>
          <div className="sponsor">
            <a href="https://www.neolife.com/">
              <img src={neolife} alt="" style={{ width: "150px" }} />
            </a>
            <a href="https://www.fob.ng/">
              <img src={logo} alt="" style={{ width: "200px" }} />
            </a>
            <a href="https://cie-ng.com/">
              <img src={cleo} alt="" style={{ width: "120px" }} />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
