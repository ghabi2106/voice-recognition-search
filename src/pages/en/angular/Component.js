import React from "react";
import { Link } from "react-router-dom";

export default function Component() {
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
                    href="#components"
                  >
                    Components
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#component-directive"
                  >
                    Components vs Directive
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
          <h3>Components</h3>
          <article id="components">
            <h6>Compnents</h6>
            <div>
              <p>
                Components let you split the UI into independent, reusable
                pieces, and think about each piece in isolation. We create
                Component with the help of @Component meta-data annotation.
              </p>
              <img alt="ng-component" src="/img/angular/ng-component.png" />
            </div>
          </article>
          <article id="component-directive">
            <h6>Component vs Directive</h6>
            <div>
              <p>
                Directiveis used to add behaviour to an existing element. while
                Component is used to create a component with attached behaviour.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Directive</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      A component is a directive used to shadow DOM to create
                      and encapsulate visual behavior called components. They
                      are typically used to create UI widgets.
                    </td>
                    <td>
                      A Directive is usually used while adding behavior to an
                      existing DOM element.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      For registering a component, we use{" "}
                      <code>@Component</code> metadata annotation attributes.
                    </td>
                    <td>
                      For registering directives, we use the{" "}
                      <code>@Directive</code> meta-data annotation attribute.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      It is also used to break up the application into smaller
                      components.
                    </td>
                    <td>It is mainly used to design re-usable components.</td>
                  </tr>
                  <tr>
                    <td>
                      Only one component is allowed to be present per DOM
                      element.
                    </td>
                    <td>
                      Multiple directives can be used in a per DOM element.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>@View</code> decorator or template URL template is
                      mandatory in a component.
                    </td>
                    <td>A Directive does not have View</td>
                  </tr>
                  <tr>
                    <td>A component is used to define pipes.</td>
                    <td>You can’t define Pipes in a directive.</td>
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
