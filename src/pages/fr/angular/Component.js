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
                Les composants vous permettent de d??couper une interface
                utilisateur (UI) en blocs ind??pendants et r??utilisables, ce qui
                vous permet de concevoir chaque partie en isolation. Nous cr??ons
                Component ?? l'aide de l'annotation de m??tadonn??es @Component
              </p>
              <img alt="ng-component" src="/img/angular/ng-component.png" />
            </div>
          </article>
          <article id="component-directive">
            <h6>Component vs Directive</h6>
            <div>
              <p>
                Directiveest utilis?? pour ajouter un comportement ?? un ??l??ment
                existant. tandis que Component est utilis?? pour cr??er un
                composant avec un comportement attach??.
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
                      Pour enregistrer un composant, nous utilisons des
                      attributs d'annotation de m??tadonn??es{" "}
                      <code>@Component</code>.
                    </td>
                    <td>
                      Pour enregistrer les directives, nous utilisons l'
                      attribut d'annotation de m??tadonn??es{" "}
                      <code>@Directive</code>.
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
                    <td>You can???t define Pipes in a directive.</td>
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
