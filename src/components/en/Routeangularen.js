import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region angular
import AngularPage from "../../pages/en/angular/Angular";
import BindingPage from "../../pages/en/angular/Binding";
import DIPage from "../../pages/en/angular/DI";
import DirectivesPage from "../../pages/en/angular/Directives";
import FormsPage from "../../pages/en/angular/Forms";
import HooksPage from "../../pages/en/angular/Hooks";
import ModulePage from "../../pages/en/angular/Module";
import ObservablesPage from "../../pages/en/angular/Observables";
import PipesPage from "../../pages/en/angular/Pipes";
import RoutingPage from "../../pages/en/angular/Routing";
import TemplatesPage from "../../pages/en/angular/Templates";
//#endregion

export default function Routeangularen() {
  return (
    <>
      {
        //#region angular
      }
      <Route path="/angular" component={AngularPage} />
      <Route path="/binding" component={BindingPage} />
      <Route path="/di" component={DIPage} />
      <Route path="/directives" component={DirectivesPage} />
      <Route path="/forms" component={FormsPage} />
      <Route path="/hooks" component={HooksPage} />
      <Route path="/module" component={ModulePage} />
      <Route path="/observables" component={ObservablesPage} />
      <Route path="/pipes" component={PipesPage} />
      <Route path="/routing" component={RoutingPage} />
      <Route path="/templates" component={TemplatesPage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/angular" />} />
    </>
  );
}
