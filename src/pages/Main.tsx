import React, { useContext } from "react";
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

  function search(event: any) {
    event.preventDefault();
    inputContext.setInput(event.target.value);

    navigate("/search");
  }

  return (
    <div className="main">
      <nav className="nav">
        <div className="nav__side">
          <Link to="about" className="left__link">
            About
          </Link>
          <Link to="store" className="left__link">
            Store
          </Link>
        </div>
        <div className="nav__side">
          <Link to="gmail" className="right__link">
            Gmail
          </Link>
          <Link to="images" className="right__link">
            Images
          </Link>
          <button className="nav__button">
            <IoMdApps className="nav__apps" />
          </button>
          {true ? (
            <button className="nav__button">
              <div className="nav__avatar"></div>
            </button>
          ) : (
            <div>Sign In</div>
          )}
        </div>
      </nav>
      <form className="body" onSubmit={search}>
        <figure className="body__logo">
          <img src={GoogleLogo} alt="" />
        </figure>
        <div className="search__container">
          <div className="main__search">
            <IoMdSearch className="search__left" />
            <input
              value={inputContext.input}
              className="search__input"
              onChange={(event) => inputContext.setInput(event.target.value)}
            />
            {inputContext.input ? (
              <button className="search__close">
                <IoMdClose onClick={() => inputContext.setInput("")} />
              </button>
            ) : null}

            <button className="search__right">
              <IoMdMic />
            </button>
            <button className="search__right">
              <IoMdCamera />
            </button>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Google Search"
            className="buttons__search"
          />
          <button className="buttons__feeling">I'm Feeling Lucky</button>
        </div>
      </form>
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
            <IoMdLeaf /> Carbon neutral since 2007
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
