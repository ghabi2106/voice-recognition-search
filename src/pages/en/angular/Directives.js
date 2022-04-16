import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Directives() {
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
                    href="#directives"
                  >
                    Directives
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#attribute-directives"
                  >
                    Attiribute Directives
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#structural-directives"
                  >
                    Structural Directives
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ng-container"
                  >
                    ng-container
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
          <h3>Directives</h3>
          <article id="directives">
            <h6>Directives</h6>
            <p>
              Directives are classes that add additional behavior to elements in
              your Angular applications.
            </p>
          </article>
          <article id="attribute-directives">
            <h6>Attribute Directives</h6>
            <div>
              <p>
                Change the appearance or behavior of DOM elements and Angular
                components with attribute directives.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Common directives</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>NgClass</code>
                    </td>
                    <td>Adds and removes a set of CSS classes.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>NgStyle</code>
                    </td>
                    <td>Adds and removes a set of HTML styles.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>NgModel</code>
                    </td>
                    <td>Adds two-way data binding to an HTML form element.</td>
                  </tr>
                </tbody>
              </table>
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
                    src/app/highlight.directive.ts
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
                    {`import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) {
       this.el.nativeElement.style.backgroundColor = 'yellow';
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
                    {`<p appHighlight>Highlight me!</p>`}
                  </Highlight>
                </div>
              </div>
            </div>
          </article>
          <article id="structural-directives">
            <h6>Structural Directives</h6>
            <div>
              <p></p>
              <table>
                <thead>
                  <tr>
                    <th>Common built-in structural directives</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>NgIf</code>
                    </td>
                    <td>
                      Conditionally creates or disposes of subviews from the
                      template.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>NgFor</code>
                    </td>
                    <td>Repeat a node for each item in a list.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>NgSwitch</code>
                    </td>
                    <td>
                      A set of directives that switch among alternative views.
                    </td>
                  </tr>
                </tbody>
              </table>
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
                    src/app/unless.directive.ts (excerpt)
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
                    {`import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[appUnless]'})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
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
                  <Highlight language="html">
                    {`<p *appUnless="condition" class="unless a">
  (A) This paragraph is displayed because the condition is false.
</p>`}
                  </Highlight>
                </div>
              </div>
            </div>
          </article>
          <article id="ng-container">
            <h6>ng-container</h6>
            <p>
              &lt;ng-container&gt; A special element that can hold structural
              directives without adding new elements to the DOM.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
