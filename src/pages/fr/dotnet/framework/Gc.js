import React from "react";
import { Link } from "react-router-dom";

export default function Gc() {
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
                    href="#gc"
                  >
                    Garbage Collector
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#benefits"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#memory-allocation"
                  >
                    Memory allocation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#memory-release"
                  >
                    Memory release
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#managed-heap"
                  >
                    The managed heap
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#generations"
                  >
                    Generations
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#survival-promotions"
                  >
                    Survival and promotions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#phases"
                  >
                    Garbage collection phases
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#umanaged"
                  >
                    Unmanaged resources
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#managed-unmanaged"
                  >
                    Managed vs Unmanaged code
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#stack-heap"
                  >
                    stack vs heap
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
          <h3>Garbage Collector</h3>
          <article id="gc">
            <h6>What is garbage collector?</h6>
            <p>
              Le garbage collector (GC) est un gestionnaire de m??moire
              automatique. Le garbage collector g??re l???allocation et la
              lib??ration de m??moire pour une application. Pour les d??veloppeurs
              qui utilisent du code manag??, cela signifie que vous n???avez pas
              besoin d?????crire du code pour effectuer des t??ches de gestion de la
              m??moire. La gestion automatique de la m??moire permet d?????liminer
              les probl??mes courants, tels que l???oubli de lib??rer un objet et de
              provoquer une fuite de m??moire ou une tentative d???acc??s ?? la
              m??moire pour un objet qui a d??j?? ??t?? lib??r??.
            </p>
          </article>
          <article id="benefits">
            <h6>Avantages</h6>
            <ul>
              <li>
                <p>
                  ??vite aux d??veloppeurs d???avoir ?? lib??rer manuellement de la
                  m??moire.
                </p>
              </li>
              <li>
                <p>Il alloue efficacement les objets sur le heap manag??.</p>
              </li>
              <li>
                <p>
                  Il lib??re les objets qui ne sont plus utilis??s, efface leur
                  m??moire et garde la m??moire disponible pour les futures
                  allocations. Les objets manag??s obtiennent automatiquement un
                  contenu propre au d??marrage, de sorte que leurs constructeurs
                  n???ont pas ?? initialiser chaque champ de donn??es.
                </p>
              </li>
              <li>
                <p>
                  Assure la s??curit?? de la m??moire en s???assurant qu???un objet ne
                  peut pas utiliser pour lui-m??me la m??moire allou??e pour un
                  autre objet.
                </p>
              </li>
            </ul>
          </article>
          <article id="memory-allocation">
            <h6>Allocation de m??moire</h6>
            <p>
              L'allocation de m??moire ?? partir du heap manag?? est plus rapide
              que l'allocation de m??moire non manag??e. ??tant donn?? que le
              runtime alloue de la m??moire pour un objet en ajoutant une valeur
              ?? un pointeur, il est presque aussi rapide que d???allouer de la
              m??moire ?? partir de la stack. En outre, ??tant donn?? que les
              nouveaux objets qui sont allou??s cons??cutivement sont stock??s de
              fa??on contigu?? dans le heap manag??, une application peut acc??der
              rapidement aux objets.
            </p>
          </article>
          <article id="memory-release">
            <h6>Mise en m??moire</h6>
            <p>
              Lorsque le ?? garbage collector ?? effectue une op??ration garbage
              collection, il lib??re la m??moire pour les objets qui ne sont plus
              utilis??es par l'application.
            </p>
          </article>
          <article id="managed-heap">
            <h6>Heap manag??</h6>
            <p>
              Le heap manag?? est un segment de m??moire allou?? par GC pour
              stocker et g??rer des objets.
            </p>
          </article>
          <article id="generations">
            <h6>G??n??rations</h6>
            <div>
              <p>
                Le m??moire heap est divis?? en trois g??n??rations. G??n??ration 0,
                G??n??ration 1 et G??n??ration 2.
              </p>
              <ul>
                <li>
                  <strong>Generation 0</strong> - Ceci est utilis?? pour stocker
                  des objets de courte dur??e. La collecte des ordures se produit
                  fr??quemment dans cette g??n??ration.
                </li>
                <li>
                  <strong>Generation 1</strong> - Ceci est pour les objets ??
                  dur??e de vie moyenne. Habituellement, les objets d??plac??s de
                  la g??n??ration 0 sont stock??s dans celui-ci.
                </li>
                <li>
                  <strong>Generation 2</strong> - Ceci est pour les objets ??
                  longue dur??e de vie. objects.
                </li>
              </ul>
            </div>
          </article>
          <article id="survival-promotions">
            <h6>Survie et promotions</h6>
            <div>
              <p>
                Les objets qui ne sont pas r??cup??r??s dans un garbage collection
                sont appel??s survivants et sont promus ?? la g??n??ration suivante
                :
              </p>
              <ul>
                <li>
                  Les objets qui survivent ?? une garbage collection de
                  g??n??ration 0 sont promus ?? la g??n??ration 1.
                </li>
                <li>
                  Les objets qui survivent ?? une garbage collection de
                  g??n??ration 1 sont promus ?? la g??n??ration 2.
                </li>
                <li>
                  Les objets qui survivent ?? une garbage collection de
                  g??n??ration 2 restent dans la g??n??ration 2.
                </li>
              </ul>
            </div>
          </article>
          <article id="phases">
            <h6>Garbage collection phases</h6>
            <div>
              <p>
                Une op??ration garbage collection pr??sente les phases suivantes :
              </p>
              <ul>
                <li>
                  <p>
                    Une phase de marquage qui recherche et cr??e une liste de
                    tous les objets actifs.
                  </p>
                </li>
                <li>
                  <p>
                    Une phase de d??placement qui met ?? jour les r??f??rences aux
                    objets qui seront compact??s.
                  </p>
                </li>
                <li>
                  <p>
                    Une phase de compactage qui lib??re l'espace occup?? par les
                    objets morts et compacte les objets survivants. La phase de
                    compactage d??place les objets qui ont surv??cu ?? un garbage
                    collection vers l'extr??mit?? la plus ancienne du segment.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="umanaged">
            <h6>Ressources non manag??es</h6>
            <div>
              <p>
                The most common type of unmanaged resource is an object that
                wraps an operating system resource, such as a file handle,
                window handle, or network connection.
              </p>
              <p>
                Le type le plus r??pandu de ressource non manag??e est un objet
                qui enveloppe une ressource de syst??me d'exploitation telle
                qu'un handle de fichier ou de fen??tre ou une connexion r??seau.
              </p>
              <p>
                Il est recommand?? de fournir le code n??cessaire pour nettoyer la
                ressource non manag??e dans une <code>Dispose</code> m??thode
                publique.
              </p>
            </div>
          </article>
          <article id="managed-unmanaged">
            <h6>
              Quelle est la diff??rence entre le code manag?? et non manag?? ?
            </h6>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Managed Code</th>
                  <th>Unmanaged Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Il est g??r?? par CLR.</td>
                  <td>Il n'est pas g??r?? par le CLR.</td>
                </tr>
                <tr>
                  <td>Le framework .NET est une n??cessit?? pour l'ex??cution.</td>
                  <td>Ne n??cessite pas de framework .NET pour l'ex??cution.</td>
                </tr>
                <tr>
                  <td>La gestion de la m??moire se fait par ramasse-miettes.</td>
                  <td>
                    L'environnement d'ex??cution prend en charge la gestion de la
                    m??moire.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="stack-heap">
            <h6>What is the difference between a stack and a heap?</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Stack</strong>
                  </td>
                  <td>
                    <strong>Heap</strong>
                  </td>
                </tr>
                <tr>
                  <td>Type de valeur stock??e</td>
                  <td>Type de r??f??rence stock??</td>
                </tr>
                <tr>
                  <td>
                    Stack est responsable du suivi de chaque thread en cours
                    d'ex??cution et de son emplacement.
                  </td>
                  <td>
                    Heap est responsable du suivi des objets ou des donn??es les
                    plus pr??cis.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
