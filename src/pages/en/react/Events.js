import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Events() {
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
                    href="#event"
                  >
                    Event
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#create-event"
                  >
                    Create Event
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#synthetic"
                  >
                    Synthetic Event
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
          <h3>React Events</h3>
          <article id="event">
            <h6>What is an event in React?</h6>
            <div>
              <p>
                In React, events are the triggered reactions to specific actions
                like mouse hover, mouse click, key press, etc. Handling these
                events are similar to handling events in DOM elements.
              </p>
              <ul>
                <li>
                  Events are named using camel case instead of just using the
                  lowercase.
                </li>
                <li>Events are passed as functions instead of strings.</li>
              </ul>
            </div>
          </article>
          <article id="create-event">
            <h6>How do you create an event in React?</h6>
            <Highlight language="jsx">
              {`class Display extends React.Component({
    show(evt) {
        // code
    },   
    render() {
        // Render the div with an onClick prop (value is a function)
        return (
            <div onClick={this.show}>Click Me!</div>
        );
    }
});`}
            </Highlight>
          </article>
          <article id="synthetic">
            <h6>What are synthetic events in React?</h6>
            <div>
              <p>
                A synthetic event is an object which acts as a cross-browser
                wrapper around the browser's native event. It combines the
                behavior of different browser's native event into one API,
                including stopPropagation() and preventDefault().
              </p>
              <Highlight language="jsx">
                {`function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('You had clicked a Link.');
    }
    return (
        <a href="#" onClick={handleClick}>
            Click_Me
        </a>
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
