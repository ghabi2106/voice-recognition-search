import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Suspense() {
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
                    href="#lazy"
                  >
                    React.lazy
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#suspense"
                  >
                    React.Suspense
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
                    to="/entityframework"
                  >
                    Entity Framework
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
          <h3>React Fragments</h3>
          <article id="lazy">
            <h6>React.Lazy</h6>
            <div>
              <p>
                <code>React.lazy()</code> lets you define a component that is
                loaded dynamically. This helps reduce the bundle size to delay
                loading components that aren’t used during the initial render.
              </p>
              <Highlight language="jsx">
                {`// This component is loaded dynamically
const SomeComponent = React.lazy(() => import('./SomeComponent'));`}
              </Highlight>
            </div>
          </article>
          <article id="suspense">
            <h6>React.Suspense</h6>
            <div>
              <p>
                <code>React.Suspense</code> lets you specify the loading
                indicator in case some components in the tree below it are not
                yet ready to render. In the future we plan to let{" "}
                <code>Suspense</code> handle more scenarios such as data
                fetching.
              </p>
              <Highlight language="jsx">
                {`// This component is loaded dynamically
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
