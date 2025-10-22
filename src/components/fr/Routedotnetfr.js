import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region dotnet
import ControllerPage from "../../pages/fr/dotnet/Controller";
import HostedservicePage from "../../pages/fr/dotnet/Hostedservice";

//#region Architecture
import CqrsPage from "../../pages/fr/dotnet/architecture/Cqrs";
import CleanPage from "../../pages/fr/dotnet/architecture/Clean";
import MvcPage from "../../pages/fr/dotnet/architecture/Mvc";
import DddPage from "../../pages/fr/dotnet/architecture/Ddd";
import EventSourcingPage from "../../pages/fr/dotnet/architecture/EventSourcing";
//#endregion

//#region Csharp
import Csharp9Page from "../../pages/fr/csharp/csharp/Csharp9";
import Csharp10Page from "../../pages/fr/csharp/csharp/Csharp10";
import Csharp11Page from "../../pages/fr/csharp/csharp/Csharp11";
import DotnetfeatuesPage from "../../pages/fr/csharp/csharp/Dotnetfeatues";
//#endregion

//#region algorithme
import AlgoPage from "../../pages/fr/algorithme/Algo";
import RecursionPage from "../../pages/fr/algorithme/Recursion";
//#endregion

//#region Framework
import DotnetPage from "../../pages/fr/dotnet/framework/Dotnet";
import DotnetcomponentsPage from "../../pages/fr/dotnet/framework/Dotnetcomponents";
import AssemblyPage from "../../pages/fr/dotnet/framework/Assembly";
import CLRPage from "../../pages/fr/dotnet/framework/Clr";
import CodedomPage from "../../pages/fr/dotnet/framework/Codedom";
import DllexePage from "../../pages/fr/dotnet/framework/Dllexe";
import EntityframeworkPage from "../../pages/fr/dotnet/framework/Entityframework";
import GcPage from "../../pages/fr/dotnet/framework/Gc";
import GcmethodsPage from "../../pages/fr/dotnet/framework/Gcmethods";
import LinqPage from "../../pages/fr/dotnet/framework/Linq";
import NugetpackagesPage from "../../pages/fr/dotnet/framework/Nugetpackages";
import ConnectionPoolingPage from "../../pages/en/dotnet/framework/ConnectionPooling";
import DbContextPage from "../../pages/en/dotnet/framework/DbContext";
import ModelBindingPage from "../../pages/en/dotnet/framework/ModelBinding";
import RepositoryPage from "../../pages/en/dotnet/framework/Repository";
import UnitOfWorkPage from "../../pages/en/dotnet/framework/UnitOfWork";
//#endregion

//#region OOP
import OopPage from "../../pages/fr/dotnet/oop/Oop";
import Oop2Page from "../../pages/fr/dotnet/oop/Oop2";
import Oop3Page from "../../pages/fr/dotnet/oop/Oop3";
import CompositionPage from "../../pages/fr/dotnet/oop/Composition";
import TypesystemPage from "../../pages/fr/dotnet/oop/Typesystem";
//#endregion

//#region Http
import CachingPage from "../../pages/fr/dotnet/http/Caching";
import ControllervuedataPage from "../../pages/fr/dotnet/http/Controllervuedata";
import HttpsPage from "../../pages/fr/dotnet/http/Https";
import HttpmethodsPage from "../../pages/fr/dotnet/http/Httpmethods";
import JwtPage from "../../pages/fr/dotnet/http/Jwt";
import MiddlewarePage from "../../pages/fr/dotnet/http/Middleware";
import WebSocketPage from "../../pages/fr/dotnet/http/WebSocket";
import FiltersPage from "../../pages/fr/dotnet/http/Filters";
//#endregion

//#region design pattern
import AdapterPage from "../../pages/fr/dotnet/design/Adapter";
import DesignpatternPage from "../../pages/fr/dotnet/design/Designpattern";
import DiPage from "../../pages/fr/dotnet/design/Di";
import SingletonPage from "../../pages/fr/dotnet/design/Singleton";
import MediatorPage from "../../pages/fr/dotnet/design/Mediator";
import ObserverPage from "../../pages/fr/dotnet/design/Observer";
import FactoryPage from "../../pages/fr/dotnet/design/Factory";
import CommandPage from "../../pages/fr/dotnet/design/Command";
//#endregion

