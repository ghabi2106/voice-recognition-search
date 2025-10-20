import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function RoutedEvents() {
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
                    href="#routed-events"
                  >
                    Routed Events
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
          <h3>Routed Events</h3>
          <article id="routed-events">
            <h6>Routed Events</h6>
            <div>
              <p>
                <strong>Events</strong> that travel the UI elements tree.
              </p>
              <ul>
                <li>Bubbling (child to parent)</li>
                <li>Tunneling (parent to child)</li>
              </ul>
              <p>E.g., PreviewMouseDown (tunnel), MouseDown (bubble)</p>
              <Highlight language="xml">
                {`<StackPanel PreviewMouseDown="StackPanel_PreviewMouseDown"
            MouseDown="StackPanel_MouseDown"
            Background="LightGray">
    <Button Content="Click Me" Width="100" Height="30"/>
</StackPanel>`}
              </Highlight>
              <Highlight language="csharp">
                {`private void StackPanel_PreviewMouseDown(object sender, MouseButtonEventArgs e)
{
    Console.WriteLine("Tunneling: StackPanel_PreviewMouseDown");
}

private void StackPanel_MouseDown(object sender, MouseButtonEventArgs e)
{
    Console.WriteLine("Bubbling: StackPanel_MouseDown");
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
