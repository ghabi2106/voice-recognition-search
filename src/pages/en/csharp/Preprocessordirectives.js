import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Preprocessordirectives() {
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
                    href="#preprocessor-directives"
                  >
                    Preprocessor Directives
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
          <h3>Preprocessor Directives</h3>
          <article id="preprocessor-directives">
            <h6>Preprocessor Directives</h6>
            <div>
              <p>
                Preprocessor Directives in C# tell the compiler to process the
                given information before actual compilation of the program
                starts. It begins with a hashtag symbol (#) and since these
                preprocessors are not statements so no semi-colon is appended at
                the end. The C# compiler does not have a separate preprocessor,
                yet the directives are processed as if there was one. There
                cannot be anything else in a line other than the preprocessor
                directive.
              </p>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Preprocessor</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#define</td>
                    <td>To define a Symbol</td>
                  </tr>
                  <tr>
                    <td>#undef</td>
                    <td>Removes any definition of a symbol</td>
                  </tr>
                  <tr>
                    <td>#if</td>
                    <td>Checks if the symbol evaluates to true</td>
                  </tr>
                  <tr>
                    <td>#endif</td>
                    <td>Ends the conditional directive which began with #if</td>
                  </tr>
                  <tr>
                    <td>#else</td>
                    <td>
                      If the symbolic value of #if evaluates to false the #else
                      directive statements are executed
                    </td>
                  </tr>
                  <tr>
                    <td>#elif</td>
                    <td>
                      Creates a compound conditional directive which is executed
                      if the symbolic value is true
                    </td>
                  </tr>
                  <tr>
                    <td>#error</td>
                    <td>Creates a user defined error</td>
                  </tr>
                  <tr>
                    <td>#warning</td>
                    <td>Creates a user defined warning</td>
                  </tr>
                  <tr>
                    <td>#line</td>
                    <td>Modifies the compiler’s default line numbering</td>
                  </tr>
                  <tr>
                    <td>#region</td>
                    <td>
                      Specifies a block of code that can be expanded or
                      collapsed
                    </td>
                  </tr>
                  <tr>
                    <td>#endregion</td>
                    <td>Specifies the end of a region</td>
                  </tr>
                  <tr>
                    <td>#pragma</td>
                    <td>
                      Gives the compiler information for compilation of the file
                    </td>
                  </tr>
                  <tr>
                    <td>#pragma warning</td>
                    <td>Used for enabling or disabling warnings</td>
                  </tr>
                  <tr>
                    <td>#pragma checksum</td>
                    <td>Creates checksums for source files</td>
                  </tr>
                </tbody>
              </table>
              <Highlight language="csharp">
                {`// C# Program to show the use of
// preprocessor directives

// Defining a symbol shape
#define shape

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Preprocessor {

class Program {

	static void Main(string[] args)
	{
		// Checking if symbol shape exists or not
		#if (shape)
		Console.WriteLine("Shape Exists");
		#else
		Console.WriteLine("Shape does not Exist");

	// Ending the if directive
	#endif
	}
}
}
`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
