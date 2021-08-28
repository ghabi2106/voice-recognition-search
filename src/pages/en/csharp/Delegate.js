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
        </section>
      </div>
    </>
  );
}
