import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Singleton() {
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
                    href="#sigleton"
                  >
                    Singleton
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#types"
                  >
                    Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#implementation"
                  >
                    iImplementation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >
                    Common Use
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages"
                  >
                    Advantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#disadvantages"
                  >
                    Disadvantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#not-thread-safe"
                  >
                    not thread-safe
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#simple-thread-safety"
                  >
                    simple thread-safety
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#thread-safety-double-check"
                  >
                    attempted thread-safety using double-check locking
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#thread-safe-without-lock"
                  >
                    not quite as lazy, but thread-safe without using locks
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#fully-lazy-instantiation"
                  >
                    fully lazy instantiation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lazy"
                  >
                    using .NET 4's Lazy&lt;T&gt; type
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
                    to="/agile"
                  >
                    Agile
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cleancode"
                  >
                    Clean code
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/command"
                  >
                    Command
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/designpattern"
                  >
                    Design Principle &amp; Pattern
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/di"
                  >
                    Dependency injection
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/factory"
                  >
                    Factory Method
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/mediator"
                  >
                    Mediator
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/observer"
                  >
                    Observer
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/singleton"
                  >
                    Singleton
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/solid"
                  >
                    S.O.L.I.D. Principles
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
          <h3>Singleton</h3>
          <article id="singleton">
            <h6>Singleton</h6>
            <p>
              Singleton is a creational design pattern that lets you ensure that
              a class has only one instance, while providing a global access
              point to this instance.
            </p>
          </article>
          <article id="types">
            <h6>Types</h6>
            <ol>
              <li>No Thread Safe Singleton.</li>
              <li>Thread-Safety Singleton.</li>
              <li>Thread-Safety Singleton using Double-Check Locking.</li>
              <li>Thread-safe without a lock.</li>
              <li>Using .NET 4's Lazy&lt;T&gt; type.</li>
            </ol>
          </article>
          <article id="implementation">
            <h6>Implementation</h6>
            <ul>
              <li>Private and parameterless single constructor</li>
              <li>Sealed class.</li>
              <li>
                Static variable to hold a reference to the single created
                instance
              </li>
              <li>
                A public and static way of getting the reference to the created
                instance.
              </li>
            </ul>
          </article>
          <article id="use">
            <h6>Common use</h6>
            <ul>
              <li>
                <strong>Service Proxies:</strong> As we know invoking a Service
                API is an extensive operation in an application. The process
                that taking most of the time is creating the Service client in
                order to invoke the service API. If you create the Service proxy
                as Singleton then it will improve the performance of your
                application.
              </li>
              <li>
                <strong>Facades:</strong> You can also create Database
                connections as Singleton which can improve the performance of
                the application.
              </li>
              <li>
                <strong>Logs:</strong> In an application, performing the I/O
                operation on a file is an expensive operation. If you create
                your Logger as Singleton then it will improve the performance of
                the I/O operation.
              </li>
              <li>
                <strong>Data sharing:</strong> If you have any constant values
                or configuration values then you can keep these values in
                Singleton So that these can be read by other components of the
                application.
              </li>
              <li>
                <strong>Caching:</strong> As we know fetching the data from a
                database is a time-consuming process. In your application, you
                can cache the master and configuration in memory which will
                avoid the DB calls. In such situations, the Singleton class can
                be used to handle the caching with thread synchronization in an
                efficient manner which drastically improves the performance of
                the application.
              </li>
            </ul>
          </article>
          <article id="advantages">
            <h6>Advantages</h6>
            <ul>
              <li>Ensure that a class only has one instance</li>
              <li>Easily access the sole instance of a class</li>
              <li>Control its instantiation</li>
              <li>Restrict the number of instances</li>
              <li>Access a global variable</li>
            </ul>
          </article>
          <article id="disadvantages">
            <h6>Disadvantages</h6>
            <ul>
              <li>
                Unit testing is a bit difficult as it introduces a global state
                into an application
              </li>
              <li>
                Reduces the potential for parallelism within a program by
                locking.
              </li>
            </ul>
          </article>
          <article id="not-thread-safe">
            <h6>not thread-safe</h6>
            <Highlight language="csharp">
              {`// Bad code! Do not use!
public sealed class Singleton
{
    private static Singleton instance = null;

    private Singleton()
    {
    }

    public static Singleton Instance
    {
        get
        {
            if (instance == null)
            {
                instance = new Singleton();
            }
            return instance;
        }
    }
}`}
            </Highlight>
          </article>
          <article id="simple-thread-safety">
            <h6>simple thread-safety</h6>
            <Highlight language="csharp">
              {`public sealed class Singleton
{
    private static Singleton instance = null;
    private static readonly object padlock = new object();

    Singleton()
    {
    }

    public static Singleton Instance
    {
        get
        {
            lock (padlock)
            {
                if (instance == null)
                {
                    instance = new Singleton();
                }
                return instance;
            }
        }
    }
}`}
            </Highlight>
          </article>
          <article id="thread-safety-double-check">
            <h6>attempted thread-safety using double-check locking</h6>
            <Highlight language="csharp">
              {`// Bad code! Do not use!
public sealed class Singleton
{
    private static Singleton instance = null;
    private static readonly object padlock = new object();

    Singleton()
    {
    }

    public static Singleton Instance
    {
        get
        {
            if (instance == null)
            {
                lock (padlock)
                {
                    if (instance == null)
                    {
                        instance = new Singleton();
                    }
                }
            }
            return instance;
        }
    }
}`}
            </Highlight>
          </article>
          <article id="thread-safe-without-lock">
            <h6>not quite as lazy, but thread-safe without using locks</h6>
            <Highlight language="csharp">
              {`public sealed class Singleton
{
    private static readonly Singleton instance = new Singleton();

    // Explicit static constructor to tell C# compiler
    // not to mark type as beforefieldinit
    static Singleton()
    {
    }

    private Singleton()
    {
    }

    public static Singleton Instance
    {
        get
        {
            return instance;
        }
    }
}`}
            </Highlight>
          </article>
          <article id="fully-lazy-instantiation">
            <h6>fully lazy instantiation</h6>
            <Highlight language="csharp">
              {`public sealed class Singleton
{
    private Singleton()
    {
    }

    public static Singleton Instance { get { return Nested.instance; } }

    private class Nested
    {
        // Explicit static constructor to tell C# compiler
        // not to mark type as beforefieldinit
        static Nested()
        {
        }

        internal static readonly Singleton instance = new Singleton();
    }
}`}
            </Highlight>
          </article>
          <article id="lazy">
            <h6>using .NET 4's Lazy&lt;T&gt; type</h6>
            <Highlight language="csharp">
              {`public sealed class Singleton
{
    private static readonly Lazy<Singleton> lazy =
        new Lazy<Singleton>(() => new Singleton());

    public static Singleton Instance { get { return lazy.Value; } }

    private Singleton()
    {
    }
}`}
            </Highlight>
          </article>
        </section>
      </div>
    </>
  );
}
