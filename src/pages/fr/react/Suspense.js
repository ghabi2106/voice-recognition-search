import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Suspense() {
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
                    href="#lazy"
                  >
                    React.lazy
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#suspense"
                  >
                    React.Suspense
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
          <h3>React Fragments</h3>
          <article id="lazy">
            <h6>React.Lazy</h6>
            <div>
              <p>
                <code>React.lazy()</code> vous permet de définir un composant
                qui sera chargé dynamiquement. Cela aide à réduire la taille du
                fichier initial en reportant à plus tard le chargement des
                composants inutiles lors du rendu initial.
              </p>
              <Highlight language="jsx">
                {`// This component is loaded dynamically
const SomeComponent = React.lazy(() => import('./SomeComponent'));`}
              </Highlight>
            </div>
          </article>
          <article id="suspense">
            <h6>React.Suspense</h6>
            <div>
              <p>
                <code>React.Suspense</code> vous permet de définir un indicateur
                de chargement pour le cas où certains composants plus bas dans
                l’arbre de rendu ne seraient pas encore prêts à être affichés.
                Pour le moment le <strong>seul</strong> cas d’usage pris en
                charge par <code>&lt;React.Suspense&gt;</code>, c’est le
                chargement différé de composants via <code>React.lazy</code> :
              </p>
              <Highlight language="jsx">
                {`// This component is loaded dynamically
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
