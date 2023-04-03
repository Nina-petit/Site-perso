import header_picture from './assets/hero_picture.JPG';
import { ReactComponent as BubbleIcon } from './assets/icons/bubble.svg';
import { ReactComponent as OpenIcon } from './assets/icons/open.svg';
import { ReactComponent as CssIcon} from './assets/icons/css.svg';
import { ReactComponent as FigmaIcon} from './assets/icons/figma.svg';
import { ReactComponent as GitIcon} from './assets/icons/git.svg';
import { ReactComponent as GraphQLIcon} from './assets/icons/graphql.svg';
import { ReactComponent as HtmlIcon} from './assets/icons/html.svg';
import { ReactComponent as JavaScriptIcon} from './assets/icons/javascript.svg';
import { ReactComponent as NodeJsIcon} from './assets/icons/nodejs.svg';
import { ReactComponent as PostgreSQLIcon} from './assets/icons/postgresql.svg';
import { ReactComponent as ReactNativeIcon} from './assets/icons/react-native.svg';
import { ReactComponent as ReduxIcon} from './assets/icons/redux.svg';
import { ReactComponent as SassIcon} from './assets/icons/sass.svg';
import { ReactComponent as TypeScriptIcon} from './assets/icons/typescript.svg';
import { ReactComponent as OclockIcon} from './assets/icons/oclock.svg';
import { ReactComponent as SkemaIcon} from './assets/icons/skema.svg';

import './App.scss';

function App() {
  const technologies = {
    experimented: [
      {id: 1, name: 'React Native', icon: <ReactNativeIcon/>},
      {id: 2, name: 'React.js', icon: <ReactNativeIcon/>},
      {id: 3, name: 'GraphQL', icon: <GraphQLIcon/>},
      {id: 4, name: 'CSS', icon: <CssIcon/>},
      {id: 5, name: 'PostgreSQL', icon: <PostgreSQLIcon/>},
      {id: 6, name: 'TypeScript', icon: <TypeScriptIcon/>},
      {id: 7, name: 'JavaScript', icon: <JavaScriptIcon/>},
      {id: 8, name: 'Figma', icon: <FigmaIcon/>}
    ],
    familiar: [
      {id: 1, name: 'HTML', icon: <HtmlIcon/>},
      {id: 2, name: 'Node.js', icon: <NodeJsIcon/>},
      {id: 3, name: 'Redux', icon: <ReduxIcon/>},
      {id: 4, name: 'Sass', icon: <SassIcon/>},
      {id: 5, name: 'Git', icon: <GitIcon/>}
    ]
  };

  const oclock_technologies = [<HtmlIcon/>, <CssIcon/>, <JavaScriptIcon/>, <NodeJsIcon/>, <PostgreSQLIcon/>, <ReactNativeIcon/>];

  const education = [
    {
      title: "Formation Développeur Web Fullstack JavaScript",
      date: "Janvier - juillet 2021",
      school: "O'Clock",
      description: "Titre professionnel Développeur Web et Web Mobile de niveau 5 correspondant à un Bac +2.",
    },
    {
      title: "Bac +3 en école de commerce",
      date: "2017-2021",
      school: "SKEMA",
      description: "2 ans de classe préparatoire économique (ECE) au Lycée Gaston Berger, Lille (59), 1 an à SKEMA dans le programme Grande École à Sophia Antipolis (06)",
    },
    {
      title: "Baccalauréat littéraire mention très bien",
      date: "2017",
      school: "Lycée Darchicourt, Hénin Beaumont (62)",
      description: "Abibac (baccalauréat français et allemand) avec une note de 1.0 (équivaut à 20/20)",
    },
  ]

  return (
    <div className="App">
      {
        //#region Navbar
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
        //#endregion
      }
      {
      //#region Hero section
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
      //#endregion
      }
      {
        //#region Skills
          <div className="skills-education">
            <div className="skills">
              <h3>Compétences et Formation</h3>
              <h4>Technologies</h4>
              <h5>Expérimentée</h5>
              <div className="skills__technologies">
                {technologies.experimented.map(techno =>
                  <div className="skills__technologies__technology">
                    {techno.icon}
                    <span>{techno.name}</span>
                  </div>
                )}
              </div>
              <h5>Familier</h5>
              <div className="skills__technologies">
                {technologies.familiar.map(techno =>
                  <div className="skills__technologies__technology">
                    {techno.icon}
                    <span>{techno.name}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="education">
              <h4>Formation</h4>
              <div className="education__content">
                <div className="education__line"/>
                <div className="education__boxes">
                  {education.map(education =>
                    <div className="education__box">
                      <div className="education__box__card">
                        <h6>{education.title}</h6>
                        <div className="education__box__card__info">
                          <span className="education__box__card__info__date">{education.date}</span>
                          <span className="education__box__card__info__school">{education.school}</span>
                          {education.school === "O'Clock" ?
                            <OclockIcon/>
                            : education.school === "SKEMA" ?
                            <SkemaIcon/>
                            : null
                          } 
                        </div>
                        <p>{education.description}</p>
                        {education.school === "O'Clock" &&
                          <div className="education__box__card__technologies">
                            {oclock_technologies.map(techno => 
                              <div className="technology">
                                {techno}
                              </div>
                            )}
                          </div>
                        }
                      </div>
                      <div className="education__box__shadow"/>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        //#endregion
      }
    </div>
  );
}

export default App;
