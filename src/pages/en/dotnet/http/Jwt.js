import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Jwt() {
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
                    href="#stateful-stateless"
                  >
                    Stateful VS Stateless
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#jwt"
                  >
                    jwt
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >Use of jwt</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#structure"
                  >Structure</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#header"
                  >Header</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#playload"
                  >Playload</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#signature"
                  >Signature</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#do-work"
                  >do-work jwt</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#local-storage-security"
                  >Local storage security</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cookie-security"
                  >Cookie Security</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#xss"
                  >XSS</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#csrf"
                  >CSRF</a>
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
          <h3>JWT</h3>
          <article id="stateful-stateless">
            <h6>Stateful VS Stateless</h6>
            <p>
              So the main difference between SPA vs Multipage application
              regarding the authentication is whether session data is stored on
              the server or not. Or in other words, multipage applications have
              a so-called stateful authentication approach and SPA have a
              stateless one.
            </p>
          </article>
          <article id="jwt">
            <h6>JWT</h6>
            <div>
              <p>
                JWT stands for JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.
              </p>
              <p>
                Stateless REST API requires storing session data on the
                client-side. A key component for doing this is a JWT token which
                holds authentication data that can be confidently transmitted
                between clients.
              </p>
            </div>
          </article>
          <article id="use">
            <h6>When should you use JSON Web Tokens?</h6>
            <ul>
              <li>
                <strong>Authorization</strong>: This is the most common scenario
                for using JWT. Once the user is logged in, each subsequent
                request will include the JWT, allowing the user to access
                routes, services, and resources that are permitted with that
                token.
              </li>
              <li>
                <strong>Information Exchange</strong>: JSON Web Tokens are a
                good way of securely transmitting information between parties.
              </li>
            </ul>
          </article>
          <article id="structure">
            <h6>What is the JSON Web Token structure?</h6>
            <div>
              <p>
                In its compact form, JSON Web Tokens consist of three parts
                separated by dots (<code>.</code>), which are:
              </p>
              <ul>
                <li>Header</li>
                <li>Payload</li>
                <li>Signature</li>
              </ul>
              <p>Therefore, a JWT typically looks like the following.</p>
              <p>
                <code>xxxxx.yyyyy.zzzzz</code>
              </p>
            </div>
          </article>
          <article id="header">
            <h6>Header</h6>
            <div>
              <p>
                The header <em>typically</em> consists of two parts: the type of
                the token, which is JWT, and the signing algorithm being used,
                such as HMAC SHA256 or RSA.
              </p>
              <p>For example:</p>
              <Highlight language="javascript">
                {`{
  "alg": "HS256",
  "typ": "JWT"
}`}
              </Highlight>
              <p>
                Then, this JSON is <strong>Base64Url</strong> encoded to form
                the first part of the JWT.
              </p>
            </div>
          </article>
          <article id="playload">
            <h6>Payload</h6>
            <div>
              <p>
                The second part of the token is the payload, which contains the
                claims. Claims are statements about an entity (typically, the
                user) and additional data.
              </p>
              <p>For example:</p>
              <Highlight language="javascript">
                {`{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}`}
              </Highlight>
              <p>
                The payload is then <strong>Base64Url</strong> encoded to form
                the second part of the JSON Web Token.
              </p>
            </div>
          </article>
          <article id="signature">
            <h6>Signature</h6>
            <div>
              <p>
                To create the signature part you have to take the encoded
                header, the encoded payload, a secret, the algorithm specified
                in the header, and sign that.
              </p>
              <p>
                For example if you want to use the HMAC SHA256 algorithm, the
                signature will be created in the following way:
              </p>
              <Highlight language="javascript">
                {`HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)`}
              </Highlight>
            </div>
          </article>
          <article id="do-work">
            <h6>How do JSON Web Tokens work?</h6>
            <div>
              <p>
                Whenever the user wants to access a protected route or resource,
                the user agent should send the JWT, typically in the{" "}
                <strong>Authorization</strong> header using the{" "}
                <strong>Bearer</strong> schema. The content of the header should
                look like the following:
              </p>
              <Highlight language="javascript">
                {`Authorization: Bearer <token>`}
              </Highlight>
            </div>
          </article>
          <article id="local-storage-security">
            <h6>Local storage is not secure against XSS attack</h6>
            <p>
              A common pattern that I’ve seen in SPA is that developers tend to
              store JWT token in the browser’s local storage and then include
              the token in an authorization header for each request. Which is
              fine until security questions arise. Because local storage is
              readable from Javascript a simple cross-site-scripting attack
              (XSS) could read the JWT token and open doors to impersonate a
              user.
            </p>
          </article>
          <article id="cookie-security">
            <h6>Cookies is more secure against XSS and CSRF attack</h6>
            <div>
              <p>
                Cookies are readable by javascript to prevent that we must set
                it with an HttpOnly flag. Javascipt won't be able to read that
                cookie.
              </p>
              <p>
                But with cookies, old security issues become relevant again.
                When you send a request, all cookies from the cookie domain are
                sent as well. This means that if a victim performs a request to
                the API from the attacker’s malicious site, also cookies, like
                session cookies, are sent. This security risk is known as CSRF -
                cross-site request forgery.
              </p>
              <ul>
                <li>
                  <strong>Custom request header</strong>, like
                  “x-requested-with” which is then checked on serverside. This
                  works, because of the restriction that only JavaScript can be
                  used to add a custom header on Ajax requests, and only within
                  its origin.
                </li>
                <li>
                  <strong>SameSite cookie flag,</strong> practically, this means
                  the cookie will only be sent if the site for the cookie
                  matches the site currently shown in the browser's URL bar.
                </li>
              </ul>
            </div>
          </article>
          <article id="xss">
            <h6>XSS</h6>
            <p>
              Cross-Site Scripting (XSS) attacks are a type of injection, in
              which malicious scripts are injected into otherwise benign and
              trusted websites.
            </p>
          </article>
          <article id="csrf">
            <h6>CSRF</h6>
            <p>
              Cross-Site Request Forgery (CSRF) is an attack that forces an end
              user to execute unwanted actions on a web application in which
              they’re currently authenticated. If the victim is an
              administrative account, CSRF can compromise the entire web
              application.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
