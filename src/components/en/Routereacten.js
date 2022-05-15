import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region react
import ArrowfuncPage from "../../pages/en/react/Arrowfunc";
import ComponentsPage from "../../pages/en/react/Components";
import ControlledPage from "../../pages/en/react/Controlled";
import DomPage from "../../pages/en/react/Dom";
import EcmascriptPage from "../../pages/en/react/Ecmascript";
import EventsPage from "../../pages/en/react/Events";
import FormsPage from "../../pages/en/react/Forms";
import FragmentPage from "../../pages/en/react/Fragment";
import HocPage from "../../pages/en/react/Hoc";
import HooksPage from "../../pages/en/react/Hooks";
import JsxPage from "../../pages/en/react/Jsx";
import SuspensePage from "../../pages/en/react/Suspense";
import LifecyclePage from "../../pages/en/react/Lifecycle";
import ModularizePage from "../../pages/en/react/Modularize";
import PropsstatePage from "../../pages/en/react/Propsstate";
import ReactjsPage from "../../pages/en/react/Reactjs";
import ReactrenderPage from "../../pages/en/react/Reactrender";
import ReactvsangularPage from "../../pages/en/react/Reactvsangular";
import ReduxPage from "../../pages/en/react/Redux";
import RefsPage from "../../pages/en/react/Refs";
import RouterPage from "../../pages/en/react/Router";
import StatelessPage from "../../pages/en/react/Stateless";
import StylingPage from "../../pages/en/react/Styling";
//#endregion

export default function Routereacten() {
  return (
    <>
      {
        //#region react
      }
      <Route path="/arrowfunc" component={ArrowfuncPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/controlled" component={ControlledPage} />
      <Route path="/dom" component={DomPage} />
      <Route path="/ecmascript" component={EcmascriptPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/forms" component={FormsPage} />
      <Route path="/fragment" component={FragmentPage} />
      <Route path="/hoc" component={HocPage} />
      <Route path="/hooks" component={HooksPage} />
      <Route path="/jsx" component={JsxPage} />
      <Route path="/lazy" component={SuspensePage} />
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
