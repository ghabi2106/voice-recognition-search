import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Encapsulation() {
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
                    href="#encapsulation"
                  >
                    View Encapsulation
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
          <h3>View Encapsulation</h3>
          <article id="encapsulation">
            <h6>View Encapsulation</h6>
            <div>
              <p>
                View encapsulation defines whether the template and styles
                defined within the component can affect the whole application or
                vice versa. Angular provides three encapsulation strategies:
              </p>
              <ul>
                <li>
                  <code>Emulated</code> (default) - styles from main HTML
                  propagate to the component. Styles defined in this component's{" "}
                  <code>@Component</code> decorator are scoped to this component
                  only.
                </li>
                <li>
                  <code>ShadowDom</code> - styles from main HTML do not
                  propagate to the component. Styles defined in this component's{" "}
                  <code>@Component</code> decorator are scoped to this component
                  only.
                </li>
                <li>
                  <code>None</code> - styles from the component propagate back
                  to the main HTML and therefore are visible to all components
                  on the page. Be careful with apps that have <code>None</code>{" "}
                  and <code>Native</code> components in the application. All
                  components with None encapsulation will have their styles
                  duplicated in all components with <code>Native</code>{" "}
                  encapsulation.
                </li>
              </ul>
              <Highlight language="ts">
                {`@Component({
// ...
encapsulation: ViewEncapsulation.None,
styles: [
  // ...
]
})
export class HelloComponent {
// ...
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
