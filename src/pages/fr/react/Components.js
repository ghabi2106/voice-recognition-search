import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Components() {
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
                    href="#definition"
                  >
                    Components
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#component"
                  >
                    React.Component
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#pure-component"
                  >
                    React.PureComponent
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#memo"
                  >
                    React.memo
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#capital"
                  >
                    Components starts with a capital letter
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
          <h3>Components</h3>
          <article id="definition">
            <h6>Components</h6>
            <div>
              <p>
                Les composants React vous permettent de découper une interface
                utilisateur <em>(UI)</em> en blocs indépendants et
                réutilisables, ce qui vous permet de concevoir chaque partie en
                isolation. Un composant React peut être défini en étendant les
                classes <code>React.Component</code> ou{" "}
                <code>React.PureComponent</code>.
              </p>
              <p>
                Un composant React peut aussi être défini via une fonction que
                l’on pourra choisir d’enrober avec: <code>React.memo</code>
              </p>
            </div>
          </article>
          <article id="component">
            <h6>React.Component</h6>
            <div>
              <Highlight language="jsx">
                {`class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}
              </Highlight>
            </div>
          </article>
          <article id="pure-component">
            <h6>React.PureComponent</h6>
            <div>
              <p>
                <code>React.PureComponent</code> est similaire à{" "}
                <code>React.Component</code>. La seule différence est que{" "}
                <code>React.Component</code> n’implémente pas la méthode{" "}
                <code>shouldComponentUpdate()</code>, alors que{" "}
                <code>React.PureComponent</code> l’implémente en réalisant une
                comparaison de surface de l’état et des propriétés.
              </p>
            </div>
          </article>
          <article id="memo">
            <h6>React.memo</h6>
            <div>
              <p>
                Si vous avez un composant qui affiche toujours le même résultat
                pour un même jeu de propriétés, vous pouvez l’enrober avec{" "}
                <code>React.memo</code>, ce qui mémoïsera le résultat et devrait
                augmenter les performances dans certains cas. Cela signifie que
                React sautera le rafraîchissement du composant en réutilisant
                son dernier rendu en date.
              </p>
              <Highlight language="jsx">{`const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});`}</Highlight>
            </div>
          </article>
          <article id="capital">
            <h6>
              Why is it necessary to start component names with a capital
              letter?
            </h6>
            <p>
              In React, it is necessary to start component names with a capital
              letter. If we start the component name with lower case, it will
              throw an error as an unrecognized tag. It is because, in JSX,
              lower case tag names are considered as HTML tags.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
