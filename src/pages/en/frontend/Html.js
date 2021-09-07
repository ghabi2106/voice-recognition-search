import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

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
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="element"
                  >
                    Elements
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="attribute"
                  >
                    Attributes
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="semantic-elements"
                  >
                    Semantic Elements
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="entity"
                  >
                    Entities
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="encoding"
                  >
                    Encoding
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
          <article id="element">
            <h6>HTML Elements</h6>
            <div>
              <p>
                An HTML element is defined by a start tag, some content, and an
                end tag.
              </p>
              <Highlight language="html">
                {`<tagname>Content goes here...</tagname>`}
              </Highlight>
            </div>
          </article>
          <article id="attribute">
            <h6>HTML Attributes</h6>
            <p>
              HTML attributes provide additional information about HTML
              elements.
              <br />
              Attributes usually come in name/value pairs like: name="value"
              <br />
              eg: The &lt;a&gt; tag defines a hyperlink. The href attribute
              specifies the URL of the page the link goes to:
            </p>
          </article>
          <article id="semantic-elements">
            <h6>HTML Semantic Elements</h6>
            <div>
              <p>Semantic elements = elements with a meaning.</p>
              <p>
                A semantic element clearly describes its meaning to both the
                browser and the developer.
              </p>
              <p>
                Examples of <strong>non-semantic</strong> elements:{" "}
                <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> - Tells
                nothing about its content.
              </p>
              <p>
                Examples of <strong>semantic</strong> elements:{" "}
                <code>&lt;form&gt;</code>, <code>&lt;table&gt;</code>, and{" "}
                <code>&lt;article&gt;</code> - Clearly defines its content.
              </p>
            </div>
          </article>
          <article id="entity">
            <h6>HTML Entities</h6>
            <div>
              <p>
                Reserved characters in HTML must be replaced with character
                entities.
              </p>
              <p>
                If you use the less than (&lt;) or greater than (&gt;) signs in
                your text, the browser might mix them with tags.
              </p>
              <Highlight language="html">
                {`&entity_name;
OR

&#entity_number;`}
              </Highlight>
              <p>
                To display a less than sign (&lt;) we must write:{" "}
                <b>&amp;lt;</b> or <b>&amp;#60;</b>
              </p>
            </div>
          </article>
          <article id="encoding">
            <h6>HTML Encoding (Character Sets)</h6>
            <div>
              <p>
                To display an HTML page correctly, a web browser must know which
                character set to use.
              </p>
              <Highlight language="html">{`<meta charset="UTF-8">`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
