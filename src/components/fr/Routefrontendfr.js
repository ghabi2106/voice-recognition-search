import React from "react";
import { Route } from "react-router-dom";

//#region frontend
import HtmlPage from "../../pages/fr/frontend/Html";
import WebstoragePage from "../../pages/fr/frontend/Webstorage";
import CssPage from "../../pages/fr/frontend/Css";
import SassPage from "../../pages/fr/frontend/Sass";
import JavascriptPage from "../../pages/fr/frontend/Javascript";
import SpaPage from "../../pages/fr/frontend/Spa";
//#endregion

export default function Routefrontenden() {
  return (
    <>
      {
        //#region frontend
      }
      <Route path="/html" component={HtmlPage} />
      <Route path="/webstorage" component={WebstoragePage} />
      <Route path="/css" component={CssPage} />
      <Route path="/sass" component={SassPage} />
      <Route path="/javascript" component={JavascriptPage} />
      <Route path="/spa" component={SpaPage} />
      {
        //#endregion
      }
    </>
  );
}
