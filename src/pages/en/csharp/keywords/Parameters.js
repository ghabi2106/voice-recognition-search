import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Parameters() {
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
                    Method Parameters
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#params"
                  >
                    params
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
          <h3>Method Parameters</h3>
          <article id="introduction">
            <h6>Method Parameters</h6>
            <div>
              <ul>
                <li>
                  <code>params</code> specifies that this parameter may take a
                  variable number of arguments.
                </li>
                <li>
                  <code>in</code> is used to state that the parameter passed{" "}
                  <strong>cannot</strong> be modified by the method.
                </li>
                <li>
                  <code>ref</code> is used to state that the parameter passed{" "}
                  <strong>may</strong> be modified by the method.
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
          <article id="params">
            <h6>params</h6>
            <div>
              <p>
                By using the <code>params</code> keyword, you can specify a
                method parameter that takes a variable number of arguments. The
                parameter type must be a single-dimensional array.
              </p>
              <p>
                When you call a method with a <code>params</code> parameter, you
                can pass in:
              </p>
              <ul>
                <li>
                  A comma-separated list of arguments of the type of the array
                  elements.
                </li>
                <li>An array of arguments of the specified type.</li>
                <li>
                  No arguments. If you send no arguments, the length of the{" "}
                  <code>params</code> list is zero.
                </li>
              </ul>
              <Highlight language="csharp">
                {`public class MyClass
{
    public static void UseParams(params int[] list)
    {
        for (int i = 0; i < list.Length; i++)
        {
            Console.Write(list[i] + " ");
        }
        Console.WriteLine();
    }

    public static void UseParams2(params object[] list)
    {
        for (int i = 0; i < list.Length; i++)
        {
            Console.Write(list[i] + " ");
        }
        Console.WriteLine();
    }

    static void Main()
    {
        // You can send a comma-separated list of arguments of the
        // specified type.
        UseParams(1, 2, 3, 4);
        UseParams2(1, 'a', "test");

        // A params parameter accepts zero or more arguments.
        // The following calling statement displays only a blank line.
        UseParams2();

        // An array argument can be passed, as long as the array
        // type matches the parameter type of the method being called.
        int[] myIntArray = { 5, 6, 7, 8, 9 };
        UseParams(myIntArray);

        object[] myObjArray = { 2, 'b', "test", "again" };
        UseParams2(myObjArray);

        // The following call causes a compiler error because the object
        // array cannot be converted into an integer array.
        //UseParams(myObjArray);

        // The following call does not cause an error, but the entire
        // integer array becomes the first element of the params array.
        UseParams2(myIntArray);
    }
}
/*
Output:
    1 2 3 4
    1 a test

    5 6 7 8 9
    2 b test again
    System.Int32[]
*/`}
              </Highlight>
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
            <table class="table table-bordered">
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
