import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function SSR() {
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
                    href="#ssr"
                  >
                    SSR
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dynamic-data-ssr"
                  >
                    Dynamic data with SSR
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
                    to="/angular"
                  >
                    Angular
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
          <h3>Server-Side Rendering (SSR)</h3>
          <article id="ssr">
            <h6>SSR</h6>
            <div>
              <ul>
                <li>
                  Uses <strong>Angular Universal</strong> to pre-render pages on
                  the server.
                </li>
                <li>Improves SEO and performance for initial load.</li>
              </ul>
              <strong>1. Add Angular Universal to Your Project</strong>
              <Highlight language="sh">
                {`ng add @nguniversal/express-engine`}
              </Highlight>
              <strong>2. Build and Serve the Application with SSR</strong>
              <Highlight language="sh">
                {`npm run build:ssr
npm run serve:ssr`}
              </Highlight>
            </div>
          </article>
          <article id="dynamic-data-ssr">
            <h6>Dynamic Data with SSR</h6>
            <div>
              <strong>Dynamic Data with SSR</strong>
              <p>
                For fetching data <strong>before rendering</strong>, use
                Angular’s <code>TransferState</code> API:
              </p>
              <Highlight language="sh">
                {`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const DATA_KEY = makeStateKey('serverData');

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private state: TransferState) {}

  fetchData() {
    if (this.state.hasKey(DATA_KEY)) {
      return this.state.get(DATA_KEY, null);
    } else {
      return this.http.get('/api/data').pipe(
        tap(data => this.state.set(DATA_KEY, data))
      );
    }
  }
}
`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
