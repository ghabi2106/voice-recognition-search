import React from "react";
import { Link } from "react-router-dom";

export default function Hooks() {
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
                    Hooks
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages"
                  >
                    Advantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#usestate"
                  >
                    useState
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#useeffect"
                  >
                    useEffect
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#usecontext"
                  >
                    useContext
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#usereducer"
                  >
                    useReducer
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#reduce"
                  >
                    reduce javascript vs useReducer
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#usestate-usereducer"
                  >
                    useState vs useReducer
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
          <h3>Hooks</h3>
          <article id="hooks">
            <h6>What is a Hook?</h6>
            <p>
              Hooks are functions that let you “hook into” React state and
              lifecycle features from function components. Hooks don’t work
              inside classes — they let you use React without classes. React
              provides built-in hooks like useState, useEffect, useReducer,
              useRef, useCallback, useContext, useMemo and you can also create
              you own custom hooks.
            </p>
          </article>
          <article id="advantages">
            <h6>What are the advantages of react Hooks?</h6>
            <ul>
              <li>
                The main advantage of react hooks is the{" "}
                <strong>re-usability of stateful logic</strong>. It can be done
                with the help of <strong>custom hooks</strong>. Without changing
                component hierarchy, you can reuse stateful logic and it is easy
                to share custom hooks with other components.
              </li>
              <li>
                In react class component, we split our work in different
                life-cycle methods like componentDidMount, componentDidUpdate
                and componentWillUnmount, but in hooks, we can do everything in
                a single hook called <strong>useEffect</strong>.
              </li>
              <li>
                In class component, we have to use <strong>this</strong> keyword
                and also we have to <strong>bind event listeners</strong>, which
                increases complexity. This is prevented in react functional
                components.
              </li>
              <li>
                React class components don’t minify very well, and they make hot
                reloading flaky and unreliable
              </li>
              <li>
                React hooks are easier to test and work with, makes the code
                look cleaner, easier to read and has less number of lines of
                code.
              </li>
            </ul>
          </article>
          <article id="usestate">
            <h6>Using the State Hook</h6>
            <div>
              <ul>
                <li>
                  useState hook is used to add state to a functional component.
                </li>
                <li>
                  In classes, the state is always an object. With useState hook,
                  the state doesn't have to be an object. The useState hook
                  returns an array with 2 elements. The first element is the
                  current value of the state, and the second element is a state
                  setter function.
                </li>
                <li>
                  New state value depends on the previous state value; You can
                  pas a function to the setter
                </li>
                <li>
                  When dealing with objects and arrays, always make sure to
                  spread your state variable and then call the setter function.
                </li>
              </ul>
              <img src="/img/react/hook-useState.PNG" alt="hook useState" />
            </div>
          </article>
          <article id="useEffect">
            <h6>useEffect</h6>
            <div>
              <ul>
                <li>
                  The effect Hook lets you to perform side effects in functional
                  components
                </li>
                <li>
                  it is a close replacement for componentDidMount,
                  componentDidUpdate ans componentWillUnmount.
                </li>
                <li></li>
                <li></li>
              </ul>
              <img
                src="/img/react/hooks-useeffect-counter.PNG"
                alt="hooks useeffect counter"
              />
              <img
                src="/img/react/hook-useeffect-mouse.PNG"
                alt="hook useeffect mouse"
              />
            </div>
          </article>
          <article id="usecontext">
            <h6>useContext</h6>
            <div>
              <p>
                useContext provides a way to pass data throgh the component tree
                without having to pass props down manually at every level.
              </p>
              <img
                src="/img/react/hooks-usecontext-appjs.PNG"
                alt="hooks usecontext"
              />
              <img
                src="/img/react/hooks-usecontext-child.PNG"
                alt="hooks usecontext child"
              />
              <img
                src="/img/react/hooks-usecontext-child-simply.PNG"
                alt="hooks usecontext child simply"
              />
            </div>
          </article>
          <article id="usereducer">
            <h6>useReducer</h6>
            <div>
              <p>useReducer is a hook that is used for state management.</p>
              <img src="/img/react/hook-usereducer-script.PNG" alt="hook usereducer script" />
            </div>
          </article>
          <article id="reduce">
            <h6>reduce javascript vs useReducer</h6>
            <div>
              <p>
                The <code>reduce()</code> method executes a <code>reducer</code>{" "}
                function (that you provide) on each element of the array(),
                resulting in a single output value.
              </p>
              <img src="/img/react/hooks-reduce-js.PNG" alt="hooks reduce js" />
              <table>
              <caption>
                <h4>reduce vs useReducer</h4>
              </caption>
              <tbody>
                <tr>
                  <th>
                    <strong>reduce in javascript</strong>
                  </th>
                  <th>
                    <strong>useReducer in React</strong>
                  </th>
                </tr>
                <tr>
                  <td>array.<code>reduce</code>(<code>reducer</code>, initialValue)</td>
                  <td><code>useReducer</code>(<code>reducer</code>, intialState)</td>
                </tr>
                <tr>
                  <td>SingleValue = <code>reducer</code>(accumulator, itemValue)</td>
                  <td>newState = <code>reducer</code>(currentState, action)</td>
                </tr>
                <tr>
                  <td><code>reduce</code> method returns a single value</td>
                  <td>useReducer returns a pair values [newState, dispatch]</td>
                </tr>
              </tbody>
            </table>
          </div>
          </article>
          <article id="usestate-usereducer">
            <h6>useState vs useReducer</h6>            
              <table>
              <caption>
                <h4>useState vs useReducer</h4>
              </caption>
              <tbody>
                <tr>
                <th>
                    <strong>Scenario</strong>
                  </th>
                  <th>
                    <strong>useState</strong>
                  </th>
                  <th>
                    <strong>useReducer</strong>
                  </th>
                </tr>
                <tr>
                  <td>Type of state</td>
                  <td>Number, String, Boolean</td>
                  <td>Object or Array</td>
                </tr>
                <tr>
                  <td>Number of state transitions</td>
                  <td>One or two</td>
                  <td>Too many</td>
                </tr>
                <tr>
                  <td>Business logic</td>
                  <td>No business logic</td>
                  <td>Complex business logic</td>
                </tr>
                <tr>
                  <td>Local vs global</td>
                  <td>Local</td>
                  <td>Global</td>
                </tr>
                </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
