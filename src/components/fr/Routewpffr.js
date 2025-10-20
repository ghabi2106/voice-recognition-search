import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region wpf
import AttachedPropertiesPage from "../../pages/fr/wpf/AttachedProperties";
import BindingPage from "../../pages/fr/wpf/Binding";
import ControlPage from "../../pages/fr/wpf/Control";
import DataContextPage from "../../pages/fr/wpf/DataContext";
import DataTemplatePage from "../../pages/fr/wpf/DataTemplate";
import DependencyPropertiesPage from "../../pages/fr/wpf/DependencyProperties";
import ICommandPage from "../../pages/fr/wpf/ICommand";
import IValueConverterPage from "../../pages/fr/wpf/IValueConverter";
import ObservableCollectionPage from "../../pages/fr/wpf/ObservableCollection";
import RoutedEventsPage from "../../pages/fr/wpf/RoutedEvents";
import TriggersPage from "../../pages/fr/wpf/Triggers";
import VirtualizationPage from "../../pages/fr/wpf/Virtualization";
//#endregion

export default function Routewpffr() {
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
