import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Delegate() {
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
                    href="#delegate"
                  >
                    Delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#func"
                  >
                    Func delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#action"
                  >
                    Action delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#predicate"
                  >
                    Predicate delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#events"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#event-delegate"
                  >
                    Event vs Delegate
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
          <h3>Délégués</h3>
          <article id="delegate">
            <h6>Delegate</h6>
            <div>
              <p>
                Delegates are similar to pointers to functions, in C or C++. A
                delegate is a reference type variable that holds the reference
                to a method. The reference can be changed at runtime.
              </p>
              <Highlight language="csharp">
                {`public delegate void MyDelegate(string msg); // declare a delegate

// set target method
MyDelegate del = new MyDelegate(MethodA);
// or 
MyDelegate del = MethodA; 
// or set lambda expression 
MyDelegate del = (string msg) =>  Console.WriteLine(msg);

// target method
static void MethodA(string message)
{
    Console.WriteLine(message);
}`}
              </Highlight>
              <Highlight language="csharp">
                {`del.Invoke("Hello World!");
// or 
del("Hello World!");`}
              </Highlight>
            </div>
          </article>
          <article id="func">
            <h6>Func Delegate</h6>
            <div>
              <p>
                <code>Func</code> is a generic delegate. It has zero or more
                input parameters and one out parameter.
              </p>
              <ul>
                <li>Func delegate type must return a value.</li>
                <li>
                  Func delegate type can have zero to 16 input parameters.
                </li>
                <li>Func delegate does not allow ref and out parameters.</li>
              </ul>
              <img src="/img/dotnet/delegate-func.png" alt="delegate func" />
              <Highlight language="csharp">
                {`class Program
{
    static int Sum(int x, int y)
    {
        return x + y;
    }

    static void Main(string[] args)
    {
        Func<int,int, int> add = Sum;

        int result = add(10, 10);

        Console.WriteLine(result); 
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="action">
            <h6>Action Delegate</h6>
            <div>
              <p>
                <code>Action</code> is a delegate type defined in the System
                namespace. An Action type delegate is the same as Func delegate
                except that the Action delegate doesn't return a value. In other
                words, an Action delegate can be used with a method that has a
                void return type.
              </p>
              <Highlight language="csharp">
                {`Action<int> printActionDel = ConsolePrint;

//Or

Action<int> printActionDel = new Action<int>(ConsolePrint);`}
              </Highlight>
            </div>
          </article>
          <article id="predicate">
            <h6>Predicate Delegate</h6>
            <div>
              <p>
                <code>Predicate</code> delegate takes one input parameter and
                boolean return type.
              </p>
              <Highlight language="csharp">
                {`static bool IsUpperCase(string str)
{
    return str.Equals(str.ToUpper());
}

static void Main(string[] args)
{
    Predicate<string> isUpper = IsUpperCase;

    bool result = isUpper("hello world!!");

    Console.WriteLine(result);
}`}
              </Highlight>
            </div>
          </article>
          <article id="events">
            <h6>Events</h6>
            <div>
              <p>
                An event is a notification sent by an object to signal the
                occurrence of an action. Events follow the observer design
                pattern. The class who raises events is called Publisher, and
                the class who receives the notification is called Subscriber.
                There can be multiple subscribers of a single event.
              </p>
            </div>
          </article>
          <article id="event-delegate">
            <h6>Event vs Delegate</h6>
            <div>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Delegate</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A delegate is declared using the delegate keyword.</td>
                    <td>An event is declared using the event keyword.</td>
                  </tr>
                  <tr>
                    <td>
                      Delegate is a function pointer. It holds the reference of
                      one or more methods at runtime.
                    </td>
                    <td>
                      The event is a notification mechanism that depends on
                      delegates
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Delegate is independent and not dependent on events.
                    </td>
                    <td>
                      An event is dependent on a delegate and cannot be created
                      without delegates. Event is a wrapper around delegate
                      instance to prevent users of the delegate from resetting
                      the delegate and its invocation list and only allows
                      adding or removing targets from the invocation list.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Delegate includes Combine() and Remove() methods to add
                      methods to the invocation list.
                    </td>
                    <td>
                      <a
                        href="https://docs.microsoft.com/en-us/dotnet/api/system.reflection.eventinfo?view=netframework-4.8"
                        target="_blank"
                      >
                        EventInfo
                      </a>{" "}
                      class inspect events and to hook up event handlers that
                      include methods AddEventHandler() and RemoveEventHandler()
                      methods to add and remove methods to invocation list,
                      respectively.
                    </td>
                  </tr>
                  <tr>
                    <td>A delegate can be passed as a method parameter.</td>
                    <td>
                      An event is raised but cannot be passed as a method
                      parameter.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      = operator is used to assigning a single method, and +=
                      operator is used to assign multiple methods to a delegate.
                    </td>
                    <td>
                      = operator cannot be used with events, and only += and -=
                      operator can be used with an event that adds or remove
                      event handler. These methods internally call
                      AddEventHandler and RemoveEventHandler methods.
                    </td>
                  </tr>
                </tbody>
              </table>
              <Highlight language="csharp">
                {`public delegate void Notify();
public Notify MyDelegate;

MyDelegate = MyMethod;// valid
MyDelegate += MyMethod;// valid

public delegate void Notify();
public event Notify MyEvent;

MyEvent = MyEventHandler;// Error
MyEvent += MyEventHandler;// valid`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
