import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="header__nav">
        <div className="nav__content">
          <nav className="nav">
            <h1 className="logo">AbdThy</h1>
            <ul className="list">
              <li className="item">
                <Link className="link" to="/home">
                  Home
                </Link>
              </li>

              <li className="item">
                <Link className="link" to="/docs">
                  Docs
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/about">
                  About
                </Link>
              </li>

              <li className="item">
                <Link className="link" to="/developer">
                  Developer
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="nav_clear"></div>
    </>
  );
}
