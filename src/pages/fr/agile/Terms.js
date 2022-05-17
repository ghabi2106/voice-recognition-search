import React from "react";
import { Link } from "react-router-dom";

export default function Terms() {
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
                    href="#scrum"
                  >
                    Scrum
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#story-point"
                  >
                    Story Points
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#backlog"
                  >
                    Backlog
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#storyboard"
                  >
                    Storyboard
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#swimlanes"
                  >
                    Swimlanes
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#sprint"
                  >
                    Sprint
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#story"
                  >
                    Story
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#epic"
                  >
                    Epic
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#kanban"
                  >
                    Kanban
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
          <h3>AGILE AND SCRUM TERMS AND DEFINITIONS</h3>
          <article id="scrum">
            <h6>Scrum</h6>
            <p>
              La méthode « Scrum de Scrums » est une technique Agile à grande
              échelle qui vous permet de connecter plusieurs équipes devant
              travailler ensemble pour livrer des solutions complexes.
            </p>
          </article>
          <article id="story-point">
            <h6>Story Points</h6>
            <div>
              <p>
                Les story points se définissent comme une unité de mesure,
                utilisée majoritairement en gestion de projet agile Scrum. Ils
                servent à estimer la charge de travail globale des équipes, afin
                de planifier au mieux chaque sprint ou itération.
              </p>
              <p>
                Une estimation est fournie à chaque user story. Elle est
                réalisée en équipe durant l’une des cérémonies Scrum.
              </p>
            </div>
          </article>
          <article id="backlog">
            <h6>Backlog</h6>
            <div>
              <p>
                Le backlog est une liste de tâches priorisées définissant les
                caractéristiques d’un produit. Il est un des éléments
                fondamentaux de la méthodologie Scrum. Il s’agit de l’outil de
                travail principal du Product Owner qui se charge de recueillir
                les besoins auprès des parties prenantes et de les transformer
                en liste de fonctionnalités prêtes à être développées par
                l’équipe de développement.
              </p>
              <p>
                Le product backlog est en quelque sorte un réservoir de
                fonctionnalités à développer dans les prochaines itérations.
              </p>
            </div>
          </article>
          <article id="storyboard">
            <h6>Storyboard</h6>
            <p>
              Le StoryBoard est une méthodologie qui permet à l'équipe de
              séquencer visuellement et en détail son projet avant de passer à
              sa réalisation.
            </p>
          </article>
          <article id="swimlanes">
            <h6>Swimlanes</h6>
            <p>
              Les swimlanes Kanban sont des lignes horizontales qui divisent un
              tableau Kanban en sections. Les équipes les utilisent généralement
              pour séparer visuellement les différents types de travail sur un
              même tableau et organiser ensemble les tâches homogènes.
            </p>
          </article>
          <article id="sprint">
            <h6>Sprint</h6>
            <div>
              <p>
                Sprint désigne le cycle de développement pendant lequel vont
                s’enchaîner un certain nombre de tâches pour, à terme, s’achever
                par la conception d’un produit final.
              </p>
              <p>
                Le sprint commence par un Sprint Planning et se termine par une
                Revue de Sprint (et une Retrospective)
              </p>
            </div>
          </article>
          <article id="story">
            <h6>User Story</h6>
            <div>
              <p>
                Une User story, ou récit utilisateur, sont des descriptions
                d’exigences pour toutes fonctionnalités ou “tâches” nécessaires
                au fonctionnement du produit ou du service en développement.
              </p>
              <p>
                Les user stories sont écrites par le Product Owner de manière
                concise et ne concerne qu’une seule fonctionnalité à la fois.{" "}
              </p>
              <p>
                Une fois rédigée, elle va s’ajouter aux autres récits du produit
                et ensemble ; elles constituent le “product backlog”.{" "}
              </p>
            </div>
          </article>
          <article id="epic">
            <h6>Epic</h6>
            <p>
              Une epic est un travail important qui peut être découpé en un
              certain nombre de petites stories, quelquefois appelées demandes /
              issues dans Jira.
            </p>
          </article>
          <article id="kanban">
            <h6>Kanban</h6>
            <p>
              A visual work management approach that uses storyboards,
              swimlanes, and work in progress (WIPs) limits to ensure resource
              capacity, demand, and supply are all balanced. Adapted from its
              origins in manufacturing, Kanban can help developers and marketers
              be more Agile.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
