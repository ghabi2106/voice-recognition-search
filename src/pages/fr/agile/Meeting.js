import React from "react";
import { Link } from "react-router-dom";

export default function Meeting() {
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
                    href="#meetings"
                  >
                    Meetings
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
                    to="/agile"
                  >
                    Agile
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="agile">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Meetings</h3>
          <article id="meetings">
            <h6>Meetings</h6>
            <div>
              <img
                src="/img/agile/01-agile scrum meetings.PNG"
                alt="01-agile scrum meetings"
                className="mb-4"
              />
              <div className="row">
                <div className="col-sm-6 mb-row">
                  <div className="card">
                    <div className="card-head bg-blue-contrast">
                      <h5>RÉUNION DE PLANIFICATION DE SPRINT</h5>
                    </div>
                    <div className="card-body">
                      <p>
                        Se tient quelques jours avant un sprint et peut durer
                        quelques heures.
                      </p>
                      <h6>Dans la réunion:</h6>
                      <ul>
                        <li>Noter/prioriser les éléments du backlog</li>
                        <li>
                          Déterminer la disponibilité individuelle et d'équipe
                        </li>
                        <li>Déterminez quels éléments le sprint comprendra</li>
                        <li>
                          Répartir les tâches décidées parmi l'équipe
                          (généralement sur une base volontaire)
                        </li>
                        <li>
                          Fixer des objectifs / surmonter les obstacles pour le
                          sprint
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-row">
                  <div className="card">
                    <div className="card-head bg-orange">
                      <h5>DAILY STANDUP OR DAILY SCRUM</h5>
                    </div>
                    <div className="card-body">
                      <p>
                        Une réunion rapide (&lt;10 min.) tenue au début de
                        chaque journée dans un sprint.
                      </p>
                      <h6>Dans la réunion:</h6>
                      <ul>
                        <li>Ce qu'ils ont fait hier</li>
                        <li>Ce qu'ils vont faire aujourd'hui</li>
                        <li>
                          Tous les obstacles* auxquels ils sont confrontés
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-row">
                  <div className="card">
                    <div className="card-head bg-blue">
                      <h5>RÉTROSPECTIVE DU SPRINT</h5>
                    </div>
                    <div className="card-body">
                      <p>
                        Une brève réunion (&lt;1 heure) tenue peu de temps après
                        ou en conjonction avec la revue de sprint pour revoir le
                        "comment" du sprint.
                      </p>
                      <h6>Dans la réunion:</h6>
                      <ul>
                        <li>Comparez les résultats projetés et réels</li>
                        <li>Discutez des revers et des victoires</li>
                        <li>
                          Fixer des objectifs pour améliorer les futurs sprints
                        </li>
                        <li>
                          Discutez de ce qui a fonctionné et de ce qui n'a pas
                          fonctionné et faites les ajustements pertinents
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-row">
                  <div className="card">
                    <div className="card-head bg-orange-contrast">
                      <h5>REVUE DE SPRINT</h5>
                    </div>
                    <div className="card-body">
                      <p>
                        Une réunion informelle tenue à la fin d'un sprint pour
                        revoir le « quoi » (c'est-à-dire, quel travail a été
                        abordé) du sprint.
                      </p>
                      <h6>Dans la réunion:</h6>
                      <ul>
                        <li>
                          Inviter le propriétaire du produit et les parties
                          prenantes
                        </li>
                        <li>
                          Afficher les livrables/progrès réalisés pendant le
                          sprint
                        </li>
                        <li>
                          Les présentations PowerPoint ne sont pas autorisées
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
