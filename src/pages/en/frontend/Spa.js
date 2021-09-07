import React from "react";
import { Link } from "react-router-dom";

export default function Spa() {
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
                    href="#spa"
                  >SPA</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#xmlhttprequest"
                  >XMLHttpRequest</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ajax"
                  >Ajax</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#mpa"
                  >MPA</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#spa-mpa"
                  >SPA vs MPA</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#seo"
                  >SEO</a>
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
          <h3>MPA SPA XMLHttpRequest Ajax</h3>
          <article id="spa">
            <h6>SPA (Single-page application)</h6>
            <div>
              <p>
                An SPA (Single-page application) is a web app implementation
                that loads only a single web document, and then updates the body
                content of that single document via JavaScript APIs such as
                XMLHttpRequest and Fetch when different content is to be shown.
              </p>
              <p>
                This therefore allows users to use websites without loading
                whole new pages from the server, which can result in performance
                gains and a more dynamic experience, with some tradeoff
                disadvantages such as SEO, more effort required to maintain
                state, implement navigation, and do meaningful performance
                monitoring.
              </p>
              <p>Pros of a Single-page Application:</p>
              <ul>
                <li>
                  <strong>Performance</strong>. All resources are loaded during
                  one session, and then, when interacting with the page, only
                  the necessary data is changed. This approach significantly
                  increases web app performance.
                </li>
                <li>
                  <strong>Improved user experience</strong>. Such apps provide
                  users with a more understandable linear experience. Moreover,
                  the use of AJAX and JavaScript frameworks, as well as the fact
                  that there is only one web page, allows building a more
                  flexible and responsive interface.
                </li>
                <li>
                  <strong>Data caching</strong>. After the first request to the
                  server, all the necessary local data is stored in the cache,
                  and that provides users with the possibility to work in an
                  offline mode (for example, GoogleDocs offline mode).
                </li>
                <li>
                  <strong>Development speed</strong>. All things equal, you will
                  have to develop and test fewer app elements and will be able
                  to reuse part of the code.
                </li>
                <li>
                  <strong>Ease of debugging</strong>. An SPA is most often
                  developed based on popular frameworks (React, Vue.js,
                  AngularJS) that offer their own debugging tools based on
                  Google Chrome, for example, Vue.js devtools.
                </li>
              </ul>
              <p>Cons of a Single-page Application:</p>
              <ul>
                <li>
                  <strong>Problems with SEO</strong>. Any web app runs in
                  JavaScript, and the data is loaded without reloading the page
                  and only at users’ demand. This means there are no separate
                  URLs optimized for search engines, and search engines do not
                  see the content. Exclusively server-side rendering can solve
                  the problem.
                </li>
                <li>
                  <strong>Downloading time</strong>. If the platform is complex,
                  large, and poorly optimized, the users’ browsers will take
                  more time to load the content.
                </li>
                <li>
                  <strong>JavaScript support is necessary</strong>. Without this
                  feature, you cannot fully use the complete functionality of a
                  certain app. If users disable JS in their browser, they will
                  not be able to use the app to its fullest.
                </li>
              </ul>
            </div>
          </article>
          <article id="xmlhttprequest">
            <h6>XMLHttpRequest</h6>
            <div>
              <p>
                <code>XMLHttpRequest</code> (XHR) objects are used to interact
                with servers. You can retrieve data from a URL without having to
                do a full page refresh. This enables a Web page to update just
                part of a page without disrupting what the user is doing.
              </p>
              <p>
                <code>XMLHttpRequest</code> is used heavily in AJAX programming.
              </p>
            </div>
          </article>
          <article id="ajax">
            <h6>Ajax</h6>
            <div>
              <p>
                <strong>Ajax</strong>, which initially stood for Asynchronous
                JavaScript And XML, is a programming practice of building
                complex, dynamic webpages using a technology known as
                XMLHttpRequest.
              </p>
              <p>
                Ajax allows you to update parts of the DOM of an HTML page
                instead without the need for a full page refresh. Ajax also lets
                you work asynchronously, meaning your code continues to run
                while the targeted part of your web page is trying to reload
                (compared to synchronously, which blocks your code from running
                until that part of your page is done reloading).
              </p>
              <p>
                With interactive websites and modern web standards, Ajax is
                gradually being replaced by functions within JavaScript
                frameworks and the official Fetch API Standard.
              </p>
            </div>
          </article>
          <article id="mpa">
            <h6>Multi-page Application (MPA)</h6>
            <div>
              <p>
                A Multi-page Application is a web application consisting of a
                large number of pages completely refreshed every time when data
                changes on them. Any data change or data transfer to the server
                leads to a new page displayed in the browser.
              </p>
              <p>Pros of a Multi-page Application:</p>
              <ul>
                <li>
                  <strong>SEO optimization is possible</strong>. The app has
                  multiple pages, and each of them can be optimized for a
                  specific group of requests to get free organic traffic from
                  Google.
                </li>
                <li>
                  <strong>Ease of scaling</strong>. This architecture type
                  allows creating as many new pages for each product or service
                  as you like and implementing any changes in them.
                </li>
                <li>
                  <strong>Available ready-made solutions</strong>. As a rule,
                  MPA development requires a smaller technology stack, and
                  besides, a wide range of ready-made solutions (CMS) are
                  available.
                </li>
                <li>
                  <strong>Analytic capabilities</strong>. Web analytics tools
                  like Google Analytics can be easily integrated into this type
                  of project and allow tracking each business page’s
                  performance.
                </li>
              </ul>
              <p>Cons of the Multi-page Application:</p>
              <ul>
                <li>
                  <strong>Possible performance issues</strong>. In case of a
                  large number of requests and the necessity to reload a large
                  number of pages, performance and speed will inevitably take a
                  knock. This is especially true for projects with high website
                  traffic, a large number of pages, and multiple functions.
                </li>
                <li>
                  <strong>Front-end and back-end tight integration</strong>. As
                  a rule, these components of a web app are deeply integrated,
                  and that is why it can take longer to develop and test them.
                </li>
                <li>
                  <strong>Maintenance and updates</strong>. It can be a daunting
                  task to provide technical support to websites with a lot of
                  pages. This issue also applies to security matters.
                </li>
              </ul>
            </div>
          </article>
          <article id="spa-mpa">
            <h6>SPA vs MPA</h6>
            <div>
              <p>
                SPA wins in terms of speed and code reusability, which can be
                applied to develop your mobile app, but it has deficiencies in
                SEO optimization. Using an MPA will help you rank higher in
                Google and is more scalable but much slower than SPA’s.
              </p>
            </div>
          </article>
          <article id="seo">
            <h6>Search engine optimization (SEO)</h6>
            <p>
              Search engine optimization (SEO) is the process of improving the
              quality and quantity of website traffic to a website or a web page
              from search engines.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
