import React from "react";
import { Link } from "react-router-dom";

export default function DesignPattern() {
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
                    href="#design-pattern"
                  >
                    Design Pattern
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#design-principle"
                  >
                    Design Principle
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
          <h3>Design Principle vs Design Pattern</h3>
          <article className="" id="design-pattern">
            <h6>Design Principle</h6>
            <p>
              Les Design Principles fournissent des directives de haut niveau
              pour concevoir de meilleures applications logicielles. Ils ne
              fournissent pas de directives d'implémentation et ne sont liés à
              aucun langage de programmation. Les principes SOLID (SRP, OCP,
              LSP, ISP, DIP) sont l'un des ensembles de principes de conception
              les plus populaires.
            </p>
          </article>
          <article className="" id="design-principle">
            <h6>Design pattern</h6>
            <p>
              Design Pattern fournit des solutions de bas niveau liées à la mise
              en œuvre des problèmes orientés objet courants. En d'autres
              termes, le modèle de conception suggère une implémentation
              spécifique pour le problème de programmation orienté objet
              spécifique. Par exemple, si vous souhaitez créer une classe qui ne
              peut avoir qu'un seul objet à la fois, vous pouvez utiliser le
              modèle de conception Singleton qui suggère la meilleure façon de
              créer une classe qui ne peut avoir qu'un seul objet.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
