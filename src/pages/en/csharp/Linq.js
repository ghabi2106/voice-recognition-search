import React from "react";
import { Link } from "react-router-dom";

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
            <h6>Linq</h6>
            <div>
              <p>
                LINQ (Language Integrated Query) is uniform query syntax to
                retrieve data from different sources and formats such as
                collections, generics, XML documents, ADO.NET Datasets, SQL,
                etc.
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
            <h6>Advantages of LINQ</h6>
            <ul>
              <li>
                <b>Familiar language: </b>Developers don’t have to learn a new
                query language for each type of data source or data format.
              </li>
              <li>
                <b>Less coding: </b>It reduces the amount of code to be written
                as compared with a more traditional approach.
              </li>
              <li>
                <b>Readable code: </b>LINQ makes the code more readable so other
                developers can easily understand and maintain it.
              </li>
              <li>
                <b>Standardized way of querying multiple data sources: </b>The
                same LINQ syntax can be used to query multiple data sources.
              </li>
              <li>
                <b>Compile time safety of queries: </b>It provides type checking
                of objects at compile time.
              </li>
              <li>
                <b>IntelliSense Support: </b>LINQ provides IntelliSense for
                generic collections.
              </li>
              <li>
                <b>Shaping data: </b>You can retrieve data in different shapes.
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
                          Checks if all the elements in a sequence satisfies the
                          specified condition
                        </td>
                      </tr>
                      <tr>
                        <td>Any</td>
                        <td>
                          Checks if any of the elements in a sequence satisfies
                          the specified condition
                        </td>
                      </tr>
                      <tr>
                        <td>Contains</td>
                        <td>
                          Checks if the sequence contains a specific element
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
                <code>let</code> projects a new range variable, allows re-use of
                the expression and makes the query more readable.
              </p>
              <img src="/img/dotnet/linq-let.PNG" alt="linq-let" />
            </div>
          </article>
          <article id="into">
            <h6>into keyword</h6>
            <div>
              <p>
                Use <code>into</code> keyword in LINQ query to form a group or
                to continue a query after a <code>select</code> clause.
              </p>
              <img src="/img/dotnet/linq-into.PNG" alt="linq-into" />
            </div>
          </article>
          <article id="deferred-immediate">
            <h6>Deferred Vs Immediate Query Execution in LINQ</h6>
            <table>
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
                  <td>
                    Query is not executed at the point of its declaration.
                  </td>
                  <td>Query is executed at the point of its declaration.</td>
                </tr>
                <tr>
                  <td>
                    Projection Operator – Select, SelectMany Restriction
                    Operator – Where Paging Operator – Take, Skip
                  </td>
                  <td>
                    Aggregate Functions – Count, Average, Min, Max, Sum Element
                    Operators – First, Last, SingleToList, ToArray, ToDictionary
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
