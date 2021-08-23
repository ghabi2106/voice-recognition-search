import React from "react";
import { Link } from "react-router-dom";

export default function Https() {
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
                    href="#https"
                  >
                    HTTPS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ssl"
                  >
                    Secure Socket Layer (SSL)
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#http-https"
                  >
                    http vs https
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages"
                  >
                    Advantage of https
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
                    to="/designpattern"
                  >
                    Design Pattern
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
          <h3>HTTPS, HTTP and SSL</h3>
          <article id="https">
            <h6>HTTPS</h6>
            <div>
              <p>
                HTTPS stands for Hyper Text Transfer Protocol Secure. It is a
                protocol for securing the communication between two systems e.g.
                the browser and the web server.
              </p>
              <p>
                HTTPS uses SSL/TSL technology to secure the communication
                between the two systems. TSL is the new version of SSL.
              </p>
            </div>
          </article>
          <article id="ssl">
            <h6>Secure Socket Layer (SSL)</h6>
            <div>
              <p>
                SSL is the standard security technology for establishing an
                encrypted link between the two systems. These can be browser to
                server, server to server or client to server. Basically, SSL
                ensures that the data transfer between the two systems remains
                encrypted and private.
              </p>
              <p>
                The https is essentially http over SSL. SSL establishes an
                encrypted link using an SSL certificate which is also known as a
                digital certificate.
              </p>
            </div>
          </article>
          <article id="http-https">
            <h6>http vs https</h6>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>http</th>
                  <th>https</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Transfers data in hypertext (structured text) format</td>
                  <td>Transfers data in encrypted format</td>
                </tr>
                <tr>
                  <td>Uses port 80 by default</td>
                  <td>Uses port 443 by default</td>
                </tr>
                <tr>
                  <td>Not secure</td>
                  <td>Secured using SSL technology</td>
                </tr>
                <tr>
                  <td>
                    Starts with <code>http://</code>
                  </td>
                  <td>
                    Starts with <code>https://</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="advantages">
            <h6>Advantage of https</h6>
            <ul>
              <li>
                <strong>Secure Communication:</strong> https makes a secure
                connection by establishing an encrypted link between the browser
                and the server or any two systems.
              </li>
              <li>
                <strong>Data Integrity:</strong> https provides data integrity
                by encrypting the data and so, even if hackers manage to trap
                the data, they cannot read or modify it.
              </li>
              <li>
                <strong>Privacy and Security:</strong> https protects the
                privacy and security of website users by preventing hackers to
                passively listen to communication between the browser and the
                server.
              </li>
              <li>
                <strong>Faster Performance:</strong> https increases the speed
                of data transfer compared to http by encrypting and reducing the
                size of the data.
              </li>
              <li>
                <strong>SEO:</strong> Use of https increases SEO ranking. In
                Google Chrome, Google shows the <b>Not Secure</b> label in the
                browser if users' data is collected over http.
              </li>
              <li>
                <strong>Future:</strong> https represents the future of the web
                by making internet safe for users and website owners.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
