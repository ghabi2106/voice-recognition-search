import React from "react";
import { Link } from "react-router-dom";

export default function Lifecycle() {
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
                    href="#phase"
                  >
                    React phases
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lifecycle"
                  >
                    Lifecycle
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
          <h3>React Lifecycle</h3>
          <article id="phase">
            <h6>
              There are three different phases of React component’s lifecycle:
            </h6>
            <ul>
              <li>
                Initial Rendering Phase: This is the phase when the component is
                about to start its life journey and make its way to the DOM.
              </li>
              <li>
                Updating Phase: Once the component gets added to the DOM, it can
                potentially update and re-render only when a prop or state
                change occurs. That happens only in this phase.
              </li>
              <li>
                Unmounting Phase: This is the final phase of a component’s life
                cycle in which the component is destroyed and removed from the
                DOM.
              </li>
            </ul>
          </article>
          <article id="lifecycle">
            <h6>
              Explain the lifecycle methods of React components in detail.
            </h6>
            <ul>
              <li>
                <b>componentWillMount()</b> – Executed just before rendering
                takes place both on the client as well as server-side.
              </li>
              <li>
                <b>componentDidMount()</b> – Executed on the client side only
                after the first render.
              </li>
              <li>
                <b>componentWillReceiveProps()</b> – Invoked as soon as the
                props are received from the parent class and before another
                render is called.
              </li>
              <li>
                <b>shouldComponentUpdate()</b> – Returns true or false value
                based on certain conditions. If you want your component to
                update, return true else return false. By default, it returns
                false.
              </li>
              <li>
                <b>componentWillUpdate()</b> – Called just before rendering
                takes place in the DOM.
              </li>
              <li>
                <b>componentDidUpdate()</b> – Called immediately after rendering
                takes place.
              </li>
              <li>
                <b>componentWillUnmount()</b> – Called after the component is
                unmounted from the DOM. It is used to clear up the memory
                spaces.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
