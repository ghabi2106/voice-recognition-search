import React from "react";
import { Link } from "react-router-dom";

export default function Compilation() {
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
                    href="#viewengine-ivy"
                  >
                    ViewEngine vs Ivy
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#aot"
                  >
                    Ahead-of-Time (AOT)
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#bundle-size"
                  >
                    bundle size
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
          <h3>Compilation & Rendering</h3>
          <article id="viewengine-ivy">
            <h6>ViewEngine vs Ivy</h6>
            <div>
              <ul>
                <li>
                  <strong>ViewEngine (pre Angular 9):</strong> Legacy renderer
                  with <strong>heavy runtime costs</strong>.
                </li>
                <li>
                  <strong>Ivy (Angular 9+):</strong> New rendering engine with:
                  <ul>
                    <li>
                      Faster compilation (<code>ngcc</code> replaced by{" "}
                      <code>ngtsc</code>
                      ).
                    </li>
                    <li>Smaller bundle size.</li>
                    <li>
                      Better debugging (<code>ng.getComponent(el)</code> in
                      DevTools).
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
          <article id="aot">
            <h6>Ahead-of-Time (AOT)</h6>
            <div>
              <ul>
                <li>
                  AOT compiles templates <strong>at build time</strong> instead
                  of runtime.
                </li>
                <li>
                  Benefits:
                  <ul>
                    <li>Faster rendering.</li>
                    <li>Improved security (prevents XSS attacks).</li>
                    <li>Smaller runtime overhead.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
          <article id="bundle-size">
            <h6>bundle size</h6>
            <div>
              <strong>
                How do you reduce bundle size in Angular applications?
              </strong>
              <ul>
                <li>
                  Use <strong>lazy loading</strong> for modules.
                </li>
                <li>
                  Enable <strong>tree shaking</strong> (
                  <code>optimization: true</code> in <code>angular.json</code>
                  ).
                </li>
                <li>
                  Remove unused imports using <strong>Webpack Purify</strong>.
                </li>
                <li>
                  Use <strong>differential loading</strong> (<code>es2015</code>{" "}
                  vs <code>es5</code> bundles).
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
