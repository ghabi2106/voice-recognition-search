import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function DataTemplate() {
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
                    href="#data-template"
                  >
                    DataTemplate
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
          <h3>DataTemplate</h3>
          <article id="data-template">
            <h6>DataTemplate</h6>
            <div>
              <p>
                A <code>DataTemplate</code> defines{" "}
                <strong>how to display a data object</strong> in the UI —
                especially for items in a list (<code>ListBox</code>,{" "}
                <code>ListView</code>, <code>ComboBox</code>, etc.).
              </p>
              <Highlight language="csharp">
                {`public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}`}
              </Highlight>
              <Highlight language="xml">
                {`<Window.Resources>
    <ObservableCollection x:Key="People">
        <local:Person Name="Alice" Age="30"/>
        <local:Person Name="Bob" Age="25"/>
    </ObservableCollection>
</Window.Resources>

<ListBox ItemsSource="{StaticResource People}">
    <ListBox.ItemTemplate>
        <DataTemplate>
            <StackPanel Orientation="Horizontal">
                <TextBlock Text="{Binding Name}" FontWeight="Bold"/>
                <TextBlock Text=" - " />
                <TextBlock Text="{Binding Age}" />
            </StackPanel>
        </DataTemplate>
    </ListBox.ItemTemplate>
</ListBox>`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
