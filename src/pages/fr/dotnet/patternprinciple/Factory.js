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
                    to="/designpattern"
                  >
                    Factory Pattern
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
          <h3>Factory Method</h3>
          <article id="factory">
            <h6>Factory Method</h6>
            <p>
              Fabrique est un patron de conception de création qui définit une
              interface pour créer des objets dans une classe mère, mais délègue
              le choix des types d’objets à créer aux sous-classes.
            </p>
          </article>
          <article id="use">
            <h6>utilisation</h6>
            <p>
              on utilise la fabrique lorsque vous voulez économiser des
              ressources système en réutilisant des objets au lieu d’en
              construire de nouveaux.
            </p>
          </article>
          <article id="dis-advantages">
            <h6>Avantages et disavantages</h6>
            <div class="row">
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> Vous
                    désolidarisez le Créateur des produits concrets..
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Single Responsibility Principle</em>. Vous pouvez
                    déplacer tout le code de création des produits au même
                    endroit, permettant ainsi une meilleure maintenabilité.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Open/Closed Principle</em>. Vous pouvez ajouter de
                    nouveaux types de produits dans le programme sans endommager
                    l’existant.
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i> Le code
                    peut devenir plus complexe puisque vous devez introduire de
                    nombreuses sous-classes pour la mise en place du patron. La
                    condition optimale d’intégration du patron dans du code
                    existant se présente lorsque vous avez déjà une hiérarchie
                    existante de classes de création.
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article id="code">
            <h6>Structural code in C#</h6>
            <Highlight language="csharp">
              {`using System;

namespace DoFactory.GangOfFour.Factory.Structural
{
    /// <summary>
    /// MainApp startup class for Structural 
    /// Factory Method Design Pattern.
    /// </summary>

    class MainApp
    {
        /// <summary>
        /// Entry point into console application.
        /// </summary>

        static void Main()
        {
            // An array of creators

            Creator[] creators = new Creator[2];

            creators[0] = new ConcreteCreatorA();
            creators[1] = new ConcreteCreatorB();

            // Iterate over creators and create products

            foreach (Creator creator in creators)
            {
                Product product = creator.FactoryMethod();
                Console.WriteLine("Created {0}",
                  product.GetType().Name);
            }

            // Wait for user

            Console.ReadKey();
        }
    }

    /// <summary>
    /// The 'Product' abstract class
    /// </summary>

    abstract class Product
    {
    }

    /// <summary>
    /// A 'ConcreteProduct' class
    /// </summary>

    class ConcreteProductA : Product
    {
    }

    /// <summary>
    /// A 'ConcreteProduct' class
    /// </summary>

    class ConcreteProductB : Product
    {
    }

    /// <summary>
    /// The 'Creator' abstract class
    /// </summary>

    abstract class Creator
    {
        public abstract Product FactoryMethod();
    }

    /// <summary>
    /// A 'ConcreteCreator' class
    /// </summary>

    class ConcreteCreatorA : Creator
    {
        public override Product FactoryMethod()
        {
            return new ConcreteProductA();
        }
    }

    /// <summary>
    /// A 'ConcreteCreator' class
    /// </summary>

    class ConcreteCreatorB : Creator
    {
        public override Product FactoryMethod()
        {
            return new ConcreteProductB();
        }
    }
}
`}
            </Highlight>
          </article>
        </section>
      </div>
    </>
  );
}
