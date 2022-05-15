import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Propsstate() {
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
                    href="#props"
                  >
                    Props
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#state"
                  >
                    State
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
          <h3>Props and State</h3>
          <article id="props">
            <h6>What is Props?</h6>
            <div>
              <p>
                Props signifient "Propriétés" dans React. Ce sont des entrées en
                lecture seule pour les composants. Les Props sont un objet qui
                stocke la valeur des attributs d'une balise et fonctionne de
                manière similaire aux attributs HTML. Il permet de transmettre
                des données du parent aux composants enfants dans toute
                l'application.
              </p>
              <p>
                Il est similaire aux arguments de fonction et passé au composant
                de la même manière que les arguments passés dans une fonction.
              </p>
              <p>
                Props sont immuables, nous ne pouvons donc pas modifier les
                props depuis l'intérieur du composant.
              </p>
            </div>
          </article>
          <article id="state">
            <h6>What is a State in React?</h6>
            <div>
              <p>
                States are the heart of React components. States are the source
                of data and must be kept as simple as possible. Basically,
                states are the objects which determine components rendering and
                behavior. They are mutable unlike the props and create dynamic
                and interactive components. They are accessed via this.state().
              </p>
              <Highlight language="jsx">
                {`import React from 'react'
class User extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            message: 'Welcome to Skyeagle'
        }
    }   
    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}
export default User`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
