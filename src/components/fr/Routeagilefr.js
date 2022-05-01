import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region agile
import AgilePage from "../../pages/fr/agile/Agile";
import MeetingPage from "../../pages/fr/agile/Meeting";
import RetrospectivePage from "../../pages/fr/agile/Retrospective";
import ReviewPage from "../../pages/fr/agile/Review";
import RolesPage from "../../pages/fr/agile/Roles";
import TermsPage from "../../pages/fr/agile/Terms";
//#endregion

export default function Routeagilefr() {
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
