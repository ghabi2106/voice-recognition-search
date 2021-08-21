import React from "react";
import { Link } from "react-router-dom";

export default function Refs() {
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
                    href="#ref"
                  >
                    Refs
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >
                    Use of refs
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#forward-refs"
                  >
                    Forward Refs?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#find-dom-node"
                  >
                    callback refs vs findDOMNode()?
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
          <h3>refs in React</h3>
          <article id="ref">
            <h6>What do you understand by refs in React?</h6>
            <div>
              <p>
                Refs is the short hand for References in React. It is an
                attribute which helps to store a reference to a particular React
                element or component, which will be returned by the components
                render configuration function. It is used to return references
                to a particular element or component returned by render(). They
                come in handy when we need DOM measurements or to add methods to
                the components.
              </p>
              <img src="/img/react/ref-react.PNG" alt="ref react" />
            </div>
          </article>
          <article id="use">
            <h6>List some of the cases when you should use Refs.</h6>
            <ul>
              <li>
                When you need to manage focus, select text or media playback
              </li>
              <li>To trigger imperative animations</li>
              <li>Integrate with third-party DOM libraries</li>
            </ul>
          </article>
          <article id="forward-refs">
            <h6>What are Forward Refs?</h6>
            <div>
              <p>
                Ref forwarding is a feature which is used for passing a ref
                through a component to one of its child components. It can be
                performed by making use of the React.forwardRef() method. It is
                particularly useful with higher-order components and specially
                used in reusable component libraries.
              </p>
              <img src="/img/react/forward-ref.PNG" alt="forward ref" />
            </div>
          </article>
          <article id="find-dom-node">
            <h6>
              Which is the preferred option callback refs or findDOMNode()?
            </h6>
            <div>
              <p>
                The preferred option is to use callback refs over findDOMNode()
                API. Because callback refs give better control when the refs are
                set and unset whereas findDOMNode() prevents certain
                improvements in React in the future.
              </p>
              <img src="/img/react/find-dom-node-1.PNG" alt="find dom node" />
              <p>The recommended approach is:</p>
              <img src="/img/react/find-dom-node-2.PNG" alt="find dom node" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
