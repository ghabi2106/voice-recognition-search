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
                    href="#ref"
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
                    href="#forward-refs"
                  >
                    Forward Refs?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#find-dom-node"
                  >
                    callback refs vs findDOMNode()?
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
          <article id="ref">
            <h6>What do you understand by refs in React?</h6>
            <div>
              <p>
                Refs is the short hand for References in React. It is an
                attribute which helps to store a reference to a particular React
                element or component, which will be returned by the components
                render configuration function. It is used to return references
                to a particular element or component returned by render(). They
                come in handy when we need DOM measurements or to add methods to
                the components.
              </p>
              <Highlight language="jsx">
                {`class ReferenceDemo extends React.Component{
    display() {
        const name = this.inputDemo.value;
        document.getElementById('disp').innerHTML = name;
    }
    render() {
        return(
            <div>
                Name: <input type="text" ref={input => this.inputDemo = input} />
                <button name="Click" onClick={this.display}>Click</button>
                <h2>Hello <span id="disp"></span> !!!</h2>
            </div>
        );
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="use">
            <h6>List some of the cases when you should use Refs.</h6>
            <ul>
              <li>
                When you need to manage focus, select text or media playback
              </li>
              <li>To trigger imperative animations</li>
              <li>Integrate with third-party DOM libraries</li>
            </ul>
          </article>
          <article id="forward-refs">
            <h6>What are Forward Refs?</h6>
            <div>
              <p>
                Ref forwarding is a feature which is used for passing a ref
                through a component to one of its child components. It can be
                performed by making use of the React.forwardRef() method. It is
                particularly useful with higher-order components and specially
                used in reusable component libraries.
              </p>
              <Highlight language="jsx">
                {`import React, { Component } from 'react';
import { render } from 'react-dom';

const TextInput = React.forwardRef((props, ref) => (
    <input type="text" placeholder="Hello World" ref={ref} />
));

const inputRef = React.createRef();

class CustomfextInput extends React.Component {
    handeSubmit = e => {
        e.preventDefault();
        console.log(inputRef.current.value);
    };
    render() {
        return (
            <div>
                <form onSubmit={e => this-handleSubmit (e) }>
                    <TextInput ref={inputRef} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default App;`}
              </Highlight>
            </div>
          </article>
          <article id="find-dom-node">
            <h6>
              Which is the preferred option callback refs or findDOMNode()?
            </h6>
            <div>
              <p>
                The preferred option is to use callback refs over findDOMNode()
                API. Because callback refs give better control when the refs are
                set and unset whereas findDOMNode() prevents certain
                improvements in React in the future.
              </p>
              <Highlight language="jsx">
                {`class MyComponent extends Component {
    componentDidMount() {
        findDOMNode(this).scrollIntoview()
    }  
    render() {
        return <div />
    }
}`}
              </Highlight>
              <p>The recommended approach is:</p>
              <Highlight language="jsx">
                {`class MyComponent extends Component {
    ComponentDidMount() {
        this.node.scrollIntoView()
    }
    render(){
        return <div ref={node => this.node = node} />
    }
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
