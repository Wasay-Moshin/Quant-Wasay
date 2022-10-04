import React from "react";
import {BiSearch} from 'react-icons/bi';
function Header() {
  return (
    <div className="nb">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img
                src="https://statics.ambcrypto.com/wp-content/uploads/2021/09/Quant-network.jpg"
                alt=""
                width={150}
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="hhhhh">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item"></li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Who
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      What
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      How
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Why
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      About
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Sign In
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      How to buy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <BiSearch /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Header;
