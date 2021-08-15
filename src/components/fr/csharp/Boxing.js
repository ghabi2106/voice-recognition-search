import React from "react";
import { Link } from "react-router-dom";

export default function Boxing() {
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
                    href="#boxing"
                  >
                    Boxing
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#unboxing"
                  >
                    Unboxing
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
          <h3>Boxing and Unboxing</h3>
          <article id="boxing">
            <h6>Boxing</h6>
            <div>
              <p>
                Le boxing est le processus de conversion d'un type valeur en
                type objet.
              </p>
              <img src="/img/boxing.PNG" alt="boxing" />
            </div>
          </article>
          <article id="unboxing">
            <h6>Unboxing</h6>
            <div>
              <p>
                C'est le processus de conversion d'un type référence en type
                valeur.
              </p>
              <img src="/img/unboxing.PNG" alt="unboxing" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
