import React from "react";
import { Link } from "react-router-dom";

export default function Review() {
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
                    Sprint Review
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
                    href="#long"
                  >
                    Long
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#discussion"
                  >
                    Discussion
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#goal"
                  >
                    Goal
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#review-retrospective"
                  >
                    Sprint Review vs Retrospective
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
          <h3>Sprint Review</h3>
          <article id="introduction">
            <h6>sprint review meeting</h6>
            <p>
              La sprint review est une réunion a lieu à la fin de chaque sprint,
              afin de passer en revue le travail accompli durant le sprint
              écoulé. C’est le moment de présenter les développements logiciels
              apportés au produit, qui sont testés et fonctionnels.
            </p>
          </article>
          <article id="participants">
            <h6>Participants</h6>
            <div>
              <p>Les participants à la revue de sprint sont :</p>
              <ul>
                <li>
                  l’<strong>équipe scrum</strong> dans son ensemble (soit le
                  Product owner, le Scrum master et l’équipe de développement),
                </li>
                <li>
                  les parties prenantes ou{" "}
                  <strong>
                    <em>stakeholders</em>
                  </strong>
                  ,
                </li>
                <li>
                  les <strong>utilisateurs</strong>,
                </li>
                <li>
                  les <strong>sponsors</strong>, le cas échéant.
                </li>
              </ul>
            </div>
          </article>
          <article id="purpose">
            <h6>Purpose</h6>
            <p>
              Le but de la réunion de revue de sprint est que l'équipe de
              développement montre aux parties prenantes le travail qu'elles ont
              accompli au cours du sprint et le compare à ce qu'elles ont prévu
              de faire au début du sprint.
            </p>
          </article>
          <article id="long">
            <h6>Long</h6>
            <div>
              <p>
                While a Scrum sprint meeting doesn’t have a fixed time limit, a
                sprint review will generally last an hour for each week of a
                sprint, so one hour for one week, two hours for two weeks, three
                hours for three weeks, and so on.
              </p>
              <p>
                The Scrum Master should timebox the meeting, defining and
                limiting the time allotted to each item of the agenda, to keep
                things focused and on schedule.
              </p>
            </div>
          </article>
          <article id="discussion">
            <h6>Discussion</h6>
            <p>
              Le propriétaire du produit explique les éléments du backlog qui
              ont et n'ont pas été complétés pendant le sprint. Une fois que
              l'équipe de développement a discuté de ce qui s'est bien passé et
              de ce qui ne s'est pas bien passé, elle montre le travail qui a
              été fait, répond à toutes les questions et reçoit des commentaires
              sur son travail. L'ensemble du groupe collabore sur les prochaines
              étapes, fournissant une contribution précieuse pour la prochaine
              réunion de planification de sprint.
            </p>
          </article>
          <article id="goal">
            <h6>Goal</h6>
            <p>
              L'objectif d'une revue de sprint est de s'assurer qu'un incrément
              de produit potentiellement livrable a été produit pendant le
              sprint - l'équipe a créé un logiciel codé, testé et utilisable.
            </p>
          </article>
          <article id="review-retrospective">
            <h6>Sprint Review vs Retrospective</h6>
            <div>
              <p>
                La réunion de rétrospective de sprint vient après la revue de
                sprint. Alors que la revue de sprint Agile se concentre sur
                l'examen de ce que l'équipe construit, la rétrospective de
                sprint se concentre sur la façon dont il est construit.
              </p>
              <p>
                La rétrospective de sprint est une opportunité formelle pour
                l'équipe Scrum d'affiner le processus de développement, de
                fournir ses idées et d'exprimer ses opinions, en discutant de ce
                qui a bien fonctionné pendant le sprint et de ce qui doit être
                ajusté. Le groupe se demandera : « Que peut-on faire pour rendre
                l'équipe et comment elle fonctionne plus productive ? »
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
