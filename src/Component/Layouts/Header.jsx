import React from "react";
import { BiSearch } from "react-icons/bi";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="Assests/Quant-network.jpg" alt="" width={"100px"}></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Who
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                What
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                How
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Why
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <BiSearch/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
