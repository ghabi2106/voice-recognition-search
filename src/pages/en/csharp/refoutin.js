import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Refoutin() {
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
                    href="#introduction"
                  >
                    Modifiers in, ref et out
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#out"
                  >
                    out
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ref-out"
                  >
                    ref vs out
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in"
                  >
                    in
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#limit"
                  >
                    Limit
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
          <h3>Ref, in and Out</h3>
          <article id="introduction">
            <h6>Les modificateurs in, ref et out</h6>
            <div>
              <ul>
                <li>
                  <code>ref</code> is used to state that the parameter passed{" "}
                  <strong>may</strong> be modified by the method.
                </li>
                <li>
                  <code>in</code> is used to state that the parameter passed{" "}
                  <strong>cannot</strong> be modified by the method.
                </li>
                <li>
                  <code>out</code> is used to state that the parameter passed{" "}
                  <code>must</code> be modified by the method.
                </li>
              </ul>
              <p>
                Both the <code>ref</code> and <code>in</code> require the
                parameter to have been initialized before being passed to a
                method. The <code>out</code> modifier does not require this and
                is typically not initialized prior to being used in a method.
              </p>
            </div>
          </article>
          <article id="out">
            <h6>out</h6>
            <p>
              The <code>out</code> is a keyword in C# which is used for the
              passing the arguments to methods as a reference type. It is
              generally used when a method returns multiple values.
            </p>
          </article>
          <article id="ref-out">
            <h6>ref vs out</h6>
            <table>
              <tbody>
                <tr>
                  <th>ref</th>
                  <th>out</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    It is necessary the parameters should initialize before it
                    pass to ref.
                  </td>
                  <td>
                    It is not necessary to initialize parameters before it pass
                    to out.
                  </td>
                </tr>
                <tr>
                  <td>
                    It is not necessary to initialize the value of a parameter
                    before returning to the calling method.
                  </td>
                  <td>
                    It is necessary to initialize the value of a parameter
                    before returning to the calling method.
                  </td>
                </tr>
                <tr>
                  <td>
                    The passing of value through ref parameter is useful when
                    the called method also need to change the value of passed
                    parameter.
                  </td>
                  <td>
                    The declaring of parameter through out parameter is useful
                    when a method return multiple values.
                  </td>
                </tr>
                <tr>
                  <td>
                    When ref keyword is used the data may pass in
                    bi-directional.
                  </td>
                  <td>
                    When out keyword is used the data only passed in
                    unidirectional.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="in">
            <h6>in</h6>
            <div>
              <p>
                <code>in</code> is used with a struct to improve performance by
                declaring that the value will not be modified. When using with
                reference types, it only prevents you from assigning a new
                reference.
              </p>
              <Highlight language="csharp">
                {`static void Enroll(in Student student)
{
  // With in assigning a new object would throw an error
  // student = new Student();

  // We can still do this with reference types though
  student.Enrolled = true;
}`}
              </Highlight>
            </div>
          </article>
          <article id="limit">
            <h6>Limitations</h6>
            <ul>
              <li>
                It's important to note that <code>in</code>, <code>out</code>,
                and <code>ref</code> cannot be used in methods with the{" "}
                <code>async</code> modifier. You can use them in synchronous
                methods that return a task, though.
              </li>
              <li>
                You cannot use them in iterator methods that have a{" "}
                <code>yield return</code> or <code>yield break</code> either.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
