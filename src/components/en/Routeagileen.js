import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region agile
import AgilePage from "../../pages/en/agile/Agile";
import MeetingPage from "../../pages/en/agile/Meeting";
import RetrospectivePage from "../../pages/en/agile/Retrospective";
import ReviewPage from "../../pages/en/agile/Review";
import RolesPage from "../../pages/en/agile/Roles";
import TermsPage from "../../pages/en/agile/Terms";
//#endregion

export default function Routeagileen() {
  return (
    <>
      {
        //#region agile
      }
      <Route path="/agile" component={AgilePage} />
      <Route path="/meeting" component={MeetingPage} />
      <Route path="/retrospective" component={RetrospectivePage} />
      <Route path="/review" component={ReviewPage} />
      <Route path="/roles" component={RolesPage} />
      <Route path="/terms" component={TermsPage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/agile" />} />
    </>
  );
}
