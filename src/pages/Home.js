import React from "react";
import { Link } from "react-router-dom";
import headerImg from "./../media/homeBackground.png";

export default function Home() {
  return (
    <header className="header">
      <div className="header__box">
        <h1 className="header__title">Free Authentication API</h1>
        <p className="header__desc">
          Build Fully Functionnal Authentication System Utlizing Our Free API{" "}
        </p>
        <Link to="/docs" className="link header__link">
          Get Started
        </Link>
      </div>

      <div className="header__img--container">
        <img src={headerImg} alt="header home" className="header__img" />
      </div>
    </header>
  );
}
