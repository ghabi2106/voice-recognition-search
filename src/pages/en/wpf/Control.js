import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Control() {
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
                    href="#user-contol"
                  >
                    UserControl
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#custom-control"
                  >
                    Custom Control
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
          <h3>Control</h3>
          <article id="user-control">
            <h6>UserControl</h6>
            <div>
              <p>
                📌 Use when:
                <br /> You want to build a control from existing WPF elements
                (e.g., combining a <code>TextBox</code> and a{" "}
                <code>Button</code>).
              </p>
              <Highlight language="xml">
                {`<UserControl x:Class="CustomControls.SearchBox"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <StackPanel Orientation="Horizontal">
        <TextBox Width="200" x:Name="txtSearch"/>
        <Button Content="Search" Click="OnSearchClick"/>
    </StackPanel>
</UserControl>`}
              </Highlight>
              <Highlight language="csharp">
                {`public partial class SearchBox : UserControl
{
    public SearchBox()
    {
        InitializeComponent();
    }

    private void OnSearchClick(object sender, RoutedEventArgs e)
    {
        MessageBox.Show($"Searching: {txtSearch.Text}");
    }
}`}
              </Highlight>
              <Highlight language="csharp">{`<local:SearchBox />`}</Highlight>
            </div>
          </article>
          <article id="custom-control">
            <h6>Custom Control</h6>
            <div>
              <p>Create a reusable controls with templates</p>
              <Highlight language="csharp">
                {`public class LabeledTextBox : Control
{
    static LabeledTextBox()
    {
        DefaultStyleKeyProperty.OverrideMetadata(typeof(LabeledTextBox),
            new FrameworkPropertyMetadata(typeof(LabeledTextBox)));
    }

    public static readonly DependencyProperty LabelProperty =
        DependencyProperty.Register("Label", typeof(string), typeof(LabeledTextBox), new PropertyMetadata("Label"));

    public string Label
    {
        get => (string)GetValue(LabelProperty);
        set => SetValue(LabelProperty, value);
    }
}`}
              </Highlight>
              <h6>
                2. Add <code>Themes/Generic.xaml</code>
              </h6>
              <Highlight language="xml">
                {`<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                    xmlns:local="clr-namespace:CustomControls">

    <Style TargetType="{x:Type local:LabeledTextBox}">
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="{x:Type local:LabeledTextBox}">
                    <StackPanel>
                        <TextBlock Text="{TemplateBinding Label}" FontWeight="Bold"/>
                        <TextBox />
                    </StackPanel>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
</ResourceDictionary>`}
              </Highlight>
              <p>
                🛠 Make sure <code>Generic.xaml</code> is loaded by setting:
              </p>
              <Highlight language="xml">
                {`[assembly: ThemeInfo(ResourceDictionaryLocation.SourceAssembly, ResourceDictionaryLocation.SourceAssembly)]`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
