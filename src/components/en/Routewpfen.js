import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region wpf
import AttachedPropertiesPage from "../../pages/en/wpf/AttachedProperties";
import BindingPage from "../../pages/en/wpf/Binding";
import ControlPage from "../../pages/en/wpf/Control";
import DataContextPage from "../../pages/en/wpf/DataContext";
import DataTemplatePage from "../../pages/en/wpf/DataTemplate";
import DependencyPropertiesPage from "../../pages/en/wpf/DependencyProperties";
import ICommandPage from "../../pages/en/wpf/ICommand";
import IValueConverterPage from "../../pages/en/wpf/IValueConverter";
import ObservableCollectionPage from "../../pages/en/wpf/ObservableCollection";
import RoutedEventsPage from "../../pages/en/wpf/RoutedEvents";
import TriggersPage from "../../pages/en/wpf/Triggers";
import VirtualizationPage from "../../pages/en/wpf/Virtualization";
//#endregion

export default function Routewpfen() {
  return (
    <>
      {
        //#region wpf
      }
      <Route path="/attached-properties" component={AttachedPropertiesPage} />
      <Route path="/binding" component={BindingPage} />
      <Route path="/control" component={ControlPage} />
      <Route path="/data-context" component={DataContextPage} />
      <Route path="/data-template" component={DataTemplatePage} />
      <Route path="/dependency-properties" component={DependencyPropertiesPage} />
      <Route path="/icommand" component={ICommandPage} />
      <Route path="/ivalueconverter" component={IValueConverterPage} />
      <Route path="/observablecollection" component={ObservableCollectionPage} />
      <Route path="/routedevents" component={RoutedEventsPage} />
      <Route path="/triggers" component={TriggersPage} />
      <Route path="/virtualization" component={VirtualizationPage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/wpf" />} />
    </>
  );
}
