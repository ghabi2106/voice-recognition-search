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
                L'encapsulation de la vue d??finit si le mod??le et les styles
                d??finis dans le composant peuvent affecter l'ensemble de
                l'application ou vice versa. Angular fournit trois strat??gies
                d'encapsulation :
              </p>
              <ul>
                <li>
                  <code>Emulated</code> (default) - modifie les s??lecteurs CSS
                  du composant afin qu'ils ne soient appliqu??s qu'?? la vue du
                  composant et n'affectent pas les autres ??l??ments de
                  l'application ( ??mulant le comportement de Shadow DOM). only.
                </li>
                <li>
                  <code>ShadowDom</code> - int??gr??e du navigateur pour enfermer
                  la vue du composant dans un ShadowRoot (utilis?? comme ??l??ment
                  h??te du composant) et appliquer les styles fournis de mani??re
                  isol??e.
                </li>
                <li>
                  <code>None</code> - n'applique aucune sorte d'encapsulation de
                  vue, ce qui signifie que tous les styles sp??cifi??s pour le
                  composant sont en fait appliqu??s globalement et peuvent
                  affecter tout ??l??ment HTML pr??sent dans l'application.
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
