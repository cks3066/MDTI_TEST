import React from "react";
import logo from "../images/logo.jpg";
const Header = (props) => {
  return (
    <>
      <div className="headerContainer">
        <img
          className="logo"
          src={logo}
          alt="img"
          width="70px"
          height="30px"
        ></img>
      </div>
    </>
  );
};

export default Header;
