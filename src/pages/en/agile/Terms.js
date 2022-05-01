import React from "react";
import { Link } from "react-router-dom";

export default function Terms() {
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
                    href="#scrum"
                  >
                    Scrum
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#story-point"
                  >
                    Story Points
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
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#storyboard"
                  >
                    Storyboard
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#swimlanes"
                  >
                    Swimlanes
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#sprint"
                  >
                    Sprint
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#story"
                  >
                    Story
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#epic"
                  >
                    Epic
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#kanban"
                  >
                    Kanban
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
          <h3>AGILE AND SCRUM TERMS AND DEFINITIONS</h3>
          <article id="scrum">
            <h6>Scrum</h6>
            <p>
              An Agile framework for managing work in which a small team works
              as a unit to reach a common goal as opposed to a traditional,
              sequential approach to project management.
            </p>
          </article>
          <article id="story-point">
            <h6>Story Point</h6>
            <p>
              Story points are units of measure for expressing an estimate of
              the overall effort required to fully implement a product backlog
              item or any other piece of work. Teams assign story points
              relative to work complexity, the amount of work, and risk or
              uncertainty.
            </p>
          </article>
          <article id="backlog">
            <h6>Backlog</h6>
            <p>
              A product backlog is a prioritized list of work for the
              development team that is derived from the roadmap and its
              requirements.
            </p>
          </article>
          <article id="storyboard">
            <h6>Storyboard</h6>
            <p>
              A visual representation of work derived from Kanban. Storyboards
              are typically created either manually, using whiteboards and
              sticky notes, or digitally in work management solutions.
              Storyboards consist of at least three columns (called swimlanes)
              representing the progress of work in a sprint and several cards or
              sticky notes that represent the individual stories in the sprint.
              The cards are moved across the board to show progress as the
              sprint progresses.
            </p>
          </article>
          <article id="swimlanes">
            <h6>Swimlanes</h6>
            <p>
              Columns that break up a storyboard into story statuses. Typical
              swimlane titles include, from right to left, “New,” “In Progress,”
              “Awaiting Approval,” and “Complete.” Story cards progress across
              swimlanes during a sprint.
            </p>
          </article>
          <article id="sprint">
            <h6>Sprint</h6>
            <p>
              A one, two, or three week (generally) stretch of time in which an
              Agile team will work together to complete a predetermined list of
              stories from the backlog.
            </p>
          </article>
          <article id="story">
            <h6>Story</h6>
            <p>
              A high-level definition of a work request, project task, or
              subtask. Each story is assigned a point value based on the
              estimated number of hours required to complete it. Requests,
              tasks, or projects are converted to stories before they move from
              the backlog to a sprint.
            </p>
          </article>
          <article id="epic">
            <h6>Epic</h6>
            <p>
              An overarching initiative that includes multiple stories and that
              might span many sprints. In Agile Marketing a multi-stage campaign
              would be considered an epic.
            </p>
          </article>
          <article id="kanban">
            <h6>Kanban</h6>
            <p>
              A visual work management approach that uses storyboards,
              swimlanes, and work in progress (WIPs) limits to ensure resource
              capacity, demand, and supply are all balanced. Adapted from its
              origins in manufacturing, Kanban can help developers and marketers
              be more Agile.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
