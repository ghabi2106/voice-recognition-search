import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region dotnet
import CleanPage from "../../pages/en/dotnet/Clean";
import CLRPage from "../../pages/en/dotnet/Clr";
import ControllerPage from "../../pages/en/dotnet/Controller";
import ControllervuedataPage from "../../pages/en/dotnet/Controllervuedata";
import CqrsPage from "../../pages/en/dotnet/Cqrs";
import DiPage from "../../pages/en/dotnet/Di";
import DotnetPage from "../../pages/en/dotnet/Dotnet";
import EntityframeworkPage from "../../pages/en/dotnet/Entityframework";
import HttpsPage from "../../pages/en/dotnet/Https";
import HttpmethodsPage from "../../pages/en/dotnet/Httpmethods";
import MiddlewarePage from "../../pages/en/dotnet/Middleware";
import MvcPage from "../../pages/en/dotnet/Mvc";
import NugetpackagesPage from "../../pages/en/dotnet/Nugetpackages";
import ServicePage from "../../pages/en/dotnet/Service";
import AssemblyPage from "../../pages/en/dotnet/Assembly";
import CachingPage from "../../pages/en/dotnet/Caching";
import DllexePage from "../../pages/en/dotnet/Dllexe";
import DotnetcomponentsPage from "../../pages/en/dotnet/Dotnetcomponents";
import GcPage from "../../pages/en/dotnet/Gc";
import GcmethodsPage from "../../pages/en/dotnet/Gcmethods";

//#region design pattern
import CleancodePage from "../../pages/en/dotnet/patternprinciple/Cleancode";
import SolidPage from "../../pages/en/dotnet/patternprinciple/Solid";
import AgilePage from "../../pages/en/dotnet/patternprinciple/Agile";
import DesignpatternPage from "../../pages/en/dotnet/patternprinciple/Designpattern";
import SingletonPage from "../../pages/en/dotnet/patternprinciple/Singleton";
import MediatorPage from "../../pages/en/dotnet/patternprinciple/Mediator";
import ObserverPage from "../../pages/en/dotnet/patternprinciple/Observer";
import FactoryPage from "../../pages/en/dotnet/patternprinciple/Factory";
import CommandPage from "../../pages/en/dotnet/patternprinciple/Command";
//#endregion

//#region Host Deployment
import DockerPage from "../../pages/en/dotnet/hostdeploy/Docker";
import HttpsysPage from "../../pages/en/dotnet/hostdeploy/Httpsys";
import IisPage from "../../pages/en/dotnet/hostdeploy/Iis";
import KestrelPage from "../../pages/en/dotnet/hostdeploy/Kestrel";
import ServerPage from "../../pages/en/dotnet/hostdeploy/Server";
//#endregion

//#endregion

//#region csharp
import BoxingPage from "../../pages/en/csharp/Boxing";
import CollectionsPage from "../../pages/en/csharp/Collections";
import CovariancePage from "../../pages/en/csharp/Covariance";
import DatatypePage from "../../pages/en/csharp/Datatype";
import DelegatePage from "../../pages/en/csharp/Delegate";
import EnumindexerPage from "../../pages/en/csharp/Enumindexer";
import LinqPage from "../../pages/en/csharp/Linq";
import ModifiersPage from "../../pages/en/csharp/Modifiers";
import NewfeaturesPage from "../../pages/en/csharp/Newfeatures";
import OopPage from "../../pages/en/csharp/Oop";
import RefoutinPage from "../../pages/en/csharp/refoutin";
import StatementsPage from "../../pages/en/csharp/Statements";
import String2intPage from "../../pages/en/csharp/String2int";
import StringbuilderPage from "../../pages/en/csharp/Stringbuilder";
import ThreadsPage from "../../pages/en/csharp/Threads";
import TuplePage from "../../pages/en/csharp/Tuple";
import TypesystemPage from "../../pages/en/csharp/Typesystem";
import GetTypePage from "../../pages/en/csharp/GetType";
//#endregion

export default function Routecsharpen() {
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
      <Route path="/di" component={DiPage} />
      <Route path="/dotnet" component={DotnetPage} />
      <Route path="/entityframework" component={EntityframeworkPage} />
      <Route path="/https" component={HttpsPage} />
      <Route path="/httpmethods" component={HttpmethodsPage} />
      <Route path="/middleware" component={MiddlewarePage} />
      <Route path="/mvc" component={MvcPage} />
      <Route path="/nugetpackages" component={NugetpackagesPage} />
      <Route path="/service" component={ServicePage} />
      <Route path="/assembly" component={AssemblyPage} />
      <Route path="/caching" component={CachingPage} />
      <Route path="/dllexe" component={DllexePage} />
      <Route path="/dotnetcomponents" component={DotnetcomponentsPage} />
      <Route path="/gc" component={GcPage} />
      <Route path="/gcmethods" component={GcmethodsPage} />

      {
        //#region design pattern
      }
      <Route path="/cleancode" component={CleancodePage} />
      <Route path="/solid" component={SolidPage} />
      <Route path="/agile" component={AgilePage} />
      <Route path="/designpattern" component={DesignpatternPage} />
      <Route path="/singleton" component={SingletonPage} />
      <Route path="/factory" component={FactoryPage} />
      <Route path="/mediator" component={MediatorPage} />
      <Route path="/observer" component={ObserverPage} />
      <Route path="/command" component={CommandPage} />
      {
        //#endregion
      }

      {
        //#region Host Deploy
      }
      <Route path="/docker" component={DockerPage} />
      <Route path="/httpsys" component={HttpsysPage} />
      <Route path="/iis" component={IisPage} />
      <Route path="/kestrel" component={KestrelPage} />
      <Route path="/server" component={ServerPage} />
      {
        //#endregion
      }

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
      <Route path="/gettype" component={GetTypePage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/dotnet" />} />
    </>
  );
}
