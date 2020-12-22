import React from "react";
import { Link } from "react-router-dom";

export default function SubNavList({ match }) {
  return (
    <div>
      <nav className="sub__nav">
        <ul className="sub__list">
          <li className="sub__item">
            <Link className="sub__link" to={`${match.path}/installation`}>
              {" "}
              Installation
            </Link>
          </li>

          <li className="sub__item">
            <Link className="sub__link" to={`${match.path}/signup`}>
              {" "}
              Signup
            </Link>
          </li>

          <li className="sub__item">
            <Link className="sub__link" to={`${match.path}/signup`}>
              {" "}
              Login
            </Link>
          </li>

          <li className="sub__item">
            <Link className="sub__link" to={`${match.path}/signup`}>
              {" "}
              Forgot Password
            </Link>
          </li>

          <li className="sub__item">
            <Link className="sub__link" to={`${match.path}/signup`}>
              {" "}
              Update Password
            </Link>
          </li>

          <li className="sub__item">
            <Link className="sub__link" to={`${match.path}/signup`}>
              {" "}
              Update Info
            </Link>
          </li>

          <li className="sub__item">
            <Link className="sub__link" to={`${match.path}/signup`}>
              {" "}
              Get Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
