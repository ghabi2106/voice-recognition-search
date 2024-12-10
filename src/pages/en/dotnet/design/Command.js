import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Command() {
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
                    href="#command"
                  >
                    Command
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
          <h3>Command</h3>
          <article id="command">
            <h6>Command</h6>
            <p>
              <strong>Command</strong> Pattern is a behavioral design pattern
              that encapsulates requests as objects, allowing you to
              parameterize methods with different requests, queue them, or log
              their execution. <br />
              It decouples the sender of a request from its receiver.
            </p>
          </article>
          <article id="use">
            <h6>Common use</h6>
            <ul>
              <li>
                Use the Command pattern when you want to parametrize objects
                with operations.
              </li>
              <li>
                Use the Command pattern when you want to queue operations,
                schedule their execution, or execute them remotely.
              </li>
              <li>
                Use the Command pattern when you want to implement reversible
                operations.
              </li>
            </ul>
          </article>
          <article id="dis-advantages">
            <h6>Advantages and disadvantages</h6>
            <div class="row">
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Single Responsibility Principle</em>. You can decouple
                    classes that invoke operations from classes that perform
                    these operations.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Open/Closed Principle</em>. You can introduce new
                    commands into the app without breaking existing client code.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> You can
                    implement undo/redo.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> You can
                    implement deferred execution of operations.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> You can
                    assemble a set of simple commands into a complex one.
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i> The
                    code may become more complicated since you’re introducing a
                    whole new layer between senders and receivers.
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
                  <strong>Encapsulation of Commands</strong>: Each operation
                  (e.g., brewing coffee or tea) is encapsulated in a command
                  object implementing a common <code>ICommand</code> interface.
                  This encapsulation decouples the request sender from the
                  request receiver.
                </li>
                <li>
                  <strong>
                    Invoker (<code>Waiter</code>)
                  </strong>
                  : The <code>Waiter</code> holds a reference to a command and
                  invokes its Execute method. This allows the invoker to work
                  with different commands without knowing their details.
                </li>
                <li>
                  <strong>
                    Receiver (<code>CoffeeMaker</code>/<code>TeaMaker</code>)
                  </strong>
                  : The actual work is done by the receiver classes. Commands
                  delegate the execution to these classes.
                </li>
                <li>
                  <strong>Client</strong>: The client configures the system by
                  creating command objects with specific receivers and assigning
                  them to the invoker. For example, assigning{" "}
                  <code>MakeCoffeeCommand</code> to the <code>Waiter</code>.
                </li>
              </ul>
              <Highlight language="csharp">
                {`//Command Interface
public interface ICommand
{
    void Execute();
}

// Concrete Commands
public class MakeCoffeeCommand : ICommand
{
    private CoffeeMaker _coffeeMaker;
    public MakeCoffeeCommand(CoffeeMaker coffeeMaker) => _coffeeMaker = coffeeMaker;
    public void Execute() => _coffeeMaker.BrewCoffee();
}

public class MakeTeaCommand : ICommand
{
    private TeaMaker _teaMaker;
    public MakeTeaCommand(TeaMaker teaMaker) => _teaMaker = teaMaker;
    public void Execute() => _teaMaker.BrewTea();
}

// Receivers
public class CoffeeMaker
{
    public void BrewCoffee() => Console.WriteLine("Coffee is being brewed.");
}

public class TeaMaker
{
    public void BrewTea() => Console.WriteLine("Tea is being brewed.");
}

// Invoker
public class Waiter
{
    private ICommand _command;
    public void SetCommand(ICommand command) => _command = command;
    public void PlaceOrder() => _command.Execute();
}

// Client Code
public class Program
{
    public static void Main()
    {
        CoffeeMaker coffeeMaker = new CoffeeMaker();
        TeaMaker teaMaker = new TeaMaker();

        ICommand coffeeCommand = new MakeCoffeeCommand(coffeeMaker);
        ICommand teaCommand = new MakeTeaCommand(teaMaker);

        Waiter waiter = new Waiter();

        waiter.SetCommand(coffeeCommand);
        waiter.PlaceOrder(); // Output: Coffee is being brewed.

        waiter.SetCommand(teaCommand);
        waiter.PlaceOrder(); // Output: Tea is being brewed.
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
