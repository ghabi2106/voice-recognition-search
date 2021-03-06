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
          <h3>Linq</h3>
          <article id="linq">
            <h6>Qu'est-ce que LINQ ?</h6>
            <div>
              <p>
                LINQ (Language Integrated Query) est une syntaxe de requ??te
                uniforme pour r??cup??rer des donn??es ?? partir de diff??rentes
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
                <b>Langage familier : les</b> d??veloppeurs n'ont pas besoin
                d'apprendre un nouveau langage de requ??te pour chaque type de
                source de donn??es ou de format de donn??es.
              </li>
              <li>
                <b>Moins de codage :</b> cela r??duit la quantit?? de code ??
                ??crire par rapport ?? une approche plus traditionnelle.
              </li>
              <li>
                <b>Code lisible :</b> LINQ rend le code plus lisible afin que
                les autres d??veloppeurs puissent facilement le comprendre et le
                maintenir.
              </li>
              <li>
                <b>
                  Mani??re standardis??e d'interroger plusieurs sources de donn??es
                  :
                </b>
                la m??me syntaxe LINQ peut ??tre utilis??e pour interroger
                plusieurs sources de donn??es.
              </li>
              <li>
                <b>S??curit?? des requ??tes au moment de la compilation :</b> il
                fournit une v??rification de type des objets au moment de la
                compilation.
              </li>
              <li>
                <b>Prise en charge d'IntelliSense :</b> LINQ fournit
                IntelliSense pour les collections g??n??riques.
              </li>
              <li>
                <b>Mise en forme des donn??es :</b> vous pouvez r??cup??rer des
                donn??es sous diff??rentes formes.
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
                          V??rifie si tous les ??l??ments d'une s??quence satisfont
                          ?? la condition sp??cifi??e
                        </td>
                      </tr>
                      <tr>
                        <td>Any</td>
                        <td>
                          V??rifie si l'un des ??l??ments d'une s??quence satisfait
                          ?? la condition sp??cifi??e
                        </td>
                      </tr>
                      <tr>
                        <td>Contains</td>
                        <td>
                          V??rifie si la s??quence contient un ??l??ment sp??cifique
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
                r??utilisation de l'expression et rend la query plus lisible.
              </p>
              <img src="/img/dotnet/linq-let.PNG" alt="linq-let" />
            </div>
          </article>
          <article id="into">
            <h6>into keyword</h6>
            <div>
              <p>
                Utilisez le mot-cl?? <code>into</code> dans la requ??te LINQ pour
                former un groupe ou pour continuer une requ??te apr??s une{" "}
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
                  <td>Query n'est pas ex??cut??e au moment de sa d??claration.</td>
                  <td>Query est ex??cut??e au moment de sa d??claration.</td>
                </tr>
                <tr>
                  <td>
                    Projection Operator ??? <code>Select, SelectMany</code>
                    <br />
                    Restriction Operator ??? <code>Where</code>
                    <br />
                    Paging Operator ??? <code>Take, Skip</code>
                  </td>
                  <td>
                    Aggregate Functions ???{" "}
                    <code>Count, Average, Min, Max, Sum</code>
                    <br />
                    Element Operators ???{" "}
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
