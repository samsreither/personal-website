import { Link } from "react-router-dom";
import "./Header.css";
import goodreadsIcon from "../../assets/goodreads-icon.png";
import githubIcon from "../../assets/github-icon.svg";
import linkedInIcon from "../../assets/linkedin-icon.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">SR</div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-element">
            <Link to="/about" className="header__nav-link">about</Link>
          </li>
          <li className="header__nav-element">projects</li>
          <li className="header__nav-element">ideas</li>
          <li className="header__nav-element">
            <Link to="/blog" className="header__nav-link">blog</Link>
          </li>
        </ul>
      </nav>
      <div className="header__socials">
        <a
          href="https://www.goodreads.com/user/show/164598087-sam-reither"
          className="header__social-link"
        >
          <img
            src={goodreadsIcon}
            alt="goodreads-icon"
            className="header__social-icon"
          />
        </a>
        <a
          href="https://github.com/samsreither"
          className="header__social-link"
        >
          <img
            src={githubIcon}
            alt="github-icon"
            className="header__social-icon"
          />
        </a>
        <a href="" className="header__social-link">
          <img
            src={linkedInIcon}
            alt="linkedin-icon"
            className="header__social-icon"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
