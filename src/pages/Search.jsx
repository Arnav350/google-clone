import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InputContext } from "../components/InputContext";
import { IoMdApps, IoMdSearch, IoMdMic, IoMdCamera } from "react-icons/io";
import GoogleLogo from "../assets/GoogleLogo.png";
import "./Search.css";

function Search() {
  const inputContext = useContext(InputContext);

  console.log(inputContext.input);

  return (
    <div className="search">
      <div className="seach__header">
        <div className="search__top">
          <div className="search__top__left">
            <figure className="search__logo">
              <img src={GoogleLogo} alt="" />
            </figure>
            <div className="search__search">
              <input type="text" className="search__search__input" />
              <div className="search__search__box">
                <button className="search__search__icon">
                  <IoMdMic />
                </button>
                <button className="search__search__icon">
                  <IoMdCamera />
                </button>
                <button className="search__search__icon">
                  <IoMdSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="search__top__right">
            {/* Settings icon */}
            <IoMdApps />
            <div></div>
          </div>
        </div>
        <nav>
          <div>
            <button>All</button>
            <button>Maps</button>
            <button>News</button>
            <button>Images</button>
            <button>Shopping</button>
            <button>More</button>
          </div>
          <button>Tools</button>
          <button>SafeSearch on</button>
        </nav>
      </div>
    </div>
  );
}

export default Search;
