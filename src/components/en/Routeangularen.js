import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region angular
import AngularPage from "../../pages/en/angular/Angular";
//#endregion

export default function Routeangularen() {
  return (
    <>
      {
        //#region angular
      }
      <Route path="/angular" component={AngularPage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/angular" />} />
    </>
  );
}
