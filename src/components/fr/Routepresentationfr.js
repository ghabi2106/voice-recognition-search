import React from "react";
import { Route } from "react-router-dom";

//#region presentation
import HomePage from "../../pages/fr/Home";
import QualitiesPage from "../../pages/fr/Qualities";
import PresentationPage from "../../pages/fr/Presentation";
//#endregion

export default function Routepresentationfr() {
  return (
    <>
      {
        //#region presentation
      }
      <Route exact path="/" component={HomePage} />
      <Route path="/qualities" component={QualitiesPage} />
      <Route path="/presentation" component={PresentationPage} />
      {
        //#endregion
      }
    </>
  );
}
