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
                      Répondez lorsque Angular définit ou réinitialise les
                      propriétés d'entrée liées aux données. La méthode reçoit
                      un objet SimpleChanges des valeurs de propriété actuelles
                      et précédentes.
                    </td>
                    <td>
                      Appelé avant <code>ngOnInit()</code> (si le composant a
                      des entrées liées) et chaque fois qu'une ou plusieurs
                      propriétés d'entrée liées aux données changent.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngOnInit()</code>
                    </td>
                    <td>
                      Initialisez la directive ou le composant après qu'Angular
                      ait d'abord affiché les propriétés liées aux données et
                      défini les propriétés d'entrée de la directive ou du
                      composant.
                    </td>
                    <td>
                      Appelé une fois, après le premier{" "}
                      <code>ngOnChanges()</code> .<code>ngOnInit()</code> est
                      toujours appelé même lorsque <code>ngOnChanges()</code>
                      ne l'est pas (ce qui est le cas lorsqu'il n'y a pas
                      d'entrées liées au modèle).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngDoCheck()</code>
                    </td>
                    <td>
                      Détectez et agissez sur les changements qu'Angular ne peut
                      pas ou ne détectera pas par lui-même.
                    </td>
                    <td>
                      Appelé immédiatement après <code>ngOnChanges()</code> à
                      chaque exécution de détection de changement, et
                      immédiatement après <code>ngOnInit()</code> lors de la
                      première exécution.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterContentInit()</code>
                    </td>
                    <td>
                      Réagit après qu'Angular ait projeté du contenu externe
                      dans la vue du composant,ou dans la vue dans laquelle se
                      trouve une directive.
                    </td>
                    <td>
                      Appelé <em>une fois</em> après le premier{" "}
                      <code>ngDoCheck()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterContentChecked()</code>
                    </td>
                    <td>
                      Répond après qu'Angular ait vérifié le contenu projeté
                      dans la directive ou le composant.
                    </td>
                    <td>
                      Appelé après <code>ngAfterContentInit()</code> et chaque{" "}
                      <code>ngDoCheck()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterViewInit()</code>
                    </td>
                    <td>
                      Répond après qu'Angular ait initialisé les vues et les
                      vues enfants du composant,ou la vue qui contient la
                      directive.
                    </td>
                    <td>
                      Appelé <em>une fois</em> après le premier{" "}
                      <code>ngAfterContentChecked()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterViewChecked()</code>
                    </td>
                    <td>
                      Répond après qu'Angular ait vérifié les vues et les vues
                      enfant du composant,ou la vue qui contient la directive.
                    </td>
                    <td>
                      Appelé après le <code>ngAfterViewInit()</code> et chaque{" "}
                      <code>ngAfterContentChecked()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngOnDestroy()</code>
                    </td>
                    <td>
                      Nettoyage juste avant qu'Angular ne détruise la directive
                      ou le composant. Désabonnez-vous à Observables et détachez
                      les gestionnaires d'événements pour éviter les fuites de
                      mémoire.
                    </td>
                    <td>
                      Appelé immédiatement avant qu'Angular ne détruise la
                      directive ou le composant.
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
