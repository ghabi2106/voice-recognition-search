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
          <h3>Collections</h3>
          <article id="collections">
            <h6>Collections</h6>
            <div>
              <p>
                There are two types of collections available in C#: non-generic
                collections and generic collections.
              </p>
              <p>
                The <code>System.Collections</code> namespace contains the
                non-generic collection types and{" "}
                <code>System.Collections.Generic</code> namespace includes
                generic collection types.
              </p>
              <p>
                The key difference between Generic and Non-generic Collection is
                that a Generic Collection is strongly typed while a Non-Generic
                Collection is not strongly typed.
              </p>
              <img
                src="/img/dotnet/Ilist ICollection IEnumerable IQueryable.PNG"
                alt="Ilist ICollection IEnumerable IQueryable"
              />
              <ul>
                <li>
                  <p>
                    <b>IEnumerable</b> is an enumerator that helps in iterating
                    over the elements. An IEnumerable does not hold even the
                    count of the items in the list, instead, you have to iterate
                    over the elements to get the count of items.
                  </p>
                  <p>
                    An IEnumerable supports filtering elements using where
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <b>ICollection</b> which derives from IEnumerable and
                    extends it’s functionality to add, remove, update element in
                    the list. ICollection also holds the count of elements in it
                    and we does not need to iterate over all elements to get
                    total number of elements.
                  </p>
                </li>
                <li>
                  <p>
                    <b>IList</b> extends ICollection. An IList can perform all
                    operations combined from IEnumerable and ICollection, and
                    some more operations like inserting or removing an element
                    by index.
                  </p>
                  <p>
                    You can use a foreach loop or a for loop to iterate over the
                    elements.
                  </p>
                </li>
                <li>
                  <b>IQueryable</b> extends ICollection. An IQueryable generates
                  a LINQ to SQL expression that is executed over the database
                  layer.
                </li>
              </ul>
            </div>
          </article>
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
            <table class="table table-bordered">
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
            <table class="table table-bordered">
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
