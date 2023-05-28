import React from "react";
import { Link } from "react-router-dom";

import img from "../assets/images/crypto_icon.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand">
      <div className="container">
        <div className="navbar-item navbar-itemLogo">
          <Link to="/" className="navbar-brand">
            <img src={img} alt="img" />
          </Link>
        </div>
        <div className="navbar-item navbar-body ">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/modulus">
                Modulus
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Algorithms
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-item">
                  <Link className="nav-link" to="/ceaser_cipher">
                    Ceaser Cipher
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="nav-link" to="/rail_cipher">
                    Rail Cipher
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="nav-link" to="/vignere_cipher">
                    Vignere Cipher
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="nav-link" to="/vernam_cipher">
                    Vernam Cipher
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
