import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Binding() {
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
                    href="#property-binding"
                  >
                    Property Binding
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#attr-class-style"
                  >
                    Attribute, class, and style bindings
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#event-binding"
                  >
                    Event Binding
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#two-way-binding"
                  >
                    Two-way Binding
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#template-variables"
                  >
                    Template variables
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
          <h3>Data Binding</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Binding Type</th>
                    <th>Syntax</th>
                    <th>Direction</th>
                    <th>Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Interpolation</strong>
                    </td>
                    <td>
                      <code>{"{{ value }}"}</code>
                    </td>
                    <td>One-Way (Component → View)</td>
                    <td>Displaying text or variables in HTML</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Property Binding</strong>
                    </td>
                    <td>
                      <code>[property]="value"</code>
                    </td>
                    <td>One-Way (Component → View)</td>
                    <td>Binding properties of elements</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Event Binding</strong>
                    </td>
                    <td>
                      <code>(event)="method()"</code>
                    </td>
                    <td>One-Way (View → Component)</td>
                    <td>Handling user interactions</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Two-Way Binding</strong>
                    </td>
                    <td>
                      <code>[(ngModel)]="value"</code>
                    </td>
                    <td>Two-Way</td>
                    <td>Syncing form inputs with variables</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Attribute/Class/Style</strong>
                    </td>
                    <td>
                      <code>[attr]</code>, <code>[class]</code>,{" "}
                      <code>[style]</code>
                    </td>
                    <td>One-Way</td>
                    <td>Dynamically applying attributes, classes, or styles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="property-binding">
            <h6>Property binding</h6>
            <div>
              <p>
                Property binding helps you set values for properties of HTML
                elements or directives. Use property binding to do things such
                as toggle button functionality, set paths programmatically, and
                share values between components.
              </p>
              <Highlight language="html">{`<img alt="item" [src]="itemImageUrl">`}</Highlight>
              <Highlight language="html">{`<p [ngClass]="classes">[ngClass] binding to the classes property making this blue</p>`}</Highlight>
              <Highlight language="html">{`<app-item-detail [childItem]="parentItem"></app-item-detail>`}</Highlight>
              <Highlight language="ts">{`@Input() childItem = '';`}</Highlight>
              <Highlight language="html">{`<p><img alt="Interpolated item" src="{{itemImageUrl}}"> is the <i>interpolated</i> `}</Highlight>
            </div>
          </article>
          <article id="attr-class-style">
            <h6>Attribute, class, and style bindings</h6>
            <div>
              <Highlight language="html">{`<p [attr.attribute-you-are-targeting]="expression"></p>`}</Highlight>
              <Highlight language="html">{`<div [class.foo]="hasFoo">`}</Highlight>
              <Highlight language="html">{`<div [style.border]="border" [style]="styleExpression">Some text.</div>`}</Highlight>
            </div>
          </article>
          <article id="event-binding">
            <h6>Event binding</h6>
            <div>
              <Highlight language="html">{`<button (click)="onSave()">Save</button>`}</Highlight>
            </div>
          </article>
          <article id="two-way-binding">
            <h6>two-way binding</h6>
            <div>
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
                    src/app/sizer.component.ts
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
                    src/app/app.component.html
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
                    {`export class SizerComponent {

@Input()  size!: number | string;
@Output() sizeChange = new EventEmitter<number>();

dec() { this.resize(-1); }
inc() { this.resize(+1); }

resize(delta: number) {
  this.size = Math.min(40, Math.max(8, +this.size + delta));
  this.sizeChange.emit(this.size);
}
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
                    {`<app-sizer [(size)]="fontSizePx"></app-sizer>
<div [style.font-size.px]="fontSizePx">Resizable Text</div>`}
                  </Highlight>
                </div>
              </div>
            </div>
          </article>
          <article id="template-variables">
            <h6>Template variables</h6>
            <div>
              <p></p>
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
                    src/app/app.component.html
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
                  <Highlight language="html">
                    {`<input #phone placeholder="phone number" />

<!-- lots of other elements -->

<!-- phone refers to the input element; pass its value to an event handler -->
<button type="button" (click)="callPhone(phone.value)">Call</button>`}
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
