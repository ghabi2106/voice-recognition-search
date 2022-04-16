import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Module() {
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
                    href="#module"
                  >
                    Module
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
          <h3>Module</h3>
          <article id="module">
            <h6>Module</h6>
            <div>
              <p>Un module est un mécanisme permettant de :</p>
              <ul>
                <li>
                  regrouper des composants (mais aussi des services, directives,
                  pipes etc...),
                </li>
                <li>définir leurs dépendances</li>
                <li>et définir leur visibilité.</li>
              </ul>
              <ul class="nav nav-pills mb-3" id="pills-tab-1" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab-1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-home-1"
                    aria-selected="true"
                  >
                    src/app/heroes/hero.service.ts (CLI-generated)
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent-1">
                <div
                  class="tab-pane fade show active"
                  id="pills-home-1"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab-1"
                >
                  <Highlight language="ts">
                    {`import { NgModule } from '@angular/core';

import { PictureModule } from '../picture/picture.module';
import { BookPreviewComponent } from './book-preview/book-preview.component';

@NgModule({
    declarations: [
        BookPreviewComponent
    ],
    exports: [
        BookPreviewComponent
    ],
    imports: [
        HttpModule,
        PictureModule
    ]
})
export class BookModule {
}`}
                  </Highlight>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
