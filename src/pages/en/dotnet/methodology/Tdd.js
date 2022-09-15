import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Tdd() {
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
                    href="#tdd"
                  >
                    TDD
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#bdd"
                  >
                    BDD
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
          <h3>TDD &amp; BDD</h3>
          <article id="tdd">
            <h6>TDD</h6>
            <div>
              <p>
                <strong>Test Driven Development (TDD)</strong> is software
                development approach in which test cases are developed to
                specify and validate what the code will do. In simple terms,
                test cases for each functionality are created and tested first
                and if the test fails then the new code is written in order to
                pass the test and making code simple and bug-free.
              </p>
              <p>Motto of TDD:</p>
              <ol>
                <li>
                  <b>
                    <font color="red">G (Red)</font>
                  </b>{" "}
                  Create a test case and make it fail
                </li>
                <li>
                  <b>
                    <font color="green">G (Green)</font>
                  </b>{" "}
                  Make the test case pass by any means.
                </li>
                <li>
                  <b>R (Refractor) </b> Change the code to remove
                  duplicate/redundancy.
                </li>
              </ol>
              <p>Following steps define how to perform TDD test,</p>
              <ol>
                <li>Add a test.</li>
                <li>Run all tests and see if any new test fails.</li>
                <li>Write some code.</li>
                <li>Run tests and Refactor code.</li>
                <li>Repeat.</li>
              </ol>
              <img
                src="/img/agile/Test cases TestDrivenD2.png"
                alt="Test cases TestDrivenD2.png"
              />
              <img src="/img/agile/tdd.png" alt="tdd" />
              <img
                style={{ height: "180px" }}
                src="/img/agile/RGR.png"
                alt="RGR"
              />
            </div>
          </article>
          <article id="bdd">
            <h6>BDD</h6>
            <div>
              <p>
                Behavioral Driven Development (BDD) is a software development
                approach that has evolved from TDD (Test Driven Development). It
                differs by being written in a shared language, which improves
                communication between tech and non-tech teams and stakeholders.
              </p>
              <p>
                It is way of writing acceptance criteria by giving examples of
                how software should behave in different scenarios.
              </p>
              <p>
                BDD in 4 phases
              </p>
              <img src="/img/agile/EtapesBDD-768x365.png" alt="EtapesBDD" />
              <p>
                Gherkin Language
              </p>
              <img
                src="/img/agile/Traduction-768x487.png"
                alt="Traduction BDD"
              />
              <Highlight language="gherkin">
                {`1: Feature: Some terse yet descriptive text of what is desired 
2: Textual description of the business value of this feature 
3:Business rules that govern the scope of the feature 
4: Any additional information that will make the feature easier to understand 
5: 
6: Scenario: Some determinable business situation
7: Given some precondition 8: And some other precondition 
9: When some action by the actor 
10: And some other action 
11: And yet another action 
12: Then some testable outcome is achieved
13: And something else we can check happens too 
14: 
15: Scenario: A different situation 
16: ...`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
