import "./Footer.css";

import goodreadsIcon from "../../assets/goodreads-icon.png";
import githubIcon from "../../assets/github-icon.svg";
import linkedInIcon from "../../assets/linkedin-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">SR</div>
        <div className="footer__socials">
          <a
            href="https://www.goodreads.com/user/show/164598087-sam-reither"
            className="footer__social-link"
          >
            <img
              src={goodreadsIcon}
              alt="goodreads-icon"
              className="footer__social-icon"
            />
          </a>
          <a
            href="https://github.com/samsreither"
            className="footer__social-link"
          >
            <img
              src={githubIcon}
              alt="github-icon"
              className="footer__social-icon"
            />
          </a>
          <a href="" className="footer__social-link">
            <img
              src={linkedInIcon}
              alt="linkedin-icon"
              className="footer__social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
