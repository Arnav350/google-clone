import React from "react";
import { Link } from "react-router-dom";
import { IoApps } from "react-icons/io5";
import "./Main.css";

function Home() {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__left">
          <Link to="about" className="main__left__link">
            About
          </Link>
          <Link to="store" className="main__left__link">
            Store
          </Link>
        </div>
        <div className="main__right">
          <Link to="gmail" className="main__right__link">
            Gmail
          </Link>
          <Link to="images" className="main__right__link">
            Images
          </Link>
          <button className="main__right__button">
            <IoApps className="main__apps" />
          </button>
          {true ? (
            <button className="main__right__button">
              <div className="main__avatar"></div>
            </button>
          ) : (
            <div>Sign In</div>
          )}
        </div>
      </div>
      <div className="main__body"></div>
      <div className="main__footer"></div>
    </div>
  );
}

export default Home;
