import avatar from "../../assets/SR.png";
import wtwr from "../../assets/WTWR.jpeg";
import spots from "../../assets/Spots.png";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__left">
          <img src={avatar} alt="avatar" className="main__left-avatar" />
        </div>
        <div className="main__right">
          <h1 className="main__right-name">sam r</h1>
          <p className="main__right-description">
            full stack developer<br />javascript, react, node<br />background in finance and education<br />interest in ed-tech, startups, health<br />contact: email
          </p>
        </div>
      </div>
      <div className="main__latest">
        <h2 className="main__latest-title">
            -- some of my latest work --
        </h2>
        <div className="main__latest-cards">
            <a className="main__latest-cards-card" href="https://samr.crabdance.com/" target="_blank">
                <img src={wtwr} alt="what-to-wear" className="main__latest-cards-card-image" />
                <h3 className="main__latest-cards-card-text">What to Wear</h3>
                <p className="main__latest-cards-card-desc">React, Nodejs, Express, Google Cloud<br/>User Login/Registration<br/>MongoDB for Data Storage
                </p>

            </a>
            <a className="main__latest-cards-card">
                <img src="" alt="" className="main__latest-cards-card-image" />
                <h3 className="main__latest-cards-card-text">News Explorer</h3>
                <p className="main__latest-cards-card-desc">React, Nodejs, Express, Google Cloud</p>
            </a>
            <a className="main__latest-cards-card" href="https://samsreither.github.io/se_project_spots" target="_blank">
                <img src={spots} alt="" className="main__latest-cards-card-image" />
                <h3 className="main__latest-cards-card-text">Spots</h3>
                <p className="main__latest-cards-card-desc">Javascript, HTML, CSS</p>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
