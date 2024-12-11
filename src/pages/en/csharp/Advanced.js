import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Advanced() {
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
                    href="#marshaling"
                  >
                    Type marshaling
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#platform-invoke"
                  >
                    Platform Invoke (P/Invoke)
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#simd"
                  >
                    Use SIMD-accelerated numeric types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#simd-accelerated-types"
                  >
                    .NET SIMD-accelerated types
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
          <h3>Advanced Topics</h3>
          <article id="marshaling">
            <h6>Type marshaling</h6>
            <div>
              <p>
                <strong>Marshaling</strong> is the process of transforming types
                when they need to cross between managed and native code.
              </p>
              <p>
                Marshaling is needed because the types in the managed and
                unmanaged code are different. In managed code, for instance, you
                have a <code>String</code>, while in the unmanaged world strings
                can be Unicode ("wide"), non-Unicode, null-terminated, ASCII,
                etc.
              </p>
              <Highlight language="csharp">
                {`[DllImport("somenativelibrary.dll")]
static extern int MethodA([MarshalAs(UnmanagedType.LPStr)] string parameter);`}
              </Highlight>
            </div>
          </article>
          <article id="platform-invoke">
            <h6>Platform Invoke (P/Invoke)</h6>
            <div>
              <p>
                <strong>P/Invoke</strong> (Platform Invocation Services) allows
                .NET code to call unmanaged functions implemented in dynamic
                link libraries (DLLs), such as C or C++ libraries. It bridges
                the gap between managed and unmanaged code, enabling
                interoperation.
              </p>
              <h6>Key Components:</h6>
              <ul>
                <li>
                  <strong>DllImport Attribute</strong>: Specifies the DLL
                  containing the unmanaged function.
                </li>
                <li>
                  <strong>Marshaling</strong>: Handles data conversion between
                  managed and unmanaged memory.
                </li>
              </ul>
              <h6>Example:</h6>
              <Highlight language="csharp">
                {`using System;
using System.Runtime.InteropServices;

public class Program
{
    // Import user32.dll (containing the function we need) and define
    // the method corresponding to the native function.
    [DllImport("user32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
    private static extern int MessageBox(IntPtr hWnd, string lpText, string lpCaption, uint uType);

    public static void Main(string[] args)
    {
        // Invoke the function as a regular managed method.
        MessageBox(IntPtr.Zero, "Command-line message box", "Attention!", 0);
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="simd">
            <h6>SIMD</h6>
            <div>
              <p>
                <strong>SIMD (Single Instruction, Multiple Data)</strong> is a
                parallel computing method where a single instruction operates
                simultaneously on multiple data points. <br />
                It’s commonly used in modern CPUs and GPUs for tasks like image
                processing, scientific simulations, and AI workloads.
              </p>
              <h6>Example in .NET:</h6>
              <p>
                Using SIMD via the <strong>System.Numerics.Vectors</strong>{" "}
                library optimizes operations like matrix math and vector
                calculations.
              </p>
            </div>
          </article>
          <article id="simd-accelerated-types">
            <h6>.NET SIMD-accelerated types</h6>
            <div>
              <p>
                The .NET SIMD-accelerated types include the following types:
              </p>
              <ul>
                <li>
                  The <code>Vector2</code>, <code>Vector3</code>, and{" "}
                  <code>Vector4</code> types, which represent vectors with 2, 3,
                  and 4 Single values.
                </li>
                <li>
                  Two matrix types, <code>Matrix3x2</code>, which represents a
                  3x2 matrix, and <code>Matrix4x4</code>, which represents a 4x4
                  matrix of Single values.
                </li>
                <li>
                  The <code>Plane</code> type, which represents a plane in
                  three-dimensional space using Single values.
                </li>
                <li>
                  The <code>Quaternion</code> type, which represents a vector
                  that is used to encode three-dimensional physical rotations
                  using Single values.
                </li>
                <li>
                  The <code>Vector&lt;T&gt;</code> type, which represents a
                  vector of a specified numeric type and provides a broad set of
                  operators that benefit from SIMD support. The count of a{" "}
                  <code>Vector&lt;T&gt;</code> instance is fixed for the
                  lifetime of an application, but its value{" "}
                  <code>Vector&lt;T&gt;.Count</code> depends on the CPU of the
                  machine running the code.
                </li>
              </ul>
              <Highlight language="csharp">
                {`var m1 = new Matrix4x4(
            1.1f, 1.2f, 1.3f, 1.4f,
            2.1f, 2.2f, 3.3f, 4.4f,
            3.1f, 3.2f, 3.3f, 3.4f,
            4.1f, 4.2f, 4.3f, 4.4f);

var m2 = Matrix4x4.Transpose(m1);
var mResult = Matrix4x4.Multiply(m1, m2);`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
