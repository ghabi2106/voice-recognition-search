import React from "react";
import { Link } from "react-router-dom";

export default function Micro() {
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
                    href="#micro-frontends"
                  >
                    Micro Frontends
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
                    to="/angular"
                  >
                    Angular
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
          <h3>Micro Frontends</h3>
          <article id="micro-frontends">
            <h6>Micro Frontends</h6>
            <div>
              <ul>
                <li>
                  Micro Frontends allow building separate frontend modules that
                  run independently.
                </li>
                <li>
                  In Angular, <strong>Module Federation (Webpack 5)</strong> is
                  used to implement micro frontends.
                </li>
              </ul>
              <strong>Example Scenario:</strong>
              <p>
                Imagine you have an Angular application split into two micro
                frontends: one for a shopping cart and another for user
                authentication. Using Module Federation:
              </p>
              <ul>
                <li>
                  The <strong>Shopping Cart Micro Frontend</strong> could be
                  developed and deployed by one team.
                </li>
                <li>
                  The <strong>Authentication Micro Frontend</strong> could be
                  handled by another team.
                </li>
                <li>
                  At runtime, the host Angular application loads both micro
                  frontends dynamically, presenting a seamless experience to the
                  user.
                </li>
              </ul>
              <strong>How Does Angular Support Micro Frontends?</strong>
              <ul>
                <li>
                  <strong>Module Federation (Webpack 5):</strong>
                  <ul>
                    <li>
                      Angular leverages <strong>Module Federation</strong>, a
                      feature introduced in Webpack 5, to implement Micro
                      Frontends.
                    </li>
                    <li>
                      This approach allows Angular applications (or modules) to{" "}
                      <strong>dynamically load remote modules</strong> from
                      other applications.
                    </li>
                    <li>
                      With Module Federation, you can{" "}
                      <strong>expose parts</strong> of your Angular app (like
                      components, services, or entire modules) and{" "}
                      <strong>consume them</strong> in another Angular
                      application without rebuilding the entire app.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
