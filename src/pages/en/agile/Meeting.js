import React from "react";
import { Link } from "react-router-dom";

export default function Meeting() {
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
                    href="#meetings"
                  >
                    Meetings
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
          <h3>Meetings</h3>
          <article id="meetings">
            <h6>Meetings</h6>
            <div>
              <img
                src="/img/agile/01-agile scrum meetings.PNG"
                alt="01-agile scrum meetings"
                className="mb-4"
              />
              <div className="row">
                <div className="col-sm-6 mb-row">
                  <div className="card">
                    <div className="card-head bg-blue-contrast">
                      <h5>SPRINT PLANNING MEETING</h5>
                    </div>
                    <div className="card-body">
                      <p>
                        Is held a few days before a sprint and can last a few
                        hours.
                      </p>
                      <h6>In the meeting:</h6>
                      <ul>
                        <li>Score/prioritize backlog items</li>
                        <li>Determine individual and team availability</li>
                        <li>Determine which items the sprint will include</li>
                        <li>
                          Distribute decided tasks among team (typically on a
                          volunteer basis)
                        </li>
                        <li>Set goals/address obstacles for sprint</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-row">
                  <div className="card">
                    <div className="card-head bg-orange">
                      <h5>DAILY STANDUP OR DAILY SCRUM</h5>
                    </div>
                    <div className="card-body">
                      <p>
                        A quick (&lt;10 min.) meeting held at the beginning of
                        each day in a sprint.
                      </p>
                      <h6>In the meeting:</h6>
                      <ul>
                        <li>What they did yesterday</li>
                        <li>What they’ll do today</li>
                        <li>Any obstacles* they face</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-row">
                  <div className="card">
                    <div className="card-head bg-blue">
                      <h5>SPRINT RETROSPECTIVE</h5>
                    </div>
                    <div className="card-body">
                      <p>
                        A brief (&lt;1 hour) meeting held soon after, or in
                        conjunction with, the Sprint Review to review the “how”
                        of the sprint.
                      </p>
                      <h6>In the meeting:</h6>
                      <ul>
                        <li>Compare projected vs. actual results</li>
                        <li>Discuss setbacks and wins</li>
                        <li>Set goals to improve future sprints</li>
                        <li>
                          Discuss what worked and what didn’t work and make
                          relevant adjustments
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-row">
                  <div className="card">
                    <div className="card-head bg-orange-contrast">
                      <h5>SPRINT REVIEW</h5>
                    </div>
                    <div className="card-body">
                      <p>
                        An informal meeting held at the end of a sprint to
                        review the “what” (i.e., what work was addressed) of the
                        sprint.
                      </p>
                      <h6>In the meeting:</h6>
                      <ul>
                        <li>Invite product owner and stakeholders</li>
                        <li>
                          Display deliverables/progress achieved during sprint
                        </li>
                        <li>PowerPoint presentations are not allowed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
