//#region Imports
  import React, { useState } from 'react';

  import header_picture from './assets/hero_picture.JPG';
  import ui from './assets/ui.png';
  import high_fidelity from './assets/high_fidelity.png';
  import seo from './assets/seo.png';
  import xd from './assets/xd.png';
  import web_design from './assets/web_design.png';
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
  import { ReactComponent as OpquastIcon} from './assets/icons/opquast.svg';
  import { ReactComponent as StarIcon} from './assets/icons/star.svg';
  import { ReactComponent as CheckIcon} from './assets/icons/check.svg';
  import { ReactComponent as UsaIcon} from './assets/icons/usa.svg';
  import { ReactComponent as GermanyIcon} from './assets/icons/germany.svg';

  import './App.scss';
//#endregion

function App() {
  //#region Arrays
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

    const opquast_skills = [
      "Connaître les bonnes pratiques, leur conception et utilisation",
      "Prendre en compte la diversité et les exigences des utilisateurs",
      "Prévenir les risques, renforcer l'assurance qualité Web"
    ];

    const languages = [
      {name: "Anglais", description: "TOEFL ITP 645/677", icon: <UsaIcon className="language__icon"/>},
      {name: "Allemand", description: "Niveau C1, Abibac", icon: <GermanyIcon className="language__icon"/>}
    ];

    const courses = [
      {
        id: 1,
        name: "UI in Mobile Apps",
        author: "Michal Malewicz",
        description: "Apprendre à designer une application mobile fonctionnelle, Choisir les bonnes polices et couleurs, Détecter et résoudre les problèmes les plus communs dans le design d’applications mobiles, Créer des blockframes et utiliser la méthode du carré rouge pour aligner le contenu",
        picture: ui
      },
      {
        id: 2,
        name: "test1",
        author: "Michal",
        description: "test",
        picture: high_fidelity
      },
      {
        id: 3,
        name: "test2",
        author: "Michal",
        description: "test",
        picture: seo
      },
    ]

  //#endregion

  const [selectedCourseId, setSelectedCourseId] = useState(1);

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
      {
        //#region Certificate and languages
        <div className="certificate-languages">
          {
            //#region Certificate
            <div className="certificate">
              <h3>Certification</h3>
              <div className="opquast__header">
                <OpquastIcon className="opquast__header__icon"/>
                <div>
                  <h6>Maîtrise de la qualité en projet web</h6>
                  <span className="opquast__header__school">Opquast</span>
                </div>
              </div>
              <div className="opquast__mention">
                <span className="opquast__mention__text">Mention Avancé <span style={{fontWeight: 600}}>(825/100)</span></span>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
              </div>
              {opquast_skills.map(skill =>
                <div className="opquast__skill">
                  <CheckIcon className="opquast__skill__check"/>
                  <p>{skill}</p>
                </div>
              )}
            </div>
            //#endregion
          }
          {
            //#region Languages
            <div>
              <h3>Langues</h3>
              {languages.map(language =>
                <div className="language">
                  {language.icon}
                  <div>
                    <h6>{language.name}</h6>
                    <span>{language.description}</span>
                  </div>
                </div>
              )}
            </div>
            //#endregion
          }
        </div>
        //#endregion
      }
      <div className="courses">
        <h3>Cours suivis</h3>
        <div className="courses__list">
          {courses.map(course =>
            <div 
            className={"course__box" + (course.id === selectedCourseId ? " current_course" : course.id === selectedCourseId + 1 ? " next_course" : ((course.id === selectedCourseId - 1) || (selectedCourseId === 1 && course.id === 3)) ? " previous_course" : null)}
            >
              <img
                src={course.picture}
                alt="picture"
                className={"course__picture" + (course.id === selectedCourseId ? " current_course__picture" : course.id === selectedCourseId + 1 ? " next_course__picture" : ((course.id === selectedCourseId - 1) || (selectedCourseId === 1 && course.id === 3)) ? " previous_course__picture" : null)}
              />
              <div className="course__box__shadow"/>
              {course.id === selectedCourseId &&
                <>
                  <div className="course__box__side-shadow course__box__side-shadow__right"/>
                  <div className="course__box__side-shadow course__box__side-shadow__left"/>
                </>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
