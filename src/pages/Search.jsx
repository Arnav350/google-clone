import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InputContext } from "../components/InputContext";
import {
  IoMdApps,
  IoMdSearch,
  IoMdMic,
  IoMdCamera,
  IoMdSettings,
  IoMdImage,
  IoMdPaper,
  IoMdPlay,
  IoMdBookmarks,
  IoMdMore,
  IoMdPin,
  IoMdPricetag,
  IoMdAirplane,
  IoMdStats,
  IoMdTrendingUp,
} from "react-icons/io";
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
            <Link to="/">
              <figure className="search__logo">
                <img src={GoogleLogo} alt="" />
              </figure>
            </Link>
            <div className="search__search">
              <input
                value={inputContext.input}
                className="search__search__input"
                onChange={(event) => inputContext.setInput(event.target.value)}
              />
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
            <IoMdSettings />
            <IoMdApps />
            <div></div>
          </div>
        </div>
        <nav>
          <div>
            <button>
              <IoMdSearch /> All
            </button>
            {/* <button>
              <IoMdPin /> Maps
            </button> */}
            <button>
              <IoMdPaper /> News
            </button>
            <button>
              <IoMdImage /> Images
            </button>
            {/* <button>
              <IoMdPricetag /> Shopping
            </button> */}
            {/* <button>
              <IoMdAirplane /> Flights
            </button> */}
            {/* <button>
              <IoMdStats />
              <IoMdTrendingUp />
              Finance
            </button> */}
            <button>
              <IoMdPlay /> Videos
            </button>
            <button>
              <IoMdBookmarks /> Books
            </button>
            <button>
              <IoMdMore /> More
            </button>
          </div>
          <button>Tools</button>
          <button>SafeSearch on</button>
        </nav>
      </div>
    </div>
  );
}

export default Search;
