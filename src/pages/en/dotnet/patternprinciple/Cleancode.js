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
                <li>Bounded Context</li>
                <li>Explicit Dependencies</li>
                <li>Encapsulation</li>
              </ul>
              <dl>
                <dt>DRY :</dt>
                <dd>
                  DRY principle stands for "Don't repeat yourself" aimed at
                  reducing repetition of software patterns, replacing it with
                  abstractions or using data normalization to avoid redundancy.
                </dd>
                <dt>KISS :</dt>
                <dd>
                  KISS stands for "Keep It Simple, Stupid" means keep your logic
                  simple that will be easy to maintain, and anyone can
                  understand in future. Primary goal is simplicity of your code.
                </dd>
                <dt>YAGNI :</dt>
                <dd>
                  YAGINI principle states that "You Aren't Gonna Need It" means
                  implement the functionality that really you need not the
                  functionality you think that "Just in some case we need them".
                </dd>
                <dt>Occam's razor :</dt>
                <dd>
                  Occam's Razor states the following: "Entities should not be
                  multiplied without necessity". To paraphrase, this essentially
                  means that the simplest solution is most likely the correct
                  one. So, in software development, the breaking of the
                  principle of Occam's Razor is accomplished by making
                  unnecessary assumptions and employing the least simple
                  solution to a software problem.
                </dd>
                <dt>SoC :</dt>
                <dd>
                  Separation of Concerns principle (SoC) asserts that software
                  should be separated based on the kinds of work it performs.
                  <br />
                  Architecturally, applications can be logically built to follow
                  this principle by separating core business behavior from
                  infrastructure and user-interface logic. This separation helps
                  ensure that the business model is easy to test and can evolve
                  without being tightly coupled to low-level implementation
                  details. Separation of concerns is a key consideration behind
                  the use of layers in application architectures.
                </dd>
                <dt>Persistence Ignorance (PI) :</dt>
                <dd>
                  The principle of Persistence Ignorance (PI) holds that classes
                  modeling the business domain in a software application should
                  not be impacted by how they might be persisted.
                  <br />
                  There are degrees of persistence ignorance, with the highest
                  degree being described as Plain Old CLR Objects (POCOs) in
                  .NET
                </dd>
                <dt>Bounded Context :</dt>
                <dd>
                  Bounded Context is a central pattern in Domain-Driven Design.
                  It is the focus of DDD's strategic design section which is all
                  about dealing with large models and teams. DDD deals with
                  large models by dividing them into different Bounded Contexts
                  and being explicit about their interrelationships.
                </dd>
                <dt>Modularity :</dt>
                <dd>
                  The modularity is the degree to which a system's components
                  may be separated and recombined, often with the benefit of
                  flexibility and variety in use.
                </dd>
                <dt>Explicit Dependencies</dt>
                <dd>
                  Methods and classes should explicitly require (typically
                  through method parameters or constructor parameters) any
                  collaborating objects they need in order to function
                  correctly.
                </dd>
                <dt>Encapsulation</dt>
                <dd>
                  Different parts of an application should use encapsulation to
                  insulate them from other parts of the application. It
                  describes the idea of bundling data and methods that work on
                  that data within one unit.
                </dd>
              </dl>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
