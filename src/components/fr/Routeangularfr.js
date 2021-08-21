import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region angular
import AngularPage from "../../pages/fr/angular/Angular";
//#endregion

export default function Routeangularfr() {
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
