import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputContext } from "../components/InputContext";
import Logo from "../assets/Logo.png";
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

interface IInputType {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const luckyOptions: string[] = [
  "Artistic",
  "Doodly",
  "Playful",
  "Hungry",
  "Puzzled",
  "Stellar",
  "Trendy",
  "Wonderful",
];

function Home() {
  const inputContext = useContext<IInputType>(InputContext);
  const navigate = useNavigate();
  const [currentInput, setCurrentInput] = useState<string>("");

  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    inputContext.setInput(currentInput);
    navigate("/search");
  }

  function lucky() {
    const option = Math.floor(Math.random() * 8);
    inputContext.setInput(`I'm feeling ${luckyOptions[option]}`);
    navigate("/search");
  }

  return (
    <div className="main">
      <nav className="main__nav">
        <div className="main__nav__side">
          <Link
            to="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header"
            className="main__left__link"
          >
            About
          </Link>
          <Link
            to="https://store.google.com/US/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US"
            className="main__left__link"
          >
            Store
          </Link>
        </div>
        <div className="main__nav__side">
          <Link
            to="https://www.google.com/gmail/about/"
            className="main__right__link"
          >
            Gmail
          </Link>
          <Link
            to="https://www.google.com/imghp?hl=en&ogbl"
            className="main__right__link"
          >
            Images
          </Link>
          <button className="main__nav__button">
            <IoMdApps className="main__nav__apps" />
          </button>
          {true ? (
            <button className="main__nav__button">
              <img src={Logo} alt="" className="main__nav__avatar" />
            </button>
          ) : (
            <div>Sign In</div>
          )}
        </div>
      </nav>
      <form
        className="main__body"
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => search(event)}
      >
        <figure className="main__body__logo">
          <img src={GoogleLogo} alt="" />
        </figure>
        <div className="main__search__container">
          <div className="main__search">
            <IoMdSearch className="main__search__left" />
            <input
              value={currentInput}
              className="main__search__input"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCurrentInput(event.target.value)
              }
            />
            {currentInput && (
              <button className="main__search__close">
                <IoMdClose onClick={() => setCurrentInput("")} />
              </button>
            )}

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
          <button className="main__buttons__feeling" onClick={lucky}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      <div className="main__space"></div>
      <div className="main__footer">
        <div className="main__footer__left">
          <Link
            to="https://ads.google.com/intl/en_us/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            className="main__footer__link"
          >
            Advertising
          </Link>
          <Link
            to="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
            className="main__footer__link"
          >
            Business
          </Link>
          <Link
            to="https://google.com/search/howsearchworks/?fg=1"
            className="main__footer__link"
          >
            How Search works
          </Link>
        </div>
        <div className="main__footer__middle">
          <Link
            to="https://sustainability.google/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content="
            className="main__footer__link"
          >
            <IoMdLeaf /> Carbon neutral since 2007
          </Link>
        </div>
        <div className="main__footer__right">
          <Link
            to="https://policies.google.com/privacy?hl=en&fg=1"
            className="main__footer__link"
          >
            Privacy
          </Link>
          <Link
            to="https://policies.google.com/terms?hl=en&fg=1"
            className="main__footer__link"
          >
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