//#region methodology
import CleancodePage from "../../pages/fr/dotnet/methodology/Cleancode";
import Cleancode1Page from "../../pages/fr/dotnet/methodology/Cleancode1";
import SolidPage from "../../pages/fr/dotnet/methodology/Solid";
import TddPage from "../../pages/fr/dotnet/methodology/Tdd";
import IdealsPage from "../../pages/fr/dotnet/methodology/Ideals";
import ResolveConflictPage from "../../pages/fr/dotnet/methodology/ResolveConflict";
//#endregion

//#region Host Deployment
import WebHostPage from "../../pages/fr/dotnet/hostdeploy/WebHost";
import DockerPage from "../../pages/fr/dotnet/hostdeploy/Docker";
import IISDeployPage from "../../pages/fr/dotnet/hostdeploy/IISDeploy";
import NGINXDeployPage from "../../pages/fr/dotnet/hostdeploy/NGINXDeploy";
import DockerDeployPage from "../../pages/fr/dotnet/hostdeploy/DockerDeploy";
import CICDPage from "../../pages/fr/dotnet/hostdeploy/CICD";
//#endregion

//#endregion

//#region csharp

//#region Keywords
import ModifiersPage from "../../pages/fr/csharp/keywords/Modifiers";
import ContextualPage from "../../pages/fr/csharp/keywords/Contextual";
import OperatorsPage from "../../pages/fr/csharp/keywords/Operators";
import ParametersPage from "../../pages/fr/csharp/keywords/Parameters";
import StatementsPage from "../../pages/fr/csharp/keywords/Statements";
import ThisbasePage from "../../pages/fr/csharp/keywords/Thisbase";
//#endregionading
import AutoResetEventPage from "../../pages/fr/csharp/threading/AutoResetEvent";
import BarrierPage from "../../pages/fr/csharp/threading/Barrier";
import ConcurrentCollectionsPage from "../../pages/fr/csharp/threading/ConcurrentCollections";
import CountdownEventPage from "../../pages/fr/csharp/threading/CountdownEvent";
import DeadlockPage from "../../pages/fr/csharp/threading/Deadlock";
import InterlockedPage from "../../pages/fr/csharp/threading/Interlocked";
import ManualResetEventPage from "../../pages/fr/csharp/threading/ManualResetEvent";
import MonitorPage from "../../pages/fr/csharp/threading/Monitor";
import MutexPage from "../../pages/fr/csharp/threading/Mutex";
import ParallelLoopsPage from "../../pages/fr/csharp/threading/ParallelLoops";
import ProcessPage from "../../pages/fr/csharp/threading/Process";
import ReaderWriterLockPage from "../../pages/fr/csharp/threading/ReaderWriterLock";
import SemaphorePage from "../../pages/fr/csharp/threading/Semaphore";
import SpinLockPage from "../../pages/fr/csharp/threading/SpinLock";
import SpinWaitPage from "../../pages/fr/csharp/threading/SpinWait";
import SyncPrimitivesPage from "../../pages/fr/csharp/threading/SyncPrimitives";
import TaskPage from "../../pages/fr/csharp/threading/Task";
import ThreadPoolPage from "../../pages/fr/csharp/threading/ThreadPool";
import TimersPage from "../../pages/fr/csharp/threading/Timers";
//#endregion
import AdvancedPage from "../../pages/fr/csharp/Advanced";
import ArrayPage from "../../pages/fr/csharp/Array";
import BindingPage from "../../pages/fr/csharp/Binding";
import BoxingPage from "../../pages/fr/csharp/Boxing";
import CollectionsPage from "../../pages/fr/csharp/Collections";
import CovariancePage from "../../pages/fr/csharp/Covariance";
import DatatypePage from "../../pages/fr/csharp/Datatype";
import DelegatePage from "../../pages/fr/csharp/Delegate";
import EnumindexerPage from "../../pages/fr/csharp/Enumindexer";
import HashPage from "../../pages/fr/csharp/Hash";
import MemberwiseclonePage from "../../pages/fr/csharp/Memberwiseclone";
import OperatoroverloadingPage from "../../pages/fr/csharp/Operatoroverloading";
import NestedPage from "../../pages/fr/csharp/Nested";
import PreprocessordirectivesPage from "../../pages/fr/csharp/Preprocessordirectives";
import String2intPage from "../../pages/fr/csharp/String2int";
import StringbuilderPage from "../../pages/fr/csharp/Stringbuilder";
import ThreadsPage from "../../pages/fr/csharp/Threads";
import TuplePage from "../../pages/fr/csharp/Tuple";
import UserdefinedtypePage from "../../pages/fr/csharp/Userdefinedtype";
//#endregion

