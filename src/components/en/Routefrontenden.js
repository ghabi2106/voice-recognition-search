import React from "react";
import { Route } from "react-router-dom";

//#region frontend
import HtmlPage from "../../pages/en/frontend/Html";
import WebstoragePage from "../../pages/en/frontend/Webstorage";
import CssPage from "../../pages/en/frontend/Css";
import SassPage from "../../pages/en/frontend/Sass";
import JavascriptPage from "../../pages/en/frontend/Javascript";
import SpaPage from "../../pages/en/frontend/Spa";
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
