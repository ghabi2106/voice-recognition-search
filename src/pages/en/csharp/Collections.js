import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Collections() {
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
                    href="#dictionnary"
                  >
                    Dictionnary
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#stack"
                  >
                    Stack
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#queue"
                  >
                    Queue
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#array-list"
                  >
                    Array vs ArrayList vs List
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#hashtable"
                  >
                    Hashtable vs Dictionary
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
          <h3>Collections</h3>
          <article id="dictionnary">
            <h6>Dictionary</h6>
            <div>
              <p>
                The <code>Dictionary&lt;TKey, TValue&gt;</code> is a generic
                collection that stores key-value pairs in no particular order.
              </p>
              <Highlight language="csharp">
                {`//creating a dictionary using collection-initializer syntax
var cities = new Dictionary<string, string>(){
  {"UK","London"},
  {"USA","New York"},
  {"India","Mumbai,"}
};`}
              </Highlight>
            </div>
          </article>
          <article id="stack">
            <h6>Stack</h6>
            <div>
              <p>
                <code>Stack</code> is a special type of collection that stores
                elements in LIFO style (Last In First Out).
              </p>
              <Highlight language="csharp">
                {`int[] arr = new int[]{ 1, 2, 3, 4};
Stack<int> myStack = new Stack<int>(arr);`}
              </Highlight>
            </div>
          </article>
          <article id="queue">
            <h6>Queue</h6>
            <p>
              <code>Queue</code> is a special type of collection that stores the
              elements in FIFO style (First In First Out).
            </p>
          </article>
          <article id="array-list">
            <h6>Array vs ArrayList vs List</h6>
            <table>
              <tbody>
                <tr>
                  <th>Array</th>
                  <th>ArrayList</th>
                  <th>List</th>
                </tr>
                <tr>
                  <td>
                    Array stores a fixed number of elements. The size of an
                    Array must be specified at the time of initialization.
                  </td>
                  <td>
                    ArrayList grows automatically and you don't need to specify
                    the size.
                  </td>
                  <td>
                    ArrayList grows automatically and you don't need to specify
                    the size.
                  </td>
                </tr>
                <tr>
                  <td>
                    Array is strongly typed. This means that an array can store
                    only specific type of items\elements.
                  </td>
                  <td>ArrayList can store any type of items\elements.</td>
                  <td>is strongly typed</td>
                </tr>
                <tr>
                  <td>
                    Performs faster than ArrayList because it is strongly typed.
                  </td>
                  <td>Performs slows because of boxging and unboxing..</td>
                  <td>
                    Performs faster than ArrayList because it is strongly typed.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="hashtable">
            <h6>Hashtable vs dictionnary</h6>
            <table>
              <tbody>
                <tr>
                  <th>Hashtable</th>
                  <th>Dictionary</th>
                </tr>
                <tr>
                  <td>
                    Hashtable is a loosely typed (non-generic) collection, this
                    means it stores key-value pairs of any data types.
                  </td>
                  <td>
                    Dictionary is a generic collection. So it can store
                    key-value pairs of specific data types.
                  </td>
                </tr>
                <tr>
                  <td>
                    Hashtable returns null if we try to find a key which does
                    not exist.
                  </td>
                  <td>
                    Dictionary throws an exception if we try to find a key which
                    does not exist.
                  </td>
                </tr>
                <tr>
                  <td>
                    Data retrieval is slower than dictionary because of
                    boxing-unboxing.
                  </td>
                  <td>Data retrieval is faster than Hashtable.</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
