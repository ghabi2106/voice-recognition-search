import React from "react";
import { Link } from "react-router-dom";

export default function Cleancode1() {
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
                    href="#dbuf"
                  >
                    BDUF
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#mvp"
                  >
                    MVP
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#poc"
                  >
                    POC
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#waterfall"
                  >
                    Waterfall model
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
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Clean code 1</h3>
          <article id="dbuf">
            <h6>Big Design Up Front (BDUF)</h6>
            <p>
              <strong>Big Design Up Front ( BDUF )</strong> est une approche de
              d??veloppement logiciel dans laquelle la conception du programme
              doit ??tre achev??e et perfectionn??e avant que la mise en ??uvre de
              ce programme ne commence. Il est souvent associ?? au mod??le de
              d??veloppement logiciel en cascade (
              <a href="#waterfall">waterfall model</a>).
            </p>
          </article>
          <article id="mvp">
            <h6>Minimum Viable Product (MVP)</h6>
            <p>
              <strong>Un produit minimum viable ( MVP )</strong> est une version
              d'un produit avec juste assez de fonctionnalit??s pour ??tre
              utilisable par les premiers clients qui peuvent ensuite fournir
              des commentaires pour le d??veloppement futur du produit.
            </p>
          </article>
          <article id="poc">
            <h6>Proof Of Concept (POC)</h6>
            <div>
              <p>
                <strong>La preuve de concept ( POC )</strong>, ??galement connue
                sous le nom de <strong>preuve de principe</strong> , est une
                r??alisation d'une certaine m??thode ou id??e afin de d??montrer sa
                faisabilit?? , ou une d??monstration de principe dans le but de
                v??rifier qu'un concept ou une th??orie a des potentiel. Une
                preuve de concept est g??n??ralement petite et peut ??tre compl??te
                ou non.
              </p>
              <p>
                Contrairement au MVP, qui n??cessite une planification et des
                efforts consid??rables pour se d??velopper, le Proof Of Concept en
                est g??n??ralement une version plus petite. Il vient normalement
                avant le MVP et il ne s'agit que d'une preuve pratique que la
                fonctionnalit?? de base de ce que vous essayez de construire est
                possible.
              </p>
            </div>
          </article>
          <article id="waterfall">
            <h6>Waterfall model</h6>
            <div>
              <p>
                Le <strong>mod??le en cascade</strong> est une d??composition des
                activit??s du projet en phases s??quentielles lin??aires , o??
                chaque phase d??pend des livrables de la pr??c??dente et correspond
                ?? une sp??cialisation des t??ches. L' approche est typique pour
                certains domaines de la conception technique.
              </p>
              <p>
                Dans le d??veloppement de logiciels , il a tendance ?? ??tre parmi
                les approches les moins it??ratives et flexibles, car les progr??s
                se d??roulent en grande partie dans une direction ("vers le bas"
                comme une cascade ) ?? travers les phases de conception,
                d'initiation, d' analyse , de conception , de construction ,test
                , d??ploiement et maintenance.
              </p>
              <img
                src="/img/dotnet/Waterfall_model.png"
                alt="Waterfall_model"
              />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
