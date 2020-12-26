import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SubNavList({ match }) {
  return (
    <>
      <nav className="sub__nav">
        <ul className="sub__list">
          <li className="sub__item">
            <NavLink className="sub__link" to={`${match.path}/installation`}>
              {" "}
              Installation
            </NavLink>
          </li>

          <li className="sub__item">
            <NavLink className="sub__link" to={`${match.path}/signup`}>
              {" "}
              Signup
            </NavLink>
          </li>

          <li className="sub__item">
            <NavLink className="sub__link" to={`${match.path}/login`}>
              {" "}
              Login
            </NavLink>
          </li>

          <li className="sub__item">
            <NavLink className="sub__link" to={`${match.path}/forgotpassword`}>
              {" "}
              Forgot Password
            </NavLink>
          </li>

          <li className="sub__item">
            <NavLink className="sub__link" to={`${match.path}/updatepassword`}>
              {" "}
              Update Password
            </NavLink>
          </li>

          <li className="sub__item">
            <NavLink className="sub__link" to={`${match.path}/updateme`}>
              {" "}
              Update Info
            </NavLink>
          </li>

          <li className="sub__item">
            <NavLink className="sub__link" to={`${match.path}/users`}>
              {" "}
              Get Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
