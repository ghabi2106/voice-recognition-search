import React from "react";
import { Link } from "react-router-dom";

export default function Tuple() {
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
                    href="#tuple"
                  >
                    Tuple
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#value-tuple"
                  >
                    ValueTuple
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
          <h3>Covariance et Contravariance</h3>
          <article id="tuple">
            <h6>Tuple</h6>
            <div>
              <p>
                Un tuple est une structure de données qui contient une séquence
                d'éléments de différents types de données. Il peut être utilisé
                lorsqu'on souhaite disposer d'une structure de données pour
                contenir un objet avec des propriétés, mais on ne souhaite pas
                créer un type distinct pour celui-ci.
              </p>
              <img src="/img/tuple-syntax.PNG" alt="tuple syntax" />
              <img src="/img/tuple-init.PNG" alt="tuple init" />
              <ul>
                <li>
                  Utilisation de Tuple: lorsqu'on souhaite renvoyer plusieurs
                  valeurs à partir d'une méthode sans utiliser de paramètres{" "}
                  <code>ref</code> ou
                  <code>out</code>.
                </li>
                <li>
                  Utilisation de Tuple: lorsqu'on souhaite transmettre plusieurs
                  valeurs à une méthode via un seul paramètre
                </li>
                <li>
                  Le Tupleest un type référence et non un type valeur. Il alloue
                  sur le tas et peut entraîner des opérations gourmandes en CPU.
                </li>
                <li>
                  Le Tupleest limité à huit éléments. Vous devez utiliser des
                  tuples imbriqués si vous devez stocker plus d'éléments.
                  Cependant, cela peut entraîner une ambiguïté.
                </li>
              </ul>
            </div>
          </article>
          <article id="value-tuple">
            <h6>ValueTuple</h6>
            <div>
              <img src="/img/valuetuple-syntax.PNG" alt="valuetuple syntax" />
              <p>
                <code>ValueTuple</code> permet également des "Discards" en
                déconstruction pour les membres que vous n'allez pas utiliser.
              </p>
              <img src="/img/valuetuple-discard.PNG" alt="valuetuple discard" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
