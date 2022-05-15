import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Events() {
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
                    href="#event"
                  >
                    Event
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
          <h3>React Events</h3>
          <article id="event">
            <h6>Gérer les événements</h6>
            <div>
              <p>
                La gestion des événements pour les éléments React est très
                similaire à celle des éléments du DOM. Il y a tout de même
                quelques différences de syntaxe :
              </p>
              <ul>
                <li>
                  Les événements de React sont nommés en camelCase plutôt qu’en
                  minuscules.
                </li>
                <li>
                  En JSX on passe une fonction comme gestionnaire d’événements
                  plutôt qu’une chaîne de caractères.
                </li>
              </ul>
              <Highlight language="jsx">
                {`<button onclick="activateLasers()">
  Activate Lasers
</button>`}
              </Highlight>
              <Highlight language="jsx">
                {`<button onClick={activateLasers}>
  Activate Lasers
</button>`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
