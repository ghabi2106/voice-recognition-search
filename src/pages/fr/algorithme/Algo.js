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
                La complexit?? temporelle d'un algorithme indique le temps total
                n??cessaire au programme pour s'ex??cuter. Il est g??n??ralement
                exprim?? en utilisant la grande notation O.
              </p>
              <p>
                Les types de notations utilis??es pour la complexit?? temporelle
                incluent
              </p>
              <ul>
                <li>
                  <strong>Big Oh :</strong> cela indique ?? moins ou ??gal ?? ??
                  &lt;expression&gt; it??rations
                </li>
                <li>
                  <strong>Big Omega</strong> : Il indique ?? plus ou m??me que ??
                  &lt;expression&gt; it??rations
                </li>
                <li>
                  <strong>Big Theta :</strong> Il indique ?? le m??me que
                  ??&lt;expression&gt;it??rations
                </li>
                <li>
                  <strong>Little Oh :</strong> il indique ?? moins de ??
                  it??rations d'&lt;expression&gt;
                </li>
                <li>
                  <strong>Little Omega :</strong> Il indique ?? plus que ??
                  &lt;expression&gt;it??rations
                </li>
              </ul>
            </div>
          </article>
          <article id="case-scenario">
            <h6>case scenario</h6>
            <ul>
              <li>
                <strong>Le meilleur cas de scenario:</strong> Le meilleur
                sc??nario pour un algorithme est expliqu?? comme la disposition
                des donn??es pour laquelle l'algorithme fonctionne le mieux. Par
                exemple, nous prenons une recherche binaire, pour laquelle le
                meilleur des cas serait si la valeur cible est au centre m??me
                des donn??es que vous recherchez. Le meilleur cas de complexit??
                temporelle serait O(1)
              </li>
              <li>
                <strong>Sc??nario du pire des cas :</strong> il est r??f??renc??
                pour le pire ensemble d'entr??es pour un algorithme donn??. Par
                exemple, quicksort, qui peut fonctionner moins bien si vous
                s??lectionnez le plus grand ou le plus petit ??l??ment d'une
                sous-liste pour la valeur pivot. Cela entra??nera la
                d??g??n??rescence du tri rapide en O (n2).
              </li>
            </ul>
          </article>
          <article id="quick-sort">
            <h6>Quick Sort algorithm</h6>
            <div>
              <p>
                L'algorithme de tri rapide a la capacit?? de trier rapidement la
                liste ou les requ??tes. Il est bas?? sur le principe du tri par
                ??change de partition ou Diviser pour mieux r??gner. Ce type
                d'algorithme occupe moins d'espace et s??pare la liste en trois
                parties principales.
              </p>
              <ul>
                <li>??l??ments inf??rieurs ?? l'??l??ment Pivot</li>
                <li>??l??ment pivot</li>
                <li>??l??ments sup??rieurs ?? l'??l??ment Pivot</li>
              </ul>
            </div>
          </article>
          <article id="binary-search">
            <h6>Binary Search</h6>
            <p>
              la recherche binaire , ??galement connue sous le nom de recherche ??
              demi-intervalle , recherche logarithmique , ou chop binaire , est
              un algorithme de recherche qui trouve la position d'une valeur
              cible dans un tableau tri?? . La recherche binaire compare la
              valeur cible ?? l'??l??ment central du tableau.
            </p>
          </article>
          <article id="hash-algorithm">
            <h6>Hash Algorithm</h6>
            <p>
              ?? Algorithme de hachage ?? est une fonction de hachage qui prend
              une cha??ne de n'importe quelle longueur et la r??duit ?? une cha??ne
              de longueur fixe unique. Il est utilis?? pour la validit?? des mots
              de passe, l'int??grit?? des messages et des donn??es et pour de
              nombreux autres syst??mes cryptographiques.
            </p>
          </article>
          <article id="encryption-algorithm">
            <h6>encryption algorithm</h6>
            <p>
              Le chiffrement est le processus de conversion du texte brut en un
              format de code secret appel?? ?? texte chiffr?? ??. Pour convertir le
              texte, l'algorithme utilise une cha??ne de bits appel??e ?? cl??s ??
              pour les calculs. Plus la cl?? est grande, plus le nombre de
              mod??les potentiels pour la cr??ation de texte chiffr?? est grand. La
              plupart des algorithmes de cryptage utilisent des codes de blocs
              d'entr??e fixes qui ont une longueur d'environ 64 ?? 128 bits,
              tandis que certains utilisent la m??thode de flux.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
