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
                Dynamic Programming allows applications to be extended with code
                that is not compiled into the application. It based on many
                features :
              </p>
              <ul>
                <li>
                  <b>Reflection</b> :{" "}
                </li>
                <li>
                  <b>Emitting Dynamic Methods and Assemblies</b> :
                </li>
                <li>
                  <b>DLR (Dynamic Language Runtime)</b> :
                </li>
                <li>
                  <b>Dynamic Source Code Generation and Compilation</b> :
                </li>
              </ul>
            </div>
          </article>
          <article id="reflection">
            <h6>Reflection</h6>
            <div>
              <p>
                The classes in the System.Reflection namespace, together with
                System.Type, enable you to obtain information about loaded
                assemblies and the types defined within them, such as classes,
                interfaces, and value types (that is, structures and
                enumerations). You can also use reflection to create type
                instances at run time, and to invoke and access them.
              </p>
              <p>Typical uses of reflection include the following:</p>
              <ul>
                <li>
                  <p>
                    Use{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.assembly"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Assembly
                    </a>{" "}
                    to define and load assemblies, load modules that are listed
                    in the assembly manifest, and locate a type from this
                    assembly and create an instance of it.
                  </p>
                </li>
                <li>
                  <p>
                    Use{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.module"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Module
                    </a>{" "}
                    to discover information such as the assembly that contains
                    the module and the classes in the module. You can also get
                    all global methods or other specific, non-global methods
                    defined on the module.
                  </p>
                </li>
                <li>
                  <p>
                    Use{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.constructorinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      ConstructorInfo
                    </a>{" "}
                    to discover information such as the name, parameters, access
                    modifiers (such as <code>public</code> or{" "}
                    <code>private</code>), and implementation details (such as{" "}
                    <code>abstract</code> or <code>virtual</code>) of a
                    constructor. Use the{" "}
                    <a
                      href="/en-us/dotnet/api/system.type.getconstructors"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetConstructors
                    </a>{" "}
                    or{" "}
                    <a
                      href="/en-us/dotnet/api/system.type.getconstructor"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetConstructor
                    </a>{" "}
                    method of a{" "}
                    <a
                      href="/en-us/dotnet/api/system.type"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Type
                    </a>{" "}
                    to invoke a specific constructor.
                  </p>
                </li>
                <li>
                  <p>
                    Use{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.methodinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      MethodInfo
                    </a>{" "}
                    to discover information such as the name, return type,
                    parameters, access modifiers (such as <code>public</code> or{" "}
                    <code>private</code>), and implementation details (such as{" "}
                    <code>abstract</code> or <code>virtual</code>) of a method.
                    Use the{" "}
                    <a
                      href="/en-us/dotnet/api/system.type.getmethods"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetMethods
                    </a>{" "}
                    or{" "}
                    <a
                      href="/en-us/dotnet/api/system.type.getmethod"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetMethod
                    </a>{" "}
                    method of a{" "}
                    <a
                      href="/en-us/dotnet/api/system.type"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Type
                    </a>{" "}
                    to invoke a specific method.
                  </p>
                </li>
                <li>
                  <p>
                    Use{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.fieldinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      FieldInfo
                    </a>{" "}
                    to discover information such as the name, access modifiers
                    (such as <code>public</code> or <code>private</code>) and
                    implementation details (such as <code>static</code>) of a
                    field, and to get or set field values.
                  </p>
                </li>
                <li>
                  <p>
                    Use{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.eventinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      EventInfo
                    </a>{" "}
                    to discover information such as the name, event-handler data
                    type, custom attributes, declaring type, and reflected type
                    of an event, and to add or remove event handlers.
                  </p>
                </li>
                <li>
                  <p>
                    Use{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.propertyinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      PropertyInfo
                    </a>{" "}
                    to discover information such as the name, data type,
                    declaring type, reflected type, and read-only or writable
                    status of a property, and to get or set property values.
                  </p>
                </li>
                <li>
                  <p>
                    Use{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.parameterinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      ParameterInfo
                    </a>{" "}
                    to discover information such as a parameter's name, data
                    type, whether a parameter is an input or output parameter,
                    and the position of the parameter in a method signature.
                  </p>
                </li>
                <li>
                  <p>
                    Use{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.customattributedata"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      CustomAttributeData
                    </a>{" "}
                    to discover information about custom attributes when you are
                    working in the reflection-only context of an application
                    domain.{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.customattributedata"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      CustomAttributeData
                    </a>{" "}
                    allows you to examine attributes without creating instances
                    of them. The classes of the{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.emit"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      System.Reflection.Emit
                    </a>{" "}
                    namespace provide a specialized form of reflection that
                    enables you to build types at run time.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="reflection-emit">
            <h6>Emitting Dynamic Methods and Assemblies</h6>
            <div>
              <p>
                This section describes a set of managed types in the
                <code>System.Reflection.Emit</code> namespace that allow a
                compiler or tool to emit metadata and Microsoft intermediate
                language (MSIL) at run time and optionally generate a portable
                executable (PE) file on disk.
              </p>
              <p>Reflection emit provides the following capabilities:</p>
              <ul>
                <li>
                  <p>
                    Define lightweight global methods at run time, using the{" "}
                    <a
                      href="/en-us/dotnet/api/system.reflection.emit.dynamicmethod"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      DynamicMethod
                    </a>{" "}
                    class, and execute them using delegates.
                  </p>
                </li>
                <li>
                  <p>
                    Define assemblies at run time and then run them and/or save
                    them to disk.
                  </p>
                </li>
                <li>
                  <p>
                    Define assemblies at run time, run them, and then unload
                    them and allow garbage collection to reclaim their
                    resources.
                  </p>
                </li>
                <li>
                  <p>
                    Define modules in new assemblies at run time and then run
                    and/or save them to disk.
                  </p>
                </li>
                <li>
                  <p>
                    Define types in modules at run time, create instances of
                    these types, and invoke their methods.
                  </p>
                </li>
                <li>
                  <p>
                    Define symbolic information for defined modules that can be
                    used by tools such as debuggers and code profilers.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="dlr">
            <h6>DLR</h6>
            <p>
              The <em>dynamic language runtime</em> (DLR) is a runtime
              environment that adds a set of services for dynamic languages to
              the common language runtime (CLR). The DLR makes it easier to
              develop dynamic languages to run on the .NET Framework and to add
              dynamic features to statically typed languages.
            </p>
          </article>
          <article id="code-dom">
            <h6>Dynamic Source Code Generation and Compilation</h6>
            <div>
              <p>
                The .NET Framework includes a mechanism called the Code Document
                Object Model (CodeDOM) that enables developers of programs that
                emit source code to generate source code in multiple programming
                languages at run time, based on a single model that represents
                the code to render.
              </p>
              <p>
                The System.CodeDom namespace defines types that can represent
                the logical structure of source code, independent of a specific
                programming language. The System.CodeDom.Compiler namespace
                defines types for generating source code from CodeDOM graphs and
                managing the compilation of source code in supported languages.
                Compiler vendors or developers can extend the set of supported
                languages.
              </p>
              <p>
                The .NET Framework includes code generators and code compilers
                for CSharpCodeProvider, JScriptCodeProvider, and VBCodeProvider.
              </p>
              <dl>
                <dt>System.CodeDom</dt>
                <dd>
                  Contains classes that can be used to represent the elements
                  and structure of a source code document. The classes in this
                  namespace can be used to model the structure of a source code
                  document that can be output as source code in a supported
                  language using the functionality provided by the
                  System.CodeDom.Compiler namespace.
                </dd>
                <dt>System.CodeDom.Compiler</dt>
                <dd>
                  Contains types for managing the generation and compilation of
                  source code in supported programming languages. Code
                  generators can each produce source code in a particular
                  programming language based on the structure of Code Document
                  Object Model (CodeDOM) source code models consisting of
                  elements provided by the System.CodeDom namespace.
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
