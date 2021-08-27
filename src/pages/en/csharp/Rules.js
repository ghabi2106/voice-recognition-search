import React from "react";
import { Link } from "react-router-dom";

export default function Rules() {
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
                    href="#"
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#"
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href=""
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href=""
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href=""
                  >
                    
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
          <h3>Rules</h3>
          <article id="typeof-gettype">
            <h6>typeof vs GetType</h6>
            <div>
              <p>
                The <code>typeof</code> operator can be used with the type or
                generic type known at compile-time. The typeof(obj) will give a
                compile-time error because <code>obj</code> is a variable, not a
                type. You can use the <code>typeof</code> with type, e.g.,{" "}
                <code>typeof(int)</code>. The <code>GetType()</code> is called on
                an object at runtime. In both cases, the return type will be an
                object of the <code>System.Type</code>.
              </p>
              <img src="/img/dotnet/" alt="" />
            </div>
          </article>
          <article id="">
            <h6></h6>
            <div>
              <p>
              </p>
              <img src="/img/dotnet/" alt="" />
            </div>
          </article>
          <article id="">
            <h6></h6>
            <div>
              <p>
              </p>
              <img src="/img/dotnet/" alt="" />
            </div>
          </article>
          <article id="">
            <h6></h6>
            <div>
              <p>
              </p>
              <img src="/img/dotnet/" alt="" />
            </div>
          </article>
          <article id="">
            <h6></h6>
            <div>
              <p>
              </p>
              <img src="/img/dotnet/" alt="*" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
