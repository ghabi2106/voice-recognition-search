import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Composition() {
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
                    Composition over inheritance
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
          <h3>Composition over inheritance</h3>
          <article id="introduction">
            <h6>Composition over inheritance</h6>
            <div>
              <p>
                <strong>La composition sur l'héritage</strong> (ou{" "}
                <strong>principe de réutilisation composite</strong>) dans la
                programmation orientée objet (OOP) est le principe selon lequel
                les classes doivent obtenir un comportement polymorphe et une
                réutilisation du code par leur composition plutôt que l'
                héritage d'un classe de base ou parent.
              </p>
              <p>Diagramme de classe inheritance</p>
              <img src="img/dotnet/" alt="composition1" />
              <p>Diagramme de classe composition</p>
              <img src="img/dotnet/" alt="composition2" />
              <Highlight language="javascript">
                {`interface IAction {
    speak(): string
}


class Barker implements IAction {

    public speak(): string {
        return "Woof!"
    }
}

class Meower implements IAction {
    public speak(): string {
        return "Meow!!"
    }
}

class AnimalProperties {
    private number_of_legs:number;
    private is_alive:boolean;
    private color:string;
    private position:TypePos;

    /**
     * ... getters and setters here
     */

}

class Animal {
    private actor: IAction;
    private props: AnimalProperties;

    constructor(actor: IAction, properties: AnimalProperties) {
        this.actor = actor;
        this.props = properties
    }

    public speak(): string {
        return this.actor.speak()
    }
}

const aDog = new Animal(new Barker(), new AnimalProperties())
const aCat = new Animal(new Meower(), new AnimalProperties())

let listOfAnimals: Animal[] = [aDog, aCat]

listOfAnimals.forEach(a => console.log(a.speak()))`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
