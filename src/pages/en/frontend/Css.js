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
                    href="#selectors"
                  >
                    Selectors
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#combinator"
                  >
                    Combinators
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#pseudo-classes"
                  >
                    Pseudo-classes
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#pseudo-elements"
                  >
                    Pseudo-elements
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#attribute"
                  >
                    Attribute Selectors
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
                    href="#bootstrap"
                  >
                    Bootstrap
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
              <p>A CSS rule consists of a selector and a declaration block.</p>
              <img
                src="img/front/img_selector.gif"
                alt="CSS selector"
                class="w3-image"
              ></img>
            </div>
          </article>
          <article id="selectors">
            <h6>Selectors</h6>
            <div>
              <p>
                A CSS selector selects the HTML element(s) you want to style.
              </p>
              <ul>
                <li>
                  Simple selectors (select elements based on name, id, class)
                </li>
                <li>
                  <p>
                    Combinator selectors (select elements based on a specific
                    relationship between them)
                  </p>
                </li>
                <li>
                  Pseudo-class selectors (select elements based on a certain
                  state)
                </li>
                <li>
                  Pseudo-elements selectors (select and style a part of an
                  element)
                </li>
                <li>
                  Attribute selectors (select elements based on an attribute or
                  attribute value)
                </li>
              </ul>
              <p>A CSS rule consists of a selector and a declaration block.</p>
              <img src="img/front/img_selector.gif" alt="CSS selector" />
            </div>
          </article>
          <article id="combinator">
            <h6>Combinators</h6>
            <div>
              <p>
                Combinator selectors (select elements based on a specific
                relationship between them)
              </p>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>Selector</th>
                    <th>Example</th>
                    <th>Example description</th>
                  </tr>
                  <tr>
                    <td>
                      <i>element</i> <i>element</i>
                    </td>
                    <td>div p</td>
                    <td>
                      Selects all &lt;p&gt; elements inside &lt;div&gt; elements
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i>element</i>&gt;<i>element</i>
                    </td>
                    <td>div &gt; p</td>
                    <td>
                      Selects all &lt;p&gt; elements where the parent is a
                      &lt;div&gt; element
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i>element</i>+<i>element</i>
                    </td>
                    <td>div + p</td>
                    <td>
                      Selects the first &lt;p&gt; element that are placed
                      immediately after &lt;div&gt; elements
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i>element1</i>~<i>element2</i>
                    </td>
                    <td>p ~ ul</td>
                    <td>
                      Selects every &lt;ul&gt; element that are preceded by a
                      &lt;p&gt; element
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="pseudo-classes">
            <h6>Pseudo-classes</h6>
            <div>
              <p>
                Pseudo-class selectors (select elements based on a certain
                state)
              </p>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>Selector</th>
                    <th>Example</th>
                    <th>Example description</th>
                  </tr>
                  <tr>
                    <td>:active</td>
                    <td>a:active</td>
                    <td>Selects the active link</td>
                  </tr>
                  <tr>
                    <td>:checked</td>
                    <td>input:checked</td>
                    <td>Selects every checked &lt;input&gt; element</td>
                  </tr>
                  <tr>
                    <td>:disabled</td>
                    <td>input:disabled</td>
                    <td>Selects every disabled &lt;input&gt; element</td>
                  </tr>
                  <tr>
                    <td>:empty</td>
                    <td>p:empty</td>
                    <td>
                      Selects every &lt;p&gt; element that has no children
                    </td>
                  </tr>
                  <tr>
                    <td>:enabled</td>
                    <td>input:enabled</td>
                    <td>Selects every enabled &lt;input&gt; element</td>
                  </tr>
                  <tr>
                    <td>:first-child</td>
                    <td>p:first-child</td>
                    <td>
                      Selects every &lt;p&gt; elements that is the first child
                      of its parent
                    </td>
                  </tr>
                  <tr>
                    <td>:first-of-type</td>
                    <td>p:first-of-type</td>
                    <td>
                      Selects every &lt;p&gt; element that is the first
                      &lt;p&gt; element of its parent
                    </td>
                  </tr>
                  <tr>
                    <td>:focus</td>
                    <td>input:focus</td>
                    <td>Selects the &lt;input&gt; element that has focus</td>
                  </tr>
                  <tr>
                    <td>:hover</td>
                    <td>a:hover</td>
                    <td>Selects links on mouse over</td>
                  </tr>
                  <tr>
                    <td>:in-range</td>
                    <td>input:in-range</td>
                    <td>
                      Selects &lt;input&gt; elements with a value within a
                      specified range
                    </td>
                  </tr>
                  <tr>
                    <td>:invalid</td>
                    <td>input:invalid</td>
                    <td>
                      Selects all &lt;input&gt; elements with an invalid value
                    </td>
                  </tr>
                  <tr>
                    <td>
                      :lang(<i>language</i>)
                    </td>
                    <td>p:lang(it)</td>
                    <td>
                      Selects every &lt;p&gt; element with a lang attribute
                      value starting with "it"
                    </td>
                  </tr>
                  <tr>
                    <td>:last-child</td>
                    <td>p:last-child</td>
                    <td>
                      Selects every &lt;p&gt; elements that is the last child of
                      its parent
                    </td>
                  </tr>
                  <tr>
                    <td>:last-of-type</td>
                    <td>p:last-of-type</td>
                    <td>
                      Selects every &lt;p&gt; element that is the last &lt;p&gt;
                      element of its parent
                    </td>
                  </tr>
                  <tr>
                    <td>:link</td>
                    <td>a:link</td>
                    <td>Selects all unvisited links</td>
                  </tr>
                  <tr>
                    <td>:not(selector)</td>
                    <td>:not(p)</td>
                    <td>
                      Selects every element that is not a &lt;p&gt; element
                    </td>
                  </tr>
                  <tr>
                    <td>:nth-child(n)</td>
                    <td>p:nth-child(2)</td>
                    <td>
                      Selects every &lt;p&gt; element that is the second child
                      of its parent
                    </td>
                  </tr>
                  <tr>
                    <td>:nth-last-child(n)</td>
                    <td>p:nth-last-child(2)</td>
                    <td>
                      Selects every &lt;p&gt; element that is the second child
                      of its parent, counting from the last child
                    </td>
                  </tr>
                  <tr>
                    <td>:nth-last-of-type(n)</td>
                    <td>p:nth-last-of-type(2)</td>
                    <td>
                      Selects every &lt;p&gt; element that is the second
                      &lt;p&gt; element of its parent, counting from the last
                      child
                    </td>
                  </tr>
                  <tr>
                    <td>:nth-of-type(n)</td>
                    <td>p:nth-of-type(2)</td>
                    <td>
                      Selects every &lt;p&gt; element that is the second
                      &lt;p&gt; element of its parent
                    </td>
                  </tr>
                  <tr>
                    <td>:only-of-type</td>
                    <td>p:only-of-type</td>
                    <td>
                      Selects every &lt;p&gt; element that is the only &lt;p&gt;
                      element of its parent
                    </td>
                  </tr>
                  <tr>
                    <td>:only-child</td>
                    <td>p:only-child</td>
                    <td>
                      Selects every &lt;p&gt; element that is the only child of
                      its parent
                    </td>
                  </tr>
                  <tr>
                    <td>:optional</td>
                    <td>input:optional</td>
                    <td>
                      Selects &lt;input&gt; elements with no "required"
                      attribute
                    </td>
                  </tr>
                  <tr>
                    <td>:out-of-range</td>
                    <td>input:out-of-range</td>
                    <td>
                      Selects &lt;input&gt; elements with a value outside a
                      specified range
                    </td>
                  </tr>
                  <tr>
                    <td>:read-only</td>
                    <td>input:read-only</td>
                    <td>
                      Selects &lt;input&gt; elements with a "readonly" attribute
                      specified
                    </td>
                  </tr>
                  <tr>
                    <td>:read-write</td>
                    <td>input:read-write</td>
                    <td>
                      Selects &lt;input&gt; elements with no "readonly"
                      attribute
                    </td>
                  </tr>
                  <tr>
                    <td>:required</td>
                    <td>input:required</td>
                    <td>
                      Selects &lt;input&gt; elements with a "required" attribute
                      specified
                    </td>
                  </tr>
                  <tr>
                    <td>:root</td>
                    <td>root</td>
                    <td>Selects the document's root element</td>
                  </tr>
                  <tr>
                    <td>:target</td>
                    <td>#news:target</td>
                    <td>
                      Selects the current active #news element (clicked on a URL
                      containing that anchor name)
                    </td>
                  </tr>
                  <tr>
                    <td>:valid</td>
                    <td>input:valid</td>
                    <td>
                      Selects all &lt;input&gt; elements with a valid value
                    </td>
                  </tr>
                  <tr>
                    <td>:visited</td>
                    <td>a:visited</td>
                    <td>Selects all visited links</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="pseudo-elements">
            <h6>Pseudo-elements</h6>
            <div>
              <p>
                Pseudo-elements selectors (select and style a part of an
                element)
              </p>
              <table class="ws-table-all notranslate">
                <tbody>
                  <tr>
                    <th>Selector</th>
                    <th>Example</th>
                    <th>Example description</th>
                  </tr>
                  <tr>
                    <td>::after</td>
                    <td>p::after</td>
                    <td>
                      Insert something after the content of each &lt;p&gt;
                      element
                    </td>
                  </tr>
                  <tr>
                    <td>::before</td>
                    <td>p::before</td>
                    <td>
                      Insert something before the content of each &lt;p&gt;
                      element
                    </td>
                  </tr>
                  <tr>
                    <td>::first-letter</td>
                    <td>p::first-letter</td>
                    <td>Selects the first letter of each &lt;p&gt; element</td>
                  </tr>
                  <tr>
                    <td>::first-line</td>
                    <td>p::first-line</td>
                    <td>Selects the first line of each &lt;p&gt; element</td>
                  </tr>
                  <tr>
                    <td>::marker</td>
                    <td>::marker</td>
                    <td>Selects the markers of list items</td>
                  </tr>
                  <tr>
                    <td>::selection</td>
                    <td>p::selection</td>
                    <td>
                      Selects the portion of an element that is selected by a
                      user
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="attribute">
            <h6>Attribute Selectors</h6>
            <div>
              <p>
                Attribute selectors (select elements based on an attribute or
                attribute value)
              </p>
              <table class="ws-table-all notranslate">
                <tbody>
                  <tr>
                    <th>Selector</th>
                    <th>Example</th>
                    <th>Example description</th>
                  </tr>
                  <tr>
                    <td>
                      [<i>attribute</i>]
                    </td>
                    <td>[target]</td>
                    <td>Selects all elements with a target attribute</td>
                  </tr>
                  <tr>
                    <td>
                      [<i>attribute</i>=<i>value</i>]
                    </td>
                    <td>[target=_blank]</td>
                    <td>Selects all elements with target="_blank"</td>
                  </tr>
                  <tr>
                    <td>
                      [<i>attribute</i>~=<i>value</i>]
                    </td>
                    <td>[title~=flower]</td>
                    <td>
                      Selects all elements with a title attribute containing the
                      word "flower"
                    </td>
                  </tr>
                  <tr>
                    <td>
                      [<i>attribute</i>|=<i>value</i>]
                    </td>
                    <td>[lang|=en]</td>
                    <td>
                      Selects all elements with a lang attribute value starting
                      with "en"
                    </td>
                  </tr>
                  <tr>
                    <td>
                      [<i>attribute</i>^=<i>value</i>]
                    </td>
                    <td>a[href^="https"]</td>
                    <td>
                      Selects every &lt;a&gt; element whose href attribute value
                      begins with "https"
                    </td>
                  </tr>
                  <tr>
                    <td>
                      [<i>attribute</i>$=<i>value</i>]
                    </td>
                    <td>a[href$=".pdf"]</td>
                    <td>
                      Selects every &lt;a&gt; element whose href attribute value
                      ends with ".pdf"
                    </td>
                  </tr>
                  <tr>
                    <td>
                      [<i>attribute</i>*=<i>value</i>]
                    </td>
                    <td>a[href*="w3schools"]</td>
                    <td>
                      Selects every &lt;a&gt; element whose href attribute value
                      contains the substring "w3schools"
                    </td>
                  </tr>
                </tbody>
              </table>
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
