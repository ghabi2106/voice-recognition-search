import React from "react";
import { Link } from "react-router-dom";

export default function String2int() {
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
                    href="#parse"
                  >
                    Parse()
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#convert"
                  >
                    Convert
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tryparse"
                  >
                    TryParse()
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
          <h3>How to convert string to int in C#?</h3>
          <article id="boxing">
            <h6>Parse() method</h6>
            <div>
              <ul>
                <li>Converts valid numeric string to integer value.</li>
                <li>Supports different number styles.</li>
                <li>Supports culture-specific custom formats.</li>
              </ul>
              <img
                src="/img/dotnet/string2int-parse-syntax.PNG"
                alt="string2int parse syntax"
              />
              <img
                src="/img/dotnet/string2int-parse-script.PNG"
                alt="string2int parse script"
              />
              <img
                src="/img/dotnet/string2int-parse-exception.PNG"
                alt="string2int parse exception"
              />
            </div>
          </article>
          <article id="convert">
            <h6>Convert Class</h6>
            <div>
              <ul>
                <li>Converts from any data type to integer.</li>
                <li>Converts null to 0, so not throwing an exception.</li>
              </ul>
              <img
                src="/img/dotnet/string2int-convert-syntax.PNG"
                alt="string2int convert syntax"
              />
              <img
                src="/img/dotnet/string2int-convert-script.PNG"
                alt="string2int convert script"
              />
            </div>
          </article>
          <article id="tryparse">
            <h6>TryParse Method</h6>
            <div>
              <ul>
                <li>Converts different numeric strings to integers.</li>
                <li>Converts string representation of different number styles.</li>
                <li>Converts culture-specific numeric strings to integers.</li>
                <li>Never throws an exception. Returns false if cannot parse to an integer.</li>
                <li>Must use out parameter.</li>
              </ul>
              <img
                src="/img/dotnet/string2int-tryparse-syntax.PNG"
                alt="string2int tryparse syntax"
              />
              <img
                src="/img/dotnet/string2int-tryparse-script.PNG"
                alt="string2int tryparse script"
              />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
