import React from "react";
import { Link } from "react-router-dom";

export default function Javascript() {
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
                    href="#introduction"
                  >
                    JavaScript
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#strict-mode"
                  >
                    JavaScript strict mode
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#hoisting"
                  >
                    JavaScript Hoisting
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#closure"
                  >
                    JavaScript Closures
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#iife"
                  >
                    What is an IIFE?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#this"
                  >
                    What is this?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#callback"
                  >
                    What is Callbacks?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#async"
                  >
                    JavaScript Async
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#promise"
                  >
                    JavaScript Promise
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
                  to="/css"
                >
                  CSS
                </Link>
              </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/html"
                  >
                    HTML
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/javascript"
                  >
                    Javascript
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/webstorage"
                  >
                    Web Storage API
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/sass"
                  >
                    Sass
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/spa"
                  >
                    MPA SPA XMLHttpRequest Ajax
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
          <h3>Javascript</h3>
          <article id="introduction">
            <h6>What is JavaScript</h6>
            <p>
              JavaScript is a programming language that executes on the browser.
              It turns static HTML web pages into interactive web pages by
              dynamically updating content, validating form data, controlling
              multimedia, animate images, and almost everything else on the web
              pages.
            </p>
          </article>
          <article id="strict-mode">
            <h6>JavaScript strict mode</h6>
            <div>
              <p>
                <code>"use strict";</code> Defines that JavaScript code should
                be executed in "strict mode".
              </p>
              <ul>
                <li>
                  Use of undefined variables
                  <img
                    src="/img/front/strict-mode-variable.PNG"
                    alt="strict-mode-variable"
                  />
                </li>
                <li>
                  Use of reserved keywords as variable or function name
                  <img
                    src="/img/front/strict-mode-reserved-keyword.PNG"
                    alt="strict-mode-reserved-keyword"
                  />
                </li>
                <li>
                  Duplicate properties of an object
                  <img
                    src="/img/front/strict-mode-duplicate-property.PNG"
                    alt="strict-mode-duplicate-property"
                  />
                </li>
                <li>
                  Duplicate parameters of function
                  <img
                    src="/img/front/strict-mode-duplicate-parameter.PNG"
                    alt="strict-mode-duplicate-parameter"
                  />
                </li>
                <li>
                  Assign values to read-only properties
                  <img
                    src="/img/front/strict-mode-readonly-property.PNG"
                    alt="strict-mode-readonly-property"
                  />
                </li>
                <li>
                  Modifying arguments object
                  <img
                    src="/img/front/strict-mode-modify-args.PNG"
                    alt="strict-mode-modify-args"
                  />
                </li>
                <li>
                  with statement
                  <img
                    src="/img/front/strict-mode-with.PNG"
                    alt="strict-mode-with.PNG"
                  />
                </li>
                <li>
                  eval function to create a variable
                  <img
                    src="/img/front/strict-mode-eval.PNG"
                    alt="strict-mode-eval"
                  />
                </li>
              </ul>
            </div>
          </article>
          <article id="hoisting">
            <h6>Hoisting</h6>
            <div>
              <p>
                Hoisting is JavaScript's default behavior of moving declarations
                to the top.
              </p>
              <img src="/img/front/hoisting.png" alt="hoisting" />
            </div>
          </article>
          <article id="closure">
            <h6>JavaScript Closures</h6>
            <div>
              <p>
                A closure is a function having access to the parent scope, even
                after the parent function has closed.
              </p>
              <img src="/img/front/js-closure.PNG" alt="js-closure" />
            </div>
          </article>
          <article id="iife">
            <h6>What is an IIFE?</h6>
            <div>
              <p>
                IIFE is a function expression that automatically invokes after
                completion of the definition. The parenthesis () plays important
                role in IIFE pattern. In JavaScript, parenthesis cannot contain
                statements; it can only contain an expression.
              </p>
              <ul>
                <li>
                  Do not create unnecessary global variables and functions
                </li>
                <li>
                  Functions and variables defined in IIFE do not conflict with
                  other functions and variables even if they have same name.
                </li>
                <li>Organize JavaScript code.</li>
                <li>Make JavaScript code maintainable.</li>
              </ul>
              <img src="/img/front/js-iife.PNG" alt="js-iife" />
            </div>
          </article>
          <article id="this">
            <h6>What is this?</h6>
            <p>
              The JavaScript this keyword refers to the object it belongs to.
            </p>
          </article>
          <article id="callback">
            <h6>What is Callbacks?</h6>
            <div>
              <ul>
                <li>
                  A callback is a function passed as an argument to another
                  function
                </li>
                <li>
                  This technique allows a function to call another function
                </li>
                <li>
                  A callback function can run after another function has
                  finished
                </li>
              </ul>
              <img src="/img/front/js-callback.PNG" alt="js-callback" />
            </div>
          </article>
          <article id="async">
            <h6>JavaScript Async</h6>
            <div>
              <ul>
                <li>async makes a function return a Promise</li>
                <li>await makes a function wait for a Promise</li>
              </ul>
              <img src="/img/front/js-async.PNG" alt="js-async" />
            </div>
          </article>
          <article id="promise">
            <h6>JavaScript Promise</h6>
            <div>
              <p>
                A JavaScript Promise object contains both the producing code and
                calls to the consuming code:
              </p>
              <img src="/img/front/js-promise" alt="js-promise" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
