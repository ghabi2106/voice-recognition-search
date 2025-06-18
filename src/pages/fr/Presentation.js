import React from "react";
import { Link } from "react-router-dom";

export default function Presentation() {
  return (
    <>
      <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
        <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
        <nav className="small" id="toc">
          <ul className="list-unstyled">
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Contents
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#capgemini"
                  >
                    Capgemini
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#diginov"
                  >
                    Diginov
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#itgwana"
                  >
                    ITGWANA
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#taysir"
                  >
                    Taysir Solutions
                  </a>
                </li>
              </ul>
            </li>
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Related links
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/entityframework"
                  >
                    Entity Framework
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Presentation</h3>
          <article id="bio">
            <h6>Présentation</h6>
            <div>
              <p>
                Je suis <strong>Assaad Ghabi</strong>, ingénieur en
                développement Full Stack .NET et Angular avec{" "}
                <strong>8 ans d’expérience</strong>, diplômé de l’École
                Nationale d’Ingénieurs de Monastir en 2017.
              </p>
            </div>
          </article>
          <article id="taysir">
            <h6>🏢 Taysir Solutions</h6>
            <div>
              <p>
                J’ai démarré ma carrière chez <strong>Taysir Solutions</strong>,
                une entreprise spécialisée dans le développement de solutions
                informatiques pour différents secteurs : <strong>santé</strong>,{" "}
                <strong>finance</strong>, et <strong>services</strong>.
              </p>
              <p>
                J’ai eu l’opportunité de participer à{" "}
                <strong>trois projets majeurs</strong> :
                <ul>
                  <li>
                    <strong>AddInvoice</strong> : une solution de facturation
                    pour le secteur financier.
                  </li>
                  <li>
                    <strong>DMI</strong> : une application de gestion de
                    dossiers médicaux.
                  </li>
                  <li>
                    <strong>Ticketing</strong> : une solution de gestion de
                    tickets orientée services, développée{" "}
                    <strong>from scratch</strong>.
                  </li>
                </ul>
              </p>
              <p>
                Ce dernier projet m’a particulièrement marqué, car en plus du
                développement, j’ai eu un <strong>rôle managérial</strong> :
                <br />
                je <strong>supervisais une équipe de 6 développeurs</strong>,
                gérais les formations internes, la montée en compétence des
                membres, et participais activement aux sprints hebdomadaires
                selon la méthode <strong>Agile Scrum</strong>.
              </p>
            </div>
          </article>
          <article id="diginov">
            <h6>🏢 Diginov</h6>
            <div>
              <p>
                Par la suite, j’ai rejoint <strong>Diginov</strong>, où j’ai
                travaillé sur deux plateformes développées from scratch pour le
                Ministère de l’Économie des <strong>Émirats Arabes Unis</strong>{" "}
                :
              </p>
              <ul>
                <li>
                  <strong>UAE SME</strong> : un portail offrant aux PME un accès
                  aux programmes gouvernementaux, services de conseil, et
                  financements.
                </li>
                <li>
                  <strong>FGIC</strong> : un SIG permettant de visualiser des
                  données économiques à l’échelle nationale via des cartes
                  interactives.
                </li>
              </ul>
              <p>
                Dans ce cadre, j’intervenais sur l’
                <strong>analyse des besoins</strong>, la{" "}
                <strong>rédaction des cahiers des charges</strong>, puis le{" "}
                <strong>développement full stack</strong> avec ASP.NET Core et
                SQL Server, toujours en mode Agile, avec des sprints d’une
                semaine.
              </p>
            </div>
          </article>
          <article id="capgemini">
            <h6>🏢 Capgemini</h6>
            <div>
              <p>
                Depuis 2021, je fais partie de{" "}
                <strong>Capgemini Engineering</strong>, où je contribue au
                développement de solutions pour le constructeur{" "}
                <strong>Volkswagen</strong>, notamment sur les projets{" "}
                <strong>AskMe</strong>, <strong>TV</strong> et{" "}
                <strong>PPRobEE</strong>.
              </p>
              <p>
                Ces outils sont utilisés par les ateliers automobiles pour gérer
                :
                <br />
                les <strong>estimations</strong>, <strong>plannings</strong>,{" "}
                <strong>opérations</strong>, <strong>inspections</strong>, etc.
              </p>
              <p>
                J’interviens aussi bien sur la partie{" "}
                <strong>back-end (.NET Core, Worker Services)</strong> que{" "}
                <strong>front-end (Angular)</strong>, avec également des
                missions de <strong>support</strong>,{" "}
                <strong>onboarding de nouveaux membres</strong>,{" "}
                <strong>tests unitaires</strong>, et{" "}
                <strong>revue de code</strong>.
              </p>
              <p>
                Nous appliquons pleinement la{" "}
                <strong>méthodologie Agile Scrum</strong>, avec des{" "}
                <strong>sprints de 2 semaines</strong> et toutes les cérémonies
                agiles (daily, sprint planning, revue, rétrospective), dans un{" "}
                <strong>environnement international anglophone</strong>.
              </p>
              <p>
                <strong>Actuellement</strong>, j’interviens aussi comme{" "}
                <strong>Functional Owner</strong> pour le client{" "}
                <strong>SEAT</strong> (depuis avril 2025), avec des missions
                d’analyse fonctionnelle, rédaction des user stories,
                priorisation et validation métier.
              </p>
            </div>
          </article>
          <article id="conclusion">
            <h6>Conclusion</h6>
            <div>
              <p>
                Voilà pour mon parcours.
                <br />
                J’espère que ma présentation a été claire et je serais ravi de
                répondre à vos questions.
              </p>
            </div>
          </article>
          <article id="leave">
            <h6>Pourquoi souhaitez-vous quitter Capgemini ?</h6>
            <div>
              <p>
                Je suis reconnaissant de ce que j’ai appris chez Capgemini,{" "}
                <br />
                mais récemment,{" "}
                <strong>la charge de travail est devenue trop intense</strong>,
                avec peu de temps pour{" "}
                <strong>se concentrer sur l’amélioration continue</strong>.
              </p>
              <p>
                L’organisation de l'information est parfois confuse, ce qui rend
                les tâches{" "}
                <strong>plus longues qu’elles ne devraient l’être.</strong>
              </p>
              <p>
                Je cherche donc un cadre plus <strong>structuré</strong>,{" "}
                <strong>équilibré</strong>, et{" "}
                <strong>orienté vers l’efficacité et la progression</strong>.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
