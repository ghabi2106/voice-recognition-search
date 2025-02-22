import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region angular
import AngularPage from "../../pages/en/angular/Angular";
import BindingPage from "../../pages/en/angular/Binding";
import ComponentPage from "../../pages/en/angular/Component";
import ProvidersPage from "../../pages/en/angular/Providers";
import DirectivesPage from "../../pages/en/angular/Directives";
import ElementRefPage from "../../pages/en/angular/ElementRef";
import EncapsulationPage from "../../pages/en/angular/Encapsulation";
import FormsPage from "../../pages/en/angular/Forms";
import HooksPage from "../../pages/en/angular/Hooks";
import InterceptorsPage from "../../pages/en/angular/Interceptors";
import ModulePage from "../../pages/en/angular/Module";
import ObservablesPage from "../../pages/en/angular/Observables";
import PipesPage from "../../pages/en/angular/Pipes";
import RoutingPage from "../../pages/en/angular/Routing";
import TemplatesPage from "../../pages/en/angular/Templates";
import DetectionPage from "../../pages/en/angular/Detection";
import MicroPage from "../../pages/en/angular/Micro";
import ViewChildPage from "../../pages/en/angular/ViewChild";
import ProvidersTypePage from "../../pages/en/angular/ProvidersType";
import SSRPage from "../../pages/en/angular/SSR";
import CompilationPage from "../../pages/en/angular/Compilation";
//#endregion

export default function Routeangularen() {
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
