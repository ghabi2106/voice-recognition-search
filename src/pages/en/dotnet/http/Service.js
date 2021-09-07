import React from "react";
import { Link } from "react-router-dom";

export default function Service() {
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
                    href="#service"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#microservice"
                  >
                    Microservice
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#api"
                  >
                    Web API
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#media-type"
                  >
                    Media Type
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#wcf"
                  >
                    Web API vs WCF
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
                    to="/caching"
                  >
                    Caching
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controller"
                  >
                    Action Method, Result, Selectors
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controllervuedata"
                  >ViewBag, ViewData and TempData</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/https"
                  >
                  HTTPS, HTTP and SSL</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpmethods"
                  >
                  HTTP Request Methods</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/jwt"
                  >JWT</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/"
                  >Services, Microservices, Web API, Web API vs WCF</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Services</h3>
          <article id="service">
            <h6>Service</h6>
            <p>
              Web Service provides a common platform for application developed
              in various programming languages to talk to each other throw a
              protocol like HTTP, FTP, Ethernet ...
            </p>
          </article>
          <article id="microservices">
            <h6>Microservices</h6>
            <p>
              In a microservice-based architecture, the application is built on
              a collection of services that can be developed, tested, deployed,
              and versioned independently.
            </p>
          </article>
          <article id="api">
            <h6>Web API</h6>
            <div>
              <p>
                API stands for application programming interface, it is a set of
                subroutine definitions, protocols, and tools for building
                software and applications.
              </p>
              <p>
                ASP.NET Web API is a framework for building HTTP services that
                can be accessed from any client including browsers and mobile
                devices. It is an ideal platform for building RESTful
                applications on the .NET Framework. It supports different
                formats of response data. Built-in support for JSON, XML, ...
              </p>
            </div>
          </article>
          <article id="media-type">
            <h6>Media Type</h6>
            <div>
              <p>
                Media type (aka MIME type) specifies the format of the data as
                type/subtype e.g. text/html, text/xml, application/json,
                image/jpeg etc.
              </p>
              <p>
                In HTTP request, MIME type is specified in the request header
                using <strong>Accept</strong> and <strong>Content-Type</strong>{" "}
                attribute. The Accept header attribute specifies the format of
                response data which the client expects and the Content-Type
                header attribute specifies the format of the data in the request
                body so that receiver can parse it into appropriate format.
              </p>
              <img
                src="img/dotnet/service-media-type-accept.PNG"
                alt="service media-type accept"
              />
              <img
                src="img/dotnet/service-media-type-content-type.PNG"
                alt="service media-type content-type"
              />
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Media Type Formatter Class</th>
                    <th>MIME Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>JsonMediaTypeFormatter</td>
                    <td>application/json, text/json</td>
                    <td>Handles JSON format</td>
                  </tr>
                  <tr>
                    <td>XmlMediaTypeFormatter</td>
                    <td>application/xml, text/json</td>
                    <td>Handles XML format</td>
                  </tr>
                  <tr>
                    <td>FormUrlEncodedMediaTypeFormatter</td>
                    <td>application/x-www-form-urlencoded</td>
                    <td>Handles HTML form URL-encoded data</td>
                  </tr>
                  <tr>
                    <td>JQueryMvcFormUrlEncodedFormatter</td>
                    <td>application/x-www-form-urlencoded</td>
                    <td>Handles model-bound HTML form URL-encoded data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="wcf">
            <h6>Web API vs WCF</h6>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th class="w-50">Web API</th>
                  <th class="w-50">WCF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Open source and ships with .NET framework.</td>
                  <td>Ships with .NET framework</td>
                </tr>
                <tr>
                  <td>Supports only HTTP protocol.</td>
                  <td>
                    Supports HTTP, TCP, UDP and custom transport protocol.
                  </td>
                </tr>
                <tr>
                  <td>Maps http verbs to methods</td>
                  <td>Uses attributes based programming model.</td>
                </tr>
                <tr>
                  <td>
                    Uses routing and controller concept similar to ASP.NET MVC.
                  </td>
                  <td>Uses Service, Operation and Data contracts.</td>
                </tr>
                <tr>
                  <td>Does not support Reliable Messaging and transaction.</td>
                  <td>Supports Reliable Messaging and Transactions.</td>
                </tr>
                <tr>
                  <td>
                    Web API can be configured using HttpConfiguration class but
                    not in web.config.
                  </td>
                  <td>
                    Uses web.config and attributes to configure a service.
                  </td>
                </tr>
                <tr>
                  <td>Ideal for building RESTful services.</td>
                  <td>Supports RESTful services but with limitations.</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
