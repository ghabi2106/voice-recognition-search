import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Virtualization() {
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
                    href="#virtualization"
                  >
                    Virtualization
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
                    to="/angular"
                  >
                    Angular
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
          <h3>Virtualization</h3>
          <article id="virtualization">
            <h6>Virtualization</h6>
            <div>
              <p>
                <strong>
                  How is performance handled in WPF for large lists?
                </strong>
              </p>
              <p>Use:</p>
              <ul data-start="2991" data-end="3115">
                <li>
                  <code>UI Virtualization</code> via{" "}
                  <code>VirtualizingStackPanel</code>
                </li>
                <li>
                  <code>Data Virtualization</code> for back-end lazy loading
                </li>
                <li>Avoid heavy templates</li>
              </ul>
              <Highlight language="xml">
                {`<ListBox ItemsSource="{Binding LargeCollection}" 
         ScrollViewer.CanContentScroll="True"
         VirtualizingStackPanel.IsVirtualizing="True"
         VirtualizingStackPanel.VirtualizationMode="Standard">
</ListBox>`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
