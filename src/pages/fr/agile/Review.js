import React from "react";
import { Link } from "react-router-dom";

export default function Review() {
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
                    Sprint Review
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
                    href="#long"
                  >
                    Long
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#discussion"
                  >
                    Discussion
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#goal"
                  >
                    Goal
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#review-retrospective"
                  >
                    Sprint Review vs Retrospective
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
          <h3>Sprint Review</h3>
          <article id="introduction">
            <h6>sprint review meeting</h6>
            <p>
              A sprint review is an informal meeting held at the end of a
              sprint, in which the Scrum team shows what was accomplished during
              this period. This typically takes the form of a demonstration of
              new features, with the goal of creating transparency, fostering
              collaboration, and generating feedback.
            </p>
          </article>
          <article id="participants">
            <h6>Participants</h6>
            <p>
              The sprint review is usually attended by the Scrum Master, the
              Scrum team, the product owner, and the internal and external
              stakeholders. The product owner runs and manages the review
              process, while the Scrum Master ensures that the event takes place
              and everyone understands its purpose.
            </p>
          </article>
          <article id="purpose">
            <h6>Purpose</h6>
            <p>
              The purpose of the sprint review meeting is for the development
              team to show the stakeholders the work they have accomplished over
              the sprint and compare it to what they set out to do at the
              beginning of the sprint.
            </p>
          </article>
          <article id="long">
            <h6>Long</h6>
            <div>
              <p>
                While a Scrum sprint meeting doesn’t have a fixed time limit, a
                sprint review will generally last an hour for each week of a
                sprint, so one hour for one week, two hours for two weeks, three
                hours for three weeks, and so on.
              </p>
              <p>
                The Scrum Master should timebox the meeting, defining and
                limiting the time allotted to each item of the agenda, to keep
                things focused and on schedule.
              </p>
            </div>
          </article>
          <article id="discussion">
            <h6>Discussion</h6>
            <p>
              The product owner explains the backlog items that have and haven’t
              been completed during the sprint. After the development team
              discusses what went well and didn’t go well, they demonstrate the
              work that was done and answer any questions and receive feedback
              about their work. The whole group collaborates on the next steps,
              providing valuable input for the upcoming sprint planning meeting.
            </p>
          </article>
          <article id="goal">
            <h6>Goal</h6>
            <p>
              The goal of a sprint review is to ensure that a potentially
              shippable product increment has been produced during the
              sprint—the team has created a coded, tested, and usable piece of
              software.
            </p>
          </article>
          <article id="review-retrospective">
            <h6>Sprint Review vs Retrospective</h6>
            <div>
              <p>
                The sprint retrospective meeting, comes after the sprint review.
                While the Agile sprint review is focused on examining what the
                team is building, the sprint retrospective concentrates on how
                it is being built.
              </p>
              <p>
                The sprint retrospective is a formal opportunity for the Scrum
                team to fine-tune the development process, provide their ideas,
                and voice their opinions, discussing what worked well during the
                sprint and what needs to be adjusted. The group will ask
                themselves, “What can be done to make the team and how it works
                more productive?”
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
