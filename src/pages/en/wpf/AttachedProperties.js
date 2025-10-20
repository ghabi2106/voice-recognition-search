import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function AttachedProperties() {
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
                    href="#attached-properties"
                  >
                    AttachedProperties
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
          <h3>Attached Properties</h3>
          <article id="attached-properties">
            <h6>Attached Properties</h6>
            <div>
              <p>
                A way to add properties to child controls from the parent. E.g.,{" "}
                <code>Grid.Row="1"</code> is an attached property.
              </p>
              <Highlight language="xml">
                {`<Grid>
    <Button Content="OK" Grid.Row="1" Grid.Column="2"/>
</Grid>`}
              </Highlight>
              <p>Custom Attached Property Example</p>
              <Highlight language="csharp">
                {`public static class HighlightBehavior
{
    public static readonly DependencyProperty IsHighlightedProperty =
        DependencyProperty.RegisterAttached(
            "IsHighlighted",
            typeof(bool),
            typeof(HighlightBehavior),
            new PropertyMetadata(false));

    public static void SetIsHighlighted(UIElement element, bool value)
    {
        element.SetValue(IsHighlightedProperty, value);
    }

    public static bool GetIsHighlighted(UIElement element)
    {
        return (bool)element.GetValue(IsHighlightedProperty);
    }
}`}
              </Highlight>
              <Highlight language="xml">
                {`<TextBox local:HighlightBehavior.IsHighlighted="True" />`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
