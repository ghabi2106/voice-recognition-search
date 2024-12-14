import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Security() {
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
                    href="#security"
                  >
                    Security
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
          <h3>Security</h3>
          <article id="security">
            <h6>Security</h6>
            <div>
              <h6>
                <strong>Summary Table</strong>
              </h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Security Measure</strong>
                    </th>
                    <th>
                      <strong>Purpose</strong>
                    </th>
                    <th>
                      <strong>Tools/Technologies</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>TLS/mTLS</strong>
                    </td>
                    <td>Encrypt and authenticate communication</td>
                    <td>TLS Certificates, mTLS with Istio/Envoy</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>OAuth 2.0/JWT</strong>
                    </td>
                    <td>Token-based authentication</td>
                    <td>IdentityServer4, Auth0</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Secrets Management</strong>
                    </td>
                    <td>Secure storage of sensitive information</td>
                    <td>HashiCorp Vault, AWS Secrets Manager</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Network Segmentation</strong>
                    </td>
                    <td>Restrict unauthorized traffic</td>
                    <td>Kubernetes Network Policies, VPCs</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Rate Limiting</strong>
                    </td>
                    <td>Prevent abuse of services</td>
                    <td>API Gateway, AspNetCoreRateLimit</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Monitoring and Auditing</strong>
                    </td>
                    <td>Detect and respond to anomalies</td>
                    <td>ELK Stack, Prometheus, Grafana</td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>1. Secure Communication Channels</strong>
              </h6>
              <h6>
                <strong>Use Transport Layer Security (TLS/SSL)</strong>
              </h6>
              <ul>
                <li>
                  <strong>Description</strong>: Encrypts data transmitted
                  between services to protect against eavesdropping and
                  man-in-the-middle (MITM) attacks.
                </li>
                <li>
                  <strong>Implementation</strong>:
                  <ul>
                    <li>
                      Configure all HTTP-based communications (e.g., REST APIs)
                      to use HTTPS with TLS.
                    </li>
                    <li>
                      Use trusted certificates from Certificate Authorities
                      (CAs) or tools like <strong>Let's Encrypt</strong> for
                      automated certificate management.
                    </li>
                    <li>
                      For internal services, use self-signed certificates with
                      proper trust chains configured.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>mTLS (Mutual TLS)</strong>
              </h6>
              <ul>
                <li>
                  <strong>Description</strong>: Adds an additional layer by
                  requiring both client and server to authenticate each other
                  using certificates.
                </li>
                <li>
                  <strong>Use Cases</strong>: Secure communication between
                  internal microservices.
                </li>
                <li>
                  <strong>Implementation</strong>:
                  <ul>
                    <li>
                      Use tools like <strong>Envoy</strong> or{" "}
                      <strong>Istio</strong> to enforce mTLS in Kubernetes.
                    </li>
                    <li>
                      Configure services to use client certificates for
                      validation.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>2. Authentication and Authorization</strong>
              </h6>
              <h6>
                <strong>Service-to-Service Authentication</strong>
              </h6>
              <ul>
                <li>
                  <strong>API Gateway</strong>:
                  <ul>
                    <li>
                      Centralize authentication and authorization in an API
                      Gateway (e.g., <strong>Kong</strong>,{" "}
                      <strong>Traefik</strong>, <strong>AWS API Gateway</strong>
                      ) to control access to microservices.
                    </li>
                    <li>
                      Use protocols like <strong>OAuth 2.0</strong> with client
                      credentials flow or <strong>JWT</strong> for access
                      tokens.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>Service Mesh</strong>:
              </h6>
              <ul>
                <li>
                  Use service meshes like <strong>Istio</strong> or{" "}
                  <strong>Linkerd</strong> to manage service-to-service
                  authentication automatically.
                </li>
                <li>
                  Implement{" "}
                  <strong>
                    SPIFFE (Secure Production Identity Framework for Everyone)
                  </strong>{" "}
                  for issuing secure, short-lived service identities.
                </li>
              </ul>
              <h6>
                <strong>Role-Based Access Control (RBAC)</strong>:
              </h6>
              <ul>
                <li>
                  Use RBAC to define granular permissions for services, ensuring
                  that each service can only access what it needs.
                </li>
              </ul>
              <h6>
                <strong>3. Secure Secrets Management</strong>
              </h6>
              <h6>
                <strong>Secure Key and Certificate Storage</strong>
              </h6>
              <ul>
                <li>
                  Use secure tools for managing secrets (API keys, certificates,
                  database credentials):
                  <ul>
                    <li>
                      <strong>HashiCorp Vault</strong>
                    </li>
                    <li>
                      <strong>Azure Key Vault</strong>
                    </li>
                    <li>
                      <strong>AWS Secrets Manager</strong>
                    </li>
                    <li>
                      <strong>Kubernetes Secrets</strong>
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>Dynamic Secrets</strong>:
              </h6>
              <ul>
                <li>
                  Generate short-lived secrets dynamically to minimize exposure
                  if compromised.
                </li>
              </ul>
              <h6>
                <strong>Environment Variables</strong>:
              </h6>
              <ul>
                <li>
                  Avoid hardcoding sensitive information in code. Use
                  environment variables securely managed through deployment
                  tools like <strong>Helm</strong>, <strong>Terraform</strong>,
                  or <strong>Docker Compose</strong>.
                </li>
              </ul>
              <h6>
                <strong>4. Network Segmentation</strong>
              </h6>
              <h6>
                <strong>Private Network</strong>
              </h6>
              <ul>
                <li>
                  Deploy microservices in a private network or virtual private
                  cloud (VPC) to limit exposure to external threats.
                </li>
              </ul>
              <h6>
                <strong>Firewall Rules and Security Groups</strong>:
              </h6>
              <ul>
                <li>
                  Restrict traffic between microservices using:
                  <ul>
                    <li>
                      Kubernetes <strong>Network Policies</strong>.
                    </li>
                    <li>
                      Cloud provider-specific rules like{" "}
                      <strong>AWS Security Groups</strong> or{" "}
                      <strong>GCP Firewall Rules</strong>.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>Zero-Trust Network Model</strong>:
              </h6>
              <ul>
                <li>
                  Treat all network traffic as untrusted, even within the same
                  environment, and enforce authentication and encryption for
                  every communication.
                </li>
              </ul>
              <h6>
                <strong>5. Rate Limiting and Throttling</strong>
              </h6>
              <ul>
                <li>
                  Prevent abuse of inter-service communication by implementing
                  rate limiting.
                </li>
                <li>
                  Tools: Use API Gateway or libraries like{" "}
                  <strong>AspNetCoreRateLimit</strong> in .NET to throttle
                  excessive requests.
                </li>
              </ul>
              <h6>
                <strong>6. Logging and Monitoring for Security</strong>
              </h6>
              <ul>
                <li>
                  Ensure logs are securely stored and sanitized (e.g., no
                  sensitive information like tokens or passwords).
                </li>
                <li>
                  Use tools like <strong>ELK Stack</strong>,{" "}
                  <strong>Grafana Loki</strong>, or{" "}
                  <strong>AWS CloudWatch</strong> for centralized logging.
                </li>
                <li>
                  Enable audit trails to monitor and analyze service
                  interactions for anomalies.
                </li>
              </ul>
              <h6>
                <strong>7. Secure API Design</strong>
              </h6>
              <h6>
                <strong>OAuth 2.0 and OpenID Connect</strong>
              </h6>
              <ul>
                <li>
                  Use <strong>OAuth 2.0</strong> for delegated access and{" "}
                  <strong>OpenID Connect (OIDC)</strong> for identity
                  management.
                </li>
                <li>
                  Example:
                  <ul>
                    <li>
                      Service A requests an access token from an authorization
                      server to securely communicate with Service B.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>Token-Based Authentication (JWT)</strong>
              </h6>
              <ul>
                <li>
                  Use JSON Web Tokens (JWT) for stateless, compact, and
                  verifiable authentication.
                </li>
                <li>
                  Ensure secure token handling:
                  <ul>
                    <li>
                      Use <strong>short-lived tokens</strong>.
                    </li>
                    <li>Validate tokens with signature verification.</li>
                    <li>Store tokens securely (e.g., in HTTP headers).</li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>Input Validation</strong>
              </h6>
              <ul>
                <li>
                  Validate inputs to prevent injection attacks (e.g., SQL
                  injection, command injection).
                </li>
              </ul>
              <h6>
                <strong>8. Auditing and Penetration Testing</strong>
              </h6>
              <ul>
                <li>
                  Perform regular security audits and penetration testing to
                  identify vulnerabilities in communication channels.
                </li>
                <li>
                  Test for common vulnerabilities using tools like{" "}
                  <strong>OWASP ZAP</strong> or <strong>Burp Suite</strong>.
                </li>
              </ul>
            </div>
          </article>
          <article id="example">
            <h6>Example</h6>
            <div>
              <h6>
                <strong>Example of Secure Communication in .NET</strong>
              </h6>
              <h6>
                <strong>1. HTTPS and Certificate Configuration</strong>
              </h6>
              <Highlight language="csharp">
                {`var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(options =>
{
    options.Listen(IPAddress.Any, 5001, listenOptions =>
    {
        listenOptions.UseHttps("path-to-certificate.pfx", "certificate-password");
    });
});`}
              </Highlight>
              <h6>
                <strong>2. Implementing JWT in .NET</strong>
              </h6>
              <Highlight language="csharp">
                {`services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "your-issuer",
            ValidAudience = "your-audience",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("your-secret-key"))
        };
    });`}
              </Highlight>
              <h6>
                <strong>3. Enforcing mTLS with Kestrel</strong>
              </h6>
              <Highlight language="csharp">
                {`webBuilder.ConfigureKestrel(serverOptions =>
{
    serverOptions.ConfigureHttpsDefaults(httpsOptions =>
    {
        httpsOptions.ClientCertificateMode = ClientCertificateMode.RequireCertificate;
    });
});`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
