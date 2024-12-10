import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Factory() {
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
                    href="#factory"
                  >
                    Factory Method
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >
                    Common use
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dis-advantages"
                  >
                    Advantages and disadvantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#code"
                  >
                    Structural code in C#
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
          <h3>Factory</h3>
          <article id="factory">
            <h6>Factory</h6>
            <p>
              The Factory Pattern is a creational design pattern in which a
              method or class is responsible for creating objects, abstracting
              the instantiation process from the client. <br />
              It promotes loose coupling by delegating the responsibility of
              object creation to a dedicated factory.
            </p>
          </article>
          <article id="use">
            <h6>Common use</h6>
            <p>
              Use the Factory Method when you want to save system resources by
              reusing existing objects instead of rebuilding them each time.
            </p>
          </article>
          <article id="dis-advantages">
            <h6>Advantages and disadvantages</h6>
            <div class="row">
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> You
                    avoid tight coupling between the creator and the concrete
                    products.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Single Responsibility Principle</em>. You can move the
                    product creation code into one place in the program, making
                    the code easier to support.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Open/Closed Principle</em>. You can introduce new types
                    of products into the program without breaking existing
                    client code.
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i> The
                    code may become more complicated since you need to introduce
                    a lot of new subclasses to implement the pattern. The best
                    case scenario is when you’re introducing the pattern into an
                    existing hierarchy of creator classes.
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article id="code">
            <h6>Structural code in C#</h6>
            <div>
              <ul>
                <li>
                  <strong>
                    Interface (<code>IBeverage</code>)
                  </strong>
                  : Defines the structure for all beverage types.
                </li>
                <li>
                  <strong>
                    Concrete Classes (<code>Coffee</code>, <code>Tea</code>)
                  </strong>
                  : Implement the behavior of specific beverages.
                </li>
                <li>
                  <strong>
                    Factory (<code>BeverageFactory</code>)
                  </strong>
                  : Centralizes object creation logic.
                </li>
                <li>
                  <strong>Client</strong>: Requests objects through the factory
                  without knowing their concrete classes.
                </li>
              </ul>
              <Highlight language="csharp">
                {`// Product Interface
public interface IBeverage
{
    void Serve();
}

// Concrete Products
public class Coffee : IBeverage
{
    public void Serve() => Console.WriteLine("Serving a hot Coffee");
}

public class Tea : IBeverage
{
    public void Serve() => Console.WriteLine("Serving a refreshing Tea");
}

// Factory
public class BeverageFactory
{
    public IBeverage GetBeverage(string beverageType)
    {
        return beverageType.ToLower() switch
        {
            "coffee" => new Coffee(),
            "tea" => new Tea(),
            _ => throw new ArgumentException("Invalid beverage type")
        };
    }
}

// Client
class Program
{
    static void Main()
    {
        var factory = new BeverageFactory();

        IBeverage coffee = factory.GetBeverage("coffee");
        coffee.Serve();

        IBeverage tea = factory.GetBeverage("tea");
        tea.Serve();
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
