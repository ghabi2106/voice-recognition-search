import React from "react";
import { Link } from "react-router-dom";

export default function Gcmethods() {
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
                    href="#dispose-finalize"
                  >dispose() vs finalize()</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#metods"
                  >GC Methods and properties</a>
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
          <h3>GC Methods</h3>
          <article id="dispose-finalize">
            <h6>dispose() vs finalize()</h6>
            <div>
              <p>
                Methods dispose() and finalize() are the methods of C# which are
                invoked to free the unmanaged resources held by an object. The
                dispose() method is defined inside the interface IDisposable
                whereas, the method finalize() is defined inside the class
                object. The main difference between dispose() and finalize() is
                that the method dispose() has to be explicitly invoked by the
                user whereas, the method finalize() is invoked by the garbage
                collector, just before the object is destroyed.
              </p>
              <ol>
                <li>
                  The method dispose() is defined in an interface{" "}
                  <strong>IDisposable</strong>. On the other hand, the method
                  finalize() is defined in the class <strong>object</strong>.
                </li>
                <li>
                  The method dispose() has to be manually invoked&nbsp;inside
                  the code by a programmer, while the method finalize is
                  automatically invoked by the garbage collector before it
                  destroys the object.
                </li>
                <li>
                  The method dispose could be invoked anytime, whereas the
                  method finalize is invoked by the garbage collector when it
                  finds that that object has not been referenced for a long
                  time.
                </li>
                <li>
                  The method dispose() is implemented in a class after
                  implementing the interface IDisposable. The method finalize()
                  has to be implemented only for{" "}
                  <strong>unmanaged resources</strong> because the managed
                  resources are automatically freed by the garbage collector.
                </li>
                <li>
                  The access specifier of the method dispose() is public as it
                  is defined in the interface IDisposable and it would be
                  implemented by the class that implements this interface hence,
                  it should be public. On the other hand, the method finalize()
                  has protected access specifier so that it should not be
                  accessible to any member outside the class.
                </li>
                <li>
                  The method dispose() is fast and frees the object instantly
                  hence, it does not affects the performance cost. The method
                  finalize() is slower and does not free the resources held by
                  the object instantly.
                </li>
              </ol>
            </div>
          </article>
          <article id="metods">
            <h6>GC Methods and properties</h6>
            <div>
              <table className="table table-bordered">
                <caption>Properties</caption>
                <tbody>
                  <tr>
                    <td>
                      <code>MaxGeneration</code>
                    </td>
                    <td>
                      Gets the maximum number of generations that the system
                      currently supports.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered">
                <caption>Methods</caption>
                <tbody>
                  <tr>
                    <td>
                      <code>GetGeneration(Object)</code>
                    </td>
                    <td>
                      Returns the current generation number of the specified
                      object.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>GetTotalMemory(Boolean)</code>
                    </td>
                    <td>
                      Retrieves the number of bytes currently thought to be
                      allocated. A parameter indicates whether this method can
                      wait a short interval before returning, to allow the
                      system to collect garbage and finalize objects.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>CollectionCount(Int32)</code>
                    </td>
                    <td>
                      Returns the number of times garbage collection has
                      occurred for the specified generation of objects.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Collect()</code>
                    </td>
                    <td>Forces an immediate garbage collection of all generations.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Collect(Int32)</code>
                    </td>
                    <td>Forces an immediate garbage collection from generation 0 through a specified generation.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>SuppressFinalize(Object)</code>
                    </td>
                    <td>Requests that the common language runtime not call the finalizer for the specified object.</td>
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
