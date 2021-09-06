import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region dotnet
import ControllerPage from "../../pages/fr/dotnet/Controller";
import HostedservicePage from "../../pages/fr/dotnet/Hostedservice";

//#region Architecture
import CqrsPage from "../../pages/fr/dotnet/architecture/Cqrs";
import CleanPage from "../../pages/fr/dotnet/architecture/Clean";
import MvcPage from "../../pages/fr/dotnet/architecture/Mvc";
//#endregion

//#region Framework
import DotnetPage from "../../pages/fr/dotnet/framework/Dotnet";
import DotnetcomponentsPage from "../../pages/fr/dotnet/framework/Dotnetcomponents";
import AssemblyPage from "../../pages/fr/dotnet/framework/Assembly";
import CLRPage from "../../pages/fr/dotnet/framework/Clr";
import DllexePage from "../../pages/fr/dotnet/framework/Dllexe";
import EntityframeworkPage from "../../pages/fr/dotnet/framework/Entityframework";
import GcPage from "../../pages/fr/dotnet/framework/Gc";
import GcmethodsPage from "../../pages/fr/dotnet/framework/Gcmethods";
import LinqPage from "../../pages/fr/dotnet/framework/Linq";
import NugetpackagesPage from "../../pages/fr/dotnet/framework/Nugetpackages";
//#endregion

//#region OOP
import ModifiersPage from "../../pages/fr/dotnet/oop/Modifiers";
import OopPage from "../../pages/fr/dotnet/oop/Oop";
import StatementsPage from "../../pages/fr/dotnet/oop/Statements";
import TypesystemPage from "../../pages/fr/dotnet/oop/Typesystem";
//#endregion

//#region Http
import CachingPage from "../../pages/fr/dotnet/http/Caching";
import ControllervuedataPage from "../../pages/fr/dotnet/http/Controllervuedata";
import HttpsPage from "../../pages/fr/dotnet/http/Https";
import HttpmethodsPage from "../../pages/fr/dotnet/http/Httpmethods";
import JwtPage from "../../pages/fr/dotnet/http/Jwt";
import MiddlewarePage from "../../pages/fr/dotnet/http/Middleware";
import ServicePage from "../../pages/fr/dotnet/http/Service";
//#endregion

//#region design pattern
import CleancodePage from "../../pages/fr/dotnet/patternprinciple/Cleancode";
import SolidPage from "../../pages/fr/dotnet/patternprinciple/Solid";
import AgilePage from "../../pages/fr/dotnet/patternprinciple/Agile";
import DesignpatternPage from "../../pages/fr/dotnet/patternprinciple/Designpattern";
import DiPage from "../../pages/fr/dotnet/patternprinciple/Di";
import SingletonPage from "../../pages/fr/dotnet/patternprinciple/Singleton";
import MediatorPage from "../../pages/fr/dotnet/patternprinciple/Mediator";
import ObserverPage from "../../pages/fr/dotnet/patternprinciple/Observer";
import FactoryPage from "../../pages/fr/dotnet/patternprinciple/Factory";
import CommandPage from "../../pages/fr/dotnet/patternprinciple/Command";
//#endregion

//#region Host Deployment
import DockerPage from "../../pages/fr/dotnet/hostdeploy/Docker";
import HttpsysPage from "../../pages/fr/dotnet/hostdeploy/Httpsys";
import IisPage from "../../pages/fr/dotnet/hostdeploy/Iis";
import KestrelPage from "../../pages/fr/dotnet/hostdeploy/Kestrel";
import ServerPage from "../../pages/fr/dotnet/hostdeploy/Server";
//#endregion

//#endregion

//#region csharp
import BoxingPage from "../../pages/fr/csharp/Boxing";
import CollectionsPage from "../../pages/fr/csharp/Collections";
import CovariancePage from "../../pages/fr/csharp/Covariance";
import DatatypePage from "../../pages/fr/csharp/Datatype";
import DelegatePage from "../../pages/fr/csharp/Delegate";
import EnumindexerPage from "../../pages/fr/csharp/Enumindexer";
import NewfeaturesPage from "../../pages/fr/csharp/Newfeatures";
import RefoutinPage from "../../pages/fr/csharp/refoutin";
import String2intPage from "../../pages/fr/csharp/String2int";
import StringbuilderPage from "../../pages/fr/csharp/Stringbuilder";
import ThreadsPage from "../../pages/fr/csharp/Threads";
import TuplePage from "../../pages/fr/csharp/Tuple";
import GetTypePage from "../../pages/fr/csharp/GetType";
import Jwt from "../../pages/en/dotnet/http/Jwt";
//#endregion

export default function Routedotnetfr() {
  return (
    <>
      {
        //#region dotnet
      }
      <Route path="/clean" component={CleanPage} />
      <Route path="/hostedservice" component={HostedservicePage} />
      <Route path="/clr" component={CLRPage} />
      <Route path="/controller" component={ControllerPage} />
      <Route path="/controllervuedata" component={ControllervuedataPage} />
      <Route path="/cqrs" component={CqrsPage} />
      <Route path="/di" component={DiPage} />
      <Route path="/dotnet" component={DotnetPage} />
      <Route path="/entityframework" component={EntityframeworkPage} />
      <Route path="/https" component={HttpsPage} />
      <Route path="/httpmethods" component={HttpmethodsPage} />
      <Route path="/jwt" component={JwtPage} />
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
