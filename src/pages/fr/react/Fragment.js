import React from "react";
import { Link } from "react-router-dom";

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
          <h3>React Fragments</h3>
          <article id="fragment">
            <h6>What are fragments?</h6>
            <div>
              <p>
                Fragments are used for components to return multiple elements.
                It allows you to group a list of multiple children without
                adding an extra node to the DOM.
              </p>
              <img src="/img/react/fragment-react-1.PNG" alt="fragment react" />
              <img src="/img/react/fragment-react-2.PNG" alt="fragment react" />
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
              <li>The DOM Inspector is less cluttered.</li>
            </ul>
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
