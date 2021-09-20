import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Statements() {
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
                    href="#lock"
                  >
                    lock
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#fixed"
                  >
                    fixed
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#checked"
                  >
                    checked
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#unchecked"
                  >
                    unchecked
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#jump"
                  >
                    jump statements
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#exception"
                  >
                    exception statements
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
                    to="/modifiers"
                  >
                    Modifiers
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/oop"
                  >
                    OOP
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/statements"
                  >
                    Partial type, lock, yield
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/typesystem"
                  >
                    Struct, Record, Class, Object, Constructor, Serialization
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
          <h3>Statement keywords</h3>
          <article id="lock">
            <h6>lock</h6>
            <p>
              The lock statement acquires the mutual-exclusion lock for a given
              object, executes a statement block, and then releases the lock.
              While a lock is held, the thread that holds the lock can again
              acquire and release the lock. Any other thread is blocked from
              acquiring the lock and waits until the lock is released.
            </p>
          </article>
          <article id="fixed">
            <h6>fixed</h6>
            <div>
              <p>
                The <code>fixed</code> statement prevents the garbage collector
                from relocating a movable variable. The <code>fixed</code>{" "}
                statement is only permitted in an unsafe context. You can also
                use the <code>fixed</code> keyword to create fixed size buffers.
              </p>
              <Highlight language="csharp">
                {`class Point
{
    public int x;
    public int y;
}

unsafe private static void ModifyFixedStorage()
{
    // Variable pt is a managed variable, subject to garbage collection.
    Point pt = new Point();

    // Using fixed allows the address of pt members to be taken,
    // and "pins" pt so that it is not relocated.

    fixed (int* p = &pt.x)
    {
        *p = 1;
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="checked">
            <h6>checked</h6>
            <div>
              <p>
                The <code>checked</code> keyword is used to explicitly enable
                overflow checking for integral-type arithmetic operations and
                conversions.
              </p>
              <Highlight language="csharp">
                {`// If the previous sum is attempted in a checked environment, an
// OverflowException error is raised.

// Checked expression.
Console.WriteLine(checked(2147483647 + ten));

// Checked block.
checked
{
    int i3 = 2147483647 + ten;
    Console.WriteLine(i3);
}`}
              </Highlight>
            </div>
          </article>
          <article id="unchecked">
            <h6>unchecked</h6>
            <div>
              <p>
                The <code>unchecked</code> keyword is used to suppress
                overflow-checking for integral-type arithmetic operations and
                conversions.
              </p>
              <Highlight language="csharp">
                {`unchecked
{
    int1 = 2147483647 + 10;
}
int1 = unchecked(ConstantMax + 10);`}
              </Highlight>
            </div>
          </article>
          <article id="jump">
            <h6>jump statements</h6>
            <table class="table table-bordered">
              <caption>jump statements</caption>
              <thead>
                <tr>
                  <th>mot clés</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>break</code>
                  </td>
                  <td>
                    The <code>break</code> statement terminates the closest
                    enclosing loop or <code>switch</code> statement in which it
                    appears. Control is passed to the statement that follows the
                    terminated statement, if any.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>continue</code>
                  </td>
                  <td>
                    The <code>continue</code> statement passes control to the
                    next iteration of the enclosing iteration statement in which
                    it appears.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>goto</code>
                  </td>
                  <td>
                    The <code>goto</code> statement transfers the program
                    control directly to a labeled statement.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>return</code>
                  </td>
                  <td>
                    The <code>return</code> statement terminates execution of
                    the method in which it appears and returns control to the
                    calling method. It can also return an optional value. If the
                    method is a <code>void</code> type, the <code>return</code>{" "}
                    statement can be omitted.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="exception">
            <h6>Exception statements</h6>
            <table class="table table-bordered">
              <caption>jump statements</caption>
              <thead>
                <tr>
                  <th>keyzords</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>throw</code>
                  </td>
                  <td>
                    Signals the occurrence of an exception during program
                    execution. <code>throw [e];</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>try-catch</code>
                  </td>
                  <td>
                    <p>
                      The try-catch statement consists of a <code>try</code>{" "}
                      block followed by one or more <code>catch</code> clauses,
                      which specify handlers for different exceptions.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>try-finally</code>
                  </td>
                  <td>
                    <p>
                      By using a <code>finally</code> block, you can clean up
                      any resources that are allocated in a <code>try</code>
                      block, and you can run code even if an exception occurs in
                      the <code>try</code> block. Typically, the statements of a{" "}
                      <code>finally</code> block run when control leaves a{" "}
                      <code>try</code> statement.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>try-catch-finally</code>
                  </td>
                  <td>
                    <p>
                      A common usage of <code>catch</code> and{" "}
                      <code>finally</code> together is to obtain and use
                      resources in a <code>try</code> block, deal with
                      exceptional circumstances in a <code>catch</code> block,
                      and release the resources in the <code>finally</code>{" "}
                      block.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
