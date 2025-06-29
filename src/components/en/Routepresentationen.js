import React from "react";
import { Route } from "react-router-dom";

//#region presentation
import HomePage from "../../pages/en/Home";
import QualitiesPage from "../../pages/en/Qualities";
import CompanyPage from "../../pages/en/Company";
import PresentationPage from "../../pages/en/Presentation";
//#endregion

export default function Routepresentationen() {
  return (
    <>
      {
        //#region presentation
      }
      <Route exact path="/" component={HomePage} />
      <Route path="/qualities" component={QualitiesPage} />
      <Route path="/company" component={CompanyPage} />
      <Route path="/presentation" component={PresentationPage} />
      {
        //#endregion
      }
    </>
  );
}
