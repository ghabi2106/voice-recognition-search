import React from "react";
import { Link } from "react-router-dom";

export default function Dotnetcomponents() {
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
                    href="#dotnet"
                  >
                    Defnition .Net framework
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#components"
                  >
                    Components of .Net framework
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
                    to="/dotnetcomponents"
                  >
                    .Net Components
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dotnet"
                  >
                    Difference Between .NET and .NET Core
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/assembly"
                  >
                    Assembly
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dllexe"
                  >
                    DLL vs EXE
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/entityframework"
                  >
                    Entity Framework
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gc"
                  >
                    Garbage Collector &amp; stack vs heap
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gcmethods"
                  >
                    GC Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/linq"
                  >
                    Linq
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/nugetpackages"
                  >
                    Nuget packages
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
          <h3>.Net framework</h3>
          <article id="dotnet">
            <h6>Qu'est-ce que le framework .Net ?</h6>
            <p>
              .Net s'agit d'une plate-forme permettant de créer diverses
              applications sur Windows. Il contient une liste de fonctionnalités
              intégrées sous forme de classe, de bibliothèque et d'API qui sont
              utilisées pour créer, déployer et exécuter des services Web et
              différentes applications. Il prend en charge différents langages
              tels que C#, VB .Net, Cobol, Perl, etc.
            </p>
          </article>
          <article id="components">
            <h6> Quels sont les composants importants de .Net ?</h6>
            <ul>
              <li>
                <strong>.NET Class Library: </strong>- Le framework .NET
                contient plusieurs classes qui sont facilement disponibles pour
                les développeurs. Les classes de la FCL (framework class
                library) sont regroupées sous plusieurs espaces de noms.
              </li>
              <li>
                <strong>Common Language Runtime: </strong> - CLR fournit
                l'interopérabilité entre différents langages, comme C# , VB,
                Visual C++, en fournissant un environnement commun pour
                l'exécution du code écrit dans ces langages.
              </li>
              <li>
                <strong>Dynamic Language runtime: </strong> - Le DLR permet
                d'exécuter des langages dynamiques sur .NET Framework en
                ajoutant des services spéciaux au CLR.
              </li>
              <li>
                <strong>Application domains: </strong> - Il est utilisé pour
                isoler le processus de différentes applications et peut être
                défini par le framework .NET.
              </li>
              <li>
                <strong>.NET Framework Security: </strong> - Le framework .NET
                fournit plusieurs outils qui peuvent être utilisés par les
                développeurs pour protéger les ressources et le code des
                utilisateurs non autorisés.
              </li>
              <li>
                <strong>Cross Language interoperability: </strong> - L'objet ou
                le code conforme d'un langage peut être utilisé dans un autre
                langage compatible .NET.
              </li>
              <li>
                <strong>Side by side execution: </strong> - Dans la même
                application, nous pouvons utiliser plusieurs versions de CLR
                simultanément.
              </li>
              <li>
                <strong>Common Type System</strong>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
