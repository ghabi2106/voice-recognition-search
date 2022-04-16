import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function DI() {
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
                    href="#di"
                  >
                    Dependency injection
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#providers"
                  >
                    DI Providers
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
          <h3>Dependency injection</h3>
          <article id="di">
            <h6>Dependency injection</h6>
            <div>
              <p>
                La "Dependency Injection" est un "design pattern" qui consiste à
                séparer l'instanciation (et donc l'implémentation) d'une
                dépendance et son utilisation..
              </p>
              <p>Ce "design pattern" permet :</p>
              <ul>
                <li>d'inverser les dépendances,</li>
                <li>d'éviter le couplage fort avec les dépendances,</li>
                <li>de factoriser l'instanciation d'une dépendance,</li>
                <li>
                  de faciliter le remplacement d'une dépendance par une autre
                  implémentation à des fins fonctionnelles ou de "testing“.
                </li>
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab-1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile-1"
                    aria-selected="false"
                  >
                    rc/app/heroes/hero-list.component (constructor signature)
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
                    {`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() { }
}`}
                  </Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile-1"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab-1"
                >
                  <Highlight language="ts">
                    {`constructor(heroService: HeroService)`}
                  </Highlight>
                </div>
              </div>
            </div>
          </article>
          <article id="providers">
            <h6>DI Providers</h6>
            <div>
              <p>
                By configuring providers, you can make services available to the
                parts of your application that need them.
              </p>
              <ul>
                <li>In the @Injectable() decorator for the service itself</li>
                <li>In the @NgModule() decorator for an NgModule</li>
                <li>In the @Component() decorator for a component</li>
              </ul>
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    src/app/services/user.service.ts
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    rc/app/services/better-logger.ts
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <Highlight language="ts">
                    {`[ UserService,
  { provide: Logger, useClass: EvenBetterLogger }]`}
                  </Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <Highlight language="ts">
                    {`@Injectable()
export class EvenBetterLogger extends Logger {
  constructor(private userService: UserService) { super(); }

  override log(message: string) {
    const name = this.userService.user.name;
    super.log('Message to $//{name}: $//{message}');
  }
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
