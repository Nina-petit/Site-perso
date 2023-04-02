import header_picture from './assets/hero_picture.JPG';
import { ReactComponent as BubbleIcon } from './assets/icons/bubble.svg';
import { ReactComponent as OpenIcon } from './assets/icons/open.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <p className="navbar__logo">NINA <span style={{fontWeight: "800"}}>PETIT</span></p>
        <div className="navbar__links">
          <p>Accueil</p>
          <p>Compétences</p>
          <p>Projet personnel</p>
          <div className="navbar__contact-button">
            <p>Contactez-moi</p>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-section__left">
          <div className="hero-section__info">
            <h1>Nina <span style={{fontWeight: "800"}}>Petit</span></h1>
            <h2>Développeuse web et mobile</h2>
            <p className="hero-section__info__presentation">
              Je suis passionnée par le développement de sites web et
              d’applications mobiles, et je recherche actuellement un emploi en
              CDI en full remote.
            </p>
            <div className="hero-section__info__buttons">
              <button className="hero-section__info__buttons__contact">
                <p>Contactez-moi</p>
                <BubbleIcon className="hero-section__info__buttons__contact__icon"/>
              </button>
              <button className="hero-section__info__buttons__cv">
                <p>
                  Ouvrir mon CV
                </p>
                <OpenIcon className="hero-section__info__buttons__cv__icon"/>
              </button>
            </div>
          </div>
        </div>
        <img src={header_picture} alt="me" className="hero-section__img" />
      </div>
    </div>
  );
}

export default App;
