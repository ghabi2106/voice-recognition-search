import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function ProvidersType() {
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
                    href="#use-class"
                  >
                    useClass
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use-factory"
                  >
                    useFactory
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use-existing"
                  >
                    useExisting
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
          <h3>Difference Between useClass, useFactory, and useExisting</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <ul>
                <li>
                  <strong>useClass</strong>: Replaces a service with a different
                  implementation.
                </li>
                <li>
                  <strong>useFactory</strong>: Creates a service dynamically
                  using a factory function.
                </li>
                <li>
                  <strong>useExisting</strong>: Provides an alias to another
                  service.
                </li>
              </ul>
            </div>
          </article>
          <article id="use-class">
            <h6>useClass</h6>
            <div>
              <ul>
                <li>
                  <p>
                    <strong>Purpose:</strong>
                    <br />
                    Replaces a service with a different implementation by
                    specifying a class to instantiate when a dependency is
                    requested.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>When to Use:</strong>
                    <br />
                    When you want to provide an alternative implementation of a
                    service.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Example:</strong>
                  </p>
                  <Highlight language="ts">
                    {`import { Injectable, NgModule } from '@angular/core';

@Injectable()
export class RealService {
  getValue() {
    return 'Real Service Value';
  }
}

@Injectable()
export class AlternativeService {
  getValue() {
    return 'Alternative Service Value';
  }
}

@NgModule({
  providers: [
    // When RealService is injected, Angular creates an instance of AlternativeService.
    { provide: RealService, useClass: AlternativeService }
  ]
})
export class AppModule {}
`}
                  </Highlight>
                </li>
              </ul>
            </div>
          </article>
          <article id="use-factory">
            <h6>useFactory</h6>
            <div>
              <ul>
                <li>
                  <p>
                    <strong>Purpose:</strong>
                    <br />
                    Creates a service instance dynamically using a factory
                    function. This function can include custom logic and
                    dependencies.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>When to Use:</strong>
                    <br />
                    When you need to compute or conditionally create a service
                    instance, or inject runtime values.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Example:</strong>
                  </p>
                  <Highlight language="ts">
                    {`import { Injectable, NgModule } from '@angular/core';

@Injectable()
export class Service {
  constructor(public value: string) {}
}

// Factory function to create an instance of Service
export function serviceFactory(): Service {
  // You could add conditional logic here
  return new Service('Created via Factory');
}

@NgModule({
  providers: [
    // Use the factory function to create an instance of Service.
    { provide: Service, useFactory: serviceFactory }
  ]
})
export class AppModule {}
`}
                  </Highlight>
                </li>
              </ul>
            </div>
          </article>
          <article id="use-existing">
            <h6>useExisting</h6>
            <div>
              <ul>
                <li>
                  <p>
                    <strong>Purpose:</strong>
                    <br />
                    Provides an alias to another service. It means the same
                    instance is shared across different tokens.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>When to Use:</strong>
                    <br />
                    When you want two different tokens to refer to the same
                    instance.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Example:</strong>
                  </p>
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
                        app.module.ts
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
                        example.component.ts
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
                      <Highlight language="ts">{`import { Injectable, NgModule } from '@angular/core';

@Injectable()
export class FirstService {
  getValue() {
    return 'Shared Instance';
  }
}

@NgModule({
  providers: [
    FirstService,
    // 'AliasService' will be an alias for FirstService.
    { provide: 'AliasService', useExisting: FirstService }
  ]
})
export class AppModule {}
`}</Highlight>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <Highlight language="ts">{`import { Component, Inject } from '@angular/core';
import { FirstService } from './first.service';

@Component({
  selector: 'app-example',
  template: '
    <p>FirstService Value: {{ firstService.getValue() }}</p>
    <p>AliasService Value: {{ aliasService.getValue() }}</p>
  '
})
export class ExampleComponent {
  constructor(
    private firstService: FirstService,
    @Inject('AliasService') private aliasService: FirstService
  ) {}
}
`}</Highlight>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
