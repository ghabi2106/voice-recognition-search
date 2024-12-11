import React from "react";
import { Link } from "react-router-dom";

export default function Dotnetfeatues() {
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
                    href="#dotnet8"
                  >
                    Dotnet8
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dotnet8-dotnet5"
                  >
                    .Net8 vs .Net5
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dotnet7"
                  >
                    Dotnet7
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dotnet6"
                  >
                    Dotnet6
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dotnet5"
                  >
                    Dotnet5
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
                    to="/hostedservice"
                  >
                    IHostedService, BackgroundService
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/csharp9"
                  >
                    New features in C# 10
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
          <h3>What is new in Dotnet</h3>
          <article id="dotnet8">
            <h6>New Features in .Net 8</h6>
            <div class="markdown prose w-full break-words dark:prose-invert light">
              <h6>
                <strong>Key Features in .NET 8</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Performance Enhancements</strong>:
                    <ul>
                      <li>
                        Introduction of Dynamic Profile-Guided Optimization
                        (PGO) improves app performance by up to 20%.
                        <ul>
                          <li>
                            Dynamic PGO utilizes runtime data to guide the JIT
                            (Just-In-Time) compiler in making more informed
                            decisions about code optimization
                          </li>
                          <li>
                            Benefits
                            <ul>
                              <li>
                                <strong>Improved Performance</strong>: Faster
                                execution for workloads with predictable
                                patterns, especially for web servers, API
                                endpoints, and database-driven applications.
                              </li>
                              <li>
                                <strong>Resource Efficiency</strong>: Better CPU
                                utilization and reduced overhead in managing
                                code execution.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Optimizations in methods like{" "}
                        <code>
                          List&lt;T&gt;.AddRange(IEnumerable&lt;T&gt;)
                        </code>
                        .
                        <ul>
                          <li>
                            List&lt;T&gt;.AddRange(IEnumerable&lt;T&gt;) method
                            has been optimized to enhance performance,
                            particularly for scenarios where a large number of
                            items are added to a list at once
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>C# 12 Enhancements</strong>:
                    <ul>
                      <li>
                        Simplified syntax with primary constructors for classes
                        and structs.
                      </li>
                      <li>
                        Enhanced lambda expressions with default parameter
                        values.
                      </li>
                      <li>
                        New concise collection expressions for initializing
                        arrays and spans.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>ASP.NET Core 8</strong>:
                    <ul>
                      <li>
                        Improved support for Minimal APIs, including form
                        binding and antiforgery protection.
                        <ul>
                          <li>
                            <strong>Feature</strong>: Binding support for{" "}
                            <code>IFormFile</code> and{" "}
                            <code>IFormFileCollection</code>.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Enhanced Blazor capabilities, such as combining client-
                        and server-side rendering in a single app.
                      </li>
                      <li>
                        Blazor WebAssembly gains AOT compilation, Webcil
                        packaging, and improved debugging support.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Entity Framework Core 8</strong>:
                    <ul>
                      <li>
                        Support for complex types as value objects and primitive
                        collections.
                      </li>
                      <li>Lazy-loading for no-tracking queries.</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cloud-Native Stack (ASP.NET Aspire)</strong>:
                    <ul>
                      <li>
                        New features for resilient, observable cloud-native
                        applications, such as health checks and telemetry.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Artificial Intelligence Integration</strong>:
                    <ul>
                      <li>
                        Native integration with large language models like
                        OpenAI's GPT.
                      </li>
                      <li>
                        Improved support for generative AI in .NET applications
                        via System.Numeric enhancements.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Improved Developer Tools</strong>:
                    <ul>
                      <li>
                        Updated Visual Studio (2022 version 17.8) supports all
                        .NET 8 features.
                      </li>
                      <li>
                        Enhanced .NET MAUI support for cross-platform
                        development.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cross-Platform Support</strong>:
                    <ul>
                      <li>Enhanced ARM64 performance and features.</li>
                      <li>
                        Native AOT support for WebAssembly and Android, reducing
                        deployment size and memory usage.
                      </li>
                    </ul>
                  </p>
                </li>
              </ol>
            </div>
          </article>
          <article id="dotnet8-dotnet5">
            <h6>.Net 8 vs .Net 5</h6>
            <div class="markdown prose w-full break-words dark:prose-invert light">
              <ol>
                <li>
                  <p>
                    <strong>Performance Improvements</strong>:
                    <ul>
                      <li>
                        .NET 8 offers up to a{" "}
                        <strong>15% performance boost</strong> over .NET 5, with
                        optimizations in areas like memory management and
                        garbage collection, reducing memory consumption by up to{" "}
                        <strong>20%</strong>​ .
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>New APIs and Libraries</strong>:
                    <ul>
                      <li>
                        .NET 8 introduces several new libraries, including{" "}
                        <code>APIsForDotNET</code> to speed up coding and a{" "}
                        <strong>DataFrame library</strong> for handling large
                        datasets, improving data processing speeds by up to{" "}
                        <strong>30%</strong>​ .
                      </li>
                      <li>
                        The <strong>DotNETMachineLearning</strong> API is a
                        notable new feature, offering more than{" "}
                        <strong>25 machine learning algorithms</strong>,
                        integrating AI into .NET apps​ .
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cross-platform Development</strong>:
                    <ul>
                      <li>
                        .NET 8 continues the unified cross-platform approach,
                        supporting multiple languages and environments, with
                        support for over <strong>50 languages</strong>​ .
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cloud-Native and Containerization</strong>:
                    <ul>
                      <li>
                        With <strong>.NET Aspire</strong>, .NET 8 enhances
                        cloud-native capabilities, aligning with modern software
                        architectures like microservices and containerization​ .
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Simplified Code and Development</strong>:
                    <ul>
                      <li>
                        Features like primary constructors for classes and
                        structs simplify syntax, reducing boilerplate code​ .
                      </li>
                    </ul>
                  </p>
                </li>
              </ol>
              <p>
                Overall, .NET 8 brings more powerful, performance-optimized
                features, enhanced libraries, and a smoother experience for
                cloud and cross-platform development compared to .NET 5. These
                improvements make it a strong choice for both new projects and
                upgrading existing ones.
              </p>
            </div>
          </article>
          <article id="dotnet7">
            <h6>New Features in .Net 7</h6>
            <div>
              <ul>
                <li>Native AOT</li>
                <li>Regex</li>
                <li>hot reload</li>
                <li>Default GC regions</li>
                <li>ASP.NET Core startup time improvements</li>
                <li>Observability</li>
                <li>System.Text.Json</li>
                <li>
                  System.Reflection performance improvements when invoking
                  members
                </li>
                <li>Generic Math</li>
                <li>CodeGen</li>
              </ul>
            </div>
          </article>
          <article id="dotnet6">
            <h6>New Features in .Net 6</h6>
            <div>
              <p>
                Better performance: .NET 6 is the fastest full stack web
                framework, which lowers compute costs if you're running in the
                cloud.
              </p>
              <p>
                provide hot reload, new git tooling, intelligent code editing,
                robust diagnostics and testing tools, and better team
                collaboration.
              </p>
              <ul>
                <li>Hot reload</li>
                <li>Reflection APIs</li>
                <li>HTTP/3</li>
                <li>System.Text.Json APIs</li>
                <li>Arm64 support</li>
                <li>FileStream</li>
              </ul>
            </div>
          </article>
          <article id="dotnet5">
            <h6>New Features in .Net 5</h6>
            <div>
              <ul>
                <li>
                  The runtime libraries are 80% annotated for nullable reference
                  types
                </li>
                <li>Tooling support for dump debugging</li>
                <li>C# updates</li>
                <li>
                  <p>Performance improvements:</p>
                  <ul>
                    <li>Garbage Collection (GC)</li>
                    <li>System.Text.Json</li>
                    <li>System.Text.RegularExpressions</li>
                    <li>Async ValueTask pooling</li>
                    <li>Container size optimizations</li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
