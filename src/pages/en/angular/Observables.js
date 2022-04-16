import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Observables() {
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
                    href="#observables"
                  >
                    Promise vs Observable
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
          <h3>Observables</h3>
          <article id="observables">
            <h6>Promise vs Observable</h6>
            <div>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Promise</th>
                    <th>Observable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Produit une seule valeur.</td>
                    <td>
                      Produit un "stream" de valeurs (potentiellement infini).
                    </td>
                  </tr>
                  <tr>
                    <td>Non annulable.</td>
                    <td>Annulable.</td>
                  </tr>
                  <tr>
                    <td>Traitement immédiat.</td>
                    <td>
                      Lazy : le traitement n'est déclenché qu'à la première
                      utilisation du résultat.
                    </td>
                  </tr>
                  <tr>
                    <td>Deux méthodes uniquement (then/catch).</td>
                    <td>Une centaine d'opérateurs de transformation natifs.</td>
                  </tr>
                </tbody>
              </table>
              <Highlight language="ts">
                {`import { Observable } from 'rxjs';

const data$ = new Observable(observer => {

    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

});

data$.subscribe({
    next: value => console.log(value),
    error: err => console.error(err),
    complete: () => console.log('DONE!')
});`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
