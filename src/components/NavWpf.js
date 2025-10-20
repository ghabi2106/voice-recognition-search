import React from "react";
import { Link } from "react-router-dom";

export default function NavWpf() {
  return (
    <>
      {
        //#region Agile
      }
      <li className="nav-item">
        <Link className="nav-link" to="/attached-properties">
          Attached Properties
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/binding">
          Binding
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/control">
          Control
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/data-context">
          DataContext
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/data-template">
          DataTemplate
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dependency-properties">
          DependencyProperties
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/icommand">
          ICommand
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/ivalueconverter">
          IValueConverter
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/observablecollection">
          ObservableCollection
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/routedevents">
          RoutedEvents
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/triggers">
          Triggers
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/virtualization">
          Virtualization
        </Link>
      </li>
      {
        //#endregion
      }
    </>
  );
}
