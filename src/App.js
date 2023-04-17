//#region Imports
  import React, { useState } from 'react';
  import { send } from 'emailjs-com';

  import { BubbleIcon, OpenIcon, CssIcon, FigmaIcon, GitIcon, GraphQLIcon, HtmlIcon, JavaScriptIcon, NodeJsIcon, PostgreSQLIcon, ReactNativeIcon, ReduxIcon, SassIcon, TypeScriptIcon, OclockIcon, SkemaIcon, OpquastIcon, StarIcon, CheckIcon, UsaIcon, GermanyIcon, ChevronLeftIcon, ChevronRightIcon, DownloadAppStoreIcon, PhoneIcon, EmailIcon } from './assets/icons';
  import header_picture from './assets/hero_picture.JPG';
  import CV from './assets/CV.pdf';
  import ui from './assets/ui.png';
  import high_fidelity from './assets/high_fidelity.png';
  import seo from './assets/seo.png';
  import xd from './assets/xd.png';
  import web_design from './assets/web_design.png';
  import vegetalist_fridge from './assets/vegetalist_fridge.png';
  import vegetalist_recipes from './assets/vegetalist_recipes.png';
  import download_playstore from './assets/download_playstore.png';

  import './App.scss';
//#endregion

function App() {
  //#region Arrays
    const technologies = {
      experimented: [
        {name: 'React Native', icon: <ReactNativeIcon/>},
        {name: 'React.js', icon: <ReactNativeIcon/>},
        {name: 'GraphQL', icon: <GraphQLIcon/>},
        {name: 'CSS', icon: <CssIcon/>},
        {name: 'PostgreSQL', icon: <PostgreSQLIcon/>},
        {name: 'TypeScript', icon: <TypeScriptIcon/>},
        {name: 'JavaScript', icon: <JavaScriptIcon/>},
        {name: 'Figma', icon: <FigmaIcon/>}
      ],
      familiar: [
        {name: 'HTML', icon: <HtmlIcon/>},
        {name: 'Node.js', icon: <NodeJsIcon/>},
        {name: 'Redux', icon: <ReduxIcon/>},
        {name: 'Sass', icon: <SassIcon/>},
        {name: 'Git', icon: <GitIcon/>}
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
        skills: [
          "Apprendre à designer une application mobile fonctionnelle",
          "Choisir les bonnes polices et couleurs",
          "Détecter et résoudre les problèmes les plus communs dans le design d’applications mobiles",
          "Créer des blockframes et utiliser la méthode du carré rouge pour aligner le contenu"
        ],
        picture: ui,
        url: "https://hype4.academy/video-courses/mobile-ui-1"
      },
      {
        id: 2,
        name: "High Fidelity",
        author: "Michal Malewicz",
        skills: [
          "Apprendre à designer une application mobile fonctionnelle et élégante",
          "Choisir les bonnes polices et couleurs, créer de beaux dégradés et bien associer les couleurs",
          "Créer des ombres extérieures et intérieures de la bonne manière",
          "Ajouter des décorations pour rendre le produit unique"
        ],
        picture: high_fidelity,
        url: "https://hype4.academy/video-courses/mobile-ui-2"
      },
      {
        id: 3,
        name: "Complete Web Design",
        author: "Vako Shvili",
        skills: [
          "Apprendre les concepts du graphic design comme l’agencement, la typographie, la hiérarchie visuelle, et d’autres astuces de design",
          "Créer d’élégants sites web avec Figma"
        ],
        picture: web_design,
        url: "https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/learn/lecture/17944210?start=615#content"
      },
      {
        id: 4,
        name: "UI/UX App Design",
        author: "Axel Paris",
        skills: [
          "Créer et utiliser des Personas",
          "Créer des Wireframes",
          "Concevoir un parcours utilisateur (UX)",
          "Créer une interface utilisateur (UI)",
          "Prototyper ses créations (les rendre interactives)",
          "Présenter & mettre en avant ses designs"
        ],
        picture: xd,
        url: "https://www.udemy.com/course/designer-des-applications-mobiles/learn/lecture/10643848?start=15#content"
      },
      {
        id: 5,
        name: "Mobile App Marketing & App Store Optimization (ASO)",
        author: "Darius Mora",
        skills: [
          "App Store Optimization (ASO)",
          "La différence entre SEO et ASO, et comment créer la bonne stratégie",
          "Le modèle A.A.R.R.R (Acquisition, activation, rétention, recommandation, revenu)",
          "Monétiser son application et choisir la bonne stratégie de prix",
          "Obtenir de nouveaux utilisateurs gratuitement avec le bon marketing",
          "Scaler son application et utiliser les publicités payantes avec l’ASO",
          "Éviter les désinstallations et augmenter la rétention",
          "Être mis en avant sur l’App Store ou sur Google Play en utilisant l’ASO",
          "Créer de superbes icônes d’application, captures d’écran et vidéos pour convertir les utilisateurs"
        ],
        picture: seo,
        url: "https://www.udemy.com/course/app_marketing/learn/lecture/36497680?start=15#overview"
      },
    ];

    const vegetalistInfo = [
      <p>La personne ajoute ses ingrédients en les scannant ou en naviguant sur la page des ingrédients, puis a accès à une liste de recettes triées par nombre d’ingrédients manquants. Elle peut les filtrer par termes, catégorie ou ingrédients présents. Elle peut également ajouter les recettes en favoris, ou leur y ajouter des j’aime et des commentaires.</p>,
      <ul>
        <li>Mise en place d’abonnements in-app</li>
        <li>Inscription/connexion avec email, Facebook, Google et Apple</li>
        <li>SDK Facebook pour promouvoir l’application avec Facebook Ads</li>
        <li>Ajout de Google Admob pour afficher des publicités dans l’application</li>
      </ul>,
      <p>React Native, TypeScript, Apollo Client, GraphQL, PostgreSQL, Git, utilisation de données extérieures (Open Food Facts)</p>
    ]
  //#endregion

  const [selectedCourseId, setSelectedCourseId] = useState(1);
  const [selectedTabId, setSelectedTabId] = useState(1);

  const [toSend, setToSend] = useState({
    from_name: '',
    subject: '',
    message: '',
    reply_to: ''
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_8xv9aw2',
      'template_si36r4n',
      toSend,
      'G-lOYQ0JadxS0MyQF'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div className="App">
      {
        //#region Navbar
        <div className="navbar">
          <div className="navbar__logo">
            <span>NINA </span>
            <span className="navbar__logo__last-name">PETIT</span>
          </div>
          <nav className="navbar__links">
            <ul>
              <li><a href="#" title="Aller à la section Accueil">Accueil</a></li>
              <li><a href="#skills" title="Aller à la section Compétences et Formation">Compétences et Formation</a></li>
              <li><a href="#certificate" title="Aller à la section Certification et Langues">Certification et Langues</a></li>
              <li><a href="#courses" title="Aller à la section Cours suivis">Cours suivis</a></li>
              <li><a href="#personal-project" title="Aller à la section Projet personnel">Projet personnel</a></li>
              <li><a href="#contact" title="Aller à la section Contact" className="navbar__links__contact"><div>
                <span>Contactez-moi</span>
              </div></a></li>
            </ul>
          </nav>
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
                <a className="hero-section__info__buttons__contact" href="#contact">
                  <p>Contactez-moi</p>
                  <BubbleIcon className="hero-section__info__buttons__contact__icon"/>
                </a>
                <a className="hero-section__info__buttons__cv" href={CV} without rel="noopener noreferrer" target="_blank">
                  <p>Ouvrir mon CV</p>
                  <OpenIcon className="hero-section__info__buttons__cv__icon"/>
                </a>
              </div>
            </div>
          </div>
          <img src={header_picture} alt="Presentation of me" className="hero-section__img" />
        </div>
        //#endregion
      }
      {
        //#region Skills and education
          <div className="skills-education">
            {
              //#region Skills
              <div className="skills" id="skills">
                <h3>Compétences et Formation</h3>
                <h4>Technologies</h4>
                <h5>Expérimentée</h5>
                <div className="skills__technologies">
                  {technologies.experimented.map(techno =>
                    <div className="skills__technologies__technology">
                      <div>{techno.icon}</div>
                      <span>{techno.name}</span>
                    </div>
                  )}
                </div>
                <h5>Familier</h5>
                <div className="skills__technologies">
                  {technologies.familiar.map(techno =>
                    <div className="skills__technologies__technology">
                      <div>{techno.icon}</div>
                      <span>{techno.name}</span>
                    </div>
                  )}
                </div>
              </div>
              //#endregion
            }
            {
              //#region Education
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
                          <div className='education__box__card__bubble'/>
                        </div>
                        <div className="education__box__shadow"/>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              //#endregion
            }
            {[...Array(6)].map((e, i) => <div className="skills-education__decoration" id={`decoration_${i}`}/>)}
          </div>
        //#endregion
      }
      {
        //#region Certificate and languages
        <div className="certificate-languages">
          {
            //#region Certificate
            <div className="certificate" id="certificate">
              <h3>Certification</h3>
              <a href="https://www.opquast.com/certification/" rel="noopener noreferrer" target="_blank">
                <div className="opquast__header">
                  <OpquastIcon className="opquast__header__icon"/>
                  <div>
                    <h6>Maîtrise de la qualité en projet web</h6>
                    <span className="opquast__header__school">Opquast <OpenIcon className="opquast__header__open-icon"/></span>
                  </div>
                </div>
              </a>
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
      {
        //#region Courses
        <div className="courses" id="courses">
          <h3>Cours suivis</h3>
          <div className="courses__list">
            {courses.map(course => {
              if((selectedCourseId - 1 <= course.id && course.id <= selectedCourseId + 1) || (course.id === 1 && selectedCourseId === 5) ||  (course.id === 5 && selectedCourseId === 1)) {
                return (
                  <div 
                  className={"course__box" + (course.id === selectedCourseId ? " current_course" : ((course.id === selectedCourseId + 1) || (selectedCourseId === 5 && course.id === 1)) ? " next_course" : ((course.id === selectedCourseId - 1) || (selectedCourseId === 1 && course.id === 5)) ? " previous_course" : null)}
                  >
                    <img
                      src={course.picture}
                      alt="Course presentation"
                      className={"course__picture" + (course.id === selectedCourseId ? " current_course__picture" : ((course.id === selectedCourseId + 1) || (selectedCourseId === 5 && course.id === 1)) ? " next_course__picture" : ((course.id === selectedCourseId - 1) || (selectedCourseId === 1 && course.id === 5)) ? " previous_course__picture" : null)}
                    />
                    <div className="course__box__shadow"/>
                    {course.id === selectedCourseId &&
                      <>
                        <div className="course__box__side-shadow course__box__side-shadow__right"/>
                        <div className="course__box__side-shadow course__box__side-shadow__left"/>
                      </>
                    }
                  </div>
                )
              } else {
                return <></>
              }
            })}
          </div>
          <div style={{marginBottom: "20px", left: "-49px", position: "relative"}}>
            <button
              className="courses__button courses__button__left"
              onClick={() => setSelectedCourseId(selectedCourseId > 1 ? selectedCourseId - 1 : 5)}
            >
              <ChevronLeftIcon className="chevron chevron__left"/>
            </button>
            <button
              className="courses__button courses__button__right"
              onClick={() => setSelectedCourseId(selectedCourseId < courses.length ? selectedCourseId + 1 : 1)}
            >
              <ChevronRightIcon className="chevron"/>
            </button>
          </div>
          <div className="courses__info">
            <a href={courses[selectedCourseId - 1].url} rel="noopener noreferrer" target="_blank">
              <h6>{courses[selectedCourseId - 1].name} <span className="courses__author">- {courses[selectedCourseId - 1].author}</span> <OpenIcon className="courses__open-icon"/></h6>
            </a>
            <ul>
              {courses[selectedCourseId - 1].skills.map(skill =>
                <li>{skill}</li>
              )}
            </ul>
          </div>
        </div>
        //#endregion
      }
      {
        //#region Personal project
        <div className="personal-project" id="personal-project">
          <div className="personal_project__pictures">
            <img className="personal-project__picture personal-project__picture__fridge" src={vegetalist_fridge}/>
            <img className="personal-project__picture personal-project__picture__recipes" src={vegetalist_recipes}/>
          </div>
          <div>
            <h3>Vegetalist</h3>
            <h4>Application en React Native</h4>
            <p>Création d'une application qui se base sur les ingrédients des utilisateur.ice.s pour trouver des recettes vegan réalisables.</p>
            <div className="personal-project__info">
              <div className="personal-project__info__tabs">
                <button 
                  className="personal-project__info__tabs__tab" style={{background: selectedTabId === 1 && "linear-gradient(90deg, #D4D8F9 0%, #D5D9F8 100%)"}}
                  onClick={() => setSelectedTabId(1)}
                >
                  <span style={{color: selectedTabId === 1 && "#596078"}}>Fonctionnement</span>
                </button>
                <button
                  className="personal-project__info__tabs__tab" style={{background: selectedTabId === 2 && "linear-gradient(90deg, #D5DAF8 0%, #D4DDF8 100%)"}}
                  onClick={() => setSelectedTabId(2)}
                >
                  <span style={{color: selectedTabId === 2 && "#596078"}}>Implémentations</span>
                </button>
                <button
                  className="personal-project__info__tabs__tab" style={{background: selectedTabId === 3 && "linear-gradient(90deg, #D4DDF8 0%, #D4DFF8 100%)"}}
                  onClick={() => setSelectedTabId(3)}
                >
                  <span style={{color: selectedTabId === 3 && "#596078"}}>Technologies</span>
                </button>
              </div>
              <div className="personal-project__info__box">
                {vegetalistInfo[selectedTabId - 1]}
              </div>
              <div className="personal-project__info__shadow"/>
            </div>
            <div className="personal-project__buttons">
              <a href="https://play.google.com/store/apps/details?id=com.vegetalist&hl=fr" without rel="noopener noreferrer" target="_blank">
                <img className="personal-project__buttons__playstore" src={download_playstore}/>
              </a>
              <a href="https://apps.apple.com/fr/app/vegetalist-recettes-vegan/id1636482445" without rel="noopener noreferrer" target="_blank">
                <DownloadAppStoreIcon className="personal-project__buttons__appstore"/>
              </a>
            </div>
          </div>
        </div>
        //#endregion
      }
      {
        //#region Contact
        <div className="contact" id="contact">
          <h3>Contactez-moi</h3>
          <h4>Coordonnées</h4>
          <div className="contact__details">
            <a href="tel:+33643119907">
              <div>
                <PhoneIcon/>
                <a href="tel:+33643119907">06 43 11 99 07</a>
              </div>
            </a>
            <a href="mailto: nina.petit6@gmail.com">
              <div>
                <EmailIcon/>
                <span>nina.petit6@gmail.com</span>
              </div>
            </a>
          </div>
          <div className="contact__box" onSubmit={onSubmit}>
            <form className="contact__box__card">
              <div className="contact__box__card__first-line">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Nom"
                  value={toSend.from_name}
                  onChange={handleChange}
                  className="contact__box__card__input contact__box__card__first-line__name"
                />
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Email"
                  value={toSend.reply_to}
                  onChange={handleChange}
                  className="contact__box__card__input"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                value={toSend.subject}
                onChange={handleChange}
                className="contact__box__card__input"
              />
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                value={toSend.message}
                onChange={handleChange}
                className="contact__box__card__input contact__box__card__input__message"
              />
              <input type="submit" value="Envoyer"/>
            </form>
            <div className="contact__box__shadow"/>
          </div>
        </div>
        //#endregion
      }
    </div>
  );
}

export default App;
