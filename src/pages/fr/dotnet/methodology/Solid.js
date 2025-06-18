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
              <p>
                <strong>S: Le principe de responsabilité unique :</strong> Une
                classe ne doit avoir qu'une seule raison de changer,
                c'est-à-dire qu'elle ne doit avoir qu'une seule responsabilité.
              </p>
              <p>
                <strong>O: Le principe ouvert/fermé :</strong> Les entités
                logicielles (classes, modules, fonctions, etc.) doivent être
                ouvertes à l'extension mais fermées à la modification.
              </p>
              <p>
                <strong>L: Le principe de substitution de Liskov :</strong> Les
                objets d'une classe dérivée doivent pouvoir être remplacés par
                des objets de la classe de base sans altérer le bon
                fonctionnement du programme.
              </p>
              <p>
                <strong>I: Le principe de ségrégation des interfaces :</strong>{" "}
                Il est préférable d'avoir plusieurs interfaces spécifiques
                plutôt qu'une interface générale.
              </p>
              <p>
                <strong>D: Le principe d’inversion des dépendances :</strong>{" "}
                Les modules de haut niveau ne doivent pas dépendre des modules
                de bas niveau, mais les deux doivent dépendre d'abstractions.
              </p>
            </div>
          </article>

          <article id="examples">
            <h6>Examples</h6>
            <div>
              <Highlight language="csharp">
                {`public class Square
{
    public int Length { get; set; }
    public Square(int length)
    {
        Length = length;
    }
}`}
              </Highlight>
              <Highlight language="csharp">
                {`public class Circle
{
    public double Radius { get; set; }
    public Circle(double radius)
    {
        Radius = radius;
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="s">
            <h6>
              <strong>S</strong>: Principe de responsabilité unique
            </h6>
            <div>
              <p>
                Une classe ne doit avoir qu'une seule raison de changer,
                c'est-à-dire qu'elle ne doit avoir qu'une seule responsabilité.
              </p>
              <Highlight language="csharp">
                {`using System;
using System.Collections.Generic;

public class AreaCalculator
{
    protected List<object> shapes;

    public AreaCalculator(List<object> shapes = null)
    {
        this.shapes = shapes ?? new List<object>();
    }

    public double Sum()
    {
        var area = new List<double>();

        foreach (var shape in shapes)
        {
            if (shape is Square square)
            {
                area.Add(Math.Pow(square.Length, 2));
            }
            else if (shape is Circle circle)
            {
                area.Add(Math.PI * Math.Pow(circle.Radius, 2));
            }
        }

        return area.Count > 0 ? area.Sum() : 0;
    }

    public string Output()
    {
        return $"Sum of the areas of provided shapes: {Sum()}";
    }
}
`}
              </Highlight>
              <Highlight language="csharp">
                {`using System.Text.Json;

public class SumCalculatorOutputter
{
    protected AreaCalculator calculator;

    public SumCalculatorOutputter(AreaCalculator calculator)
    {
        this.calculator = calculator;
    }

    public string ToJson()
    {
        var data = new
        {
            sum = calculator.Sum()
        };

        return JsonSerializer.Serialize(data);
    }

    public string ToHtml()
    {
        return $"Sum of the areas of provided shapes: {calculator.Sum()}";
    }
}
`}
              </Highlight>
            </div>
          </article>
          <article id="o">
            <h6>
              <strong>O</strong>: Ouvert/fermé
            </h6>
            <div>
              <p>
                Les entités logicielles (classes, modules, fonctions, etc.)
                doivent être ouvertes à l'extension mais fermées à la
                modification.
              </p>
              <Highlight language="csharp">
                {``}
              </Highlight>
              <Highlight language="csharp">
                {``}
              </Highlight>
            </div>
          </article>
          <article id="l">
            <h6>
              <strong>L</strong>: Substitution de Liskov
            </h6>
            <div>
              <p>
                Les objets d'une classe dérivée doivent pouvoir être remplacés
                par des objets de la classe de base sans altérer le bon
                fonctionnement du programme.
              </p>
              <Highlight language="csharp">
                {``}
              </Highlight>
              <Highlight language="csharp">
                {``}
              </Highlight>
            </div>
          </article>
          <article id="i">
            <h6>
              <strong>I</strong>: Ségrégation des interfaces
            </h6>
            <div>
              <p>
                Il est préférable d'avoir plusieurs interfaces spécifiques
                plutôt qu'une interface générale.
              </p>
              <Highlight language="csharp">
                {``}
              </Highlight>
              <Highlight language="csharp">
                {``}
              </Highlight>
            </div>
          </article>
          <article id="d">
            <h6>
              <strong>D</strong>: Inversion des dépendances
            </h6>
            <div>
              <p>
                Les modules de haut niveau ne doivent pas dépendre des modules
                de bas niveau, mais les deux doivent dépendre d'abstractions.
              </p>
              <Highlight language="csharp">
                {``}
              </Highlight>
              <Highlight language="csharp">
                {``}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
