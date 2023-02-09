import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InputContext } from "../components/InputContext";
import useSearch from "../components/useSearch";
import {
  IoMdApps,
  IoMdSearch,
  IoMdMic,
  IoMdCamera,
  IoMdSettings,
  IoMdClose,
  IoMdImage,
  IoMdPaper,
  IoMdPlay,
  IoMdBookmarks,
  IoMdMore,
  IoMdPin,
  IoMdPricetag,
  IoMdAirplane,
  IoMdStats,
} from "react-icons/io";
import GoogleLogo from "../assets/GoogleLogo.png";
import "./Search.css";

function Search() {
  const inputContext = useContext(InputContext);

  const { data } = useSearch(inputContext.input);

  console.log(data);

  return (
    <div className="search">
      <div className="search__header">
        <div className="search__top">
          <div className="search__top__left">
            <Link to="/" className="search__logo__wrapper">
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
              {inputContext.input ? (
                <button className="search__search__close">
                  <IoMdClose onClick={() => inputContext.setInput("")} />
                </button>
              ) : null}
              <div className="search__search__box">
                <button className="search__search__icon">
                  <IoMdMic />
                </button>
                <button className="search__search__icon">
                  <IoMdCamera />
                </button>
                <button className="search__search__magnifying">
                  <IoMdSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="search__top__right">
            <button className="search__top__icon">
              <IoMdSettings />
            </button>
            <button className="search__top__icon">
              <IoMdApps />
            </button>
            <button className="search__top__icon">
              <div className="search__top__avatar"></div>
            </button>
          </div>
        </div>
        <nav className="search__nav">
          <div className="search__nav__options">
            <Link to="/all" className="search__nav__option">
              <IoMdSearch className="search__nav__icon" /> All
            </Link>
            <Link to="/images" className="search__nav__option">
              <IoMdImage className="search__nav__icon" /> Images
            </Link>
            <Link to="/news" className="search__nav__option">
              <IoMdPaper className="search__nav__icon" /> News
            </Link>
            <Link to="/videos" className="search__nav__option">
              <IoMdPlay className="search__nav__icon" /> Videos
            </Link>
            <Link to="/books" className="search__nav__option">
              <IoMdBookmarks className="search__nav__icon" /> Books
            </Link>
            <button className="search__nav__option">
              <IoMdMore className="search__nav__icon" /> More
            </button>
            {/* <Link to="/maps" className="search__nav__option">
              <IoMdPin className="search__nav__icon" /> Maps
            </Link> */}
            {/* <Link to="/shopping" className="search__nav__option">
              <IoMdPricetag className="search__nav__icon" /> Shopping
            </Link> */}
            {/* <Link to="/flights" className="search__nav__option">
              <IoMdAirplane className="search__nav__icon" /> Flights
            </Link> */}
            {/* <Link to="/finance" className="search__nav__option">
              <IoMdStats className="search__nav__icon" />
              Finance
            </Link> */}
          </div>
          <button className="search__nav__tools">Tools</button>
        </nav>
      </div>
      {false && (
        <div className="search__results">
          <p className="search__results__info">
            About {data?.searchInformation.formattedTotalResults} results {"("}
            {data?.searchInformation.formattedSearchTime} seconds{")"}
          </p>

          {data?.items.map((item, index) => (
            <div className="search__results__item" key={index}>
              <div className="search__results__text">
                <a href={item.link} className="search__results__link">
                  <p className="search__results__url">{item.displayLink}</p>
                  <h2 className="search__results__title">{item.title}</h2>
                </a>
                <p className="search__results__snippet">{item.snippet}</p>
              </div>
              {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0].src && (
                  <figure className="search__results__figure">
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                      className="search__results__image"
                    />
                  </figure>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
