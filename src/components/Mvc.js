import React from "react";
import { Link } from "react-router-dom";

export default function Mvc() {
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
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#model"
                  >
                    Model
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#view"
                  >
                    View
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#controller"
                  >
                    Controller
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
                    to="/multilayer"
                  >
                    Architecture Multilayer
                  </Link>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/multilayer"
                  >
                    Architecture Multilayer
                  </Link>
                </li>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Architecture MVC</h3>
          <article className="" id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>MVC signifie Modèle, Vue et Contrôleur :</p>
              <ul>
                <li>Le modèle représente les données.</li>
                <li>La vue est l'interface utilisateur.</li>
                <li>Le contrôleur est le gestionnaire de requêtes.</li>
              </ul>
            </div>
          </article>
          <article className="" id="model">
            <h6>Modèle</h6>
            <p>
              Le modèle représente la forme des données. Une classe en C# est
              utilisée pour décrire un modèle. Les objets modèles stockent les
              données extraites de la base de données.
            </p>
          </article>
          <article className="" id="view">
            <h6>Vue</h6>
            <p>
              Vue dans MVC est une interface utilisateur. Affichez les données
              du ViewModel à l'utilisateur et lui permet également de les
              modifier. Vue dans ASP.NET MVC est HTML, CSS et une syntaxe
              spéciale (syntaxe Razor) qui facilite la communication avec le
              modèle et le contrôleur.
            </p>
          </article>
          <article className="" id="controller">
            <h6>Contrôleur</h6>
            <p>
              Le contrôleur gère la demande de l'utilisateur. En règle générale,
              l'utilisateur utilise la vue et génère une requête HTTP, qui sera
              gérée par le contrôleur. Le contrôleur traite la demande et
              renvoie la vue appropriée en réponse.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
