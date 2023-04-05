import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { InputContext } from "../components/InputContext";
import useSearch from "../components/useSearch";
import Logo from "../assets/Logo.png";
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
} from "react-icons/io";
import GoogleLogo from "../assets/GoogleLogo.png";
import "./Search.css";

interface IInputType {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

function Search() {
  const inputContext = useContext<IInputType>(InputContext);
  const [currentInput, setCurrentInput] = useState<string>(inputContext.input);

  const { data } = useSearch(inputContext.input);

  function search(event: React.FormEvent<HTMLFormElement>) {
    inputContext.setInput(currentInput);
    event.preventDefault();
  }

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
            <form
              className="search__search"
              onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                search(event)
              }
            >
              <input
                value={currentInput}
                className="search__search__input"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setCurrentInput(event.target.value)
                }
              />
              {currentInput ? (
                <button className="search__search__close">
                  <IoMdClose onClick={() => setCurrentInput("")} />
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
            </form>
          </div>
          <div className="search__top__right">
            <button className="search__top__icon">
              <IoMdSettings />
            </button>
            <button className="search__top__icon">
              <IoMdApps />
            </button>
            <button className="search__top__icon">
              <img src={Logo} alt="" className="search__top__avatar" />
            </button>
          </div>
        </div>
        <nav className="search__nav">
          <div className="search__nav__options">
            <div className="search__nav__option">
              <IoMdSearch className="search__nav__icon" /> All
            </div>
            <div className="search__nav__option">
              <IoMdImage className="search__nav__icon" /> Images
            </div>
            <div className="search__nav__option">
              <IoMdPaper className="search__nav__icon" /> News
            </div>
            <div className="search__nav__option">
              <IoMdPlay className="search__nav__icon" /> Videos
            </div>
            <div className="search__nav__option">
              <IoMdBookmarks className="search__nav__icon" /> Books
            </div>
            <div className="search__nav__option">
              <IoMdMore className="search__nav__icon" /> More
            </div>
          </div>
          <button className="search__nav__tools">Tools</button>
        </nav>
      </div>
      {inputContext.input && (
        <div className="search__results">
          <p className="search__results__info">
            About {data?.searchInformation.formattedTotalResults} results {"("}
            {data?.searchInformation.formattedSearchTime} seconds{")"}
          </p>

          {data?.items.map((item: any, index: number) => (
            <div className="search__results__item" key={index}>
              <div className="search__results__text">
                <a href={item.link} className="search__results__link">
                  <p className="search__results__url">{item.displayLink}</p>
                  <h2 className="search__results__title">{item.title}</h2>
                </a>
                <p className="search__results__snippet">{item.snippet}</p>
              </div>
              {item.pagemap?.cse_image && item.pagemap?.cse_image[0].src && (
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
