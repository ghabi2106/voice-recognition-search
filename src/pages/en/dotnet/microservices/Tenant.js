import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Tenant() {
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
                    href="#definition"
                  >
                    🧩 1. Definition
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#example"
                  >
                    🏠 2. Example
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#architecture"
                  >
                    🧱 3. Common Multi-Tenant Architectures
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#implementation"
                  >
                    🧰 4. Implementation Multi-Tenancy in .NET
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#libraries"
                  >
                    🧑‍💻 5. Popular Libraries
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#benefits"
                  >
                    🧠 6. Key Benefits
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#challenges"
                  >
                    ⚠️ 7. Challenges
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
          <h3>Tenant</h3>
          <article id="definition">
            <h6>🧩 1. Definition</h6>
            <div>
              <h6>🧩 What is a Multi-Tenant Application?</h6>
              <p>
                A <strong>multi-tenant app</strong> is a{" "}
                <strong>single software instance</strong> that serves{" "}
                <strong>multiple customers (tenants)</strong>.<br />
                Each <strong>tenant</strong> is usually a company, organization,
                or agency that uses your app — but all tenants share the{" "}
                <strong>same codebase and infrastructure</strong>.
              </p>
              <p>
                A <strong>tenant</strong> is a logically isolated customer in
                your system.
                <br />
                Each tenant might have:
              </p>
              <ul>
                <li>
                  <p>Their own users, data, and configurations.</p>
                </li>
                <li>
                  <p>Sometimes even custom branding or business rules.</p>
                </li>
              </ul>
              <p>
                So, a <strong>multi-tenant app</strong> is{" "}
                <strong>one app instance</strong> that serves{" "}
                <strong>many tenants</strong>, while keeping{" "}
                <strong>each tenant’s data and behavior isolated</strong>.
              </p>
            </div>
          </article>
          <article id="example">
            <h6>🏠 2. Example</h6>
            <div>
              <h6>🏠 Example</h6>
              <ul>
                Imagine your <strong>Pilgo app</strong> is used by multiple
                travel agencies:
                <li>
                  <strong>Agency A</strong> → Manages its own pilgrims
                </li>
                <li>
                  <strong>Agency B</strong> → Manages its own pilgrims
                </li>
              </ul>
              <p>
                They both use the same deployed app, like:
                <code>https://pilgo.com</code>
              </p>
              <ul>
                but each agency:
                <li>
                  Has its own <strong>users and data</strong>
                </li>
                <li>Cannot see the other’s data</li>
                <li>Uses the same code and API</li>
              </ul>
              <p>
                <strong>One app — multiple tenants</strong>
              </p>
            </div>
          </article>
          <article id="architecture">
            <h6>🧱 3. Common Multi-Tenant Architectures</h6>
            <div>
              <p>There are three main ways to implement multi-tenancy:</p>
              <table className="table tabble-bordered">
                <thead>
                  <tr>
                    <th>Architecture Type</th>
                    <th>Description</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Single Database, Shared Schema</strong>
                    </td>
                    <td>
                      All tenants share the same tables, separated by a{" "}
                      <code>TenantId</code> column.
                    </td>
                    <td>
                      ✅ Simple to maintain, but isolation is logical only.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Single Database, Separate Schemas</strong>
                    </td>
                    <td>
                      One database, but each tenant has its own schema (set of
                      tables).
                    </td>
                    <td>🟡 More isolation, but harder to scale.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Separate Databases per Tenant</strong>
                    </td>
                    <td>Each tenant gets their own database.</td>
                    <td>
                      🔒 Strongest isolation, but complex to manage at scale.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="implementation">
            <h6>🧰 4. Implementation Multi-Tenancy in .NET</h6>
            <div>
              <h6>🧰 4. Implementation Multi-Tenancy in .NET</h6>
              <p>You can implement multi-tenancy in several ways:</p>
              <ul>
                <li>
                  <p>
                    <strong>a. Tenant Identification</strong>
                  </p>
                  <p>Detect tenant from:</p>
                  <ul>
                    <li>
                      Subdomain (<code>&#123;tenant&#125;.myapp.com</code>)
                    </li>
                    <li>
                      Header (<code>X-Tenant-ID</code>)
                    </li>
                    <li>JWT Claim (in user token)</li>
                    <li>Login information</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>b. Tenant Context Middleware</strong>
                  </p>
                  <p>
                    Use middleware to resolve tenant info and make it available
                    across the request:
                  </p>
                  <Highlight language="csharp">
                    {`public class TenantMiddleware
{
    private readonly RequestDelegate _next;

    public TenantMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context, ITenantService tenantService)
    {
        var tenantId = context.Request.Headers["X-Tenant-ID"].FirstOrDefault();
        tenantService.SetTenant(tenantId);
        await _next(context);
    }
}
`}
                  </Highlight>
                  <p>
                    Then register it in <code>Startup.cs</code>:
                  </p>
                  <Highlight language="csharp">{`app.UseMiddleware<TenantMiddleware>();`}</Highlight>
                </li>
                <li>
                  <p>
                    Your EF Core <code>DbContext</code> can filter data per
                    tenant automatically:
                  </p>
                  <Highlight language="csharp">{`protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Pilgrim>().HasQueryFilter(p => p.TenantId == _tenantService.CurrentTenantId);
}`}</Highlight>
                </li>
              </ul>
            </div>
          </article>
          <article id="libraries">
            <h6>🧑‍💻 5. Popular Libraries</h6>
            <div>
              <h6>🧑‍💻 5. Popular Libraries</h6>
              <h6>To simplify multi-tenancy in .NET:</h6>
              <p>
                <strong>Finbuckle.MultiTenant</strong> — widely used open-source
                library.
              </p>
            </div>
          </article>
          <article id="benefits">
            <h6>🧠 6. Key Benefits</h6>
            <div>
              <ul>
                <li>✅ Cost efficiency (single deployment)</li>
                <li>✅ Easier updates and maintenance</li>
                <li>✅ Scalable SaaS model</li>
                <li>✅ Centralized monitoring and logging</li>
              </ul>
            </div>
          </article>
          <article id="challenges">
            <h6>⚠️ 7. Challenges</h6>
            <div>
              <ul>
                <li>⚠️ Data isolation and security</li>
                <li>⚠️ Customization per tenant</li>
                <li>⚠️ Migration and scaling complexity</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
