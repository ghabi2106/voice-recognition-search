import React from "react";
import { Link } from "react-router-dom";

export default function Designpattern() {
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
                    to="/agile"
                  >
                    Agile
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cleancode"
                  >
                    Clean code
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/command"
                  >
                    Command
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/designpattern"
                  >
                    Design Principle &amp; Pattern
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/di"
                  >
                    Dependency injection
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/factory"
                  >
                    Factory Method
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/mediator"
                  >
                    Mediator
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/observer"
                  >
                    Observer
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/singleton"
                  >
                    Singleton
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/solid"
                  >
                    S.O.L.I.D. Principles
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="design-pattern">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Design Principle vs Design Pattern</h3>
          <article id="design-pattern">
            <h6>Design Pattern</h6>
            <div>
              <p>
                Design Pattern fournit des solutions de bas niveau li??es ?? la
                mise en ??uvre des probl??mes orient??s objet courants. En d'autres
                termes, le mod??le de conception sugg??re une impl??mentation
                sp??cifique pour le probl??me de programmation orient?? objet
                sp??cifique. Par exemple, si vous souhaitez cr??er une classe qui
                ne peut avoir qu'un seul objet ?? la fois, vous pouvez utiliser
                le mod??le de conception Singleton qui sugg??re la meilleure fa??on
                de cr??er une classe qui ne peut avoir qu'un seul objet.
              </p>
              <ul>
                <li>
                  Patrons de cr??ation : fournissent des m??canismes de cr??ation
                  d???objets qui augmentent la flexibilit?? et la r??utilisation du
                  code.
                  <ul>
                    <li>Singleton</li>
                    <li>Factory Method</li>
                    <li>Abstract Factory</li>
                  </ul>
                </li>
                <li>
                  Patrons structurels : Ces patrons vous guident pour assembler
                  des objets et des classes en de plus grandes structures tout
                  en gardant celles-ci flexibles et efficaces.
                  <ul>
                    <li>Proxy</li>
                    <li>Bridge</li>
                    <li>Adapter</li>
                  </ul>
                </li>
                <li>
                  Patrons comportementaux : Ces patrons s???occupent des
                  algorithmes et de la r??partition des responsabilit??s entre les
                  objets
                  <ul>
                    <li>Mediator</li>
                    <li>Command</li>
                    <li>Observer</li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
          <article id="design-principle">
            <h6>Design Principle</h6>
            <p>
              Les Design Principles fournissent des directives de haut niveau
              pour concevoir de meilleures applications logicielles. Ils ne
              fournissent pas de directives d'impl??mentation et ne sont li??s ??
              aucun langage de programmation. Les principes SOLID (SRP, OCP,
              LSP, ISP, DIP) sont l'un des ensembles de principes de conception
              les plus populaires.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
