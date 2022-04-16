import React from "react";
import { Link } from "react-router-dom";

export default function Hooks() {
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
                    href="#hooks"
                  >
                    Hooks
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
          <h3>Lifecycle Hooks</h3>
          <article id="hooks">
            <h6>Hooks</h6>
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Hook method</th>
                    <th>Purpose</th>
                    <th>Timing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>ngOnChanges()</code>
                    </td>
                    <td>
                      Respond when Angular sets or resets data-bound input
                      properties. The method receives a SimpleChanges object of
                      current and previous property values.
                    </td>
                    <td>
                      Called before <code>ngOnInit()</code> (if the component
                      has bound inputs) and whenever one or more data-bound
                      input properties change.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngOnInit()</code>
                    </td>
                    <td>
                      Initialize the directive or component after Angular first
                      displays the data-bound properties and sets the directive
                      or component's input properties.
                    </td>
                    <td>
                      Called once, after the first <code>ngOnChanges()</code>.{" "}
                      <code>ngOnInit()</code> is still called even when{" "}
                      <code>ngOnChanges()</code> is not (which is the case when
                      there are no template-bound inputs).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngDoCheck()</code>
                    </td>
                    <td>
                      Detect and act upon changes that Angular can't or won't
                      detect on its own.
                    </td>
                    <td>
                      Called immediately after <code>ngOnChanges()</code> on
                      every change detection run, and immediately after{" "}
                      <code>ngOnInit()</code> on the first run.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterContentInit()</code>
                    </td>
                    <td>
                      Respond after Angular projects external content into the
                      component's view, or into the view that a directive is in.
                    </td>
                    <td>
                      Called <em>once</em> after the first{" "}
                      <code>ngDoCheck()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterContentChecked()</code>
                    </td>
                    <td>
                      Respond after Angular checks the content projected into
                      the directive or component.
                    </td>
                    <td>
                      Called after <code>ngAfterContentInit()</code> and every
                      subsequent <code>ngDoCheck()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterViewInit()</code>
                    </td>
                    <td>
                      Respond after Angular initializes the component's views
                      and child views, or the view that contains the directive.
                    </td>
                    <td>
                      Called <em>once</em> after the first{" "}
                      <code>ngAfterContentChecked()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterViewChecked()</code>
                    </td>
                    <td>
                      Respond after Angular checks the component's views and
                      child views, or the view that contains the directive.
                    </td>
                    <td>
                      Called after the <code>ngAfterViewInit()</code> and every
                      subsequent <code>ngAfterContentChecked()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngOnDestroy()</code>
                    </td>
                    <td>
                      Cleanup just before Angular destroys the directive or
                      component. Unsubscribe Observables and detach event
                      handlers to avoid memory leaks.
                    </td>
                    <td>
                      Called immediately before Angular destroys the directive
                      or component.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
