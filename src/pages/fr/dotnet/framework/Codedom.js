import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Codedom() {
  return (
    <>
      <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
        <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
        <nav className="small" id="toc">
          <ul className="list-unstyled">
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Contents
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#introduction"
                  >
                    Dynamic programming
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#reflection"
                  >
                    Reflection
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#reflection-emit"
                  >
                    Reflection.Emit
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dlr"
                  >
                    DLR
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#code-dom"
                  >
                    CodeDom
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#code"
                  >
                    Create Class
                  </a>
                </li>
              </ul>
            </li>
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Related links
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dotnetcomponents"
                  >
                    .Net Components
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dotnet"
                  >
                    Difference Between .NET and .NET Core
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/assembly"
                  >
                    Assembly
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dllexe"
                  >
                    DLL vs EXE
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/entityframework"
                  >
                    Entity Framework
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gc"
                  >
                    Garbage Collector &amp; stack vs heap
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gcmethods"
                  >
                    GC Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/linq"
                  >
                    Linq
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/nugetpackages"
                  >
                    Nuget packages
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Dynamic Programming</h3>
          <article id="introduction">
            <h6>Common Runtime Language (CLR)</h6>
            <div>
              <p>
                La programmation dynamique permet aux applications d'être
                étendues avec du code qui n'est pas compilé dans l'application.
                Elle repose sur de nombreuses fonctionnalités :
              </p>
              <ul>
                <li>
                  <b>Reflection</b> :{" "}
                </li>
                <li>
                  <b>Émission d'assemblys et de méthodes dynamiques</b> :
                </li>
                <li>
                  <b>DLR (Dynamic Language Runtime)</b> :
                </li>
                <li>
                  <b>Génération et compilation de code source dynamique</b> :
                </li>
              </ul>
            </div>
          </article>
          <article id="reflection">
            <h6>Reflection</h6>
            <div>
              <p>
                Les classes de l' System.Reflection espace de noms, ainsi
                System.Type que, vous permettent d’obtenir des informations sur
                les System.Reflection chargés et les types définis dans ceux-ci,
                tels que les System.Type, les interfaceset les types valeur
                (autrement dit, les structures et les énumérations). Vous pouvez
                également utiliser la réflexion pour créer des instances de
                types au moment de l'exécution, et pour les appeler et y
                accéder.
              </p>
              <p>
                Les utilisations courantes de la réflexion sont les suivantes :
              </p>
              <ul>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.assembly"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Assembly
                    </a>{" "}
                    pour définir et charger des assemblys, charger les modules
                    répertoriés dans le manifeste d'assembly, et pour localiser
                    un type de cet assembly et créer une instance de celui-ci.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.module"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Module
                    </a>{" "}
                    pour découvrir des informations comme l'assembly qui
                    contient le module et les classes de ce module. Vous pouvez
                    également récupérer toutes les méthodes globales ou d’autres
                    méthodes spécifiques non globales définies sur le module.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.constructorinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      ConstructorInfo
                    </a>{" "}
                    pour découvrir des informations comme le nom, les
                    paramètres, les modificateurs d'accès (comme{" "}
                    <code>public</code> ou <code>private</code>) et les détails
                    d'implémentation (comme <code>abstract</code> ou{" "}
                    <code>virtual</code>) d'un constructeur. Utilisez la méthode{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type.getconstructors"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetConstructors
                    </a>{" "}
                    ou{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type.getconstructor"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetConstructor
                    </a>{" "}
                    d'un type{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Type
                    </a>{" "}
                    pour appeler un constructeur spécifique.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.methodinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      MethodInfo
                    </a>{" "}
                    pour découvrir des informations comme le nom, le type de
                    retour, les paramètres, les modificateurs d'accès (comme{" "}
                    <code>public</code> ou <code>private</code>) et les détails
                    d'implémentation (comme <code>abstract</code> ou{" "}
                    <code>virtual</code>) d'une méthode. Utilisez la méthode{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type.getmethods"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetMethods
                    </a>{" "}
                    ou{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type.getmethod"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetMethod
                    </a>{" "}
                    d'un type{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Type
                    </a>{" "}
                    pour appeler une méthode spécifique.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.fieldinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      FieldInfo
                    </a>{" "}
                    pour découvrir des informations comme le nom, les
                    modificateurs d'accès (comme <code>public</code> ou{" "}
                    <code>private</code>) et les détails d'implémentation (comme{" "}
                    <code>static</code>) d'un champ, et pour obtenir ou définir
                    les valeurs du champ.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.eventinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      EventInfo
                    </a>{" "}
                    pour découvrir des informations comme le nom, le type de
                    données du gestionnaire d'événements, les attributs
                    personnalisés, le type déclarant et le type réfléchi d'un
                    événement, et pour ajouter ou supprimer des gestionnaires
                    d'événements.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.propertyinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      PropertyInfo
                    </a>{" "}
                    pour découvrir des informations comme le nom, le type de
                    données, le type déclarant, le type réfléchi, et l'état en
                    lecture seule ou en écriture d'une propriété, et pour
                    obtenir ou définir les valeurs de la propriété.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.parameterinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      ParameterInfo
                    </a>{" "}
                    pour découvrir des informations comme le nom d'un paramètre,
                    son type de données, si un paramètre est un paramètre
                    d'entrée ou de sortie, et la position du paramètre dans la
                    signature d'une méthode.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.customattributedata"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      CustomAttributeData
                    </a>{" "}
                    pour découvrir des informations sur les attributs
                    personnalisés quand vous travaillez dans le contexte de
                    réflexion uniquement d'un domaine d'application.{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.customattributedata"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      CustomAttributeData
                    </a>{" "}
                    vous permet d'examiner des attributs sans créer des
                    instances de ceux-ci. Les classes de l'espace de noms{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.emit"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      System.Reflection.Emit
                    </a>{" "}
                    fournissent une forme de réflexion spécialisée qui vous
                    permet de créer des types au moment de l'exécution.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="reflection-emit">
            <h6>Emitting Dynamic Methods and Assemblies</h6>
            <div>
              <p>
                Cette section décrit un ensemble de types managés dans l'espace
                de noms{" "}
                <a
                  href="/fr-fr/dotnet/api/system.reflection.emit"
                  class="no-loc"
                  data-linktype="absolute-path"
                >
                  System.Reflection.Emit
                </a>
                , qui permettent à un compilateur ou à un outil d'émettre des
                métadonnées et du langage MSIL (Microsoft Intermediate Language)
                au moment de l'exécution et de générer éventuellement un fichier
                exécutable portable sur le disque. Les moteurs de script et les
                compilateurs sont les principaux utilisateurs de cet espace de
                noms. Dans cette section, la fonctionnalité fournies par
                l'espace de noms{" "}
                <a
                  href="/fr-fr/dotnet/api/system.reflection.emit"
                  class="no-loc"
                  data-linktype="absolute-path"
                >
                  System.Reflection.Emit
                </a>{" "}
                est appelée émission de réflexion.
              </p>
              <p>L'émission de réflexion offre les possibilités suivantes :</p>
              <ul>
                <li>
                  <p>
                    Définir des méthodes globales légères au moment de
                    l'exécution à l'aide de la classe{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.emit.dynamicmethod"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      DynamicMethod
                    </a>
                    , et les exécuter à l'aide de délégués.
                  </p>
                </li>
                <li>
                  <p>
                    Définir des assemblys au moment de l'exécution, puis les
                    exécuter et/ou les enregistrer sur disque.
                  </p>
                </li>
                <li>
                  <p>
                    Définir des assemblys au moment de l'exécution, les
                    exécuter, puis les décharger et autoriser le garbage
                    collection à libérer leurs ressources.
                  </p>
                </li>
                <li>
                  <p>
                    Définir des modules dans de nouveaux assemblys au moment de
                    l'exécution, puis les exécuter et/ou les enregistrer sur
                    disque.
                  </p>
                </li>
                <li>
                  <p>
                    Définir des types dans des modules au moment de l'exécution,
                    créer des instances de ces types et appeler leurs méthodes.
                  </p>
                </li>
                <li>
                  <p>
                    Définir des informations symboliques pour des modules
                    définis, qui peut être utilisées par des outils comme des
                    débogueurs et des profileurs de code.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="dlr">
            <h6>DLR</h6>
            <p>
              Le <em>Dynamic Language Runtime</em> (DLR) est un environnement
              d’exécution ajoutant au Common Language Runtime (CLR) un ensemble
              de services pour les langages dynamiques. Le DLR simplifie le
              développement de langages dynamiques à exécuter sur le .NET
              Framework et l’ajout de fonctionnalités dynamiques aux langages
              typés statiquement.
            </p>
          </article>
          <article id="code-dom">
            <h6>Génération et compilation de code source dynamique</h6>
            <div>
              <p>
                Le .NET Framework inclut un mécanisme appelé CodeDOM (Code
                Document Object Model) qui permet aux développeurs d’émettre du
                code source pour générer du code source dans plusieurs langages
                de programmation au moment de l’exécution, en fonction d’un
                modèle unique qui représente le code à restituer.
              </p>
              <p>
                L’espace de noms System.CodeDom définit les types qui peuvent
                représenter la structure logique du code source, indépendamment
                d’un langage de programmation spécifique. L’espace de noms
                System.CodeDom.Compiler définit les types pour la génération du
                code source à partir des graphiques CodeDOM et la gestion de la
                compilation du code source dans les langages pris en charge. Les
                fournisseurs de compilateurs ou les développeurs peuvent étendre
                l’ensemble des langages pris en charge.
              </p>
              <p>
                Le .NET Framework inclut des générateurs et des compilateurs de
                code pour CSharpCodeProvider, JScriptCodeProvider et
                VBCodeProvider.
              </p>
              <dl>
                <dt>System.CodeDom</dt>
                <dd>
                  <p>
                    Contient des classes qui peuvent être utilisées pour
                    représenter les éléments et la structure d’un document de
                    code source. Les classes de cet espace de noms peuvent être
                    utilisées pour créer la structure d'un document de code
                    source qui peut s'afficher comme code source dans un langage
                    pris en charge à l'aide de la fonctionnalité fournie par
                    l'espace de noms{" "}
                    <a
                      class="no-loc"
                      href="https://docs.microsoft.com/fr-fr/dotnet/api/system.codedom.compiler?view=dotnet-plat-ext-6.0"
                      data-linktype="relative-path"
                    >
                      System.CodeDom.Compiler
                    </a>
                    .
                  </p>
                </dd>
                <dt>System.CodeDom.Compiler</dt>
                <dd>
                  <p>
                    Contient des types permettant de gérer la génération et la
                    compilation de code source dans les langages de
                    programmation pris en charge. Chaque générateur de code peut
                    produire du code source dans un langage de programmation
                    spécifique, basé sur la structure des modèles de code source
                    CodeDOM (Code Document Object Model) qui contiennent des
                    éléments fournis par l'espace de noms{" "}
                    <a
                      class="no-loc"
                      href="https://docs.microsoft.com/fr-fr/dotnet/api/system.codedom?view=net-6.0"
                      data-linktype="relative-path"
                    >
                      System.CodeDom
                    </a>
                    .
                  </p>
                </dd>
              </dl>
            </div>
          </article>
          <article id="code">
            <h6>Create class</h6>
            <Highlight language="csharp">
              {`CodeCompileUnit compileUnit = new CodeCompileUnit();
CodeNamespace myNamespace = new CodeNamespace("SkillValue");
myNamespace.Imports.Add(new CodeNamespaceImport("System"));
CodeTypeDeclaration logClass = new CodeTypeDeclaration("LoggerOutput");
CodeMemberMethod start = new CodeMemberMethod()
{
    ReturnType = new CodeTypeReference(typeof(void)),
    Name = "LogHello"
};
CodeMethodInvokeExpression methodInvoke = new CodeMethodInvokeExpression(
    new CodeTypeReferenceExpression("Console"),
    "WriteLine",
    new CodePrimitiveExpression("Hello World!"));
compileUnit.Namespaces.Add(myNamespace);
myNamespace.Types.Add(logClass);
logClass.Members.Add(start);
start.Statements.Add(methodInvoke);`}
            </Highlight>
          </article>
        </section>
      </div>
    </>
  );
}
