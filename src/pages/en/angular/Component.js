import React from "react";
import { Link } from "react-router-dom";

export default function Component() {
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
                    href="#components"
                  >
                    Components
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
                    to="/angular"
                  >
                    Angular
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
          <h3>Components</h3>
          <article id="components">
            <h6>Compnents</h6>
            <div>
              <p>
                Un composant, c'est une classe Typescript avec des attributs,
                méthodes et constructeur et qui sert d'unité de découpage visuel
                dans un projet front. Il possède aussi des métadonnées qu'on lui
                injecte via la directive @Component.
              </p>
              <p>
                On définit un composant dans Angular par un ensemble de
                ressources :
              </p>
              <ul>
                <li>une portion de HTML</li>
                <li>une ou des feuilles de styles associée(s) à ce HTML</li>
                <li>une classe TypeScript ou JavaScript</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
