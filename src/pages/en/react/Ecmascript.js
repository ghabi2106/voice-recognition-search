import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Ecmascript() {
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
                    href="#es6"
                  >
                    Javascript ES6
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#difference"
                  >
                    ES5 vs ES6
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
          <h3>Javascript ES6</h3>
          <article id="">
            <h6>Javascript ES6</h6>
            <div>
              <p>
                ECMAScript 2015 was the second major revision to JavaScript.
              </p>
              <p>ECMAScript 2015 is also known as ES6 and ECMAScript 6.</p>
              <p>New Features in ES6</p>
              <ul>
                <li>The let keyword</li>
                <li>The const keyword</li>
                <li>Arrow Functions</li>
                <li>For/of</li>
                <li>Map Objects</li>
                <li>Classes</li>
                <li>Promises</li>
                <li>Array.find()</li>
              </ul>
            </div>
          </article>
          <article id="difference">
            <h6>How different is React’s ES6 syntax when compared to ES5?</h6>
            <div>
              <p>Syntax has changed from ES5 to ES6 in following aspects:</p>
              <Highlight language="jsx">
                {`//-------------------------------
//---- i. require vs import -----
//-------------------------------
// ES5 
var React = require('react'); 
// ES6 
import React from 'react'; 

//-------------------------------
//---- ii. export vs exports ----
//-------------------------------
// ES5 
module.exports = Component; 
// ES6 
export default Component;

//-------------------------------
//- iii. component and function -
//------------------------------- 
// ES5 
var MyComponent = React.createClass({ 
    render: function() { 
        return  <h3>Hello Edurekal</h3>;
    }
});
// ES6 
class MyComponent extends React.Component {
    render() { 
        return <h3>Hello Edurekal</h3>; 
    } 
};
//-------------------------------
//--------- iv. props -----------
//-------------------------------
// ES5
var App = React.createClass({
propTypes: { name: React.PropTypes.string },
render: function() {
        return <h3>Hello, {this.props.name}!</h3>;
    }
});
// ES6
class App extends React.Component {
    render() {
        return <h3>Hello, {this.props.name}!</h3>;
    }
}
//-------------------------------
//---------- v. state -----------
//-------------------------------
// ES5
var App = React.createClass({
    getInitialstate: function() {
        return { name: 'world' };
    },
    render: function() {
        return <h3>Hello, {this.state.name}!</h3>;
    }
});
// ES6
class App extends React.Component {
    constructor() {
        super();
        this.state = { name: 'world' };
    }
    render() {
        return <h3>Hello, {this.state.name}!</h3>;
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
