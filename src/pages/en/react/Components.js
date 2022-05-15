import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Components() {
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
                    Components
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#component"
                  >
                    React.Component
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#pure-component"
                  >
                    React.PureComponent
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#memo"
                  >
                    React.memo
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#capital"
                  >
                    Components starts with a capital letter
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
          <h3>Components</h3>
          <article id="definition">
            <h6>Components</h6>
            <div>
              <p>
                React components let you split the UI into independent, reusable
                pieces, and think about each piece in isolation. React
                components can be defined by subclassing{" "}
                <code>React.Component</code> or <code>React.PureComponent</code>
                .
              </p>
              <p>
                React components can also be defined as functions which can be
                wrapped: <code>React.memo</code>
              </p>
            </div>
          </article>
          <article id="component">
            <h6>React.Component</h6>
            <div>
              <Highlight language="jsx">
                {`class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}
              </Highlight>
            </div>
          </article>
          <article id="pure-component">
            <h6>React.PureComponent</h6>
            <div>
              <p>
                <code>React.PureComponent</code> is similar to{" "}
                <code>React.Component</code>. The difference between them is
                that <code>React.Component</code> doesn’t implement{" "}
                <code>shouldComponentUpdate()</code>, but{" "}
                <code>React.PureComponent</code> implements it with a shallow
                prop and state comparison.
              </p>
            </div>
          </article>
          <article id="memo">
            <h6>React.memo</h6>
            <div>
              <p>
                If your component renders the same result given the same props,
                you can wrap it in a call to <code>React.memo</code> for a
                performance boost in some cases by memoizing the result. This
                means that React will skip rendering the component, and reuse
                the last rendered result.
              </p>
              <Highlight language="jsx">{`const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});`}</Highlight>
            </div>
          </article>
          <article id="capital">
            <h6>
              Why is it necessary to start component names with a capital
              letter?
            </h6>
            <p>
              In React, it is necessary to start component names with a capital
              letter. If we start the component name with lower case, it will
              throw an error as an unrecognized tag. It is because, in JSX,
              lower case tag names are considered as HTML tags.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
