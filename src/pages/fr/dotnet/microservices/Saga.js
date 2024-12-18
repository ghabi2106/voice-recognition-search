import React from "react";
import { Link } from "react-router-dom";

export default function Saga() {
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
                    href="#saga"
                  >
                    Saga
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
                    to="/docker"
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/server"
                  >
                    Web server implementations
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpsys"
                  >
                    HTTP.sys web server
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/iis"
                  >
                    IIS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/kestrel"
                  >
                    Kestrel
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
          <h3>Saga</h3>
          <article id="saga">
            <h6>Saga</h6>
            <div>
              <p>
                Une <strong>Saga</strong> est un modèle de gestion de
                transactions réparties qui divise une grande transaction en
                plusieurs étapes locales, avec des mécanismes de compensation
                pour annuler les actions en cas d'échec.
              </p>
              <h6>
                <strong>Types de Sagas :</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Choreography</strong> :
                  </p>
                  <ul>
                    <li>
                      Chaque service dans la saga connaît l'ordre des
                      transactions et émet des événements pour indiquer l'état
                      d'une transaction.
                    </li>
                    <li>
                      Les services réagissent à ces événements et prennent des
                      actions sans nécessiter de coordination centrale.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Orchestration</strong> :
                  </p>
                  <ul>
                    <li>
                      Un service central (appelé "orchestrateur") contrôle
                      l'ordre des transactions.
                    </li>
                    <li>
                      L'orchestrateur émet des commandes aux services pour
                      réaliser les étapes de la Saga.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
