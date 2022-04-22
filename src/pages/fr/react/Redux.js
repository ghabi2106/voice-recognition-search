import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Redux() {
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
                    Redux
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#principle"
                  >
                    Redux principles
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#single-source-truth"
                  >
                    Single source of truth
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#components"
                  >
                    components of Redux.
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#actions"
                  >
                    Actions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#reducer-role"
                  >
                    Role of Reducer
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#store"
                  >
                    Store
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#redux-flux"
                  >
                    Redux vs Flux
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages"
                  >
                    Advantages of Redux
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#acces-redux-outside"
                  >
                    access the Redux store outside a component
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
          <h3>Redux</h3>
          <article id="definition">
            <h6>What is Redux?</h6>
            <p>
              Redux is an open-source JavaScript library used to manage
              application state. Applications developed with Redux are easy to
              test and can run in different environments showing consistent
              behavior.
            </p>
          </article>
          <article id="principle">
            <h6>What are the three principles that Redux follows?</h6>
            <ul>
              <li>
                <strong>Single source of truth:</strong> The state of the entire
                application is stored in an object/state tree within a single
                store. The single state tree makes it easier to keep track of
                changes over time and debug or inspect the application.
              </li>
              <li>
                <strong>State is read-only:</strong> The only way to change the
                state is to trigger an action. An action is a plain JS object
                describing the change. Just like state is the minimal
                representation of data, the action is the minimal representation
                of the change to that data.{" "}
              </li>
              <li>
                <strong>Changes are made with pure functions:</strong> In order
                to specify how the state tree is transformed by actions, you
                need pure functions. Pure functions are those whose return value
                depends solely on the values of their arguments.
              </li>
            </ul>
          </article>
          <article id="single-source-truth">
            <h6>What do you understand by “Single source of truth”?</h6>
            <div>
              <p>
                Redux uses ‘Store’ for storing the application’s entire state at
                one place. So all the component’s state are stored in the Store
                and they receive updates from the Store itself. The single state
                tree makes it easier to keep track of changes over time and
                debug or inspect the application.
              </p>
              <img src="/img/react/princi-2-300x283.png" alt="princi" />
            </div>
          </article>
          <article id="components">
            <h6>List down the components of Redux?</h6>
            <ul>
              <li>
                <strong>STORE:</strong> A Store is a place where the entire
                State of your application lists. It is like a brain responsible
                for all moving parts in Redux.
              </li>
              <li>
                <strong>ACTION:</strong> It is an object which describes what
                happened.
              </li>
              <li>
                <strong>REDUCER:</strong> It determines how the State will
                change.
              </li>
            </ul>
          </article>
          <article id="actions">
            <h6>How are Actions defined in Redux?</h6>
            <div>
              <p>
                Actions in React must have a type property that indicates the
                type of ACTION being performed. They must be defined as a String
                constant and you can add more properties to it as well. In
                Redux, actions are created using the functions called Action
                Creators. Below is an example of Action and Action Creator:
              </p>
              <Highlight language="jsx">
                {`function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="reducer-role">
            <h6>Explain the role of Reducer</h6>
            <p>
              Reducers read the payloads from the actions and then updates the
              Store via the State accordingly. It is a pure function which
              returns a new state from the initial State. It returns the
              previous State as it is if no work needs to be done.
            </p>
          </article>
          <article id="store">
            <h6>What is the significance of Store in Redux?</h6>
            <p>
              A store is a JavaScript object which can hold the application’s
              state and provide a few helper methods to access the state,
              dispatch actions and register listeners. The entire state/ object
              tree of an application is saved in a single store. As a result of
              this, Redux is very simple and predictable. We can pass middleware
              to the store to handle the processing of data as well as to keep a
              log of various actions that change the state of stores. All the
              actions return a new state via reducers.
            </p>
          </article>
          <article id="redux-flux">
            <h6>How is Redux different from Flux?</h6>
            <table class="table table-bordered">
              <caption>
                <h4>Flux vs Redux</h4>
              </caption>
              <tbody>
                <tr>
                  <th>
                    <strong>Flux</strong>
                  </th>
                  <th>
                    <strong>Redux</strong>
                  </th>
                </tr>
                <tr>
                  <td>1. The Store contains state and change logic</td>
                  <td>1. Store and change logic are separate</td>
                </tr>
                <tr>
                  <td>2. There are multiple stores</td>
                  <td>2. There is only one store</td>
                </tr>
                <tr>
                  <td>3. All the stores are disconnected and flat</td>
                  <td>3. Single store with hierarchical reducers</td>
                </tr>
                <tr>
                  <td>4. Has singleton dispatcher</td>
                  <td>4. No concept of dispatcher</td>
                </tr>
                <tr>
                  <td>5. React components subscribe to the store</td>
                  <td>5. Container components utilize connect</td>
                </tr>
                <tr>
                  <td>6.&nbsp;State is mutable</td>
                  <td>6.&nbsp;State is immutable</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="advantages">
            <h6>What are the advantages of Redux?</h6>
            <ul>
              <li>
                React Redux is the official UI bindings for react Application.
                It is kept up-to-date with any API changes to ensure that your
                React components behave as expected.
              </li>
              <li>It encourages good 'React' architecture.</li>
              <li>
                It implements many performance optimizations internally, which
                allows to components re-render only when it actually needs.
              </li>
              <li>It makes the code maintenance easy.</li>
              <li>
                Redux's code written as functions which are small, pure, and
                isolated, which makes the code testable and independent.
              </li>
            </ul>
          </article>
          <article id="acces-redux-outside">
            <h6>How to access the Redux store outside a component?</h6>
            <div>
              <p>
                You need to export the Store from the module where it created
                with createStore() method. Also, you need to assure that it will
                not pollute the global window space.
              </p>
              <Highlight language="jsx">
                {`store = createStore (myReducer)
export default store`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
