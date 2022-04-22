import React from "react";
import { Link } from "react-router-dom";

export default function Ddd() {
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
                    className="d-inline-flex align-items-center rounded active"
                    href="#introduction"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#layers"
                  >
                    Layers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dis-advantages"
                  >
                    Advantages and disadvantages
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
                    to="/mvc"
                  >
                    MVC
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/clean"
                  >
                    Clean Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cqrs"
                  >
                    CQRS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/ddd"
                  >
                    DDD
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
          <h3>DDD</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Domain-driven design (DDD) advocates modeling based on the
                reality of business as relevant to your use cases. In the
                context of building applications, DDD talks about problems as
                domains. It describes independent problem areas as Bounded
                Contexts (each Bounded Context correlates to a microservice),
                and emphasizes a common language to talk about these problems.
                It also suggests many technical concepts and patterns, like
                domain entities with rich models, value objects, aggregates, and
                aggregate root (or root entity) rules to support the internal
                implementation.
              </p>
              <p>
                In summary, DDD is a great pattern for systems with complex
                business logic, systems that require future maintenance and
                enhancement.
              </p>
            </div>
          </article>
          <article id="layers">
            <h6>Layers in DDD microservices</h6>
            <div>
              <img
                className="mw-900"
                src="/img/dotnet/domain-driven-design-microservice.png"
                alt="clean-architecture-monolothic"
              />
              <p>
                Dependencies in a DDD Service, the Application layer depends on
                Domain and Infrastructure, and Infrastructure depends on Domain,
                but Domain doesn't depend on any layer. This layer design should
                be independent for each microservice.
              </p>
              <img
                className="mw-900"
                src="/img/dotnet/ddd-service-layer-dependencies.png"
                alt="clean-architecture-monolothic"
              />
            </div>
          </article>
          <article id="dis-advantages">
            <h6>Advantages and disadvantages</h6>
            <div class="row">
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Loose coupling</em>:
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Flexibility</em>: The loose links and high-level
                    definitions allow the team to enhance and adapt to new
                    functional requirements more flexibly without considerable
                    impact on the overall system.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Testability</em>:
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Maintenance</em>:
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i>{" "}
                    <em>Domain expertise</em>: DDD requires extensive domain
                    expertise. It means that your team needs to have at least
                    one domain expert. They will help you define all of the
                    processes, procedures, and terminology of that domain.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i>{" "}
                    <em>Low interactions</em>: The loose connection among
                    different parts requires the team to communicate and
                    exchange regularly. So before applying the DDD approach, the
                    team needs to discuss its principles in detail first.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i>{" "}
                    <em>Development costs</em>: Domain experts and the team have
                    to implement a great deal of isolation and encapsulation
                    within the domain model. This often results in a more
                    extended development and duration that can come at a
                    relatively high cost. Therefore, it is not well-suited for
                    short-term projects or projects without a high domain
                    complexity.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
