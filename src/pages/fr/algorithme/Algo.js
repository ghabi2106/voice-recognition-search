import React from "react";
import { Link } from "react-router-dom";

export default function Algo() {
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
                    href="#time-complexity"
                  >
                    Time complexity
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#case-scenario"
                  >
                    case scenario
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#quick-sort"
                  >
                    Quick Sort
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#binary-search"
                  >
                    Binary Search
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#hash-algorithm                                                                                      "
                  >
                    Hash Algorithm
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#encryption-algorithm"
                  >
                    Encryption algorithm
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
                    to="/stringbuilder"
                  >
                    String Builder
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/tuple"
                  >
                    Tuple
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/collections"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/enumindexer"
                  >
                    Enumeration, Indexer and Generics
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/parameters"
                  >
                    Ref, in and Out
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/covariance"
                  >
                    Covariance
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/delegate"
                  >
                    Delegate
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/string2int"
                  >
                    string to int
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/threads"
                  >
                    Task And Thread
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/operators"
                  >
                    Operators
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/datatype"
                  >
                    Dynamic, Nullables, Discards and Anonymous Types, Extension
                    methods
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
          <h3>Alogorithme</h3>
          <article id="time-complexity">
            <h6>Time complexity</h6>
            <div>
              <p>
                La complexité temporelle d'un algorithme indique le temps total
                nécessaire au programme pour s'exécuter. Il est généralement
                exprimé en utilisant la grande notation O.
              </p>
              <p>
                Les types de notations utilisées pour la complexité temporelle
                incluent
              </p>
              <ul>
                <li>
                  <strong>Big Oh :</strong> cela indique « moins ou égal à »
                  &lt;expression&gt; itérations
                </li>
                <li>
                  <strong>Big Omega</strong> : Il indique « plus ou même que »
                  &lt;expression&gt; itérations
                </li>
                <li>
                  <strong>Big Theta :</strong> Il indique « le même que
                  »&lt;expression&gt;itérations
                </li>
                <li>
                  <strong>Little Oh :</strong> il indique « moins de »
                  itérations d'&lt;expression&gt;
                </li>
                <li>
                  <strong>Little Omega :</strong> Il indique « plus que »
                  &lt;expression&gt;itérations
                </li>
              </ul>
            </div>
          </article>
          <article id="case-scenario">
            <h6>case scenario</h6>
            <ul>
              <li>
                <strong>Le meilleur cas de scenario:</strong> Le meilleur
                scénario pour un algorithme est expliqué comme la disposition
                des données pour laquelle l'algorithme fonctionne le mieux. Par
                exemple, nous prenons une recherche binaire, pour laquelle le
                meilleur des cas serait si la valeur cible est au centre même
                des données que vous recherchez. Le meilleur cas de complexité
                temporelle serait O(1)
              </li>
              <li>
                <strong>Scénario du pire des cas :</strong> il est référencé
                pour le pire ensemble d'entrées pour un algorithme donné. Par
                exemple, quicksort, qui peut fonctionner moins bien si vous
                sélectionnez le plus grand ou le plus petit élément d'une
                sous-liste pour la valeur pivot. Cela entraînera la
                dégénérescence du tri rapide en O (n2).
              </li>
            </ul>
          </article>
          <article id="quick-sort">
            <h6>Quick Sort algorithm</h6>
            <div>
              <p>
                L'algorithme de tri rapide a la capacité de trier rapidement la
                liste ou les requêtes. Il est basé sur le principe du tri par
                échange de partition ou Diviser pour mieux régner. Ce type
                d'algorithme occupe moins d'espace et sépare la liste en trois
                parties principales.
              </p>
              <ul>
                <li>Éléments inférieurs à l'élément Pivot</li>
                <li>Élément pivot</li>
                <li>Éléments supérieurs à l'élément Pivot</li>
              </ul>
            </div>
          </article>
          <article id="binary-search">
            <h6>Binary Search</h6>
            <p>
              la recherche binaire , également connue sous le nom de recherche à
              demi-intervalle , recherche logarithmique , ou chop binaire , est
              un algorithme de recherche qui trouve la position d'une valeur
              cible dans un tableau trié . La recherche binaire compare la
              valeur cible à l'élément central du tableau.
            </p>
          </article>
          <article id="hash-algorithm">
            <h6>Hash Algorithm</h6>
            <p>
              « Algorithme de hachage » est une fonction de hachage qui prend
              une chaîne de n'importe quelle longueur et la réduit à une chaîne
              de longueur fixe unique. Il est utilisé pour la validité des mots
              de passe, l'intégrité des messages et des données et pour de
              nombreux autres systèmes cryptographiques.
            </p>
          </article>
          <article id="encryption-algorithm">
            <h6>encryption algorithm</h6>
            <p>
              Le chiffrement est le processus de conversion du texte brut en un
              format de code secret appelé « texte chiffré ». Pour convertir le
              texte, l'algorithme utilise une chaîne de bits appelée « clés »
              pour les calculs. Plus la clé est grande, plus le nombre de
              modèles potentiels pour la création de texte chiffré est grand. La
              plupart des algorithmes de cryptage utilisent des codes de blocs
              d'entrée fixes qui ont une longueur d'environ 64 à 128 bits,
              tandis que certains utilisent la méthode de flux.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
