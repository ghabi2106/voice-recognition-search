import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region angular
import AngularPage from "../../pages/fr/angular/Angular";
import BindingPage from "../../pages/fr/angular/Binding";
import DIPage from "../../pages/fr/angular/DI";
import DirectivesPage from "../../pages/fr/angular/Directives";
import FormsPage from "../../pages/fr/angular/Forms";
import HooksPage from "../../pages/fr/angular/Hooks";
import ModulePage from "../../pages/fr/angular/Module";
import ObservablesPage from "../../pages/fr/angular/Observables";
import PipesPage from "../../pages/fr/angular/Pipes";
import RoutingPage from "../../pages/fr/angular/Routing";
import TemplatesPage from "../../pages/fr/angular/Templates";
//#endregion

export default function Routeangularfr() {
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
