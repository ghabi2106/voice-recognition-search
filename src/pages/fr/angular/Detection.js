import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Detection() {
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
                    href="#change-detection"
                  >Change Detection</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#change-detector-ref"
                  >ChangeDetectorRef</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#on-push"
                  >OnPush</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#detach"
                  >detach</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#detectChanges-markForCheck"
                  >detectChanges() vs markForCheck()</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#optimization"
                  >Optimization</a>
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
          <h3>Change Detection</h3>
          <article id="change-detection">
            <h6>Change Detection</h6>
            <div>
              <ul>
                <li>
                  Angular uses <strong>zone.js</strong> to detect asynchronous
                  operations and trigger change detection.
                </li>
                <li>
                  The <strong>default change detection strategy</strong> is{" "}
                  <strong>CheckAlways</strong>, which runs for the entire
                  component tree.
                </li>
                <li>
                  The <strong>OnPush strategy</strong> optimizes performance by
                  detecting changes only when an <code>@Input()</code> reference
                  changes.
                </li>
              </ul>
              <ol>
                <li>
                  <p>
                    <strong>Zone.js Integration</strong>:
                  </p>
                  <ul>
                    <li>
                      Angular relies on <strong>Zone.js</strong> to monkey-patch
                      asynchronous operations (e.g., <code>setTimeout</code>,{" "}
                      <code>XHR</code>, Promises).
                    </li>
                    <li>
                      Whenever an asynchronous event occurs, Angular triggers{" "}
                      <strong>change detection</strong> to check for updates in
                      the UI.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Change Detection Strategies:</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Default (CheckAlways)</strong>:
                      <ul>
                        <li>Used by default in all components.</li>
                        <li>
                          Runs{" "}
                          <strong>
                            change detection for the entire component tree
                          </strong>{" "}
                          whenever Angular detects an event (user input, HTTP
                          response, etc.).
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>OnPush</strong> (Optimized for performance):
                      <ul>
                        <li>
                          Runs change detection <strong>only when</strong>:
                          <ul>
                            <li>
                              An <code>@Input()</code>{" "}
                              <strong>reference</strong> changes (not just the
                              value but the actual object/array reference).
                            </li>
                            <li>
                              An event inside the component triggers it manually
                              using <code>markForCheck()</code> or{" "}
                              <code>detectChanges()</code> from{" "}
                              <code>ChangeDetectorRef</code>.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
          <article id="change-detector-ref">
            <h6>1️⃣ ChangeDetectorRef</h6>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>markForCheck()</code>
                    </td>
                    <td>
                      Marks the component and its ancestors as{" "}
                      <strong>dirty</strong>, ensuring change detection runs in
                      the next cycle (useful with <code>OnPush</code>
                      ).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>detectChanges()</code>
                    </td>
                    <td>
                      Triggers change detection <strong>immediately</strong> for
                      the component and its children (use with caution to avoid
                      performance issues).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>detach()</code>
                    </td>
                    <td>
                      <strong>Stops</strong> automatic change detection for the
                      component, meaning it won’t update unless manually
                      triggered.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>reattach()</code>
                    </td>
                    <td>
                      Re-enables change detection for a detached component.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="on-push">
            <h6>2️⃣ OnPush</h6>
            <div>
              <p>
                With <code>ChangeDetectionStrategy.OnPush</code>, Angular skips
                checking the component <strong>unless</strong>:
              </p>
              <ul>
                <li>
                  An <code>@Input()</code> reference changes.
                </li>
                <li>
                  You explicitly trigger change detection using{" "}
                  <code>markForCheck()</code> or <code>detectChanges()</code>.
                </li>
              </ul>
              <Highlight language="typescript">
                {`@Component({
  selector: 'app-child',
  template: '{{ data.value }}',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() data: { value: string };

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.data.value = 'Updated!'; // No reference change, won't trigger change detection
      this.cdr.markForCheck(); // Forces Angular to detect changes in the next cycle
    }, 2000);
  }
}
`}
              </Highlight>
            </div>
          </article>
          <article id="detach">
            <h6>3️⃣ detach</h6>
            <div>
              <strong>
                ❌ Stopping Change Detection (<code>detach()</code>)
              </strong>
              <p>
                When dealing with <strong>high-performance scenarios</strong>{" "}
                (like large lists or real-time data), you might want to{" "}
                <strong>pause change detection</strong> for a component.
              </p>
              <strong>✅ Example: Stopping Change Detection</strong>
              <Highlight language="csharp">
                {`export class HeavyComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cdr.detach(); // Component will no longer update automatically

    setTimeout(() => {
      // Manually trigger updates when needed
      this.cdr.detectChanges();
    }, 5000);
  }
}
`}
              </Highlight>
            </div>
          </article>
          <article id="detectChanges-markForCheck">
            <h6>detectChanges() vs markForCheck()</h6>
            <div>
              <strong>
                4️⃣ <code>detectChanges()</code> vs <code>markForCheck()</code>
              </strong>
              <ul>
                <li>
                  <strong>
                    <code>detectChanges()</code>
                  </strong>{" "}
                  → Runs change detection <strong>immediately</strong> for the
                  component and its children.
                </li>
                <li>
                  <strong>
                    <code>markForCheck()</code>
                  </strong>{" "}
                  → Schedules change detection for the{" "}
                  <strong>next cycle</strong>.
                </li>
              </ul>
              <strong>✅ Example: Immediate Change Detection</strong>
              <Highlight language="csharp">
                {`export class ExampleComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  updateData() {
    // Change some data
    this.cdr.detectChanges(); // Updates the UI immediately
  }
}
`}
              </Highlight>
            </div>
          </article>
          <article id="optimization">
            <h6>5️⃣ Performance Optimization Tips</h6>
            <div>
              <p>
                ✔️ Use <code>OnPush</code> change detection where possible.
                <br />
                ✔️ Use <code>markForCheck()</code> for async updates instead of
                triggering unnecessary full-tree checks.
                <br />
                ✔️ Use <code>detach()</code> for components that don’t need
                frequent updates.
                <br />
                ✔️ Avoid modifying <strong>objects/arrays</strong> directly;
                always create new references:
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
