import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region dotnet
import ControllerPage from "../../pages/en/dotnet/Controller";
import HostedservicePage from "../../pages/en/dotnet/Hostedservice";

//#region Architecture
import CqrsPage from "../../pages/en/dotnet/architecture/Cqrs";
import CleanPage from "../../pages/en/dotnet/architecture/Clean";
import MvcPage from "../../pages/en/dotnet/architecture/Mvc";
import DddPage from "../../pages/en/dotnet/architecture/Ddd";
//#endregion

//#region Csharp
import Csharp9Page from "../../pages/en/csharp/csharp/Csharp9";
import Csharp10Page from "../../pages/en/csharp/csharp/Csharp10";
import Csharp11Page from "../../pages/en/csharp/csharp/Csharp11";
import DotnetfeatuesPage from "../../pages/en/csharp/csharp/Dotnetfeatues";
//#endregion

//#region algorithme
import AlgoPage from "../../pages/en/algorithme/Algo";
import RecursionPage from "../../pages/en/algorithme/Recursion";
//#endregion

//#region Framework
import DotnetPage from "../../pages/en/dotnet/framework/Dotnet";
import DotnetcomponentsPage from "../../pages/en/dotnet/framework/Dotnetcomponents";
import AssemblyPage from "../../pages/en/dotnet/framework/Assembly";
import CLRPage from "../../pages/en/dotnet/framework/Clr";
import CodedomPage from "../../pages/en/dotnet/framework/Codedom";
import DllexePage from "../../pages/en/dotnet/framework/Dllexe";
import EntityframeworkPage from "../../pages/en/dotnet/framework/Entityframework";
import GcPage from "../../pages/en/dotnet/framework/Gc";
import GcmethodsPage from "../../pages/en/dotnet/framework/Gcmethods";
import LinqPage from "../../pages/en/dotnet/framework/Linq";
import NugetpackagesPage from "../../pages/en/dotnet/framework/Nugetpackages";
//#endregion

//#region OOP
import OopPage from "../../pages/en/dotnet/oop/Oop";
import Oop2Page from "../../pages/en/dotnet/oop/Oop2";
import Oop3Page from "../../pages/en/dotnet/oop/Oop3";
import CompositionPage from "../../pages/en/dotnet/oop/Composition";
import TypesystemPage from "../../pages/en/dotnet/oop/Typesystem";
//#endregion

//#region Http
import CachingPage from "../../pages/en/dotnet/http/Caching";
import ControllervuedataPage from "../../pages/en/dotnet/http/Controllervuedata";
import HttpsPage from "../../pages/en/dotnet/http/Https";
import HttpmethodsPage from "../../pages/en/dotnet/http/Httpmethods";
import JwtPage from "../../pages/en/dotnet/http/Jwt";
import MiddlewarePage from "../../pages/en/dotnet/http/Middleware";
//#endregion

//#region Services
import ServicePage from "../../pages/en/dotnet/services/Service";
import IdealsPage from "../../pages/en/dotnet/services/Ideals";
//#endregion

//#region design pattern
import AdapterPage from "../../pages/en/dotnet/design/Adapter";
import DesignpatternPage from "../../pages/en/dotnet/design/Designpattern";
import DiPage from "../../pages/en/dotnet/design/Di";
import SingletonPage from "../../pages/en/dotnet/design/Singleton";
import MediatorPage from "../../pages/en/dotnet/design/Mediator";
import ObserverPage from "../../pages/en/dotnet/design/Observer";
import FactoryPage from "../../pages/en/dotnet/design/Factory";
import CommandPage from "../../pages/en/dotnet/design/Command";
//#endregion

//#region methodology
import CleancodePage from "../../pages/en/dotnet/methodology/Cleancode";
import Cleancode1Page from "../../pages/en/dotnet/methodology/Cleancode1";
import SolidPage from "../../pages/en/dotnet/methodology/Solid";
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

