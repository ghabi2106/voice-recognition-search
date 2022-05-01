import React from "react";
import { Link } from "react-router-dom";

export default function Roles() {
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
                    href="#roles"
                  >
                    Roles
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
                    href="#project-owner"
                  >
                    Project Owner
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#customer"
                  >
                    Requestor/Customer
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#team-member"
                  >
                    Team Member
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
          <h3>SCRUM ROLES</h3>
          <article id="roles">
            <h6>Roles</h6>
            <figure>
              <img
                src="/img/agile/agile rules.PNG"
                alt="img rules"
                style={{ maxWidth: "500px" }}
              />
              <figcaption>Scrum Roles</figcaption>
            </figure>
          </article>
          <article id="scrum-master">
            <h6>Scrum Master</h6>
            <p>
              The Scrum Master filters requests that come to the Agile team,
              manages the backlog, and facilitates all Scrum meetings. This role
              is not necessarily a leadership role. In fact, it can be a
              rotating role held by anyone on the Agile team. The Scrum Master
              handles the “how” of a project.
            </p>
          </article>
          <article id="project-owner">
            <h6>Project Owner</h6>
            <p>
              Often called product owner in Agile development and project owner
              in Agile Marketing, this person is the assigned leader of the
              team. This position is typically filled by a leader already in the
              company such as a CMO, director, or manager. The project owner
              oversees the “what” of a project. Often in Agile Marketing, this
              position is found unnecessary.
            </p>
          </article>
          <article id="customer">
            <h6>Requestor/Customer</h6>
            <p>
              Also referred to as clients, a requestor is anyone requesting work
              from an Agile team. A requestor could be internal or external, an
              individual or a group. These people are stakeholders in the
              project requested of the Agile team.
            </p>
          </article>
          <article id="team-member">
            <h6>Team Member</h6>
            <p>
              A team member is any individual contributor to the Agile team;
              this includes the Scrum Master. One person can be a team member on
              multiple Agile teams.. Requestor/Customer Project Owner AGILE TEAM
              Scrum Master Team Member Team Member Team Member Team
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
