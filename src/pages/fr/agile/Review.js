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
              La sprint review est une r??union a lieu ?? la fin de chaque sprint,
              afin de passer en revue le travail accompli durant le sprint
              ??coul??. C???est le moment de pr??senter les d??veloppements logiciels
              apport??s au produit, qui sont test??s et fonctionnels.
            </p>
          </article>
          <article id="participants">
            <h6>Participants</h6>
            <div>
              <p>Les participants ?? la revue de sprint sont :</p>
              <ul>
                <li>
                  l???<strong>??quipe scrum</strong> dans son ensemble (soit le
                  Product owner, le Scrum master et l?????quipe de d??veloppement),
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
                  les <strong>sponsors</strong>, le cas ??ch??ant.
                </li>
              </ul>
            </div>
          </article>
          <article id="purpose">
            <h6>Purpose</h6>
            <p>
              Le but de la r??union de revue de sprint est que l'??quipe de
              d??veloppement montre aux parties prenantes le travail qu'elles ont
              accompli au cours du sprint et le compare ?? ce qu'elles ont pr??vu
              de faire au d??but du sprint.
            </p>
          </article>
          <article id="long">
            <h6>Long</h6>
            <div>
              <p>
                While a Scrum sprint meeting doesn???t have a fixed time limit, a
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
              Le propri??taire du produit explique les ??l??ments du backlog qui
              ont et n'ont pas ??t?? compl??t??s pendant le sprint. Une fois que
              l'??quipe de d??veloppement a discut?? de ce qui s'est bien pass?? et
              de ce qui ne s'est pas bien pass??, elle montre le travail qui a
              ??t?? fait, r??pond ?? toutes les questions et re??oit des commentaires
              sur son travail. L'ensemble du groupe collabore sur les prochaines
              ??tapes, fournissant une contribution pr??cieuse pour la prochaine
              r??union de planification de sprint.
            </p>
          </article>
          <article id="goal">
            <h6>Goal</h6>
            <p>
              L'objectif d'une revue de sprint est de s'assurer qu'un incr??ment
              de produit potentiellement livrable a ??t?? produit pendant le
              sprint - l'??quipe a cr???? un logiciel cod??, test?? et utilisable.
            </p>
          </article>
          <article id="review-retrospective">
            <h6>Sprint Review vs Retrospective</h6>
            <div>
              <p>
                La r??union de r??trospective de sprint vient apr??s la revue de
                sprint. Alors que la revue de sprint Agile se concentre sur
                l'examen de ce que l'??quipe construit, la r??trospective de
                sprint se concentre sur la fa??on dont il est construit.
              </p>
              <p>
                La r??trospective de sprint est une opportunit?? formelle pour
                l'??quipe Scrum d'affiner le processus de d??veloppement, de
                fournir ses id??es et d'exprimer ses opinions, en discutant de ce
                qui a bien fonctionn?? pendant le sprint et de ce qui doit ??tre
                ajust??. Le groupe se demandera : ?? Que peut-on faire pour rendre
                l'??quipe et comment elle fonctionne plus productive ? ??
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
