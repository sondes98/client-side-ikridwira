import React from "react";
import footer from "../assets/images//footer.png";

import "./containers.css";
import { Footer } from "../components/footer/footer";

const FooterSection = () => {
  return (
    <div style={{ backgroundColor: "#221C13" }}>
      <img className="footer-pic" src={footer} alt="footer-pic" />
      <div className="footer-section">
        <div className="highlights">
          <Footer />
        </div>
        <div className="copyright">
          <h1 className="footer-title"> all copyrights 2023 by OurTeam </h1>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
