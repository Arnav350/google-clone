import React from "react";
import { Link } from "react-router-dom";
import {
  IoMdApps,
  IoMdSearch,
  IoMdMic,
  IoMdCamera,
  IoIosLeaf,
} from "react-icons/io";
import GoogleLogo from "../assets/GoogleLogo.png";
import "./Main.css";

function Home() {
  return (
    <div className="main">
      <div className="nav">
        <div className="side">
          <Link to="about" className="left__link">
            About
          </Link>
          <Link to="store" className="left__link">
            Store
          </Link>
        </div>
        <div className="side">
          <Link to="gmail" className="right__link">
            Gmail
          </Link>
          <Link to="images" className="right__link">
            Images
          </Link>
          <button className="right__button">
            <IoMdApps className="apps" />
          </button>
          {true ? (
            <button className="right__button">
              <div className="avatar"></div>
            </button>
          ) : (
            <div>Sign In</div>
          )}
        </div>
      </div>
      <div className="body">
        <figure className="body__logo">
          <img src={GoogleLogo} alt="" />
        </figure>
        <div className="search__container">
          <div className="search">
            <button className="search__left">
              <IoMdSearch />
            </button>
            <input type="text" className="search__input" />
            <button className="search__right">
              <IoMdMic />
            </button>
            <button className="search__right">
              <IoMdCamera />
            </button>
          </div>
        </div>
        <div>
          <button className="buttons__search">Google Search</button>
          <button className="buttons__feeling">I'm Feeling Lucky</button>
        </div>
      </div>
      <div className="space"></div>
      <div className="footer">
        <div className="footer__left">
          <Link to="/" className="footer__link">
            Advertising
          </Link>
          <Link to="/" className="footer__link">
            Business
          </Link>
          <Link to="/" className="footer__link">
            How Search works
          </Link>
        </div>
        <div className="footer__middle">
          <Link to="/" className="footer__link">
            <IoIosLeaf /> Carbon neutral since 2007
          </Link>
        </div>
        <div className="footer__right">
          <Link to="/" className="footer__link">
            Privacy
          </Link>
          <Link to="/" className="footer__link">
            Terms
          </Link>
          <Link to="/" className="footer__link">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
