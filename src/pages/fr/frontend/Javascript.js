import React from "react";
import { Link } from "react-router-dom";

export default function Javascript() {
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
                    JavaScript
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#strict-mode"
                  >
                    JavaScript strict mode
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#hoisting"
                  >
                    JavaScript Hoisting
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#closure"
                  >
                    JavaScript Closures
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#iife"
                  >
                    What is an IIFE?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#this"
                  >
                    What is this?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#callback"
                  >
                    What is Callbacks?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#async"
                  >
                    JavaScript Async
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#promise"
                  >
                    JavaScript Promise
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
                  to="/css"
                >
                  CSS
                </Link>
              </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/html"
                  >
                    HTML
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/javascript"
                  >
                    Javascript
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/webstorage"
                  >
                    Web Storage API
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/sass"
                  >
                    Sass
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/spa"
                  >
                    MPA SPA XMLHttpRequest Ajax
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
          <h3>JavaScript</h3>
          <article id="introduction">
            <h6>Qu'est-ce que JavaScript</h6>
            <p>
              JavaScript est un langage de programmation qui s'exécute sur le
              navigateur. Il transforme les pages Web HTML statiques en pages
              Web interactives en mettant à jour dynamiquement le contenu, en
              validant les données de formulaire, en contrôlant le multimédia,
              les images animées et presque tout le reste sur les pages Web.
            </p>
          </article>
          <article id="strict-mode">
            <h6>JavaScript strict mode</h6>
            <div>
              <p>
                <code>"use strict";</code> Définit que le code JavaScript doit
                être exécuté en "mode strict".
              </p>
              <ul>
                <li>
                  Utilisation de variables non définies
                  <img
                    src="/img/front/strict-mode-variable.PNG"
                    alt="strict-mode-variable"
                  />
                </li>
                <li>
                  Utilisation de mots-clés réservés comme nom de variable ou de
                  fonction
                  <img
                    src="/img/front/strict-mode-reserved-keyword.PNG"
                    alt="strict-mode-reserved-keyword"
                  />
                </li>
                <li>
                  Propriétés dupliquées d'un objet
                  <img
                    src="/img/front/strict-mode-duplicate-property.PNG"
                    alt="strict-mode-duplicate-property"
                  />
                </li>
                <li>
                  Paramètres de fonction en double
                  <img
                    src="/img/front/strict-mode-duplicate-parameter.PNG"
                    alt="strict-mode-duplicate-parameter"
                  />
                </li>
                <li>
                  Attribuer des valeurs aux propriétés en lecture seule
                  <img
                    src="/img/front/strict-mode-readonly-property.PNG"
                    alt="strict-mode-readonly-property"
                  />
                </li>
                <li>
                  Modification de l'objet arguments
                  <img
                    src="/img/front/strict-mode-modify-args.PNG"
                    alt="strict-mode-modify-args"
                  />
                </li>
                <li>
                  with statement
                  <img
                    src="/img/front/strict-mode-with.PNG"
                    alt="strict-mode-with.PNG"
                  />
                </li>
                <li>
                  fonction eval pour créer une variable
                  <img
                    src="/img/front/strict-mode-eval.PNG"
                    alt="strict-mode-eval"
                  />
                </li>
              </ul>
            </div>
          </article>
          <article id="hoisting">
            <h6>Hoisting</h6>
            <div>
              <p>
                Le levage est le comportement par défaut de JavaScript
                consistant à déplacer les déclarations vers le haut.
              </p>
              <img src="/img/front/hoisting.png" alt="hoisting" />
            </div>
          </article>
          <article id="closure">
            <h6>JavaScript Closures</h6>
            <div>
              <p>
                Une fermeture est une fonction ayant accès à la portée parent,
                même après la fermeture de la fonction parent.
              </p>
              <img src="/img/front/js-closure.PNG" alt="js-closure" />
            </div>
          </article>
          <article id="iife">
            <h6>What is an IIFE?</h6>
            <div>
              <p>
                IIFE est une expression de fonction qui appelle automatiquement
                une fois la définition terminée . La parenthèse () joue un rôle
                important dans le modèle IIFE. En JavaScript, les parenthèses ne
                peuvent pas contenir d'instructions ; il ne peut contenir qu'une
                expression.
              </p>
              <ul>
                <li>
                  Ne créez pas de variables globales et de fonctions inutiles
                </li>
                <li>
                  Les fonctions et variables définies dans IIFE n'entrent pas en
                  conflit avec d'autres fonctions et variables, même si elles
                  portent le même nom.
                </li>
                <li>Organiser le code JavaScript.</li>
                <li>Rendre le code JavaScript maintenable.</li>
              </ul>
              <img src="/img/front/js-iife.PNG" alt="js-iife" />
            </div>
          </article>
          <article id="this">
            <h6>Qu'est- ce que this?</h6>
            <p>
              Le <code>this</code> mot-clé JavaScript fait référence à l'objet
              auquel il appartient.
            </p>
          </article>
          <article id="callback">
            <h6>What is Callbacks?</h6>
            <div>
              <ul>
                <li>
                  callback est une fonction passée en argument à une autre
                  fonction
                </li>
                <li>
                  Cette technique permet à une fonction d'appeler une autre
                  fonction
                </li>
                <li>
                  Une fonction callback peut s'exécuter après la fin d'une autre
                  fonction
                </li>
              </ul>
              <img src="/img/front/js-callback.PNG" alt="js-callback" />
            </div>
          </article>
          <article id="async">
            <h6>JavaScript Async</h6>
            <div>
              <ul>
                <li>async fait qu'une fonction renvoie Promise</li>
                <li>await fait attendre une fonction pour Promise</li>
              </ul>
              <img src="/img/front/js-async.PNG" alt="js-async" />
            </div>
          </article>
          <article id="promise">
            <h6>JavaScript Promise</h6>
            <div>
              <p>
                Un objet JavaScript Promise contient à la fois le code
                producteur et les appels au code consommateur :
              </p>
              <img src="/img/front/js-promise" alt="js-promise" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
