import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Webstorage() {
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
                    href="#storage"
                  >Web Storage</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#storage-type"
                  >Storage Types</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#local-storage"
                  >localStorage</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#session-storage"
                  >session-storage</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cookies"
                  >Cookies</a>
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
          <h3>HTML Web Storage API</h3>
          <article id="storage">
            <h6>hat is HTML Web Storage?</h6>
            <div>
              <p>
                With web storage, web applications can store data locally within
                the user's browser.
              </p>
              <p>
                Before HTML5, application data had to be stored in cookies,
                included in every server request. Web storage is more secure,
                and large amounts of data can be stored locally, without
                affecting website performance.
              </p>
              <p>
                Unlike cookies, the storage limit is far larger (at least 5MB)
                and information is never transferred to the server.
              </p>
            </div>
          </article>
          <article id="storage-type">
            <h6>HTML Web Storage Types</h6>
            <div>
              <p>
                HTML web storage provides two objects for storing data on the
                client:
              </p>
              <ul>
                <li>
                  <code>window.localStorage</code> - stores data with no
                  expiration date
                </li>
                <li>
                  <code>window.sessionStorage</code> - stores data for one
                  session (data is lost when the browser tab is closed)
                </li>
              </ul>
            </div>
          </article>
          <article id="local-storage">
            <h6>The localStorage Object</h6>
            <div>
              <p>
                The localStorage object stores the data with no expiration date.
                The data will not be deleted when the browser is closed, and
                will be available the next day, week, or year.
              </p>
              <Highlight language="javascript">
                {`// Save data to localStorage
localStorage.setItem('key', 'value');

// Get saved data from localStorage
let data = localStorage.getItem('key');

// Remove saved data from localStorage
localStorage.removeItem('key');

// Remove all saved data from localStorage
localStorage.clear();`}
              </Highlight>
            </div>
          </article>
          <article id="session-storage">
            <h6>The sessionStorage Object</h6>
            <div>
              <p>
                The <code class="w3-codespan">sessionStorage</code> object is
                equal to the localStorage object, <strong>except</strong>
                that it stores the data for only one session. The data is
                deleted when the user closes the specific browser tab.
              </p>
              <Highlight language="javascript">
                {`// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
let data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();`}
              </Highlight>
            </div>
          </article>
          <article id="cookies">
            <h6>What are Cookies?</h6>
            <div>
              <p>
                Cookies are data, stored in small text files, on your computer.
              </p>
              <p>
                When a web server has sent a web page to a browser, the
                connection is shut down, and the server forgets everything about
                the user.
              </p>
              <p>
                Cookies were invented to solve the problem "how to remember
                information about the user":
              </p>
              <ul>
                <li>
                  When a user visits a web page, his/her name can be stored in a
                  cookie.
                </li>
                <li>
                  Next time the user visits the page, the cookie "remembers"
                  his/her name.
                </li>
              </ul>
              <p>Cookies are saved in name-value pairs</p>
              <p>
                When a browser requests a web page from a server, cookies
                belonging to the page are added to the request. This way the
                server gets the necessary data to "remember" information about
                users.
              </p>
              <Highlight language="javascript">
                {`document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";`}
              </Highlight>
              <p>Deleting a cookie is very simple.</p>
              <Highlight language="javascript">
                {`document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