//#region Architecture
import CAPPage from "../../pages/fr/dotnet/microservices/CAP";
import CreateProjectPage from "../../pages/fr/dotnet/microservices/CreateProject";
import GrpcPage from "../../pages/fr/dotnet/microservices/Grpc";
import IdentityServerPage from "../../pages/fr/dotnet/microservices/IdentityServer";
import MessageBrokerPage from "../../pages/fr/dotnet/microservices/MessageBroker";
import MicroservicePage from "../../pages/fr/dotnet/microservices/Microservice";
import OcelotPage from "../../pages/fr/dotnet/microservices/Ocelot";
import PollyPage from "../../pages/fr/dotnet/microservices/Polly";
import ResiliencePage from "../../pages/fr/dotnet/microservices/Resilience";
import SagaPage from "../../pages/fr/dotnet/microservices/Saga";
import SecurityPage from "../../pages/fr/dotnet/microservices/Security";
import ServiceDiscoveryPage from "../../pages/fr/dotnet/microservices/ServiceDiscovery";
import TracingPage from "../../pages/fr/dotnet/microservices/Tracing";
import VersioningPage from "../../pages/fr/dotnet/microservices/Versioning";
import TenantPage from "../../pages/fr/dotnet/microservices/Tenant";
import UnitTestingPage from "../../pages/fr/dotnet/microservices/UnitTesting";
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
        //#endregion
      }

      {
        //#region Architecture
      }
      <Route path="/clean" component={CleanPage} />
      <Route path="/cqrs" component={CqrsPage} />
      <Route path="/event-sourcing" component={EventSourcingPage} />
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
      <Route path="/connection-pooling" component={ConnectionPoolingPage} />
      <Route path="/dbcontext" component={DbContextPage} />
      <Route path="/model-binding" component={ModelBindingPage} />
      <Route path="/repository" component={RepositoryPage} />
      <Route path="/unit-of-work" component={UnitOfWorkPage} />
      {
        //#endregion
      }

      {
        //#region Host Deploy
      }
      <Route path="/iis-deploy" component={IISDeployPage} />
      <Route path="/docker" component={DockerPage} />
      <Route path="/nginx-deploy" component={NGINXDeployPage} />
      <Route path="/docker-deploy" component={DockerDeployPage} />
      <Route path="/web-hosting" component={WebHostPage} />
      <Route path="/cicd" component={CICDPage} />
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
      <Route path="/filters" component={FiltersPage} />
      <Route path="/jwt" component={JwtPage} />
      <Route path="/middleware" component={MiddlewarePage} />
      <Route path="/websocket" component={WebSocketPage} />
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
      <Route path="/tdd" component={TddPage} />
      <Route path="/ideals" component={IdealsPage} />
      <Route path="/resolve-conflict" component={ResolveConflictPage} />
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
      <Route
        path="/concurrentcollections"
        component={ConcurrentCollectionsPage}
      />
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
      <Route path="/hashcode" component={HashPage} />
      <Route path="/datatype" component={DatatypePage} />
      <Route path="/delegate" component={DelegatePage} />
      <Route path="/enumindexer" component={EnumindexerPage} />
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
      {
        //#endregion
      }

      {
        //#region Microservices
      }
      <Route path="/cap" component={CAPPage} />
      <Route path="/create-project" component={CreateProjectPage} />
      <Route path="/grpc" component={GrpcPage} />
      <Route path="/identity-server" component={IdentityServerPage} />
      <Route path="/message-broker" component={MessageBrokerPage} />
      <Route path="/service" component={MicroservicePage} />
      <Route path="/ocelot" component={OcelotPage} />
      <Route path="/polly" component={PollyPage} />
      <Route path="/resilience" component={ResiliencePage} />
      <Route path="/saga" component={SagaPage} />
      <Route path="/security" component={SecurityPage} />
      <Route path="/service-discovery" component={ServiceDiscoveryPage} />
      <Route path="/tracing" component={TracingPage} />
      <Route path="/unit-testing" component={UnitTestingPage} />
      <Route path="/versionning" component={VersioningPage} />
      <Route path="/tenant" component={TenantPage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/" />} />
    </>
  );
}
