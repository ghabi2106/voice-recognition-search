import React from "react";
import { Link } from "react-router-dom";

export default function Mvc() {
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
                    href="#model"
                  >
                    Model
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#view"
                  >
                    View
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#controller"
                  >
                    Controller
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
                    to="/mvc"
                  >
                    MVC
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/clean"
                  >
                    Clean Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cqrs"
                  >
                    CQRS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/ddd"
                  >
                    DDD
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
          <h3>MVC Architecture</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                MVC stands for Model, View and{" "}
                <Link to="/controller">Controller</Link> :
              </p>
              <ul>
                <li>Model represents the data.</li>
                <li>View is the User Interface.</li>
                <li>
                  <Link to="/controller">Controller</Link> is the request
                  handler.
                </li>
              </ul>
            </div>
          </article>
          <article id="model">
            <h6>Model</h6>
            <p>
              Model represents the shape of the data. A class is used to
              describe a model. Model objects store data retrieved from the
              database.
            </p>
          </article>
          <article id="view">
            <h6>View</h6>
            <p>
              View in MVC is a user interface. View display model data to the
              user and also enables them to modify them. View in ASP.NET MVC is
              HTML, CSS, and some special syntax (Razor syntax) that makes it
              easy to communicate with the model and the controller.
            </p>
          </article>
          <article id="controller">
            <h6>
              <Link to="/controller">Controller</Link>
            </h6>
            <p>
              The <Link to="/controller">Controller</Link> handles the user
              request. Typically, the user uses the view and raises an HTTP
              request, which will be handled by the
              <Link to="/controller">Controller</Link>. The{" "}
              <Link to="/controller">Controller</Link> processes the request and
              returns the appropriate view as a response.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
