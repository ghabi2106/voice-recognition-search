import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Binding() {
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
                    href="#data-binding"
                  >
                    Data Binding
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#one-way"
                  >
                    OneWay
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#two-way"
                  >
                    TwoWay
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#one-time"
                  >
                    OneTime
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#one-way-to-source"
                  >
                    OneWayToSource
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
          <h3>Data Binding</h3>
          <article id="data-binding">
            <h6>Data Binding</h6>
            <div>
              <ul>
                <li>
                  <strong>✅ 1. OneWay Binding: </strong>Data flows from the
                  source to the target (UI) only.
                </li>
                <li>
                  <strong>✅ 2. TwoWay Binding: </strong>Data flows both ways –
                  changes in the UI update the source, and vice versa.
                </li>
                <li>
                  <strong>✅ 3. OneTime Binding: </strong>Data is read once at
                  the time of binding, and then never again.
                </li>
                <li>
                  <strong>✅ 4. OneWayToSource Binding: </strong>Data flows from
                  the UI to the source only.
                </li>
              </ul>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Mode</th>
                    <th>UI ➡️ Data</th>
                    <th>Data ➡️ UI</th>
                    <th>Typical Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>OneWay</td>
                    <td>❌</td>
                    <td>✅</td>
                    <td>Display-only</td>
                  </tr>
                  <tr>
                    <td>TwoWay</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>User input</td>
                  </tr>
                  <tr>
                    <td>OneTime</td>
                    <td>❌</td>
                    <td>✅ (once)</td>
                    <td>Static content</td>
                  </tr>
                  <tr>
                    <td>OneWayToSource</td>
                    <td>✅</td>
                    <td>❌</td>
                    <td>Hidden data input</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="one-way">
            <h6>OneWay Binding</h6>
            <div>
              <p>Data flows from the source to the target (UI) only.</p>
              <Highlight language="xml">
                {`<Window x:Class="BindingDemo.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="OneWay Binding" Height="200" Width="300">
    <Window.DataContext>
        <local:Person Name="Alice" />
    </Window.DataContext>
    <StackPanel>
        <TextBlock Text="{Binding Name, Mode=OneWay}" FontSize="20"/>
    </StackPanel>
</Window>
`}
              </Highlight>
              <Highlight language="csharp">
                {`public class Person
{
    public string Name { get; set; }
}
`}
              </Highlight>
            </div>
          </article>
          <article id="two-way">
            <h6>TwoWay Binding</h6>
            <div>
              <p>
                Data flows both ways – changes in the UI update the source, and
                vice versa.
              </p>
              <Highlight language="xml">
                {`<Window x:Class="BindingDemo.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="TwoWay Binding" Height="200" Width="300">
    <Window.DataContext>
        <local:Person Name="Bob" />
    </Window.DataContext>
    <StackPanel>
        <TextBox Text="{Binding Name, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}" />
        <TextBlock Text="{Binding Name}" FontSize="20"/>
    </StackPanel>
</Window>`}
              </Highlight>
              <Highlight language="csharp">
                {`public class Person : INotifyPropertyChanged
{
    private string name;
    public string Name
    {
        get => name;
        set { name = value; OnPropertyChanged(nameof(Name)); }
    }

    public event PropertyChangedEventHandler PropertyChanged;
    protected void OnPropertyChanged(string propName)
        => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propName));
}`}
              </Highlight>
            </div>
          </article>
          <article id="one-time">
            <h6>OneTime Binding</h6>
            <div>
              <p>
                Data is read once at the time of binding, and then never again.
              </p>
              <Highlight language="xml">
                {`<TextBlock Text="{Binding Name, Mode=OneTime}" />`}
              </Highlight>
            </div>
          </article>
          <article id="one-way-to-source">
            <h6>OneWayToSource Binding</h6>
            <div>
              <p>Data flows from the UI to the source only.</p>
              <Highlight language="csharp">
                {`<TextBox Text="{Binding Name, Mode=OneWayToSource}" />`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
