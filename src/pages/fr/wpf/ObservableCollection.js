import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function ObservableCollection() {
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
                    href="#observable-collection"
                  >
                    ObservableCollection
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
          <h3>ObservableCollection</h3>
          <article id="observable-collection">
            <h6>ObservableCollection</h6>
            <div>
              <p>
                <code>ObservableCollection&lt;T&gt;</code> is a generic
                collection that:
              </p>
              <ul>
                <li>
                  <p>
                    Implements{" "}
                    <strong>
                      <code>INotifyCollectionChanged</code>
                    </strong>
                  </p>
                </li>
                <li>
                  <p>
                    Automatically notifies the <strong>UI</strong> when:
                  </p>
                  <ul>
                    <li>
                      <p>
                        An item is <strong>added</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        An item is <strong>removed</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        The entire list is <strong>cleared</strong>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
              <strong>ViewModel with ObservableCollection:</strong>
              <br />
              <Highlight language="csharp">
                {`public class MainViewModel : INotifyPropertyChanged
{
    public ObservableCollection<string> Items { get; set; }

    public MainViewModel()
    {
        Items = new ObservableCollection<string> { "Item 1", "Item 2" };
    }

    public void AddItem(string item)
    {
        Items.Add(item); // UI auto-updates
    }

    public event PropertyChangedEventHandler PropertyChanged;
}`}
              </Highlight>
              <br />
              <Highlight language="xml">
                {`<ListBox ItemsSource="{Binding Items}" />
<Button Content="Add Item" Click="AddItem_Click" />`}
              </Highlight>
              <br />
              <Highlight language="csharp">
                {`private void AddItem_Click(object sender, RoutedEventArgs e)
{
    viewModel.AddItem("New Item");
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
