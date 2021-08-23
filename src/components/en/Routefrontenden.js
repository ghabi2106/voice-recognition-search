import React from "react";
import { Route } from "react-router-dom";

//#region frontend
import HtmlPage from "../../pages/en/frontend/Html";
import CssPage from "../../pages/en/frontend/Css";
import SassPage from "../../pages/en/frontend/Sass";
import JavascriptPage from "../../pages/en/frontend/Javascript";
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
      <Route path="/javascript" component={JavascriptPage} />
      {
        //#endregion
      }
    </>
  );
}
