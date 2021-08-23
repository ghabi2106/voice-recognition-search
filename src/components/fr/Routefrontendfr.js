import React from "react";
import { Route } from "react-router-dom";

//#region frontend
import HtmlPage from "../../pages/fr/frontend/Html";
import CssPage from "../../pages/fr/frontend/Css";
import SassPage from "../../pages/fr/frontend/Sass";
//#endregion

export default function Routefrontenden() {
  return (
    <>
      {
        //#region frontend
      }
      <Route path="/html" component={HtmlPage} />
      <Route path="/css" component={CssPage} />
      <Route path="/sass" component={SassPage} />
      {
        //#endregion
      }
    </>
  );
}
