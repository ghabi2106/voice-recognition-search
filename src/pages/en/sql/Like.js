import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Like() {
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
                    href="#like"
                  >
                    Like
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#wildcard"
                  >
                    Wildcards
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
          <h3>LIKE Operator &amp; Wildcards</h3>
          <article id="like">
            <h6>LIKE Operator</h6>
            <div>
              <p>
                The <code>LIKE</code> operator is used in a <code>WHERE</code>{" "}
                clause to search for a specified pattern in a column.
              </p>
              <p>
                There are two wildcards often used in conjunction with the{" "}
                <code>LIKE</code> operator:
              </p>
              <ul>
                <li>
                  &nbsp;The percent sign (%) represents zero, one, or multiple
                  characters
                </li>
                <li>
                  &nbsp;The underscore sign (_) represents one, single character
                </li>
              </ul>
              <Highlight language="sql">{`SELECT column1, column2, ...
FROM table_name
WHERE columnN LIKE pattern;`}</Highlight>
            </div>
          </article>
          <article id="wildcard">
            <h6>Wildcards</h6>
            <div>
              <p>
                Wildcard characters are used with the <code> LIKE</code>
                operator. The <code>LIKE</code> operator is used in a{" "}
                <code>WHERE</code> clause to search for a specified pattern in a
                column.
              </p>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>Symbol</th>
                    <th>Description</th>
                    <th>Example</th>
                  </tr>
                  <tr>
                    <td>%</td>
                    <td>Represents zero or more characters</td>
                    <td>bl% finds bl, black, blue, and blob</td>
                  </tr>
                  <tr>
                    <td>_</td>
                    <td>Represents a single character</td>
                    <td>h_t finds hot, hat, and hit</td>
                  </tr>
                  <tr>
                    <td>[]</td>
                    <td>Represents any single character within the brackets</td>
                    <td>h[oa]t finds hot and hat, but not hit</td>
                  </tr>
                  <tr>
                    <td>^</td>
                    <td>Represents any character not in the brackets</td>
                    <td>h[^oa]t finds hit, but not hot and hat</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Represents a range of characters</td>
                    <td>c[a-b]t finds cat and cbt</td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>LIKE Operator</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>WHERE CustomerName LIKE 'a%'</td>
                    <td>Finds any values that starts with "a"</td>
                  </tr>
                  <tr>
                    <td>WHERE CustomerName LIKE '%a'</td>
                    <td>Finds any values that ends with "a"</td>
                  </tr>
                  <tr>
                    <td>WHERE CustomerName LIKE '%or%'</td>
                    <td>Finds any values that have "or" in any position</td>
                  </tr>
                  <tr>
                    <td>WHERE CustomerName LIKE '_r%'</td>
                    <td>
                      Finds any values that have "r" in the second position
                    </td>
                  </tr>
                  <tr>
                    <td>WHERE CustomerName LIKE 'a__%'</td>
                    <td>
                      Finds any values that starts with "a" and are at least 3
                      characters in length
                    </td>
                  </tr>
                  <tr>
                    <td>WHERE ContactName LIKE 'a%o'</td>
                    <td>
                      Finds any values that starts with "a" and ends with "o"
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
