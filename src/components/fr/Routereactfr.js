import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region react
import ArrowfuncPage from "../../pages/fr/react/Arrowfunc";
import ControlledPage from "../../pages/fr/react/Controlled";
import DomPage from "../../pages/fr/react/Dom";
import EcmascriptPage from "../../pages/fr/react/Ecmascript";
import EventsPage from "../../pages/fr/react/Events";
import FormsPage from "../../pages/fr/react/Forms";
import FragmentPage from "../../pages/fr/react/Fragment";
import HocPage from "../../pages/fr/react/Hoc";
import JsxPage from "../../pages/fr/react/Jsx";
import LifecyclePage from "../../pages/fr/react/Lifecycle";
import ModularizePage from "../../pages/fr/react/Modularize";
import PropsstatePage from "../../pages/fr/react/Propsstate";
import ReactjsPage from "../../pages/fr/react/Reactjs";
import ReactrenderPage from "../../pages/fr/react/Reactrender";
import ReactvsangularPage from "../../pages/fr/react/Reactvsangular";
import ReduxPage from "../../pages/fr/react/Redux";
import RefsPage from "../../pages/fr/react/Refs";
import RouterPage from "../../pages/fr/react/Router";
import StatelessPage from "../../pages/fr/react/Stateless";
import StylingPage from "../../pages/fr/react/Styling";
//#endregion

export default function Routereactfr() {
  return (
    <>
      {
        //#region react
      }
      <Route path="/arrowfunc" component={ArrowfuncPage} />
      <Route path="/controlled" component={ControlledPage} />
      <Route path="/dom" component={DomPage} />
      <Route path="/ecmascript" component={EcmascriptPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/forms" component={FormsPage} />
      <Route path="/fragment" component={FragmentPage} />
      <Route path="/hoc" component={HocPage} />
      <Route path="/jsx" component={JsxPage} />
      <Route path="/lifecycle" component={LifecyclePage} />
      <Route path="/modularize" component={ModularizePage} />
      <Route path="/propsstate" component={PropsstatePage} />
      <Route path="/reactjs" component={ReactjsPage} />
      <Route path="/reactrender" component={ReactrenderPage} />
      <Route path="/reactvsangular" component={ReactvsangularPage} />
      <Route path="/redux" component={ReduxPage} />
      <Route path="/refs" component={RefsPage} />
      <Route path="/router" component={RouterPage} />
      <Route path="/stateless" component={StatelessPage} />
      <Route path="/styling" component={StylingPage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/reactjs" />} />
    </>
  );
}
