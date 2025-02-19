import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Providers() {
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
                    href="#providein"
                  >
                    providedIn: 'root'
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#module-level"
                  >
                    @NgModule.providers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#component-level"
                  >
                    providers: [Service]
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dynamic-instance"
                  >
                    Injector.create()
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
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Provider Type</th>
                    <th>Scope</th>
                    <th>Instances</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>providedIn: 'root'</code>
                    </td>
                    <td>Entire App</td>
                    <td>
                      <strong>Single</strong> instance (recommended)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>@NgModule.providers</code>
                    </td>
                    <td>Specific Module</td>
                    <td>
                      <strong>One per module</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>providers: [Service]</code> (Component)
                    </td>
                    <td>Specific Component</td>
                    <td>
                      <strong>One per component</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Injector.create()</code>
                    </td>
                    <td>Manual</td>
                    <td>
                      <strong>On-demand instances</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="providein">
            <h6>providedIn: 'root'</h6>
            <div>
              <strong>
                1️⃣ Global Singleton (Recommended) –{" "}
                <code>providedIn: 'root'</code>
              </strong>
              <p>
                <strong>Only one instance</strong> is created and shared across
                all components.
              </p>
              <strong>✅ Example:</strong>
              <Highlight language="ts">
                {`@Injectable({ providedIn: 'root' })  
export class MyService { }
`}
              </Highlight>
              <p>
                🔹 <strong>Use case:</strong> When the service needs to be
                shared across the entire app (e.g., AuthService, API services).
              </p>
            </div>
          </article>
          <article id="module-level">
            <h6>@NgModule.providers</h6>
            <div>
              <strong>
                2️⃣ Module-Level Singleton (<code>@NgModule.providers</code>)
              </strong>
              <ul>
                <li>
                  The service is available{" "}
                  <strong>only within a specific module</strong>.
                </li>
                <li>
                  <strong>A separate instance</strong> is created per module.
                </li>
                <li>
                  Useful for feature modules that need isolated instances.
                </li>
              </ul>
              <p>
                ✅ <strong>Example:</strong>
              </p>
              <p>
                🔹 <strong>Use case:</strong> When you want different instances
                of the service in different modules.
              </p>
              <Highlight language="ts">
                {`@NgModule({
  providers: [MyService] // Available only inside this module
})
export class SomeModule { }
`}
              </Highlight>
            </div>
          </article>
          <article id="component-level">
            <h6>providers: [Service]</h6>
            <div>
              <strong>
                3️⃣ Component-Level Provider (<code>providers: [Service]</code>)
              </strong>
              <ul>
                <li>
                  A <strong>new instance</strong> is created{" "}
                  <strong>for each component and its children</strong>.
                </li>
                <li>
                  This means{" "}
                  <strong>each component gets its own service instance</strong>{" "}
                  (not shared globally).
                </li>
              </ul>
              <p>
                ✅ <strong>Example:</strong>
              </p>
              <Highlight language="ts">
                {`@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html',
  providers: [MyService] // New instance for this component only
})
export class MyComponent {
  constructor(private myService: MyService) {}
}
`}
              </Highlight>
              <p>
                🔹 <strong>Use case:</strong> When you need a fresh instance of
                the service per component, like managing form states.
              </p>
            </div>
          </article>
          <article id="dynamic-instance">
            <h6>Injector.create()</h6>
            <div>
              <strong>
                4️⃣ Dynamic Instance via <code>Injector.create()</code>
              </strong>
              <ul>
                <li>
                  This method manually creates an instance of a service without
                  registering it globally.
                </li>
              </ul>
              <p>
                ✅ <strong>Example:</strong>
              </p>
              <Highlight language="ts">
                {`import { Injector } from '@angular/core';

const injector = Injector.create({ providers: [{ provide: MyService, deps: [] }] });
const myServiceInstance = injector.get(MyService);
`}
              </Highlight>
              <p>
                🔹 <strong>Use case:</strong> When you need a{" "}
                <strong>service instance dynamically</strong> without adding it
                to the providers array.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
