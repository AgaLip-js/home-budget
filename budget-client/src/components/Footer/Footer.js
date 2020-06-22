import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerList">
        <div className="footerFont">
          <FontAwesomeIcon icon={faCopyright} />
        </div>
        <p className="footerTitle">Copyright 2020, Agata Lipiak</p>
      </div>
    </footer>
  );
};

export default Footer;