//#region Keywords
import ModifiersPage from "../../pages/en/csharp/keywords/Modifiers";
import ContextualPage from "../../pages/en/csharp/keywords/Contextual";
import OperatorsPage from "../../pages/en/csharp/keywords/Operators";
import ParametersPage from "../../pages/en/csharp/keywords/Parameters";
import StatementsPage from "../../pages/en/csharp/keywords/Statements";
import ThisbasePage from "../../pages/en/csharp/keywords/Thisbase";
//#endregion
//#region threading
import AutoResetEventPage from "../../pages/en/csharp/threading/AutoResetEvent";
import BarrierPage from "../../pages/en/csharp/threading/Barrier";
import ConcurrentCollectionsPage from "../../pages/en/csharp/threading/ConcurrentCollections";
import CountdownEventPage from "../../pages/en/csharp/threading/CountdownEvent";
import DeadlockPage from "../../pages/en/csharp/threading/Deadlock";
import InterlockedPage from "../../pages/en/csharp/threading/Interlocked";
import ManualResetEventPage from "../../pages/en/csharp/threading/ManualResetEvent";
import MonitorPage from "../../pages/en/csharp/threading/Monitor";
import MutexPage from "../../pages/en/csharp/threading/Mutex";
import ParallelLoopsPage from "../../pages/en/csharp/threading/ParallelLoops";
import ProcessPage from "../../pages/en/csharp/threading/Process";
import ReaderWriterLockPage from "../../pages/en/csharp/threading/ReaderWriterLock";
import SemaphorePage from "../../pages/en/csharp/threading/Semaphore";
import SpinLockPage from "../../pages/en/csharp/threading/SpinLock";
import SpinWaitPage from "../../pages/en/csharp/threading/SpinWait";
import SyncPrimitivesPage from "../../pages/en/csharp/threading/SyncPrimitives";
import TaskPage from "../../pages/en/csharp/threading/Task";
import ThreadPoolPage from "../../pages/en/csharp/threading/ThreadPool";
import TimersPage from "../../pages/en/csharp/threading/Timers";
//#endregion
import AdvancedPage from "../../pages/en/csharp/Advanced";
import ArrayPage from "../../pages/en/csharp/Array";
import BindingPage from "../../pages/en/csharp/Binding";
import BoxingPage from "../../pages/en/csharp/Boxing";
import CollectionsPage from "../../pages/en/csharp/Collections";
import CovariancePage from "../../pages/en/csharp/Covariance";
import DatatypePage from "../../pages/en/csharp/Datatype";
import DelegatePage from "../../pages/en/csharp/Delegate";
import EnumindexerPage from "../../pages/en/csharp/Enumindexer";
import HashPage from "../../pages/en/csharp/Hash";
import MemberwiseclonePage from "../../pages/en/csharp/Memberwiseclone";
import OperatoroverloadingPage from "../../pages/en/csharp/Operatoroverloading";
import NestedPage from "../../pages/en/csharp/Nested";
import PreprocessordirectivesPage from "../../pages/en/csharp/Preprocessordirectives";
import String2intPage from "../../pages/en/csharp/String2int";
import StringbuilderPage from "../../pages/en/csharp/Stringbuilder";
import ThreadsPage from "../../pages/en/csharp/Threads";
import TuplePage from "../../pages/en/csharp/Tuple";
import UserdefinedtypePage from "../../pages/en/csharp/Userdefinedtype";
import ReferencesPage from "../../pages/en/csharp/References";
//#endregion

