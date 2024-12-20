import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Versioning() {
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
                    href="#versioning"
                  >
                    Versioning
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#strategy"
                  >
                    Strategy
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#example"
                  >
                    Example
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
                    to="/docker"
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/server"
                  >
                    Web server implementations
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpsys"
                  >
                    HTTP.sys web server
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/iis"
                  >
                    IIS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/kestrel"
                  >
                    Kestrel
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
          <h3>API Versioning</h3>
          <article id="versioning">
            <h6>Versioning</h6>
            <div>
              <h6>Versioning and Backward Compatibility</h6>
              <ul>
                <li>
                  <strong>Backward Compatibility</strong> ensures that older
                  clients using an API continue to function correctly after
                  updates.
                </li>
                <li>
                  <strong>Versioning</strong> allows you to introduce changes
                  (new features, improvements, or fixes) without breaking
                  existing integrations.
                </li>
              </ul>
            </div>
          </article>
          <article id="strategy">
            <h6>Strategy</h6>
            <div>
              <h6>
                <strong>Best Practices</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Deprecation Policy</strong>:
                  </p>
                  <ul>
                    <li>Clearly document deprecated versions.</li>
                    <li>
                      Notify clients about the timeline for version retirement.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Minimize Breaking Changes</strong>:
                  </p>
                  <ul>
                    <li>
                      Use additive changes to responses (e.g., adding fields
                      without removing existing ones).
                    </li>
                    <li>
                      Mark old fields as deprecated and provide alternatives.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Graceful Error Handling</strong>:
                  </p>
                  <ul>
                    <li>
                      Return meaningful error messages for unsupported versions.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Comprehensive Documentation</strong>:
                  </p>
                  <ul>
                    <li>
                      Maintain versioned documentation using tools like
                      Swagger/OpenAPI or GitHub Pages.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Automated Testing</strong>:
                  </p>
                  <ul>
                    <li>
                      Test all API versions to ensure backward compatibility.
                    </li>
                  </ul>
                </li>
              </ol>
              <h6>
                <strong>Ensuring Backward Compatibility</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Non-Breaking Changes</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Additive Changes</strong>: Add new fields or
                      endpoints, but don’t remove or rename existing ones.
                    </li>
                    <li>
                      <strong>Example</strong>:<br />
                      Old response:
                      <Highlight language="json">
                        {`{ "id": 1, "name": "Product A" }`}
                      </Highlight>
                      Updated response:
                      <Highlight language="json">
                        {`{ "id": 1, "name": "Product A", "description": "A great product" }`}
                      </Highlight>
                    </li>
                    <li>
                      Old clients ignore the new field (<code>description</code>
                      ), while new clients can use it.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Deprecation Notice</strong>
                  </p>
                  <ul>
                    <li>
                      Mark outdated features as deprecated with proper
                      documentation and notifications.
                    </li>
                    <li>
                      Provide a timeline for deprecation and eventual removal.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Error Handling</strong>
                  </p>
                  <ul>
                    <li>
                      Ensure old clients receive meaningful error messages when
                      using deprecated or unavailable features.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Contract Testing</strong>
                  </p>
                  <ul>
                    <li>
                      Use tools like Postman, Pact, or Swagger/OpenAPI to test
                      compatibility with existing clients.
                    </li>
                  </ul>
                </li>
              </ol>
              <h6>
                <strong>Recommendations for Your Project</strong>
              </h6>
              <ul>
                <li>
                  Choose a versioning strategy based on your audience and system
                  complexity:
                  <ul>
                    <li>URL Path Versioning for simplicity.</li>
                    <li>Header Versioning for flexibility in modern APIs.</li>
                  </ul>
                </li>
                <li>Ensure comprehensive documentation for each version.</li>
                <li>
                  Use <strong>OpenAPI/Swagger</strong> to communicate changes
                  effectively.
                </li>
                <li>
                  Automate compatibility testing to catch regressions early.
                </li>
              </ul>
            </div>
          </article>
          <article id="example">
            <h6>Example</h6>
            <div>
              <ol>
                <li>
                  <strong>Install Necessary Packages</strong>
                  <br />
                  Add the <code>Microsoft.AspNetCore.Mvc.Versioning</code> NuGet
                  package
                </li>
                <li>
                  <strong>Configure API Versioning</strong>
                  <br />
                  In the <code>Program.cs</code> or <code>Startup.cs</code>{" "}
                  file, configure the API versioning in the service container:
                  <Highlight language="csharp">
                    {`builder.Services.AddApiVersioning(options =>
{
    options.AssumeDefaultVersionWhenUnspecified = true; // Use default version if not specified
    options.DefaultApiVersion = new ApiVersion(1, 0);   // Default version: 1.0
    options.ReportApiVersions = true;                  // Include version info in response headers
});`}
                  </Highlight>
                </li>
                <li>
                  <strong>Define Versioned Controllers</strong>
                  <Highlight language="csharp">
                    {`[ApiController]
[Route("api/v{version:apiVersion}/products")]
[ApiVersion("1.0")]
public class ProductsV1Controller : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { Message = "Products from API v1.0" });
    }
}

[ApiController]
[Route("api/v{version:apiVersion}/products")]
[ApiVersion("2.0")]
public class ProductsV2Controller : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { Message = "Products from API v2.0", NewField = "Additional Data" });
    }
}`}
                  </Highlight>
                </li>
                <li>
                  <strong>Choose a Versioning Strategy</strong>
                  <ol>
                    <li>
                      <strong>URL Path Versioning</strong>
                      <ul>
                        <li>
                          <strong>Route Example</strong>:{" "}
                          <code>api/v1/products</code>
                        </li>
                        <li>
                          Already implemented in the example above using{" "}
                          <code>v version:apiVersion </code>.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Query String Versioning</strong>
                      <ul>
                        <li>
                          <strong>Route Example</strong>:{" "}
                          <code>api/products?api-version=1.0</code>
                        </li>
                        <li>
                          Configure it in <code>AddApiVersioning</code>:
                          <Highlight language="csharp">
                            {`builder.Services.AddApiVersioning(options =>
{
    options.ApiVersionReader = new QueryStringApiVersionReader("api-version");
});`}
                          </Highlight>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Header Versioning</strong>
                      <ul>
                        <li>
                          <strong>Header Example</strong>:{" "}
                          <code>X-Api-Version: 1.0</code>
                        </li>
                        <li>
                          Configure it in <code>AddApiVersioning</code>:
                          <Highlight language="csharp">
                            {`builder.Services.AddApiVersioning(options =>
{
    options.ApiVersionReader = new HeaderApiVersionReader("X-Api-Version");
});`}
                          </Highlight>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Media Type Versioning</strong>
                      <ul>
                        <li>
                          <strong>Header Example</strong>:{" "}
                          <code>Accept: application/vnd.example.v1+json</code>
                        </li>
                        <li>
                          Configure it in <code>AddApiVersioning</code>:
                          <Highlight language="csharp">
                            {`{
    options.ApiVersionReader = new MediaTypeApiVersionReader();
});`}
                          </Highlight>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Enable API Version Explorer (Optional)</strong>
                  <br />
                  To display available API versions in Swagger (or OpenAPI), add
                  the following package:
                  <Highlight language="bash">
                    {`dotnet add package Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer`}
                  </Highlight>
                  Update your service configuration:
                  <Highlight language="csharp">
                    {`builder.Services.AddVersionedApiExplorer(options =>
{
    options.GroupNameFormat = "'v'VVV"; // Format: v1, v2
    options.SubstituteApiVersionInUrl = true;
});`}
                  </Highlight>
                </li>
                <li>
                  <strong>Integrate with Swagger for Documentation</strong>
                  <Highlight language="csharp">
                    {`builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "API v1", Version = "v1" });
    options.SwaggerDoc("v2", new OpenApiInfo { Title = "API v2", Version = "v2" });
});

builder.Services.AddVersionedApiExplorer(options =>
{
    options.GroupNameFormat = "'v'VVV";
    options.SubstituteApiVersionInUrl = true;
});

// Add API versioning to Swagger endpoints
app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1");
    options.SwaggerEndpoint("/swagger/v2/swagger.json", "API v2");
});`}
                  </Highlight>
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
