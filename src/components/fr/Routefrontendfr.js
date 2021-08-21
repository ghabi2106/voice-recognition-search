import React from "react";
import { Route } from "react-router-dom";

//#region frontend
import HtmlPage from "../../pages/fr/frontend/Html";
import CssPage from "../../pages/fr/frontend/Css";
//#endregion

export default function Routefrontenden() {
  return (
    <>
      {
        //#region frontend
      }
      <Route path="/html" component={HtmlPage} />
      <Route path="/css" component={CssPage} />
      {
        //#endregion
      }
    </>
  );
}
