import React from "react";
import { Link } from "react-router-dom";

export default function Retrospective() {
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
                    href="#introduction"
                  >
                    Sprint Retrospective
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#purpose"
                  >
                    Purpose
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#length"
                  >
                    Length
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#questions"
                  >
                    Questions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#participants"
                  >
                    Participants
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
          <h3>Sprint Retrospective</h3>
          <article id="introduction">
            <h6>Sprint Retrospective</h6>
            <div>
              <p>
                La sprint retrospective est une réunion ou un atelier qui a lieu
                à la fin de chaque sprint. Elle intervient :
              </p>
              <ul>
                <li>à la suite de la sprint review</li>
                <li>et avant la réunion de planification du sprint à venir.</li>
              </ul>
              <p>
                la sprint retrospective s'inscrit dans le principe
                d'amélioration continue. L'objectif est que le prochain sprint
                soit plus efficace que le précédent et ainsi de suite. C'est une
                méthode empirique, c'est-à-dire basée sur l'expérience et sur
                l'auto-apprentissage.
              </p>
            </div>
          </article>
          <article id="participants">
            <h6>Participants</h6>
            <div>
              <p>chaque membre de l’équipe Scrum doit y participerة</p>
              <ul>
                <li>le Product Owner</li>
                <li>l’équipe de développement</li>
                <li>le Scrum Master.</li>
              </ul>
            </div>
          </article>
          <article id="purpose">
            <h6>Purpose</h6>
            <ul>
              <li>
                <p>
                  Examine how the just-completed sprint went as far as people,
                  relationships, processes, and tools.
                </p>
              </li>
              <li>
                <p>Identify and order what went well.</p>
              </li>
              <li>
                <p>Do the same with things that didn’t go well.</p>
              </li>
              <li>
                <p>Identify potential improvements.</p>
              </li>
              <li>
                <p>
                  Create a plan for implementing improvements to the way the
                  Scrum team accomplishes its work.
                </p>
              </li>
            </ul>
          </article>
          <article id="length">
            <h6>Longueur</h6>
            <div>
              <p>A sprint retrospectives often run:</p>
              <ul>
                <li>
                  <p>45 minutes pour un sprint d'une semaine</p>
                </li>
                <li>
                  <p>1h30 pour un sprint de deux semaines</p>
                </li>
                <li>
                  <p>2h25 pour un sprint de trois semaines</p>
                </li>
                <li>
                  <p>3 heures pour un sprint d'un mois</p>
                </li>
              </ul>
            </div>
          </article>
          <article id="questions">
            <h6>Questions</h6>
            <div>
              <p>
                Les questions fréquemment posées dans une rétrospective de
                sprint incluent :
              </p>
              <ul>
                <li>
                  <p>
                    <strong>
                      Qu'est-ce qui s'est bien passé dans le sprint ?{" "}
                    </strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Qu'est-ce qui n'allait pas dans le sprint ?</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Qu'avons-nous appris ? </strong> Qu'est-ce que
                    l'équipe a appris dans le sprint afin qu'elle puisse
                    améliorer sa façon de travailler ?
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
