import React from "react";
import { Navbar } from "react-bootstrap";
import NobelPrizeLogo from "../assets/images/NobelPrizeIcon.jpeg";

const Header = () => {
  return (
    <Navbar bg="info" variant="dark" sticky="top">
      <Navbar.Brand href="https://gsprasanna.github.io/Nobel-Laureates">
        <img
          alt="logo"
          src={NobelPrizeLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {"THE NOBEL PRIZE"}
      </Navbar.Brand>
    </Navbar>
  );
};
export default Header;
