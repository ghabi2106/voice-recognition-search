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
import Oop2Page from "../../pages/fr/dotnet/oop/Oop2";
import Oop3Page from "../../pages/fr/dotnet/oop/Oop3";
import CompositionPage from "../../pages/fr/dotnet/oop/Composition";
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
//#endregion

//#region Services
import IdealsPage from "../../pages/fr/dotnet/services/Ideals";
import ServicePage from "../../pages/fr/dotnet/services/Service";
//#endregion

//#region design pattern
import CleancodePage from "../../pages/fr/dotnet/patternprinciple/Cleancode";
import SolidPage from "../../pages/fr/dotnet/patternprinciple/Solid";
import AdapterPage from "../../pages/fr/dotnet/patternprinciple/Adapter";
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
import Csharp9Page from "../../pages/fr/csharp/Csharp9";
import Csharp10Page from "../../pages/fr/csharp/Csharp10";
import RefoutinPage from "../../pages/fr/csharp/refoutin";
import String2intPage from "../../pages/fr/csharp/String2int";
import StringbuilderPage from "../../pages/fr/csharp/Stringbuilder";
import ThreadsPage from "../../pages/fr/csharp/Threads";
import TuplePage from "../../pages/fr/csharp/Tuple";
import GetTypePage from "../../pages/fr/csharp/GetType";
import MemberwiseclonePage from "../../pages/fr/csharp/Memberwiseclone";
import UserdefinedtypePage from "../../pages/fr/csharp/Userdefinedtype";
//#endregion

export default function Routedotnetfr() {
  return (
    <>
      {
        //#region dotnet
      }
      <Route path="/hostedservice" component={HostedservicePage} />
      <Route path="/controller" component={ControllerPage} />

      {
        //#region Architecture
      }
      <Route path="/clean" component={CleanPage} />
      <Route path="/cqrs" component={CqrsPage} />
      <Route path="/mvc" component={MvcPage} />
      {
        //#endregion
      }
      
      {
        //#region Framework
      }
      <Route path="/assembly" component={AssemblyPage} />
      <Route path="/clr" component={CLRPage} />
      <Route path="/dllexe" component={DllexePage} />
      <Route path="/dotnet" component={DotnetPage} />
      <Route path="/dotnetcomponents" component={DotnetcomponentsPage} />
      <Route path="/entityframework" component={EntityframeworkPage} />
      <Route path="/gc" component={GcPage} />
      <Route path="/gcmethods" component={GcmethodsPage} />
      <Route path="/linq" component={LinqPage} />
      <Route path="/nugetpackages" component={NugetpackagesPage} />
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
        //#region HTTP
      }
      <Route path="/caching" component={CachingPage} />
      <Route path="/controllervuedata" component={ControllervuedataPage} />
      <Route path="/https" component={HttpsPage} />
      <Route path="/httpmethods" component={HttpmethodsPage} />
      <Route path="/jwt" component={JwtPage} />
      <Route path="/middleware" component={MiddlewarePage} />
      {
        //#endregion
      }
      
      {
        //#region OOP
      }
      <Route path="/composition" component={CompositionPage} />
      <Route path="/modifiers" component={ModifiersPage} />
      <Route path="/oop" component={OopPage} />
      <Route path="/oop2" component={Oop2Page} />
      <Route path="/oop3" component={Oop3Page} />
      <Route path="/statements" component={StatementsPage} />
      <Route path="/typesystem" component={TypesystemPage} />
      {
        //#endregion
      }
      
      {
        //#region design pattern
      }
      <Route path="/adapter" component={AdapterPage} />
      <Route path="/agile" component={AgilePage} />
      <Route path="/cleancode" component={CleancodePage} />
      <Route path="/command" component={CommandPage} />
      <Route path="/designpattern" component={DesignpatternPage} />
      <Route path="/di" component={DiPage} />
      <Route path="/factory" component={FactoryPage} />
      <Route path="/mediator" component={MediatorPage} />
      <Route path="/observer" component={ObserverPage} />
      <Route path="/singleton" component={SingletonPage} />
      <Route path="/solid" component={SolidPage} />
      {
        //#endregion
      }

      {
        //#region Services
      }
      <Route path="/ideals" component={IdealsPage} />
      <Route path="/service" component={ServicePage} />
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
      <Route path="/csharp9" component={Csharp9Page} />
      <Route path="/csharp10" component={Csharp10Page} />
      <Route path="/refoutin" component={RefoutinPage} />
      <Route path="/string2int" component={String2intPage} />
      <Route path="/stringbuilder" component={StringbuilderPage} />
      <Route path="/threads" component={ThreadsPage} />
      <Route path="/tuple" component={TuplePage} />
      <Route path="/gettype" component={GetTypePage} />
      <Route path="/memberwiseclone" component={MemberwiseclonePage} />
      <Route path="/userdefinedtype" component={UserdefinedtypePage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/dotnet" />} />
    </>
  );
}
