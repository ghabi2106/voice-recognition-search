import React from "react";
import { Link } from "react-router-dom";

export default function Covariance() {
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
                    href="#introduction"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#covariance"
                  >
                    Covariance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#contravariance"
                  >
                    Contravariance
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
          <h3>Covariance and Contravariance</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Covariance and contravariance allow us to be flexible when
                dealing with class hierarchy. They can be applied on delegate,
                generic, array, interface, etc.
              </p>
              <img src="/img/dotnet/class-hierarchy.PNG" alt="Class Hierarchy" />
              <img
                src="/img/dotnet/class-initialization.PNG"
                alt="Class initialization"
              />
              <p>
                A base class can hold a derived class but a derived class cannot
                hold a base class.
              </p>
              <img src="/img/dotnet/co-contra-variance.PNG" alt="co-contra-variance" />
            </div>
          </article>
          <article id="covariance">
            <h6>Covariance</h6>
            <div>
              <p>
                Covariance enables you to use a more derived type than
                originally specified.
              </p>
              <img src="/img/dotnet/covariance-script.PNG" alt="covariance script" />
            </div>
          </article>
          <article id="contravariance">
            <h6>Contravariance</h6>
            <div>
              <p>
                Contravariance enables you to use a more generic (less derived)
                type than originally specified.
              </p>
              <img
                src="/img/dotnet/contravariance-script.PNG"
                alt="contravariance script"
              />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}