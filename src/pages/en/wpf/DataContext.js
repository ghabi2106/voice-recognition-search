import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function DataContext() {
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
                    href="#data-context"
                  >
                    DataContext
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#data-context-window"
                  >
                    DataContext on a Window
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#data-context-panel"
                  >
                    DataContext on a Panel
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#data-context-code-behind"
                  >
                    DataContext code behind
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
          <h3>DataContext</h3>
          <article id="data-context">
            <h6>DataContext</h6>
            <div>
              <p>
                The <code>DataContext</code> is{" "}
                <strong>the source of all data bindings</strong> in a WPF
                control.
              </p>
            </div>
          </article>
          <article id="data-context-window">
            <h6>DataContext on a Window</h6>
            <div>
              <Highlight language="xml">
                {`<Window x:Class="BindingDemo.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:BindingDemo"
        Title="DataContext Example" Height="200" Width="300">
    
    <Window.DataContext>
        <local:Person Name="Charlie" />
    </Window.DataContext>

    <StackPanel>
        <TextBlock Text="{Binding Name}" FontSize="24"/>
    </StackPanel>
</Window>
csharp
Copy
Edit
`}
              </Highlight>
              <Highlight language="csharp">
                {`public class Person
{
    public string Name { get; set; }
}`}
              </Highlight>
            </div>
          </article>
          <article id="data-context-panel">
            <h6>DataContext on a Panel</h6>
            <div>
              <Highlight language="xml">
                {`<StackPanel>
    <StackPanel.DataContext>
        <local:Person Name="Dana" />
    </StackPanel.DataContext>

    <TextBlock Text="{Binding Name}" />
</StackPanel>`}
              </Highlight>
            </div>
          </article>
          <article id="data-context-code-behind">
            <h6>DataContext in Code-Behind</h6>
            <div>
              <Highlight language="csharp">
                {`public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = new Person { Name = "Emily" };
    }
}`}
              </Highlight>
              <Highlight language="xml">
                {`<TextBlock Text="{Binding Name}" />`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
