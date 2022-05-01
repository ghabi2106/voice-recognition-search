import React from "react";
import { Link } from "react-router-dom";

export default function Agile() {
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
                    href="#agile"
                  >
                    Agile Manifest
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tdd"
                  >
                    TDD
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#values"
                  >
                    Agile Manifest Values
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#principles"
                  >
                    Agile Manifest Principles
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cycle"
                  >
                    Agile software development cycle
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#scrum"
                  >
                    Agile Scrum
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#scrum-master"
                  >
                    Scrum Master
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#sprints"
                  >
                    Sprints
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#sprint-planning"
                  >
                    Sprint Planning
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#backlog"
                  >
                    Backlog
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
        <section id="agile">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Agile</h3>
          <article id="agile">
            <h6>What is agile?</h6>
            <div>
              <p>
                Agile is an iterative approach to project management and
                software development that helps teams deliver value to their
                customers faster and with fewer headaches. Instead of betting
                everything on a "big bang" launch, an agile team delivers work
                in small, but consumable, increments. Requirements, plans, and
                results are evaluated continuously so teams have a natural
                mechanism for responding to change quickly.
              </p>
              <figure>
                <img
                  src="/img/agile/traditional-development-method.svg"
                  alt="traditional-development-method"
                />
                <figcaption>Traditional Development Method</figcaption>
              </figure>
              <figure>
                <img
                  src="/img/agile/agile-development-method.svg"
                  alt="agile-development-method"
                />
                <figcaption>Agile Development Method</figcaption>
              </figure>
            </div>
          </article>
          <article id="tdd">
            <h6>What is test-driven development?</h6>
            <div>
              <p>
                <strong>Test-driven development (TDD)</strong> is a key
                development technique that makes agile development possible. TDD
                focuses on gradual development by creating and testing small
                pieces of code during development. If all small pieces of code
                pass their tests, the project is ready to ship.
              </p>
              <p>
                TDD perfectly compliments agile development because it ensures
                each feature works before moving on to the next. Developers can
                then combine all working features at the end of an agile
                iteration to form a working project component.
              </p>
            </div>
          </article>
          <article id="values">
            <h6>Four values of Agile</h6>
            <ul>
              <li>individuals and interactions over processes and tools.</li>
              <li>working software over comprehensive documentation.</li>
              <li>customer collaboration over contract negotiation.</li>
              <li>responding to change over following a plan.</li>
            </ul>
          </article>
          <article id="principles">
            <h6>The 12 principles</h6>
            <ol>
              <li>
                Satisfying customers through early and continuous delivery of
                valuable work.
              </li>
              <li>
                Breaking big work down into smaller tasks that can be completed
                quickly.
              </li>
              <li>
                Recognizing that the best work emerges from self-organized
                teams.
              </li>
              <li>
                Providing motivated individuals with the environment and support
                they need and trusting them to get the job done.
              </li>
              <li>Creating processes that promote sustainable efforts.</li>
              <li>Maintaining a constant pace for completed work.</li>
              <li>Welcoming changing requirements, even late in a project.</li>
              <li>
                Assembling the project team and business owners on a daily basis
                throughout the project.
              </li>
              <li>
                Having the team reflect at regular intervals on how to become
                more effective, then tuning and adjusting behavior accordingly.
              </li>
              <li>Measuring progress by the amount of completed work.</li>
              <li>Continually seeking excellence.</li>
              <li>Harnessing change for a competitive advantage.</li>
            </ol>
          </article>
          <article id="cycle">
            <h6>Agile software development cycle</h6>
            <div>
              <img
                src="/img/agile/software_quality-agile_software_dev_cycle_mobile.jpg"
                alt="software_quality-agile_software_dev_cycle_mobile"
              />
              <ul>
                <li>
                  <strong>Plan.</strong> The sprint begins with a sprint
                  planning meeting, where team members come together to lay out
                  components for the upcoming round of work. The product manager
                  prioritizes work from a backlog of tasks to assign the team.
                </li>
                <li>
                  <strong>Develop.</strong> Design and develop the product in
                  accordance with the approved guidelines.
                </li>
                <li>
                  <strong>Test/QA.</strong> Complete thorough testing and
                  documentation of results before delivery.
                </li>
                <li>
                  <strong>Deliver.</strong> Present the working product or
                  software to stakeholders and customers.
                </li>
                <li>
                  <strong>Assess.</strong> Solicit feedback from the customer
                  and stakeholders and gather information to incorporate into
                  the next sprint.
                </li>
              </ul>
            </div>
          </article>
          <article id="scrum">
            <h6>What is Scrum?</h6>
            <p>
              Scrum is a framework that encourages teams to learn through
              experiences, self-organize while working on a problem, and reflect
              on their wins and losses to continuously improve.
            </p>
          </article>
          <article id="scrum-master">
            <h6>Scrum master</h6>
            <p>
              The Scrum master is the leader of a Scrum team and is responsible
              for championing a project, providing guidance to the team and
              product owner, and ensuring all agile practices are followed by
              team members.
            </p>
          </article>
          <article id="sprints">
            <h6>Sprints</h6>
            <p>
              A sprint is a short, time boxed period when a scrum team works to
              complete a set amount of work.
            </p>
          </article>
          <article id="sprint-planning">
            <h6>Sprint Planning</h6>
            <p>
              Sprint Planning is an event in scrum that defines what can be
              delivered in the upcoming sprint and how that work will be
              achieved.
            </p>
          </article>
          <article id="backlog">
            <h6>What is a product backlog?</h6>
            <p>
              A product backlog is a prioritized list of work for the
              development team that is derived from the roadmap and its
              requirements.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
