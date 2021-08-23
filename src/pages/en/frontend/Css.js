import React from "react";
import { Link } from "react-router-dom";

export default function Css() {
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
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#media-query"
                  >
                    Media Query
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#syntax"
                  >
                    Syntax
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
          <h3>CSS</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>CSS is the language we use to style a Web page.</p>
              <ul>
                <li>CSS stands for Cascading Style Sheets</li>
                <li>
                  CSS describes how HTML elements are to be displayed on screen,
                  paper, or in other media
                </li>
                <li>
                  CSS saves a lot of work. It can control the layout of multiple
                  web pages all at once
                </li>
              </ul>
            </div>
          </article>
          <article id="media-query">
            <h6>Media Query</h6>
            <p>
              It uses the <code>@media</code> rule to include a block of CSS
              properties only if a certain condition is true.
            </p>
          </article>
          <article id="bootstrap">
            <h6>bootstrap</h6>
            <ul>
              <li>
                Bootstrap is a free front-end framework for faster and easier
                web development
              </li>
              <li>
                Bootstrap includes HTML and CSS based design templates for
                forms, buttons, tables, navigation, modals, image carousels and
                many other, as well as optional JavaScript plugins
              </li>
              <li>
                Bootstrap also gives you the ability to easily create responsive
                designs
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
