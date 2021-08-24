import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region dotnet
import CleanPage from "../../pages/fr/dotnet/Clean";
import CLRPage from "../../pages/fr/dotnet/Clr";
import ControllerPage from "../../pages/fr/dotnet/Controller";
import ControllervuedataPage from "../../pages/fr/dotnet/Controllervuedata";
import CqrsPage from "../../pages/fr/dotnet/Cqrs";
import DesignpatternPage from "../../pages/fr/dotnet/Designpattern";
import DiPage from "../../pages/fr/dotnet/Di";
import DotnetPage from "../../pages/fr/dotnet/Dotnet";
import EntityframeworkPage from "../../pages/fr/dotnet/Entityframework";
import HttpsPage from "../../pages/fr/dotnet/Https";
import HttpmethodsPage from "../../pages/fr/dotnet/Httpmethods";
import MiddlewarePage from "../../pages/fr/dotnet/Middleware";
import MvcPage from "../../pages/fr/dotnet/Mvc";
import NugetpackagesPage from "../../pages/fr/dotnet/Nugetpackages";
import ServicePage from "../../pages/fr/dotnet/Service";
import SingletonPage from "../../pages/fr/dotnet/Singleton";
//#endregion

//#region c# pages
import BoxingPage from "../../pages/fr/csharp/Boxing";
import CollectionsPage from "../../pages/fr/csharp/Collections";
import CovariancePage from "../../pages/fr/csharp/Covariance";
import DatatypePage from "../../pages/fr/csharp/Datatype";
import DelegatePage from "../../pages/fr/csharp/Delegate";
import EnumindexerPage from "../../pages/fr/csharp/Enumindexer";
import LinqPage from "../../pages/fr/csharp/Linq";
import ModifiersPage from "../../pages/fr/csharp/Modifiers";
import NewfeaturesPage from "../../pages/fr/csharp/Newfeatures";
import OopPage from "../../pages/fr/csharp/Oop";
import RefoutinPage from "../../pages/fr/csharp/refoutin";
import StatementsPage from "../../pages/fr/csharp/Statements";
import String2intPage from "../../pages/fr/csharp/String2int";
import StringbuilderPage from "../../pages/fr/csharp/Stringbuilder";
import ThreadsPage from "../../pages/fr/csharp/Threads";
import TuplePage from "../../pages/fr/csharp/Tuple";
import TypesystemPage from "../../pages/fr/csharp/Typesystem";
//#endregion

export default function Routedotnetfr() {
  return (
    <>
      {
        //#region dotnet
      }
      <Route path="/clean" component={CleanPage} />
      <Route path="/clr" component={CLRPage} />
      <Route path="/controller" component={ControllerPage} />
      <Route path="/controllervuedata" component={ControllervuedataPage} />
      <Route path="/cqrs" component={CqrsPage} />
      <Route path="/designpattern" component={DesignpatternPage} />
      <Route path="/di" component={DiPage} />
      <Route path="/dotnet" component={DotnetPage} />
      <Route path="/entityframework" component={EntityframeworkPage} />
      <Route path="/https" component={HttpsPage} />
      <Route path="/httpmethods" component={HttpmethodsPage} />
      <Route path="/middleware" component={MiddlewarePage} />
      <Route path="/mvc" component={MvcPage} />
      <Route path="/nugetpackages" component={NugetpackagesPage} />
      <Route path="/service" component={ServicePage} />
      <Route path="/singleton" component={SingletonPage} />
      {
        //#endregion
      }

      {
        //#region csharp
      }
      <Route path="/boxing" component={BoxingPage} />
      <Route path="/collections" component={CollectionsPage} />
      <Route path="/covariance" component={CovariancePage} />
      <Route path="/datatype" component={DatatypePage} />
      <Route path="/delegate" component={DelegatePage} />
      <Route path="/enumindexer" component={EnumindexerPage} />
      <Route path="/linq" component={LinqPage} />
      <Route path="/modifiers" component={ModifiersPage} />
      <Route path="/csharp-features" component={NewfeaturesPage} />
      <Route path="/oop" component={OopPage} />
      <Route path="/refoutin" component={RefoutinPage} />
      <Route path="/statements" component={StatementsPage} />
      <Route path="/string2int" component={String2intPage} />
      <Route path="/stringbuilder" component={StringbuilderPage} />
      <Route path="/threads" component={ThreadsPage} />
      <Route path="/tuple" component={TuplePage} />
      <Route path="/typesystem" component={TypesystemPage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/dotnet" />} />
    </>
  );
}
