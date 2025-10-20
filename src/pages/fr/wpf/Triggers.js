import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Triggers() {
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
                    href="#triggers"
                  >
                    Triggers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#property-trigger"
                  >
                    Property Trigger
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#data-trigger"
                  >
                    Data Trigger
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#event-trigger"
                  >
                    Event Trigger
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
          <h3>Triggers</h3>
          <article id="triggers">
            <h6>Triggers</h6>
            <div>
              <p>🧩 When to Use Each</p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Use Case</th>
                    <th>Trigger Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Change based on <code>IsMouseOver</code>,{" "}
                      <code>IsEnabled</code>, etc.
                    </td>
                    <td>
                      <code>Trigger</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Change based on ViewModel data (e.g., when{" "}
                      <code>Status == "Error"</code>)
                    </td>
                    <td>
                      <code>DataTrigger</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Start animation on event</td>
                    <td>
                      <code>EventTrigger</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Combine multiple property conditions</td>
                    <td>
                      <code>MultiTrigger</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Combine multiple data conditions</td>
                    <td>
                      <code>MultiDataTrigger</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="property-trigger">
            <h6>Property Trigger</h6>
            <div>
              <p>
                Change <code>Background</code> when the mouse hovers:
              </p>
              <Highlight language="xml">
                {`<Button Content="Hover me">
    <Button.Style>
        <Style TargetType="Button">
            <Setter Property="Background" Value="LightGray"/>
            <Style.Triggers>
                <Trigger Property="IsMouseOver" Value="True">
                    <Setter Property="Background" Value="Orange"/>
                </Trigger>
            </Style.Triggers>
        </Style>
    </Button.Style>
</Button>`}
              </Highlight>
            </div>
          </article>
          <article id="data-trigger">
            <h6>Data Trigger</h6>
            <div>
              <p>
                Change color when <code>Status == "Error"</code>:
              </p>
              <Highlight language="xml">
                {`<Window.Resources>
    <Style TargetType="TextBlock" x:Key="StatusTextStyle">
        <Style.Triggers>
            <DataTrigger Binding="{Binding Status}" Value="Error">
                <Setter Property="Foreground" Value="Red"/>
            </DataTrigger>
        </Style.Triggers>
    </Style>
</Window.Resources>

<TextBlock Text="{Binding Status}" Style="{StaticResource StatusTextStyle}"/>`}
              </Highlight>
            </div>
          </article>
          <article id="event-trigger">
            <h6>Event Trigger</h6>
            <div>
              <p>Start an animation when the element loads:</p>
              <Highlight language="xml">
                {`<Button Content="Fade In">
    <Button.Triggers>
        <EventTrigger RoutedEvent="Button.Loaded">
            <BeginStoryboard>
                <Storyboard>
                    <DoubleAnimation Storyboard.TargetProperty="Opacity"
                                     From="0" To="1" Duration="0:0:2"/>
                </Storyboard>
            </BeginStoryboard>
        </EventTrigger>
    </Button.Triggers>
</Button>`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
