import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function References() {
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
                    href="#array"
                  >
                    Array
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#string"
                  >
                    String
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
          <h3>Reference Methods</h3>
          <article id="linq">
            <h6>Linq</h6>
            <table class="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Method</th>
                  <th>Syntax</th>
                </tr>
                <tr>
                  <td>Aggregate</td>
                  <td><Highlight language="csharp">
                {`int numEven = ints.Aggregate(0, (total, next) => next % 2 == 0 ? total + 1 : total);`}
              </Highlight></td>
                </tr>
                <tr>
                  <td>All</td>
                  <td><Highlight language="csharp">
                {`list.All(x => x.value > 5)`}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Any</td>
                  <td><Highlight language="csharp">
                  {`list.Any(x => x.value > 5)`}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Append</td>
                  <td><Highlight language="csharp">
                {`List<int> newNumbers = numbers.Append(5);`}
              </Highlight></td>
                </tr>
                <tr>
                  <td>AsEnumerable</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Average</td>
                  <td><Highlight language="csharp">
                {`double average = fruits.Average(s => s.Length);`}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Cast</td>
                  <td><Highlight language="csharp">
                {`IEnumerable<string> query = fruits.Cast<string>().OrderBy(fruit => fruit)
                .Select(fruit => fruit);`}
              </Highlight></td>
                </tr>

                <tr>
                  <td>Chunk</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Concat</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Contains</td>
                  <td><Highlight language="csharp">
                {`bool hasMango = fruits.Contains(fruit);`}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Count</td>
                  <td><Highlight language="csharp">
                {`int numberUnvaccinated = pets.Count(p => p.Vaccinated == false);`}
              </Highlight></td>
                </tr>
                <tr>
                  <td>DefaultIfEmpty</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Distinct</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>DistinctBy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>ElementAt</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ElementAtOrDefault</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Empty</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Except</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ExceptBy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>First</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>FirstOrDefault</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>GroupBy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>GroupJoin</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Intersect</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>IntersectBy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Join</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Last</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>LastOrDefault</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>LongCount</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Max</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>MaxBy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Min</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>MinBy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>OfType</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>OrderBy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>OrderByDescending</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Prepend</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Range</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Repeat</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Reverse</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Select</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>SelectMany</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>SequenceEqual</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Single</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>SingleOrDefault</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Skip</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>SkipLast</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>SkipWhile</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Sum</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>Take</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>TakeLast</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>TakeWhile</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ThenBy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ThenByDescending</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ToArray</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ToDictionary</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>ToHashSet</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ToList</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ToLookup</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>TryGetNonEnumeratedCount</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Union</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>UnionBy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Where</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Zip</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="array">
            <h6>Array</h6>
            <table class="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Method</th>
                  <th>Syntax</th>
                </tr>
                <tr>
                  <td>AsReadOnly</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>BinarySearch</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Clear</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Clone</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ConstrainedCopy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ConvertAll</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Copy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>CopyTo</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>CreateInstance</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Empty</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Exists</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Fill</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Find</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>FindAll</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>FindIndex</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>FindLast</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>FindLastIndex</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ForEach</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>GetEnumerator</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>GetLength</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>GetLongLength</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>GetLowerBound</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>GetUpperBound</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>GetValue</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>IndexOf</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Initialize</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>LastIndexOf</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Resize</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>Reverse</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>SetValue</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Sort</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>TrueForAll</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="string">
            <h6>String</h6>
            <table class="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Method</th>
                  <th>Syntax</th>
                </tr>
                <tr>
                  <td>Clone</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Compare</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>CompareOrdinal</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>CompareTo</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Concat</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Contains</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Copy</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>CopyTo</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Create</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>EndsWith</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>EnumerateRunes</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Equals</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Format</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>GetEnumerator</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>GetHashCode</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>GetPinnableReference</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>GetTypeCode</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>IndexOf</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>IndexOfAny</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Insert</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Intern</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>IsInterned</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>IsNormalized</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>IsNullOrEmpty</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>IsNullOrWhiteSpace</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Join</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>LastIndexOf</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>LastIndexOfAny</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>Normalize</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>PadLeft</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>PadRight</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Remove</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Replace</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ReplaceLineEndings</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Split</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>StartsWith</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Substring</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ToCharArray</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ToLower</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ToLowerInvariant</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ToString</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>ToUpper</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>

                <tr>
                  <td>ToUpperInvariant</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>Trim</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>TrimEnd</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>TrimStart</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
                <tr>
                  <td>TryCopyTo</td>
                  <td><Highlight language="csharp">
                {``}
              </Highlight></td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
