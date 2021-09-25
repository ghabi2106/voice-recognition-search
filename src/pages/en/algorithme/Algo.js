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
                Time complexity of an algorithm indicates the total time needed
                by the program to run to completion. It is usually expressed by
                using the big O notation
              </p>
              <p>The types of Notations used for Time Complexity includes</p>
              <ul>
                <li>
                  <strong>Big Oh:</strong> It indicates “fewer than or the same
                  as” &lt;expression&gt;iterations
                </li>
                <li>
                  <strong>Big Omega</strong>: It indicates “more than or same
                  as” &lt;expression&gt;iterations
                </li>
                <li>
                  <strong>Big Theta:</strong> It indicates “the same
                  as”&lt;expression&gt;iterations
                </li>
                <li>
                  <strong>Little Oh:</strong> It indicates “fewer than”
                  &lt;expression&gt;iterations
                </li>
                <li>
                  <strong>Little Omega:</strong> It indicates “more than”
                  &lt;expression&gt;iterations
                </li>
              </ul>
            </div>
          </article>
          <article id="case-scenario">
            <h6>case scenario</h6>
            <ul>
              <li>
                <strong>Best case scenario:</strong> for an algorithm is
                explained as the arrangement of data for which the algorithm
                performs best. For example, we take a binary search, for which
                the best case scenario would be if the target value is at the
                very center of the data you are searching. The best case time
                complexity would be O(1)
              </li>
              <li>
                <strong>Worst case scenario: </strong>It is referred for the
                worst set of input for a given algorithm. For example quicksort,
                which can perform worst if you select the largest or smallest
                element of a sublist for the pivot value. It will cause
                quicksort to degenerate to O (n2).
              </li>
            </ul>
          </article>
          <article id="quick-sort">
            <h6>Quick Sort algorithm</h6>
            <div>
              <p>
                Quick Sort algorithm has the ability to sort list or queries
                quickly. It is based on the principle of partition exchange sort
                or Divide and conquer. This type of algorithm occupies less
                space, and it segregates the list into three main parts.
              </p>
              <ul>
                <li>Elements less than the Pivot element</li>
                <li>Pivot element</li>
                <li>Elements greater than the Pivot element</li>
              </ul>
            </div>
          </article>
          <article id="binary-search">
            <h6>Binary Search</h6>
            <div>
              <p>
                Binary search, also known as half-interval search, logarithmic
                search, or binary chop, is a search algorithm that finds the
                position of a target value within a sorted array. Binary search
                compares the target value to the middle element of the array.
              </p>
            </div>
          </article>
          <article id="hash-algorithm">
            <h6>Hash Algorithm</h6>
            <p>
              “Hash Algorithm” is a hash function that takes a string of any
              length and decreases it to a unique fixed length string. It is
              used for password validity, message &amp; data integrity and for
              many other cryptographic systems.
            </p>
          </article>
          <article id="encryption-algorithm">
            <h6>encryption algorithm</h6>
            <p>
              Encryption is the process of converting plaintext into a secret
              code format referred as “Ciphertext”. To convert the text,
              algorithm uses a string of bits referred as “keys” for
              calculations. The larger the key, the greater the number of
              potential patterns for creating cipher text. Most encryption
              algorithm use codes fixed blocks of input that have length about
              64 to 128 bits, while some uses stream method.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
