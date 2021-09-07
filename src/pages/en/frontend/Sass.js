import React from "react";
import { Link } from "react-router-dom";

export default function Sass() {
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
                    Sass
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#variable"
                  >
                    Variable
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#data-types"
                  >
                    Data Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#control"
                  >
                    Control Directives
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#import"
                  >
                    Importing Files and Partials
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#mixin-include"
                  >
                    Sass @mixin and @include
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#extend"
                  >
                    Sass @extend and Inheritance
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
          <h3>Sass</h3>
          <article id="introduction">
            <h6>Sass</h6>
            <div>
              <p>
                Sass (which stands for Syntactically Awesome Style Sheets) is a
                declarative scripting language, an extension to CSS, not a
                procedural programming language like JavaScript.
              </p>
              <p>
                Saas includes various features such as variables, nested rules,
                mixins, inline imports, built-in functions to manipulate color
                and other values
              </p>
              <p>
                You can't send Sass code directly to the browser; Instead, you
                need to use the Sass pre-processor to translate the Sass code
                into standard CSS, a process known as transpiling.
              </p>
            </div>
          </article>
          <article id="variable">
            <h6>Variable</h6>
            <img
              src="img/front/sass-variable-syntax.PNG"
              alt="sass variable syntax"
            />
          </article>
          <article id="data-types">
            <h6>Sass - Data Types</h6>
            <div>
              <p>
                SassScript includes different data types: numbers, strings,
                colors, Booleans, null, lists and maps.
              </p>
              <ul>
                <li>
                  <b>Number</b>
                </li>
                <li>
                  <b>String</b>
                  <img
                    src="img/front/sass-data-string.PNG"
                    alt="sass data string"
                  />
                </li>
                <li>
                  <b>List</b>: A SassScript list is a series of values separated
                  by either spaces or commas.
                  <img
                    src="img/front/sass-data-list.PNG"
                    alt="sass-data list"
                  />
                </li>
                <li>
                  <b>maps</b> are key-value pairs.
                  <img src="img/front/sass-data-map.PNG" alt="sass-data  map" />
                </li>
              </ul>
            </div>
          </article>
          <article id="control">
            <h6>Sass - Control Directives</h6>
            <ul>
              <li>
                <b>Conditional Execution - @if</b>
                <img
                  src="img/front/sass-control-if.PNG"
                  alt="sass-control-if"
                />
              </li>
              <li>
                <b>Conditional Looping - @while</b>
                <img
                  src="img/front/sass-control-while.PNG"
                  alt="sass-control-while"
                />
              </li>
              <li>
                <b>Unconditional Looping - @for</b>
                <img
                  src="img/front/sass-control-for.PNG"
                  alt="sass-control-for"
                />
              </li>
              <li>
                <b>@each</b>
                <img
                  src="img/front/sass-control-each.PNG"
                  alt="sass-control-each"
                />
              </li>
            </ul>
          </article>
          <article id="import">
            <h6>Sass - Importing Files and Partials</h6>
            <div>
              <ul>
                <li>
                  Just like CSS, Sass also supports the <code>@import</code>
                  directive.
                </li>
                <li>
                  The <code>@import</code> directive allows you to include the
                  content of one file in another.
                </li>
              </ul>
              <img
                src="img/front/sass-import-syntax.PNG"
                alt="sass-import-syntax"
              />
              <img
                src="img/front/sass-import-example.PNG"
                alt="sass-import-example"
              />
              <img
                src="img/front/sass-import-partial.PNG"
                alt="sass-import-partial"
              />
            </div>
          </article>
          <article id="mixin-include">
            <h6>Sass @mixin and @include</h6>
            <div>
              <p>
                The <code>@mixin</code> directive lets you create CSS code that
                is to be reused throughout the website.
              </p>
              <p>
                The <code>@include</code> directive is created to let you use
                (include) the mixin.
              </p>
              <img
                src="img/front/sass-mixin-syntax.PNG"
                alt="sass-mixin-syntax"
              />
              <img
                src="img/front/sass-include-syntax.PNG"
                alt="sass-include-syntax"
              />
            </div>
          </article>
          <article id="extend">
            <h6>Sass @extend and Inheritance</h6>
            <div>
              <p>
                You'll often have a set of styles that expand on one another,
                mixins are one way of handling that situation without
                duplicating code. But Sass provides another way, the @extend
                directive, which provides a kind of inheritance by allowing one
                style to include another.
              </p>
              <p>
                The <code>@extend</code> directive lets you share a set of CSS
                properties from one selector to another.
              </p>
              <p>
                The <code>@extend</code> directive is useful if you have almost
                identically styled elements that only differ in some small
                details.
              </p>
              <img
                src="img/front/sass-extend-example.PNG"
                alt="sass-extend-example"
              />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
