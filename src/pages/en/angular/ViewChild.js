import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function ViewChild() {
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
                    href="#view-child"
                  >ViewChild ViewChildren</a>
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
          <h3>ViewChild & ViewChildren</h3>
          <article id="view-child-children">
            <h6>ViewChild & ViewChildren</h6>
            <div>
              <ul>
                <li>
                  <p>
                    <strong>
                      <code>@ViewChild</code>
                    </strong>
                    :
                  </p>
                  <ul>
                    <li>
                      <strong>Use when:</strong> You need a single reference to
                      a child component, directive, or element.
                    </li>
                    <li>
                      <strong>Access:</strong> Via a property decorated with{" "}
                      <code>@ViewChild</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      <code>@ViewChildren</code>
                    </strong>
                    :
                  </p>
                  <ul>
                    <li>
                      <strong>Use when:</strong> You need to access multiple
                      instances of a child component, directive, or element.
                    </li>
                    <li>
                      <strong>Access:</strong> Via a <code>QueryList</code>{" "}
                      decorated with <code>@ViewChildren</code>.
                    </li>
                  </ul>
                </li>
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
                    child-parent.component.ts
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
                    children-parent.component.ts
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
                  <Highlight language="ts">{`// parent.component.ts
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: '
    <app-child></app-child>
    <button (click)="accessChild()">Access Child</button>
  '
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child!: ChildComponent;

  ngAfterViewInit() {
    // Child component is now available
    console.log('Child Property:', this.child.childProperty);
  }

  accessChild() {
    this.child.childMethod();
  }
}
`}</Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <Highlight language="ts">{`// parent.component.ts
import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: '
    <app-child *ngFor="let item of items"></app-child>
    <button (click)="accessChildren()">Access All Children</button>
  '
})
export class ParentComponent implements AfterViewInit {
  items = [1, 2, 3];

  @ViewChildren(ChildComponent) children!: QueryList<ChildComponent>;

  ngAfterViewInit() {
    // Access the list of child components
    this.children.forEach((child, index) => {
      console.log('Child {index} property:', child.childProperty);
    });
  }

  accessChildren() {
    this.children.forEach(child => child.childMethod());
  }
}
`}</Highlight>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
