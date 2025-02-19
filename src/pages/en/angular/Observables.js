import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Observables() {
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
                    href="#observables"
                  >
                    Promise vs Observable
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#rxjs"
                  >
                    Subject BehaviorSubject ReplaySubject
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#rxjs-patterns"
                  >
                    switchMap mergeMap concatMap exhaustMap
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
          <h3>Observables</h3>
          <article id="observables">
            <h6>Promise vs Observable</h6>
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Aspect</strong>
                    </th>
                    <th>
                      <strong>Observable</strong>
                    </th>
                    <th>
                      <strong>Promise</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Value Emission</strong>
                    </td>
                    <td>
                      Can emit <strong>multiple values</strong> over time (a
                      stream)
                    </td>
                    <td>
                      Emits <strong>a single value</strong> (or an error) and
                      then completes
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Execution Behavior</strong>
                    </td>
                    <td>
                      <strong>Lazy</strong> – nothing happens until you
                      subscribe
                    </td>
                    <td>
                      <strong>Eager</strong> – executes immediately upon
                      creation
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Cancellation</strong>
                    </td>
                    <td>
                      Can be <strong>cancelled</strong> via{" "}
                      <code>unsubscribe()</code>
                    </td>
                    <td>
                      <strong>Not cancellable</strong> natively (workarounds
                      exist, e.g., AbortController)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Operators</strong>
                    </td>
                    <td>
                      Rich set of operators (e.g., <code>map</code>,{" "}
                      <code>filter</code>, <code>debounceTime</code>) via RxJS
                    </td>
                    <td>
                      Limited chaining with <code>.then()</code> and{" "}
                      <code>.catch()</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Error Handling</strong>
                    </td>
                    <td>
                      Errors are part of the stream and can be handled via
                      operators
                    </td>
                    <td>
                      Handled using <code>.catch()</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Hot vs Cold</strong>
                    </td>
                    <td>
                      Can be <strong>cold</strong> (new subscription gets full
                      stream) or <strong>hot</strong> (shared stream)
                    </td>
                    <td>
                      Always <strong>cold</strong> (executes once; same result
                      for all consumers)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Usage in Angular</strong>
                    </td>
                    <td>
                      Preferred for handling complex asynchronous scenarios
                      (e.g., events, HTTP streams)
                    </td>
                    <td>
                      Often used for one-off asynchronous operations, though
                      Angular favors Observables
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="rxjs">
            <h6>Subject, BehaviorSubject, and ReplaySubject</h6>
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Feature</strong>
                    </th>
                    <th>
                      <strong>Subject</strong>
                    </th>
                    <th>
                      <strong>BehaviorSubject</strong>
                    </th>
                    <th>
                      <strong>ReplaySubject</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Initial Value</strong>
                    </td>
                    <td>❌ No</td>
                    <td>✅ Yes (requires an initial value)</td>
                    <td>❌ No (but can store previous values)</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Stores Past Values</strong>
                    </td>
                    <td>❌ No</td>
                    <td>✅ Last emitted value</td>
                    <td>✅ Configurable number of past values</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>New Subscriber Behavior</strong>
                    </td>
                    <td>Gets new values only (does not replay past values)</td>
                    <td>Gets the last emitted value immediately</td>
                    <td>
                      Gets the last <em>N</em> values immediately
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Use Case</strong>
                    </td>
                    <td>Event emitters, real-time updates</td>
                    <td>Storing state, user authentication</td>
                    <td>Replaying past events (e.g., chat history, logs)</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Example Usage</strong>
                    </td>
                    <td>Notifications, UI events</td>
                    <td>User session data, form state</td>
                    <td>Caching, logging, buffering streams</td>
                  </tr>
                </tbody>
              </table>
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
                    Subject
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
                    BehaviorSubject
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile-1"
                    aria-selected="false"
                  >
                    ReplaySubject
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
                  <Highlight language="ts">{`const subject = new Subject<number>();

subject.subscribe(value => console.log('Subscriber 1:', value));

subject.next(1); // Subscriber 1: 1
subject.next(2); // Subscriber 1: 2

subject.subscribe(value => console.log('Subscriber 2:', value));
subject.next(3); 
// Subscriber 1: 3
// Subscriber 2: 3  (New subscriber gets values only from this point)
`}</Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <Highlight language="ts">{`const behaviorSubject = new BehaviorSubject<number>(0); // Initial value required

behaviorSubject.subscribe(value => console.log('Subscriber 1:', value));

behaviorSubject.next(1);
behaviorSubject.next(2);

behaviorSubject.subscribe(value => console.log('Subscriber 2:', value));
// Subscriber 2 gets the last value (2) immediately
behaviorSubject.next(3);
`}</Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile-1"
                  role="tabpanel"
                  aria-labelledby="pills-profile-1-tab"
                >
                  <Highlight language="ts">{`const replaySubject = new ReplaySubject<number>(2); // Stores the last 2 values

replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);

replaySubject.subscribe(value => console.log('Subscriber 1:', value));
// Subscriber 1 gets the last 2 values immediately (2, 3)

replaySubject.next(4);
`}</Highlight>
                </div>
              </div>
            </div>
          </article>
          <article id="rxjs-patterns">
            <h6>switchMap mergeMap concatMap exhaustMap</h6>
            <div>
              <ul>
                <li>
                  <strong>mergeMap</strong> → Runs multiple inner observables
                  concurrently.
                </li>
                <li>
                  <strong>switchMap</strong> → Cancels the previous inner
                  observable when a new one is emitted.
                </li>
                <li>
                  <strong>concatMap</strong> → Runs inner observables
                  sequentially (FIFO order).
                </li>
                <li>
                  <strong>exhaustMap</strong> → Ignores new emissions while the
                  current observable is running.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
