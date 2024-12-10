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
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#difference"
                  >
                    Difference BDD & TDD
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#gherkin"
                  >
                    Gherkin
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
                <strong>Test Driven Development (TDD)</strong> is a software
                development approach where developers write tests before writing
                the actual code. <br />
                The primary idea is to create tests for a new feature or
                functionality, and then develop just enough code to pass those
                tests. <br />
                Once the code passes, developers can refactor and improve it,
                while ensuring the tests continue to pass.
              </p>
              <p>
                TDD is commonly used in Agile development, where continuous
                integration and frequent testing are valued. <br />
                It helps developers catch issues early and ensures a codebase
                that’s easy to modify and extend.
              </p>
              <div className="d-flex">
                <div>
                  <p>Motto of TDD:</p>
                  <ol>
                    <li>
                      <b>
                        <font color="red">R (Red)</font>
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
                </div>
                <img
                  style={{ height: "120px" }}
                  src="/img/agile/RGR.png"
                  alt="RGR"
                />
              </div>
              <div className="d-flex">
                <div>
                  <p>Following steps define how to perform TDD test,</p>
                  <ol>
                    <li>Write a Test</li>
                    <li>Run the Test and See it Fail</li>
                    <li>Write the Code</li>
                    <li>Run the Test and See it Pass</li>
                    <li>Refactor</li>
                  </ol>
                </div>
                <img
                  style={{ height: "160px" }}
                  src="/img/agile/tdd.png"
                  alt="tdd"
                />
              </div>
              <h6>Benefits of TDD:</h6>
              <ul>
                <li>
                  <strong>Reliability</strong>: Tests are written first,
                  reducing the likelihood of bugs and ensuring each feature
                  works as expected.
                </li>
                <li>
                  <strong>Confidence</strong>: Developers have confidence in
                  making changes, as tests help catch regressions or unintended
                  effects.
                </li>
                <li>
                  <strong>Improved Code Quality</strong>: The refactoring step
                  encourages writing clean, maintainable code.
                </li>
                <li>
                  <strong>Documentation</strong>: The test cases serve as a form
                  of documentation, showing how the code should behave.
                </li>
              </ul>
              <h6>Limitations of TDD:</h6>
              <ul>
                <li>
                  <strong>Initial Time Investment</strong>: Writing tests before
                  code can be time-consuming initially, though it often saves
                  time in the long run.
                </li>
                <li>
                  <strong>Requires Discipline</strong>: Developers must adhere
                  to the process, even under time constraints.
                </li>
              </ul>
            </div>
          </article>
          <article id="bdd">
            <h6>BDD</h6>
            <div>
              <p>
                Behavior-Driven Development (BDD) is a development approach that
                focuses on collaboration among developers, testers, and business
                stakeholders to create software that meets the actual needs of
                users. <br />
                BDD is a natural extension of Test-Driven Development (TDD),
                emphasizing not only that tests should pass but also that they
                should verify the expected behavior of the system from the
                user’s perspective.
                <br />
                BDD can be especially useful in projects involving complex
                business logic, as it ensures that the software functions
                according to real user expectations.
              </p>
              <h6>Key Aspects of BDD:</h6>
              <ul>
                <li>
                  <strong>User-Centric Language</strong>: BDD uses plain
                  language constructs to describe the behavior of an
                  application. <br />
                  It often relies on a format called "Given-When-Then" to
                  describe scenarios.
                </li>
                <li>
                  <strong>Collaboration</strong>: BDD encourages close
                  collaboration between technical and non-technical team
                  members. <br />
                  Requirements are translated into test cases that reflect the
                  intent of the stakeholders.
                </li>
                <li>
                  <strong>utomated Tests</strong>Automated Tests: BDD frameworks
                  (like SpecFlow for .NET, Cucumber for multiple languages,
                  etc.) help automate tests based on behavioral specifications,
                  making it easier to validate the application’s behavior as it
                  evolves.
                </li>
                <li>
                  <strong>Documentation</strong>: BDD scenarios serve as
                  documentation, making it easier for anyone to understand how
                  the system should behave without deep technical knowledge.
                </li>
              </ul>
              <h6>Benefits of BDD</h6>
              <ul>
                <li>Improved communication and alignment within the team.</li>
                <li>
                  Helps ensure the application meets business requirements.
                </li>
                <li>
                  Provides living documentation that evolves with the code.
                </li>
              </ul>
            </div>
          </article>
          <article id="difference">
            <h6>Difference between BDD and TDD</h6>
            <div>
              <p>
                The key differences between Test-Driven Development (TDD) and
                Behavior-Driven Development (BDD) lie in their focus, approach,
                and communication style.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Aspect</strong>
                    </th>
                    <th>
                      <strong>TDD (Test-Driven Development)</strong>
                    </th>
                    <th>
                      <strong>BDD (Behavior-Driven Development)</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Focus</strong>
                    </td>
                    <td>
                      Focuses on the correctness of the code at a technical
                      level.
                    </td>
                    <td>
                      Focuses on the behavior of the system from the user's
                      perspective.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Goal</strong>
                    </td>
                    <td>
                      Ensure that individual units of code work as expected.
                    </td>
                    <td>
                      Ensure that the application behaves as expected from a
                      business and user perspective.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Approach</strong>
                    </td>
                    <td>
                      Write unit tests before writing the code
                      (Red-Green-Refactor cycle).
                    </td>
                    <td>
                      Write scenarios (tests) that describe the desired behavior
                      before writing code.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Test Level</strong>
                    </td>
                    <td>
                      Unit tests (testing small, isolated pieces of code).
                    </td>
                    <td>
                      Acceptance or integration tests (testing how the system
                      behaves as a whole).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Communication</strong>
                    </td>
                    <td>Primarily developer-focused; tests are technical.</td>
                    <td>
                      Encourages collaboration among developers, testers, and
                      business stakeholders; tests are written in a more
                      natural, readable language.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Syntax</strong>
                    </td>
                    <td>
                      Written in programming languages (e.g., Java, Python).
                    </td>
                    <td>
                      Written in natural language, often in Given-When-Then
                      format (e.g., Gherkin).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Test Examples</strong>
                    </td>
                    <td>
                      Tests are generally technical and specific to the
                      functionality of individual components.
                    </td>
                    <td>
                      Scenarios describe high-level behavior, often using
                      concrete examples.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Primary Benefit</strong>
                    </td>
                    <td>
                      Helps ensure that individual components work correctly.
                    </td>
                    <td>
                      Helps ensure that the software meets business requirements
                      and behaves correctly.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Focus on Collaboration</strong>
                    </td>
                    <td>
                      Less focus on collaboration with non-technical
                      stakeholders.
                    </td>
                    <td>
                      Strong emphasis on collaboration between developers,
                      testers, and business teams.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Common Tools</strong>
                    </td>
                    <td>JUnit, NUnit, Mocha, etc.</td>
                    <td>Cucumber, SpecFlow, JBehave, etc.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="gherkin">
            <h6>Gherkin</h6>
            <div>
              <p>Gherkin Language</p>
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