export default function Routecsharpen() {
  return (
    <>
      {
        //#region dotnet
      }
      <Route path="/hostedservice" component={HostedservicePage} />
      <Route path="/controller" component={ControllerPage} />
      {
        //#endregion
      }

      {
        //#region Architecture
      }
      <Route path="/clean" component={CleanPage} />
      <Route path="/cqrs" component={CqrsPage} />
      <Route path="/mvc" component={MvcPage} />
      <Route path="/ddd" component={DddPage} />
      {
        //#endregion
      }

      {
        //#region Framework
      }
      <Route path="/assembly" component={AssemblyPage} />
      <Route path="/clr" component={CLRPage} />
      <Route path="/codedom" component={CodedomPage} />
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
      <Route path="/oop" component={OopPage} />
      <Route path="/oop2" component={Oop2Page} />
      <Route path="/oop3" component={Oop3Page} />
      <Route path="/typesystem" component={TypesystemPage} />
      {
        //#endregion
      }

      {
        //#region design pattern
      }
      <Route path="/adapter" component={AdapterPage} />
      <Route path="/command" component={CommandPage} />
      <Route path="/designpattern" component={DesignpatternPage} />
      <Route path="/di" component={DiPage} />
      <Route path="/factory" component={FactoryPage} />
      <Route path="/mediator" component={MediatorPage} />
      <Route path="/observer" component={ObserverPage} />
      <Route path="/singleton" component={SingletonPage} />
      {
        //#endregion
      }

      {
        //#region methodology
      }
      <Route path="/cleancode" component={CleancodePage} />
      <Route path="/cleancode1" component={Cleancode1Page} />
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
        //#region csharp
      }
      <Route path="/csharp9" component={Csharp9Page} />
      <Route path="/csharp10" component={Csharp10Page} />
      <Route path="/csharp11" component={Csharp11Page} />
      <Route path="/dotnetfeatures" component={DotnetfeatuesPage} />
      {
        //#endregion
      }

      {
        //#region algorithme
      }
      <Route path="/algo" component={AlgoPage} />
      <Route path="/recursion" component={RecursionPage} />
      {
        //#endregion
      }

      {
        //#region keywords
      }
      <Route path="/contextual" component={ContextualPage} />
      <Route path="/modifiers" component={ModifiersPage} />
      <Route path="/operators" component={OperatorsPage} />
      <Route path="/parameters" component={ParametersPage} />
      <Route path="/statements" component={StatementsPage} />
      <Route path="/thisbase" component={ThisbasePage} />
      {
        //#endregion
      }

      {
        //#region threading
      }
      <Route path="/autoresetevent" component={AutoResetEventPage} />
      <Route path="/barrier" component={BarrierPage} />
      <Route path="/concurrentcollections" component={ConcurrentCollectionsPage} />
      <Route path="/countdownevent" component={CountdownEventPage} />
      <Route path="/deadlock" component={DeadlockPage} />
      <Route path="/interlocked" component={InterlockedPage} />
      <Route path="/manualresetevent" component={ManualResetEventPage} />
      <Route path="/monitor" component={MonitorPage} />
      <Route path="/mutex" component={MutexPage} />
      <Route path="/parallelloops" component={ParallelLoopsPage} />
      <Route path="/process" component={ProcessPage} />
      <Route path="/readerwriterlock" component={ReaderWriterLockPage} />
      <Route path="/semaphore" component={SemaphorePage} />
      <Route path="/spinlock" component={SpinLockPage} />
      <Route path="/spinwait" component={SpinWaitPage} />
      <Route path="/syncprimitives" component={SyncPrimitivesPage} />
      <Route path="/task" component={TaskPage} />
      <Route path="/threadpool" component={ThreadPoolPage} />
      <Route path="/timers" component={TimersPage} />
      {
        //#endregion
      }

      {
        //#region others
      }
      <Route path="/advanced" component={AdvancedPage} />
      <Route path="/array" component={ArrayPage} />
      <Route path="/binding" component={BindingPage} />
      <Route path="/boxing" component={BoxingPage} />
      <Route path="/collections" component={CollectionsPage} />
      <Route path="/covariance" component={CovariancePage} />
      <Route path="/datatype" component={DatatypePage} />
      <Route path="/delegate" component={DelegatePage} />
      <Route path="/enumindexer" component={EnumindexerPage} />
      <Route path="/hashcode" component={HashPage} />
      <Route path="/memberwiseclone" component={MemberwiseclonePage} />
      <Route path="/operatoroverloading" component={OperatoroverloadingPage} />
      <Route path="/nested" component={NestedPage} />
      <Route
        path="/preprocessordirectives"
        component={PreprocessordirectivesPage}
      />
      <Route path="/string2int" component={String2intPage} />
      <Route path="/stringbuilder" component={StringbuilderPage} />
      <Route path="/threads" component={ThreadsPage} />
      <Route path="/tuple" component={TuplePage} />
      <Route path="/memberwiseclone" component={MemberwiseclonePage} />
      <Route path="/userdefinedtype" component={UserdefinedtypePage} />
      <Route path="/references" component={ReferencesPage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/" />} />
    </>
  );
}
