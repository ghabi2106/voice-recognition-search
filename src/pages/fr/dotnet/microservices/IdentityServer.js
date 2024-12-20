import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function IdentityServer() {
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
                    href="#identity-server"
                  >
                    Identity Server
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#grant-types"
                  >
                    GrantTypes
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
          <h3>Identity Server</h3>
          <article id="identity-server">
            <h6>Identity Server</h6>
            <div>
              <p>
                <strong>IdentityServer</strong> is an open-source framework for
                implementing authentication and authorization using OAuth2 and
                OpenID Connect in modern applications and microservices.
              </p>
              <h6>How It Works</h6>
              <ol>
                <li>
                  <p>
                    <strong>Clients</strong>:
                    <ul>
                      <li>
                        Applications that require access to resources (e.g., web
                        apps, mobile apps, APIs).
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Resources</strong>:
                    <ul>
                      <li>
                        <strong>Identity Resources</strong>: Represent user
                        information (e.g., name, email).
                      </li>
                      <li>
                        <strong>API Resources</strong>: Represent APIs being
                        secured.
                      </li>
                      <li>
                        <strong>Scopes</strong>: Define boundaries for client
                        access (e.g., <code>read</code>, <code>write</code>{" "}
                        permissions).
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Tokens</strong>:
                    <ul>
                      <li>
                        <strong>Access Token</strong>: Grants access to a
                        protected resource.
                      </li>
                      <li>
                        <strong>ID Token</strong>: Contains user identity
                        details (used in OpenID Connect).
                      </li>
                      <li>
                        <strong>Refresh Token</strong>: Used to renew expired
                        access tokens.
                      </li>
                    </ul>
                  </p>
                </li>
              </ol>
              <Highlight language="csharp">
                {`new Client
{
   // Used by the client to identify itself to the Identity Server
    ClientId = "interactive_client",
    // A human-readable name for the client
    ClientName = "Interactive Client",
    // Specifies the OAuth 2.0 flow(s) the client can use
    AllowedGrantTypes = GrantTypes.Code,
    RequirePkce = true,
    RequireClientSecret = false, // For SPAs or public clients
    // List of URIs to which the Identity Server can send authentication responses (e.g., after login).
    RedirectUris = { "https://localhost:5002/signin-oidc" },
    // List of URIs to redirect the user after they log out.
    PostLogoutRedirectUris = { "https://localhost:5002/signout-callback-oidc" },
    // List of URIs to redirect the user after they log out.
    AllowedScopes = { "openid", "profile", "email", "api1" },
    // Enables the client to request refresh tokens.
    AllowOfflineAccess = true, // Enable refresh tokens
    // Duration (in seconds) for which an access token is valid
    AccessTokenLifetime = 3600, // 1 hour
    // List of origins allowed to access the Identity Server endpoints
    // Useful for SPAs to prevent cross-origin issues.
    AllowedCorsOrigins = { "https://localhost:5002" }
}`}
              </Highlight>
            </div>
          </article>
          <article id="grant-types">
            <h6>GrantTypes</h6>
            <div>
              <ul>
                <li>
                  <strong>Use Case</strong>: Machine-to-machine communication
                  (e.g., a service calling an API).
                </li>
                <li>
                  <strong>Key Configurations</strong>:
                  <ul>
                    <li>
                      <code>
                        AllowedGrantTypes = GrantTypes.ClientCredentials
                      </code>
                    </li>
                    <li>
                      Use <code>ClientSecrets</code> for authentication.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
          <article id="example">
            <h6>Example</h6>
            <div>
              <ol>
                <li>
                  <strong>Add the necessary NuGet packages</strong>
                  <Highlight language="bash">
                    {`dotnet add package Duende.IdentityServer
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer`}
                  </Highlight>
                </li>
                <li>
                  <strong>Configure Identity Server</strong>
                  <Highlight language="csharp">
                    {`using Duende.IdentityServer;
using Duende.IdentityServer.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddIdentityServer(options =>
{
    options.EmitStaticAudienceClaim = true;
})
.AddInMemoryClients(new List<Client>
{
    new Client
    {
        ClientId = "client",
        AllowedGrantTypes = GrantTypes.ClientCredentials,
        ClientSecrets = { new Secret("secret".Sha256()) },
        AllowedScopes = { "api1" }
    },
    new Client
    {
        ClientId = "interactive",
        AllowedGrantTypes = GrantTypes.Code,
        RequirePkce = true,
        RequireClientSecret = false,
        RedirectUris = { "https://localhost:5002/signin-oidc" },
        AllowedScopes = { "openid", "profile", "api1" },
        AllowOfflineAccess = true
    }
})
.AddInMemoryApiScopes(new List<ApiScope>
{
    new ApiScope("api1", "My API")
})
.AddInMemoryApiResources(new List<ApiResource>
{
    new ApiResource("api1", "My API") { Scopes = { "api1" } }
})
.AddInMemoryIdentityResources(new List<IdentityResource>
{
    new IdentityResources.OpenId(),
    new IdentityResources.Profile()
});

var app = builder.Build();

app.UseIdentityServer();

app.Run();`}
                  </Highlight>
                </li>
                <li>
                  <strong></strong>
                  <Highlight language="csharp">{``}</Highlight>
                </li>
                <li>
                  <strong>Add a Protected API</strong>
                  <ol>
                    <li>
                      Add a new API Controller:
                      <Highlight language="csharp">
                        {`using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class DataController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { Message = "This is a protected API." });
}`}
                      </Highlight>
                    </li>
                    <li>
                      Register authentication in <code>Program.cs</code>:
                      <Highlight language="csharp">
                        {`builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", options =>
    {
        options.Authority = "https://localhost:5001";
        options.Audience = "api1";
    });
app.UseAuthentication();
app.UseAuthorization();`}
                      </Highlight>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
