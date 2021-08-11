import React from "react";
import { Link } from "react-router-dom";

export default function Stringbuilder() {
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
          <h3>String Builder</h3>
          <article className="" id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Le type String est immutable. Cela signifie qu'une chaîne ne
                peut pas être modifiée une fois créée. Désormais, en modifiant
                la chaîne initiale créera un nouvel String sur le mémoire Heap
                au lieu de modifier une chaîne d'origine à la même adresse
                mémoire.
              </p>
              <p>
                Le <code>StringBuilder</code> ne crée pas un nouvel objet dans
                la mémoire mais étend dynamiquement la mémoire pour accueillir
                la chaîne modifiée.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
