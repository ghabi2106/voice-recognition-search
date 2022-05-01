import React from "react";
import { Link } from "react-router-dom";

export default function Cleancode() {
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
                    href="#clean-code"
                  >
                    clean code
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dry"
                  >
                    DRY
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#kiss"
                  >
                    KISS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#yagni"
                  >
                    YAGNI
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#occam-razor"
                  >
                    Occam's razor
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#boyscout"
                  >
                    Boyscout rule
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#consistency"
                  >
                    Focus on consistency
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#soc"
                  >
                    Separation of Concerns
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lod"
                  >
                    Law of Demeter
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#pi"
                  >
                    Persistence Ignorance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#bounded-context"
                  >
                    Bounded Context
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#modularity"
                  >
                    Modularity
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#explicit-dependencies"
                  >
                    Explicit Dependencies
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#coi"
                  >
                    Composition over Inheritanc
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#encapsulation"
                  >
                    Encapsulation
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
          <h3>Clean code</h3>
          <article id="clean-code">
            <h6>Coding Standards and Principles</h6>
            <div>
              <p>
                “Clean code looks like it was written by someone who cares.”.
                The goal of clean code is to encourage programmers to care.
                Nothing will make you work faster than keeping your workspace
                clean.
              </p>
              <ul>
                <li>
                  The need for coding standards, principles, and methodologies
                </li>
                <li>Naming conventions and methods</li>
                <li>Comments and formatting</li>
                <li>Modularity</li>
                <li>KISS "Keep It Simple, Stupid"</li>
                <li>YAGNI "You Aren't Gonna Need It"</li>
                <li>DRY "Don't repeat yourself"</li>
                <li>SOLID</li>
                <li>Separation of Concerns principle (SoC)</li>
                <li>Persistence Ignorance (PI)</li>
                <li>Occam's Razor</li>
                <li>Boyscout rule</li>
                <li>Focus on consistency</li>
                <li>Bounded Context</li>
                <li>Modularity</li>
                <li>Explicit Dependencies</li>
                <li>Composition over Inheritance (COI)</li>
                <li>Encapsulation</li>
              </ul>
            </div>
          </article>
          <article id="dry">
            <h6>DRY : Don't repeat yourself</h6>
            <p>
              DRY principle stands for "Don't repeat yourself" aimed at reducing
              repetition of software patterns, replacing it with abstractions or
              using data normalization to avoid redundancy.
            </p>
          </article>
          <article id="kiss">
            <h6>KISS : Keep It Simple, Stupid</h6>
            <p>
              KISS stands for "Keep It Simple, Stupid" means keep your logic
              simple that will be easy to maintain, and anyone can understand in
              future. Primary goal is simplicity of your code.
            </p>
          </article>
          <article id="yagni">
            <h6>YAGNI : You Aren't Gonna Need It</h6>
            <p>
              YAGINI principle states that "You Aren't Gonna Need It" means
              implement the functionality that really you need not the
              functionality you think that "Just in some case we need them".
            </p>
          </article>
          <article id="occam-razor">
            <h6>Occam's razor :</h6>
            <p>
              Occam's Razor states the following: "Entities should not be
              multiplied without necessity". To paraphrase, this essentially
              means that the simplest solution is most likely the correct one.
              So, in software development, the breaking of the principle of
              Occam's Razor is accomplished by making unnecessary assumptions
              and employing the least simple solution to a software problem.
            </p>
          </article>
          <article id="boyscout">
            <h6>Boyscout rule :</h6>
            <p>
              the boyscout rule: 'Always leave the code better than you found
              it.'. if only all software engineers behaved like good citizens,
              our software wouldn't deteriorate so relentlessly.
            </p>
          </article>
          <article id="consistency">
            <h6>Focus on consistency :</h6>
            <p>
              This principle does not really tell you how to code, rather it
              tells you to stick to the way you are already doing it.
              Consistency means practising the same techniques and methods
              through the code. This makes it easy to identify potential
              problems.
            </p>
          </article>
          <article id="soc">
            <h6>SoC : Separation of Concerns principle</h6>
            <p>
              Separation of Concerns principle (SoC) asserts that software
              should be separated based on the kinds of work it performs.
              <br />
              Architecturally, applications can be logically built to follow
              this principle by separating core business behavior from
              infrastructure and user-interface logic. This separation helps
              ensure that the business model is easy to test and can evolve
              without being tightly coupled to low-level implementation details.
              Separation of concerns is a key consideration behind the use of
              layers in application architectures.
            </p>
          </article>
          <article id="lod">
            <h6>LoD : Law of Demeter</h6>
            <div>
              <p>
                The <strong>Law of Demeter (LoD)</strong> or{" "}
                <strong>principle of least knowledge</strong> is a design
                guideline for developing software applications.
                <br />
                The Law of Demeter principle reduces dependencies and helps
                build components that are loose coupled for code reuse, easier
                maintenance, and testability
              </p>
              <ul>
                <li>
                  Each unit should have only limited knowledge about other
                  units: only units "closely" related to the current unit.
                </li>
                <li>
                  Each unit should only talk to its friends; don't talk to
                  strangers.
                </li>
                <li>Only talk to your immediate friends.</li>
              </ul>
            </div>
          </article>
          <article id="pi">
            <h6>PI : Persistence Ignorance</h6>
            <p>
              The principle of Persistence Ignorance (PI) holds that classes
              modeling the business domain in a software application should not
              be impacted by how they might be persisted.
              <br />
              There are degrees of persistence ignorance, with the highest
              degree being described as Plain Old CLR Objects (POCOs) in .NET
            </p>
          </article>
          <article id="bounded-context">
            <h6>Bounded Context :</h6>
            <p>
              Bounded Context is a central pattern in Domain-Driven Design. It
              is the focus of DDD's strategic design section which is all about
              dealing with large models and teams. DDD deals with large models
              by dividing them into different Bounded Contexts and being
              explicit about their interrelationships.
            </p>
          </article>
          <article id="modularity">
            <h6>Modularity :</h6>
            <p>
              The modularity is the degree to which a system's components may be
              separated and recombined, often with the benefit of flexibility
              and variety in use.
            </p>
          </article>
          <article id="explicit-dependencies">
            <h6>Explicit Dependencies</h6>
            <p>
              Methods and classes should explicitly require (typically through
              method parameters or constructor parameters) any collaborating
              objects they need in order to function correctly.
            </p>
          </article>
          <article id="coi">
            <h6>COI : Composition over Inheritance</h6>
            <p>
              Composition over inheritance (or composite reuse principle) in
              object-oriented programming (OOP) is the principle that classes
              should achieve polymorphic behavior and code reuse by their
              composition (by containing instances of other classes that
              implement the desired functionality) rather than inheritance from
              a base or parent class.
            </p>
          </article>
          <article id="encapsulation">
            <h6>Encapsulation</h6>
            <p>
              Different parts of an application should use encapsulation to
              insulate them from other parts of the application. It describes
              the idea of bundling data and methods that work on that data
              within one unit.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
