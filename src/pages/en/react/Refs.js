import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

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
                    href="#definition"
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
                    href="#ref"
                  >
                    React.Ref
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#forward-ref"
                  >
                    React.ForwardRef
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
          <article id="definition">
            <h6>refs</h6>
            <div>
              <p>
                Refs provide a way to access DOM nodes or React elements created
                in the render method.
              </p>
            </div>
          </article>
          <article id="use">
            <h6>There are a few good use cases for refs:</h6>
            <ul>
              <li>Managing focus, text selection, or media playback.</li>
              <li>Triggering imperative animations.</li>
              <li>Integrating with third-party DOM libraries.</li>
            </ul>
          </article>
          <article id="ref">
            <h6>React.createRef</h6>
            <div>
              <p>
                <code>React.createRef</code> creates a ref that can be attached
                to React elements via the ref attribute.
              </p>
              <Highlight language="jsx">
                {`class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  } 

  componentDidMount() {
    this.inputRef.current.focus();
  }
}`}
              </Highlight>
            </div>
          </article>
          <article id="forward-ref">
            <h6>React.forwardRef</h6>
            <div>
              <p>
                <code>React.forwardRef</code> creates a React component that
                forwards the ref attribute it receives to another component
                below in the tree. This technique is not very common but is
                particularly useful in two scenarios:
              </p>
              <Highlight language="jsx">
                {`const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
