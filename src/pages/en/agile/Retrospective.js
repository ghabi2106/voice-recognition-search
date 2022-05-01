import React from "react";
import { Link } from "react-router-dom";

export default function Retrospective() {
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
                    Sprint Retrospective
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#purpose"
                  >
                    Purpose
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#length"
                  >
                    Length
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#questions"
                  >
                    Questions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#participants"
                  >
                    Participants
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
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="agile">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Sprint Retrospective</h3>
          <article id="introduction">
            <h6>Sprint Retrospective</h6>
            <p>
              The sprint retrospective is a recurring meeting held at the end of
              a sprint used to discuss what went well during the previous sprint
              cycle and what can be improved for the next sprint.
            </p>
          </article>
          <article id="participants">
            <h6>Participants</h6>
            <p>
              The sprint retrospective team usually includes all development
              team members, the Scrum Master, and the product owner. The
              development team is everyone who is designing, building, and
              testing the product. Collectively, its members have a wide range
              of valuable perspectives for identifying process improvements from
              different points of view.
            </p>
          </article>
          <article id="purpose">
            <h6>Purpose</h6>
            <ul>
              <li>
                <p>
                  Examine how the just-completed sprint went as far as people,
                  relationships, processes, and tools.
                </p>
              </li>
              <li>
                <p>Identify and order what went well.</p>
              </li>
              <li>
                <p>Do the same with things that didn’t go well.</p>
              </li>
              <li>
                <p>Identify potential improvements.</p>
              </li>
              <li>
                <p>
                  Create a plan for implementing improvements to the way the
                  Scrum team accomplishes its work.
                </p>
              </li>
            </ul>
          </article>
          <article id="length">
            <h6>Length</h6>
            <div>
              <p>A sprint retrospectives often run:</p>
              <ul>
                <li>
                  <p>45 minutes for a one-week sprint</p>
                </li>
                <li>
                  <p>1.5 hours for a two-week sprint</p>
                </li>
                <li>
                  <p>2.25 hours for a three-week sprint</p>
                </li>
                <li>
                  <p>3 hours for a month-long sprint</p>
                </li>
              </ul>
            </div>
          </article>
          <article id="questions">
            <h6>Questions</h6>
            <div>
              <p>Questions commonly asked in a sprint retrospective include:</p>
              <ul>
                <li>
                  <p>
                    <strong>What went well in the sprint? </strong>Success in an
                    iteration can be analyzed by looking at what was done
                    differently to achieve it; who contributed to it and how;
                    and what skills, training, or knowledge made a difference.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>What went wrong in the sprint?</strong> The point is
                    not to penalize the team or individual members but look at
                    things that didn’t go according to plan, with a view of
                    improving performance in the future.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>What did we learn?</strong> What did the team learn
                    in the sprint so that they can improve their way of working?
                  </p>
                </li>
                <li>
                  <p>
                    <strong>How should the next sprint play out?</strong> This
                    will determine corrective actions to take in the next
                    sprint, preventing the same mistakes from occurring, and
                    making successful actions a repeatable outcome.
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
