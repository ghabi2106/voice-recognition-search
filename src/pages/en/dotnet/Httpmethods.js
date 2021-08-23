import React from "react";
import { Link } from "react-router-dom";

export default function Dotnet() {
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
                    href="#get-post"
                  >
                    Get vs Post
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#put"
                  >
                    Put
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#head"
                  >
                    Head
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#delete"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#patch"
                  >
                    Patch
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#options"
                  >
                    Options
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
          <h3>HTTP Request Methods</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                The Hypertext Transfer Protocol (HTTP) is designed to enable
                communications between clients and servers. HTTP works as a
                request-response protocol between a client and server.
              </p>
              <ul>
                <li>
                  <b>GET</b>
                </li>
                <li>
                  <b>POST</b>
                </li>
                <li>
                  <strong>PUT</strong>
                </li>
                <li>
                  <strong>HEAD</strong>
                </li>
                <li>
                  <strong>DELETE</strong>
                </li>
                <li>
                  <strong>PATCH</strong>
                </li>
                <li>
                  <strong>OPTIONS</strong>
                </li>
              </ul>
            </div>
          </article>
          <article id="get-post">
            <h6>Get vs Post</h6>
            <div>
              <b>GET is used to request data from a specified resource.</b>
              <b>
                POST is used to send data to a server to create/update a
                resource.
              </b>
              <table>
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th>GET</th>
                    <th>POST</th>
                  </tr>
                  <tr>
                    <td>Bookmarked</td>
                    <td>✔</td>
                    <td>✘</td>
                  </tr>
                  <tr>
                    <td>Cached</td>
                    <td>✔</td>
                    <td>✘</td>
                  </tr>
                  <tr>
                    <td>Encoding type</td>
                    <td>application/x-www-form-urlencoded</td>
                    <td>
                      application/x-www-form-urlencoded or multipart/form-data.
                      Use multipart encoding for binary data
                    </td>
                  </tr>
                  <tr>
                    <td>History</td>
                    <td>✔</td>
                    <td>✘</td>
                  </tr>
                  <tr>
                    <td>Restrictions on data length</td>
                    <td>✔ (maximum URL length is 2048 characters)</td>
                    <td>✘</td>
                  </tr>
                  <tr>
                    <td>Restrictions on data type</td>
                    <td>Only ASCII characters allowed</td>
                    <td>No restrictions. Binary data is also allowed</td>
                  </tr>
                  <tr>
                    <td>Security</td>
                    <td>
                      GET is less secure compared to POST because data sent is
                      part of the URL. Never use GET when sending passwords or
                      other sensitive information!
                    </td>
                    <td>
                      POST is a little safer than GET because the parameters are
                      not stored in browser history or in web server logs.
                    </td>
                  </tr>
                  <tr>
                    <td>Visibility</td>
                    <td>Data is visible to everyone in the URL</td>
                    <td>✘</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="put">
            <h6>PUT Method</h6>
            <div>
              <b>
                PUT is used to send data to a server to create/update a
                resource.
              </b>
              <p>
                5 The difference between POST and PUT is that PUT is idempotent,
                that means, calling the same PUT request multiple times will
                always produce the same result, while on the other hand, calling
                a POST request repeatedly may have side effects of creating the
                same resource multiple times.
              </p>
            </div>
          </article>
          <article id="head">
            <h6>HEAD Method</h6>
            <div>
              <b>
                HEAD is almost identical to GET, but without the response body.
              </b>
              <p>
                In other words, if GET /users returns a list of users, then HEAD
                /users will make the same request but will not return the list
                of users.
              </p>
              <p>
                HEAD requests are useful for checking what a GET request will
                return before actually making a GET request - like before
                downloading a large file or response body.
              </p>
            </div>
          </article>
          <article id="delete">
            <h6>DELETE Method</h6>
            <p>The DELETE method deletes the specified resource.</p>
          </article>
          <article id="patch">
            <h6>Patch Method</h6>
            <div>
              <p>
                When a client needs to replace an existing Resource entirely,
                they can use PUT. When they're doing a partial update, they can
                use HTTP PATCH.
              </p>
              <p>
                Another important aspect to consider here is idempotence; PUT is
                idempotent; PATCH can be, but isn't required to.
              </p>
              <p>
                The main difference between the PUT and PATCH method is that the
                PUT method uses the request URI to supply a modified version of
                the requested resource which replaces the original version of
                the resource, whereas the PATCH method supplies a set of
                instructions to modify the resource.
              </p>
              <img src="/img/dotnet/patch-put.PNG" alt="Patch Put image" />
            </div>
          </article>
          <article id="options">
            <h6>OPTIONS Method</h6>
            <div>
              <p>
                The OPTIONS method describes the communication options for the
                target resource.
              </p>
              <ul>
                <li>
                  Identifying allowed request methods:
                  <ul>
                    <li>
                      <mark>Allow: OPTIONS, GET, HEAD, POST</mark>
                    </li>
                  </ul>
                </li>
                <li>
                  Preflighted requests in CORS:
                  <ul>
                    <li>
                      <mark>
                        Access-Control-Allow-Origin: https://foo.example
                      </mark>
                    </li>
                    <li>
                      <mark>
                        Access-Control-Allow-Methods: POST, GET, OPTIONS
                      </mark>
                    </li>
                    <li>
                      <mark>
                        Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
                      </mark>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
