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
                      R??pondez lorsque Angular d??finit ou r??initialise les
                      propri??t??s d'entr??e li??es aux donn??es. La m??thode re??oit
                      un objet SimpleChanges des valeurs de propri??t?? actuelles
                      et pr??c??dentes.
                    </td>
                    <td>
                      Appel?? avant <code>ngOnInit()</code> (si le composant a
                      des entr??es li??es) et chaque fois qu'une ou plusieurs
                      propri??t??s d'entr??e li??es aux donn??es changent.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngOnInit()</code>
                    </td>
                    <td>
                      Initialisez la directive ou le composant apr??s qu'Angular
                      ait d'abord affich?? les propri??t??s li??es aux donn??es et
                      d??fini les propri??t??s d'entr??e de la directive ou du
                      composant.
                    </td>
                    <td>
                      Appel?? une fois, apr??s le premier{" "}
                      <code>ngOnChanges()</code> .<code>ngOnInit()</code> est
                      toujours appel?? m??me lorsque <code>ngOnChanges()</code>
                      ne l'est pas (ce qui est le cas lorsqu'il n'y a pas
                      d'entr??es li??es au mod??le).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngDoCheck()</code>
                    </td>
                    <td>
                      D??tectez et agissez sur les changements qu'Angular ne peut
                      pas ou ne d??tectera pas par lui-m??me.
                    </td>
                    <td>
                      Appel?? imm??diatement apr??s <code>ngOnChanges()</code> ??
                      chaque ex??cution de d??tection de changement, et
                      imm??diatement apr??s <code>ngOnInit()</code> lors de la
                      premi??re ex??cution.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterContentInit()</code>
                    </td>
                    <td>
                      R??agit apr??s qu'Angular ait projet?? du contenu externe
                      dans la vue du composant,ou dans la vue dans laquelle se
                      trouve une directive.
                    </td>
                    <td>
                      Appel?? <em>une fois</em> apr??s le premier{" "}
                      <code>ngDoCheck()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterContentChecked()</code>
                    </td>
                    <td>
                      R??pond apr??s qu'Angular ait v??rifi?? le contenu projet??
                      dans la directive ou le composant.
                    </td>
                    <td>
                      Appel?? apr??s <code>ngAfterContentInit()</code> et chaque{" "}
                      <code>ngDoCheck()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterViewInit()</code>
                    </td>
                    <td>
                      R??pond apr??s qu'Angular ait initialis?? les vues et les
                      vues enfants du composant,ou la vue qui contient la
                      directive.
                    </td>
                    <td>
                      Appel?? <em>une fois</em> apr??s le premier{" "}
                      <code>ngAfterContentChecked()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngAfterViewChecked()</code>
                    </td>
                    <td>
                      R??pond apr??s qu'Angular ait v??rifi?? les vues et les vues
                      enfant du composant,ou la vue qui contient la directive.
                    </td>
                    <td>
                      Appel?? apr??s le <code>ngAfterViewInit()</code> et chaque{" "}
                      <code>ngAfterContentChecked()</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>ngOnDestroy()</code>
                    </td>
                    <td>
                      Nettoyage juste avant qu'Angular ne d??truise la directive
                      ou le composant. D??sabonnez-vous ?? Observables et d??tachez
                      les gestionnaires d'??v??nements pour ??viter les fuites de
                      m??moire.
                    </td>
                    <td>
                      Appel?? imm??diatement avant qu'Angular ne d??truise la
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
