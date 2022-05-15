import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Fragment() {
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
                    href="#fragment"
                  >
                    Fragments
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#better"
                  >
                    Fragments better than container divs?
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
          <article id="fragment">
            <h6>What are fragments?</h6>
            <div>
              <p>
                <p>
                  Le composant <code>React.Fragment</code> vous permet de
                  renvoyer plusieurs éléments depuis une méthode{" "}
                  <code>render()</code> sans avoir à créer un élément DOM
                  supplémentaire :
                </p>
              </p>
              <Highlight language="jsx">
                {`render() {
    return (
        <React.Fragment>
            <ChildA />
            <ChildB />
            <Childc />
        </React.Fragment>
    )
}

render() {
    return (
        <>
            <ChildA />
            <ChildB />
            <Childc />
        </>
    )
}`}
              </Highlight>
            </div>
          </article>
          <article id="better">
            <h6>Why are fragments better than container divs?</h6>
            <ul>
              <li>
                Fragments are faster and consume less memory because it did not
                create an extra DOM node.
              </li>
              <li>
                Some CSS styling like CSS Grid and Flexbox have a special
                parent-child relationship and add &lt;div&gt; tags in the
                middle, which makes it hard to keep the desired layout.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
