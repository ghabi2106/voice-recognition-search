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
                    to="/clr"
                  >
                    CLR
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
              Le garbage collector (GC) est un gestionnaire de mémoire
              automatique. Le garbage collector gère l’allocation et la
              libération de mémoire pour une application. Pour les développeurs
              qui utilisent du code managé, cela signifie que vous n’avez pas
              besoin d’écrire du code pour effectuer des tâches de gestion de la
              mémoire. La gestion automatique de la mémoire permet d’éliminer
              les problèmes courants, tels que l’oubli de libérer un objet et de
              provoquer une fuite de mémoire ou une tentative d’accès à la
              mémoire pour un objet qui a déjà été libéré.
            </p>
          </article>
          <article id="benefits">
            <h6>Avantages</h6>
            <ul>
              <li>
                <p>
                  Évite aux développeurs d’avoir à libérer manuellement de la
                  mémoire.
                </p>
              </li>
              <li>
                <p>Il alloue efficacement les objets sur le heap managé.</p>
              </li>
              <li>
                <p>
                  Il libère les objets qui ne sont plus utilisés, efface leur
                  mémoire et garde la mémoire disponible pour les futures
                  allocations. Les objets managés obtiennent automatiquement un
                  contenu propre au démarrage, de sorte que leurs constructeurs
                  n’ont pas à initialiser chaque champ de données.
                </p>
              </li>
              <li>
                <p>
                  Assure la sécurité de la mémoire en s’assurant qu’un objet ne
                  peut pas utiliser pour lui-même la mémoire allouée pour un
                  autre objet.
                </p>
              </li>
            </ul>
          </article>
          <article id="memory-allocation">
            <h6>Allocation de mémoire</h6>
            <p>
              L'allocation de mémoire à partir du heap managé est plus rapide que
              l'allocation de mémoire non managée. Étant donné que le runtime
              alloue de la mémoire pour un objet en ajoutant une valeur à un
              pointeur, il est presque aussi rapide que d’allouer de la mémoire
              à partir de la stack. En outre, étant donné que les nouveaux objets
              qui sont alloués consécutivement sont stockés de façon contiguë
              dans le heap managé, une application peut accéder rapidement aux
              objets.
            </p>
          </article>
          <article id="memory-release">
            <h6>Mise en mémoire</h6>
            <p>
              Lorsque le « garbage collector » effectue une opération garbage
              collection, il libère la mémoire pour les objets qui ne sont plus
              utilisées par l'application.
            </p>
          </article>
          <article id="managed-heap">
            <h6>Heap managé</h6>
            <p>
              Le heap managé est un segment de mémoire alloué par GC pour stocker
              et gérer des objets.
            </p>
          </article>
          <article id="generations">
            <h6>Générations</h6>
            <div>
              <p>
                Le mémoire heap est divisé en trois générations. Génération 0,
                Génération 1 et Génération 2.
              </p>
              <ul>
                <li>
                  <strong>Generation 0</strong> - Ceci est utilisé pour stocker
                  des objets de courte durée. La collecte des ordures se produit
                  fréquemment dans cette génération.
                </li>
                <li>
                  <strong>Generation 1</strong> - Ceci est pour les objets à
                  durée de vie moyenne. Habituellement, les objets déplacés de
                  la génération 0 sont stockés dans celui-ci.
                </li>
                <li>
                  <strong>Generation 2</strong> - Ceci est pour les objets à
                  longue durée de vie. objects.
                </li>
              </ul>
            </div>
          </article>
          <article id="survival-promotions">
            <h6>Survie et promotions</h6>
            <div>
              <p>
                Les objets qui ne sont pas récupérés dans un garbage collection
                sont appelés survivants et sont promus à la génération suivante
                :
              </p>
              <ul>
                <li>
                  Les objets qui survivent à une garbage collection de
                  génération 0 sont promus à la génération 1.
                </li>
                <li>
                  Les objets qui survivent à une garbage collection de
                  génération 1 sont promus à la génération 2.
                </li>
                <li>
                  Les objets qui survivent à une garbage collection de
                  génération 2 restent dans la génération 2.
                </li>
              </ul>
            </div>
          </article>
          <article id="phases">
            <h6>Garbage collection phases</h6>
            <div>
              <p>
                Une opération garbage collection présente les phases suivantes :
              </p>
              <ul>
                <li>
                  <p>
                    Une phase de marquage qui recherche et crée une liste de
                    tous les objets actifs.
                  </p>
                </li>
                <li>
                  <p>
                    Une phase de déplacement qui met à jour les références aux
                    objets qui seront compactés.
                  </p>
                </li>
                <li>
                  <p>
                    Une phase de compactage qui libère l'espace occupé par les
                    objets morts et compacte les objets survivants. La phase de
                    compactage déplace les objets qui ont survécu à un garbage
                    collection vers l'extrémité la plus ancienne du segment.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="umanaged">
            <h6>Ressources non managées</h6>
            <div>
              <p>
                The most common type of unmanaged resource is an object that
                wraps an operating system resource, such as a file handle,
                window handle, or network connection.
              </p>
              <p>
                Le type le plus répandu de ressource non managée est un objet
                qui enveloppe une ressource de système d'exploitation telle
                qu'un handle de fichier ou de fenêtre ou une connexion réseau.
              </p>
              <p>
                Il est recommandé de fournir le code nécessaire pour nettoyer la
                ressource non managée dans une <code>Dispose</code> méthode publique.
              </p>
            </div>
          </article>
          <article id="managed-unmanaged">
            <h6>Quelle est la différence entre le code managé et non managé ?</h6>
            <table>
              <thead>
                <tr>
                  <th>Managed Code</th>
                  <th>Unmanaged Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Il est géré par CLR.</td>
                  <td>Il n'est pas géré par le CLR.</td>
                </tr>
                <tr>
                  <td>Le framework .NET est une nécessité pour l'exécution.</td>
                  <td>Ne nécessite pas de framework .NET pour l'exécution.</td>
                </tr>
                <tr>
                  <td>La gestion de la mémoire se fait par ramasse-miettes.</td>
                  <td>L'environnement d'exécution prend en charge la gestion de la mémoire.</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
