import React from "react";
import logo from "../images/logo.jpg";
import { Route, Link } from "react-router-dom";
const Header = (props) => {
  const handleOnClick = () => {};
  return (
    <>
      <div className="headerContainer">
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="img"
            width="70px"
            height="30px"
            onClick={handleOnClick}
          ></img>
        </Link>
      </div>
    </>
  );
};

export default Header;
