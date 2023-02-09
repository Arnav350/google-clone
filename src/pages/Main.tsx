import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputContext } from "../components/InputContext";
import {
  IoMdApps,
  IoMdSearch,
  IoMdClose,
  IoMdMic,
  IoMdCamera,
  IoMdLeaf,
} from "react-icons/io";
import GoogleLogo from "../assets/GoogleLogo.png";
import "./Main.css";

function Home() {
  const inputContext = useContext(InputContext);
  const navigate = useNavigate();
  const [currentInput, setCurrentInput] = useState("");

  function search(event: any) {
    inputContext.setInput(currentInput);
    event.preventDefault();
    navigate("/search");
  }

  return (
    <div className="main">
      <nav className="main__nav">
        <div className="main__nav__side">
          <Link to="about" className="main__left__link">
            About
          </Link>
          <Link to="store" className="main__left__link">
            Store
          </Link>
        </div>
        <div className="main__nav__side">
          <Link to="gmail" className="main__right__link">
            Gmail
          </Link>
          <Link to="images" className="main__right__link">
            Images
          </Link>
          <button className="main__nav__button">
            <IoMdApps className="main__nav__apps" />
          </button>
          {true ? (
            <button className="main__nav__button">
              <div className="main__nav__avatar"></div>
            </button>
          ) : (
            <div>Sign In</div>
          )}
        </div>
      </nav>
      <form className="main__body" onSubmit={search}>
        <figure className="main__body__logo">
          <img src={GoogleLogo} alt="" />
        </figure>
        <div className="main__search__container">
          <div className="main__search">
            <IoMdSearch className="main__search__left" />
            <input
              value={currentInput}
              className="main__search__input"
              onChange={(event) => setCurrentInput(event.target.value)}
            />
            {currentInput ? (
              <button className="main__search__close">
                <IoMdClose onClick={() => setCurrentInput("")} />
              </button>
            ) : null}

            <button className="main__search__right">
              <IoMdMic />
            </button>
            <button className="main__search__right">
              <IoMdCamera />
            </button>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Google Search"
            className="main__buttons__search"
          />
          <button className="main__buttons__feeling">I'm Feeling Lucky</button>
        </div>
      </form>
      <div className="main__space"></div>
      <div className="main__footer">
        <div className="main__footer__left">
          <Link to="/" className="main__footer__link">
            Advertising
          </Link>
          <Link to="/" className="main__footer__link">
            Business
          </Link>
          <Link to="/" className="main__footer__link">
            How Search works
          </Link>
        </div>
        <div className="main__footer__middle">
          <Link to="/" className="main__footer__link">
            <IoMdLeaf /> Carbon neutral since 2007
          </Link>
        </div>
        <div className="main__footer__right">
          <Link to="/" className="main__footer__link">
            Privacy
          </Link>
          <Link to="/" className="main__footer__link">
            Terms
          </Link>
          <Link to="/" className="main__footer__link">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
