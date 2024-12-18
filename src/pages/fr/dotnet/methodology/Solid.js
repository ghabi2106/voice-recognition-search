import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Solid() {
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
                    href="#solid"
                  >
                    SOLID principle
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#s"
                  >
                    Single-responsibility
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#o"
                  >
                    Open-closed
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#l"
                  >
                    Liskov substitution
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#i"
                  >
                    Interface segregation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#d"
                  >
                    Dependency inversion
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#examples"
                  >
                    Examples
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
          <h3>S.O.L.I.D. Principles</h3>
          <article id="solid">
            <h6>SOLID principles</h6>
            <div>
              <p>
                Le principe SOLID est un acronyme qui représente cinq principes
                de conception orientée objet
              </p>
              <p>Les 5 principes de SOLID sont :</p>
              <ul>
                <li>
                  <strong>S</strong>ingle-responsibility principle
                </li>
                <li>
                  <strong>O</strong>pen-closed principle
                </li>
                <li>
                  <strong>L</strong>iskov substitution principle
                </li>
                <li>
                  <strong>I</strong>nterface segregation principle
                </li>
                <li>
                  <strong>D</strong>ependency inversion principle
                </li>
              </ul>
            </div>
          </article>
          <article id="s">
            <h6>
              <strong>S</strong>: Single-responsibility principle
            </h6>
            <p class="answer">
              Une classe ne doit avoir qu'une seule raison de changer,
              c'est-à-dire qu'elle ne doit avoir qu'une seule responsabilité.
            </p>
          </article>
          <article id="o">
            <h6>
              <strong>O</strong>: Open-closed principle
            </h6>
            <p>
              Les entités logicielles (classes, modules, fonctions, etc.)
              doivent être ouvertes à l'extension mais fermées à la
              modification.
            </p>
          </article>
          <article id="l">
            <h6>
              <strong>L</strong>: Liskov substitution principle
            </h6>
            <p>
              Les objets d'une classe dérivée doivent pouvoir être remplacés par
              des objets de la classe de base sans altérer le bon fonctionnement
              du programme.
            </p>
          </article>
          <article id="i">
            <h6>
              <strong>I</strong>: Interface segregation principle
            </h6>
            <p>
              Il est préférable d'avoir plusieurs interfaces spécifiques plutôt
              qu'une interface générale.
            </p>
          </article>
          <article id="d">
            <h6>
              <strong>D</strong>: Dependency inversion principle
            </h6>
            <div>
              <p>
                Les modules de haut niveau ne doivent pas dépendre des modules
                de bas niveau, mais les deux doivent dépendre d'abstractions.
              </p>
            </div>
          </article>
          <article id="examples">
            <h6>Examples</h6>
            <div>
              <p>
                <strong>Single Responsibility Principle (SRP):</strong>
              </p>
              <Highlight language="csharp">
                {`public class InvoiceManager
{
    public void GenerateInvoice() { /* Generate invoice logic */ }
}

public class CustomerManager
{
    public void AddCustomer() { /* Add customer logic */ }
}`}
              </Highlight>
              <p>
                <strong>Open/Closed Principle (OCP):</strong>
              </p>
              <Highlight language="csharp">
                {`public interface IPaymentMethod
{
    void ProcessPayment();
}

public class CreditCardPayment : IPaymentMethod
{
    public void ProcessPayment() { /* Process credit card payment */ }
}

public class PayPalPayment : IPaymentMethod
{
    public void ProcessPayment() { /* Process PayPal payment */ }
}`}
              </Highlight>
              <p>
                <strong>Liskov Substitution Principle (LSP):</strong>
              </p>
              <Highlight language="csharp">
                {`public class Bird
{
    public virtual void Fly() { /* Fly logic */ }
}

public class Sparrow : Bird
{
    public override void Fly() { /* Sparrow flying logic */ }
}

public class Penguin : Bird
{
    public override void Fly() { throw new NotImplementedException(); }
}`}
              </Highlight>
              <p>
                <strong>Interface Segregation Principle (ISP):</strong>
              </p>
              <Highlight language="csharp">
                {`public interface IPrinter
{
    void PrintText(string text);
}

public interface IImagePrinter
{
    void PrintImage(string imagePath);
}

public class TextPrinter : IPrinter
{
    public void PrintText(string text) { /* Print text */ }
}

public class ImagePrinter : IImagePrinter
{
    public void PrintImage(string imagePath) { /* Print image */ }
}`}
              </Highlight>
              <p>
                <strong>Dependency Inversion Principle (DIP):</strong>
              </p>
              <Highlight language="csharp">
                {`public interface IPaymentService
{
    void ProcessPayment();
}

public class OrderProcessor
{
    private readonly IPaymentService _paymentService;
    public OrderProcessor(IPaymentService paymentService)
    {
        _paymentService = paymentService;
    }

    public void ProcessOrder() { _paymentService.ProcessPayment(); }
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
