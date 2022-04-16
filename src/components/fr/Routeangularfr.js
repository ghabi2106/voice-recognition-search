import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region angular
import AngularPage from "../../pages/fr/angular/Angular";
import BindingPage from "../../pages/fr/angular/Binding";
import ComponentPage from "../../pages/fr/angular/Component";
import DIPage from "../../pages/fr/angular/DI";
import DirectivesPage from "../../pages/fr/angular/Directives";
import ElementRefPage from "../../pages/fr/angular/ElementRef";
import EncapsulationPage from "../../pages/fr/angular/Encapsulation";
import FormsPage from "../../pages/fr/angular/Forms";
import HooksPage from "../../pages/fr/angular/Hooks";
import InterceptorsPage from "../../pages/fr/angular/Interceptors";
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
      <Route path="/component" component={ComponentPage} />
      <Route path="/di" component={DIPage} />
      <Route path="/directives" component={DirectivesPage} />
      <Route path="/elementref" component={ElementRefPage} />
      <Route path="/encapsulation" component={EncapsulationPage} />
      <Route path="/forms" component={FormsPage} />
      <Route path="/hooks" component={HooksPage} />
      <Route path="/interceptors" component={InterceptorsPage} />
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
