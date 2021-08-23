import React from "react";
import { Link } from "react-router-dom";

export default function Html() {
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
                    href="#new-features"
                  >
                    New features
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
          <h3>HTML</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                HTML is the standard markup language for creating Web pages.
              </p>
              <ul>
                <li>HTML stands for Hyper Text Markup Language</li>
                <li>
                  HTML is the standard markup language for creating Web pages
                </li>
                <li>HTML describes the structure of a Web page</li>
                <li>
                  HTML elements tell the browser how to display the content.
                </li>
              </ul>
            </div>
          </article>
          <article id="new-features">
            <h6>New features</h6>
            <ul>
              <li>
                <code>video</code>,<code>audio</code>,<code></code>
              </li>
              <li>
                Semantic Elements: <code>header</code>,<code>footer</code>
                <code>nav</code>,<code>section</code>,<code>article</code>
              </li>
              <li>
                <code>figure</code>,<code>progressbar</code>,<code>svg</code>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
