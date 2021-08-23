import React from "react";
import { Link } from "react-router-dom";

export default function Css() {
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
                    href="#media-query"
                  >
                    Media Query
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#syntax"
                  >
                    Syntax
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
          <h3>CSS</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                CSS est le langage que nous utilisons pour styliser une page
                Web.
              </p>
              <ul>
                <li>CSS signifie Cascading Style Sheets</li>
                <li>
                  CSS décrit comment les éléments HTML doivent être affichés à
                  l'écran, sur papier ou dans d'autres médias
                </li>
                <li>
                  CSS économise beaucoup de travail. Il peut contrôler la mise
                  en page de plusieurs pages Web à la fois
                </li>
              </ul>
            </div>
          </article>
          <article id="media-query">
            <h6>Media Query</h6>
            <p>
              Il utilise la <code>@media</code> règle pour inclure un bloc de
              propriétés CSS uniquement si une certaine condition est vraie.
            </p>
          </article>
          <article id="bootstrap">
            <h6>bootstrap</h6>
            <ul>
              <li>
                Bootstrap est un framework frontal gratuit pour un développement
                Web plus rapide et plus facile
              </li>
              <li>
                Bootstrap comprend des modèles de conception basés sur HTML et
                CSS pour les formulaires, les boutons, les tableaux, la
                navigation et bien d'autres, ainsi que des plugins JavaScript en
                option
              </li>
              <li>
                Bootstrap vous donne également la possibilité de créer
                facilement des conceptions réactives(responsive)
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
