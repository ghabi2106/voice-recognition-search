import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region angular
import AngularPage from "../../pages/fr/angular/Angular";
import BindingPage from "../../pages/fr/angular/Binding";
import ComponentPage from "../../pages/fr/angular/Component";
import ProvidersPage from "../../pages/fr/angular/Providers";
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
import DetectionPage from "../../pages/fr/angular/Detection";
import MicroPage from "../../pages/fr/angular/Micro";
import ViewChildPage from "../../pages/fr/angular/ViewChild";
import ProvidersTypePage from "../../pages/fr/angular/ProvidersType";
import SSRPage from "../../pages/fr/angular/SSR";
import CompilationPage from "../../pages/fr/angular/Compilation";
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
      <Route path="/providers" component={ProvidersPage} />
      <Route path="/providers-type" component={ProvidersTypePage} />
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
      <Route path="/detection" component={DetectionPage} />
      <Route path="/micro" component={MicroPage} />
      <Route path="/view-child" component={ViewChildPage} />
      <Route path="/ssr" component={SSRPage} />
      <Route path="/compilation" component={CompilationPage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/angular" />} />
    </>
  );
}
