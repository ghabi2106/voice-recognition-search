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
              <strong>Big Design Up Front (BDUF)</strong> is a software
              development approach in which the program's design is to be
              completed and perfected before that program's implementation is
              started. It is often associated with the{" "}
              <a href="#waterfall">waterfall model</a> of software development.
            </p>
          </article>
          <article id="mvp">
            <h6>Minimum Viable Product (MVP)</h6>
            <p>
              A <strong>minimum viable product</strong> is a version of a
              product with just enough features to be usable by early customers
              who can then provide feedback for future product development. A
              focus on releasing an MVP means that developers potentially avoid
              lengthy and unnecessary work.
            </p>
          </article>
          <article id="poc">
            <h6>Proof Of Concept (POC)</h6>
            <div>
              <p>
                <strong>Proof of concept</strong>, also known as{" "}
                <strong>proof of principle</strong>, is a realization of a
                certain method or idea in order to demonstrate its feasibility,
                or a demonstration in principle with the aim of verifying that
                some concept or theory has practical potential. A proof of
                concept is usually small and may or may not be complete.Proof of
                concept, also known as proof of principle, is a realization of a
                certain method or idea in order to demonstrate its feasibility,
                or a demonstration in principle with the aim of verifying that
                some concept or theory has practical potential. A proof of
                concept is usually small and may or may not be complete.
              </p>
              <p>
                Unlike the MVP, which requires a considerable amount of planning
                and effort to develop, the Proof Of Concept is usually a smaller
                version of it. It normally comes before the MVP and it is only
                meant as a practical proof that the core functionality of what
                you’re trying to build is possible.
              </p>
            </div>
          </article>
          <article id="waterfall">
            <h6>Waterfall model</h6>
            <div>
              <p>
                The <strong>waterfall model</strong> is a breakdown of project
                activities into linear sequential phases, where each phase
                depends on the deliverables of the previous one and corresponds
                to a specialisation of tasks. The approach is typical for
                certain areas of engineering design. In software development, it
                tends to be among the less iterative and flexible approaches, as
                progress flows in largely one direction ("downwards" like a
                waterfall) through the phases of conception, initiation,
                analysis, design, construction, testing, deployment and
                maintenance
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
