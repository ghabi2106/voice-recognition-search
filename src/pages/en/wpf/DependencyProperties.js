import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function DependencyProperties() {
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
                    href="#dependency-properties"
                  >
                    DependencyProperties
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#full-example"
                  >
                    Full example
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
          <h3>Dependency Properties</h3>
          <article id="dependency-properties">
            <h6>DependencyProperties</h6>
            <div>
              <p>
                <strong>Dependency Properties</strong> are special properties in
                WPF that offer <strong>extended features</strong> over normal
                .NET properties.
              </p>
              <ul>
                <li>Data Binding</li>
                <li>Styling and Templates</li>
                <li>Animations</li>
                <li>Default values</li>
                <li>Change notification</li>
                <li>Property value inheritance</li>
              </ul>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>CLR Property</th>
                    <th>Dependency Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data Binding</td>
                    <td>❌</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Style &amp; Theme Support</td>
                    <td>❌</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Animation</td>
                    <td>❌</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Inheritance</td>
                    <td>❌</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Change Notifications</td>
                    <td>✅ (manually)</td>
                    <td>✅ (built-in)</td>
                  </tr>
                </tbody>
              </table>
              <Highlight language="csharp">
                {`public static readonly DependencyProperty TitleProperty =
    DependencyProperty.Register("Title", typeof(string), typeof(MyControl), new PropertyMetadata("Default"));

public string Title
{
    get => (string)GetValue(TitleProperty);
    set => SetValue(TitleProperty, value);
}
`}
              </Highlight>
            </div>
          </article>
          <article id="full-example">
            <h6>Full Example</h6>
            <div>
              <Highlight language="csharp">
                {`public class MyControl : Control
{
    public static readonly DependencyProperty TitleProperty =
        DependencyProperty.Register("Title", typeof(string), typeof(MyControl),
        new PropertyMetadata("Default Title", OnTitleChanged));

    public string Title
    {
        get => (string)GetValue(TitleProperty);
        set => SetValue(TitleProperty, value);
    }

    private static void OnTitleChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        var control = (MyControl)d;
        // You can react to the change here
        Console.WriteLine($"Title changed from {e.OldValue} to {e.NewValue}");
    }
}
`}
              </Highlight>
              <Highlight language="xml">
                {`<local:MyControl Title="Hello Dependency!" />`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
