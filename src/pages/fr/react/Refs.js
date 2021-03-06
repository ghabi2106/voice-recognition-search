import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Refs() {
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
                    Refs
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >
                    Use of refs
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ref"
                  >
                    React.Ref
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#forward-ref"
                  >
                    React.ForwardRef
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
          <h3>refs in React</h3>
          <article id="definition">
            <h6>Les refs</h6>
            <div>
              <p>
                Les refs fournissent un moyen d???acc??der aux n??uds du DOM ou
                ??l??ments React cr????s dans la m??thode de rendu.
              </p>
            </div>
          </article>
          <article id="use">
            <h6>Les cas d???usages tout trouv??s pour les refs :</h6>
            <ul>
              <li>
                G??rer le focus, la s??lection du texte, ou la lecture de m??dia.
              </li>
              <li>Lancer des animations imp??ratives.</li>
              <li>S???interfacer avec des biblioth??ques DOM tierces.</li>
            </ul>
          </article>
          <article id="ref">
            <h6>React.createRef</h6>
            <div>
              <p>
                <code>React.createRef</code> cr??e une <code>ref</code> qui peut
                ??tre associ??e ?? des ??l??ments React via l???attribut{" "}
                <code>ref</code>.
              </p>
              <Highlight language="jsx">
                {`class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  } 

  componentDidMount() {
    this.inputRef.current.focus();
  }
}`}
              </Highlight>
            </div>
          </article>
          <article id="forward-ref">
            <h6>React.forwardRef</h6>
            <div>
              <p>
                <code>React.forwardRef</code> cr??e un composant React qui
                transf??re la valeur de l???attribut ref qu???il re??oit ?? un autre
                composant plus bas dans l???arbre.
              </p>
              <Highlight language="jsx">
                {`const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
