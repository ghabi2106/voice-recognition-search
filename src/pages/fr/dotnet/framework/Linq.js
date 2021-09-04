import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Linq() {
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
                    href="#linq"
                  >
                    Linq
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages"
                  >
                    Advantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#operators"
                  >
                    Standard Query Operators
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#let"
                  >
                    let
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#into"
                  >
                    into
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#deferred-immediate"
                  >
                    Deferred Execution vs Immediate
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
                    to="/entityframework"
                  >
                    Entity Framework
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
          <h3>Linq</h3>
          <article id="linq">
            <h6>Qu'est-ce que LINQ ?</h6>
            <div>
              <p>
                LINQ (Language Integrated Query) est une syntaxe de requête
                uniforme pour récupérer des données à partir de différentes
                sources et formats telles que des collections, SQL, ADO.Net
                DataSet et XML Docs.
              </p>
              <img
                src="/img/dotnet/linq-query-syntax.png"
                alt="linq-query-syntax"
              />
              <img
                src="/img/dotnet/linq-method-syntax.png"
                alt="linq-method-syntax"
              />
            </div>
          </article>
          <article id="advantages">
            <h6>Avantages de LINQ</h6>
            <ul>
              <li>
                <b>Langage familier : les</b> développeurs n'ont pas besoin
                d'apprendre un nouveau langage de requête pour chaque type de
                source de données ou de format de données.
              </li>
              <li>
                <b>Moins de codage :</b> cela réduit la quantité de code à
                écrire par rapport à une approche plus traditionnelle.
              </li>
              <li>
                <b>Code lisible :</b> LINQ rend le code plus lisible afin que
                les autres développeurs puissent facilement le comprendre et le
                maintenir.
              </li>
              <li>
                <b>
                  Manière standardisée d'interroger plusieurs sources de données
                  :
                </b>
                la même syntaxe LINQ peut être utilisée pour interroger
                plusieurs sources de données.
              </li>
              <li>
                <b>Sécurité des requêtes au moment de la compilation :</b> il
                fournit une vérification de type des objets au moment de la
                compilation.
              </li>
              <li>
                <b>Prise en charge d'IntelliSense :</b> LINQ fournit
                IntelliSense pour les collections génériques.
              </li>
              <li>
                <b>Mise en forme des données :</b> vous pouvez récupérer des
                données sous différentes formes.
              </li>
            </ul>
          </article>
          <article id="operators">
            <h6>Standard Query Operators</h6>
            <div>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Classification</th>
                    <th>Standard Query Operators</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Filtering</td>
                    <td>Where, OfType</td>
                  </tr>
                  <tr>
                    <td>Sorting</td>
                    <td>
                      OrderBy, OrderByDescending, ThenBy, ThenByDescending,
                      Reverse
                    </td>
                  </tr>
                  <tr>
                    <td>Grouping</td>
                    <td>GroupBy, ToLookup</td>
                  </tr>
                  <tr>
                    <td>Join</td>
                    <td>GroupJoin, Join</td>
                  </tr>
                  <tr>
                    <td>Projection</td>
                    <td>Select, SelectMany</td>
                  </tr>
                  <tr>
                    <td>Aggregation</td>
                    <td>Aggregate, Average, Count, LongCount, Max, Min, Sum</td>
                  </tr>
                  <tr>
                    <td>Quantifiers</td>
                    <td>All, Any, Contains</td>
                  </tr>
                  <tr>
                    <td>Elements</td>
                    <td>
                      ElementAt, ElementAtOrDefault, First, FirstOrDefault,
                      Last, LastOrDefault, Single, SingleOrDefault
                    </td>
                  </tr>
                  <tr>
                    <td>Set</td>
                    <td>Distinct, Except, Intersect, Union</td>
                  </tr>
                  <tr>
                    <td>Partitioning</td>
                    <td>Skip, SkipWhile, Take, TakeWhile</td>
                  </tr>
                  <tr>
                    <td>Concatenation</td>
                    <td>Concat</td>
                  </tr>
                  <tr>
                    <td>Equality</td>
                    <td>SequenceEqual</td>
                  </tr>
                  <tr>
                    <td>Generation</td>
                    <td>DefaultEmpty, Empty, Range, Repeat</td>
                  </tr>
                  <tr>
                    <td>Conversion</td>
                    <td>
                      AsEnumerable, AsQueryable, Cast, ToArray, ToDictionary,
                      ToList
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul>
                <li>
                  Join
                  <img
                    src="/img/dotnet/linq-join-operator.png"
                    alt="linq-join-operator"
                  />
                </li>
                <li>
                  GroupJoin
                  <img
                    src="/img/dotnet/linq-groupjoin.png"
                    alt="linq-groupjoin.png"
                  />
                </li>
                <li>
                  Aggregate
                  <img
                    src="/img/dotnet/linq-aggregate-1.png"
                    alt="linq-aggregate"
                  />
                </li>
                <li>
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>Operator</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>All</td>
                        <td>
                          Vérifie si tous les éléments d'une séquence satisfont
                          à la condition spécifiée
                        </td>
                      </tr>
                      <tr>
                        <td>Any</td>
                        <td>
                          Vérifie si l'un des éléments d'une séquence satisfait
                          à la condition spécifiée
                        </td>
                      </tr>
                      <tr>
                        <td>Contains</td>
                        <td>
                          Vérifie si la séquence contient un élément spécifique
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
            </div>
          </article>
          <article id="let">
            <h6>let keyword</h6>
            <div>
              <p>
                <code>let</code> projette une nouvelle variable, permet la
                réutilisation de l'expression et rend la query plus lisible.
              </p>
              <img src="/img/dotnet/linq-let.PNG" alt="linq-let" />
            </div>
          </article>
          <article id="into">
            <h6>into keyword</h6>
            <div>
              <p>
                Utilisez le mot-clé <code>into</code> dans la requête LINQ pour
                former un groupe ou pour continuer une requête après une{" "}
                <code>select</code> clause.
              </p>
              <Highlight language="csharp">
                {`var teenAgerStudents = from s in studentList
    where s.age > 12 && s.age < 20
    select s
        into teenStudents
        where teenStudents.StudentName.StartsWith("B")
        select teenStudents;`}
              </Highlight>
            </div>
          </article>
          <article id="deferred-immediate">
            <h6>Deferred Vs Immediate Query Execution in LINQ</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Deferred/Lazy Operators</strong>
                  </td>
                  <td>
                    <strong>Immediate/Greedy Operators</strong>
                  </td>
                </tr>
                <tr>
                  <td>Query n'est pas exécutée au moment de sa déclaration.</td>
                  <td>Query est exécutée au moment de sa déclaration.</td>
                </tr>
                <tr>
                  <td>
                    Projection Operator – <code>Select, SelectMany</code>
                    <br />
                    Restriction Operator – <code>Where</code>
                    <br />
                    Paging Operator – <code>Take, Skip</code>
                  </td>
                  <td>
                    Aggregate Functions –{" "}
                    <code>Count, Average, Min, Max, Sum</code>
                    <br />
                    Element Operators –{" "}
                    <code>
                      First, Last, SingleToList, ToArray, ToDictionary
                    </code>
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
