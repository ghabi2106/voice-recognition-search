import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function IValueConverter() {
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
                    href="#value-converter"
                  >
                    IValueConverter
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#example"
                  >
                    Example
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
          <h3>IValueConverter</h3>
          <article id="value-converter">
            <h6>IValueConverter</h6>
            <div>
              <p>
                <code>IValueConverter</code> is used in{" "}
                <strong>data binding</strong> to <strong>transform data</strong>{" "}
                between the source and the UI.
              </p>
              <p>
                <strong>🔧 When to use:</strong>
              </p>
              <ul>
                <li>
                  Convert <code>bool</code> to <code>Visibility</code>
                </li>
                <li>
                  Format a <code>DateTime</code>
                </li>
                <li>Convert enum to string</li>
              </ul>
            </div>
          </article>
          <article id="exq;ple">
            <h6>Example</h6>
            <div>
              <p>
                <strong>
                  🎯 Example: Convert <code>bool</code> to{" "}
                  <code>Visibility</code>
                </strong>
              </p>
              <ul>
                <li>
                  Create the Converter Class
                  <br />
                  <Highlight language="csharp">
                    {`public class BoolToVisibilityConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        bool flag = (bool)value;
        return flag ? Visibility.Visible : Visibility.Collapsed;
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        return (Visibility)value == Visibility.Visible;
    }
}`}
                  </Highlight>
                </li>
                <li>
                  Use it in XAML
                  <br />
                  <Highlight language="xml">
                    {`<Window.Resources>
    <local:BoolToVisibilityConverter x:Key="BoolToVisibilityConverter"/>
</Window.Resources>

<TextBlock Text="Online"
           Visibility="{Binding IsOnline, Converter={StaticResource BoolToVisibilityConverter}}" />`}
                  </Highlight>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
