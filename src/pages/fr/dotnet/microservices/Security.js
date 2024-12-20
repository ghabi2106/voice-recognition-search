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
          <h3>Securité</h3>
          <article id="security">
            <h6>Securité</h6>
            <div class="markdown prose w-full break-words dark:prose-invert light">
              <p>
                Les principaux aspects et pratiques de sécurité pour protéger
                les microservices :
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Aspect</strong>
                    </th>
                    <th>
                      <strong>Pratique</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Authentification</strong>
                    </td>
                    <td>
                      Utiliser OAuth 2.0 et OpenID Connect avec un Identity
                      Provider centralisé.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Autorisation</strong>
                    </td>
                    <td>
                      Implémenter RBAC ou ABAC et vérifier les permissions au
                      niveau des API.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Communication Sécurisée</strong>
                    </td>
                    <td>Chiffrer avec TLS/SSL et authentifier avec mTLS.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Protection des Secrets</strong>
                    </td>
                    <td>
                      Stocker les secrets dans des gestionnaires dédiés comme
                      HashiCorp Vault.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>API Gateway</strong>
                    </td>
                    <td>
                      Centraliser la sécurité des API et limiter les requêtes
                      (Rate Limiting).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Journaux et Surveillance</strong>
                    </td>
                    <td>
                      Surveiller les anomalies et tracer les appels avec des
                      outils comme Grafana et Jaeger.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Sécurisation des Conteneurs</strong>
                    </td>
                    <td>
                      Utiliser des images Docker sûres et des politiques réseau
                      Kubernetes.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Tests</strong>
                    </td>
                    <td>
                      Automatiser les scans de vulnérabilités et effectuer des
                      tests de pénétration réguliers.
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>1. Authentification et Autorisation</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Authentification</strong> :
                  </p>
                  <ul>
                    <li>
                      Utilisez <strong>OAuth 2.0</strong> et{" "}
                      <strong>OpenID Connect</strong> pour gérer l'identité et
                      l'authentification.
                    </li>
                    <li>
                      Implémentez un <strong>Identity Provider</strong>{" "}
                      centralisé (comme Identity Server, Keycloak) pour gérer
                      les utilisateurs et les applications.
                    </li>
                    <li>
                      Les services clients obtiennent un{" "}
                      <strong>token d'accès</strong> pour s'authentifier auprès
                      des services.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Autorisation</strong> :
                  </p>
                  <ul>
                    <li>
                      Utilisez des{" "}
                      <strong>permissions basées sur les rôles (RBAC)</strong>{" "}
                      ou sur les attributs (ABAC).
                    </li>
                    <li>
                      Implémentez l'autorisation au niveau des API via des
                      middleware ou des frameworks comme ASP.NET Policy.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>2. Communication Sécurisée</strong>
              </h6>
              <ul>
                <li>
                  <strong>Chiffrement</strong> :
                  <ul>
                    <li>
                      Protégez les communications entre microservices en
                      utilisant <strong>TLS/SSL</strong>.
                    </li>
                    <li>
                      Utilisez des protocoles sécurisés comme{" "}
                      <strong>HTTPS</strong> ou <strong>gRPC over TLS</strong>.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Authentification interservices</strong> :
                  <ul>
                    <li>
                      Implémentez <strong>mutual TLS (mTLS)</strong> pour
                      vérifier l'identité des microservices entre eux.
                    </li>
                    <li>
                      Adoptez des outils comme <strong>Istio</strong> ou{" "}
                      <strong>Linkerd</strong> pour automatiser la sécurité
                      réseau.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>3. Gestion des Tokens et Secrets</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Protection des secrets</strong> :
                  </p>
                  <ul>
                    <li>
                      Évitez de stocker des clés d'API, tokens ou secrets en
                      texte clair dans le code ou les configurations.
                    </li>
                    <li>
                      Utilisez des outils de gestion des secrets comme{" "}
                      <strong>HashiCorp Vault</strong>,{" "}
                      <strong>AWS Secrets Manager</strong>, ou{" "}
                      <strong>Azure Key Vault</strong>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Expiration des tokens</strong> :
                  </p>
                  <ul>
                    <li>Configurez des tokens avec une durée de vie courte.</li>
                    <li>
                      Mettez en place un mécanisme de rafraîchissement des
                      tokens pour prolonger l'accès.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>4. Sécurisation des API</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Rate Limiting et Throttling</strong> :
                  </p>
                  <ul>
                    <li>
                      Empêchez les abus ou les attaques par déni de service
                      (DoS) en limitant le nombre de requêtes par utilisateur.
                    </li>
                    <li>
                      Utilisez des outils comme <strong>APIGee</strong>,{" "}
                      <strong>Kong</strong>, ou des fonctionnalités natives
                      comme ASP.NET Rate Limiter.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Validation des données</strong> :
                  </p>
                  <ul>
                    <li>
                      Validez toutes les entrées utilisateur au niveau de chaque
                      service pour prévenir les injections SQL ou autres
                      attaques.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Authentification par API Gateway</strong> :
                  </p>
                  <ul>
                    <li>
                      Centralisez la sécurité des API au niveau de l’
                      <strong>API Gateway</strong> pour gérer les tokens et
                      appliquer les politiques globales de sécurité.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>5. Résilience et Surveillance</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Détection des anomalies</strong> :
                  </p>
                  <ul>
                    <li>
                      Surveillez les comportements inhabituels dans le trafic
                      réseau ou les appels entre microservices.
                    </li>
                    <li>
                      Utilisez des outils comme <strong>Prometheus</strong>,{" "}
                      <strong>Grafana</strong>, et <strong>ELK</strong> pour
                      détecter les anomalies.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Limitation de la portée des attaques</strong> :
                  </p>
                  <ul>
                    <li>
                      Implémentez le principe du{" "}
                      <strong>moindre privilège</strong> pour limiter les accès.
                    </li>
                    <li>
                      Utilisez des conteneurs isolés (Docker avec
                      SELinux/AppArmor).
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>6. Journaux et Traçabilité</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Journaux sécurisés</strong> :
                  </p>
                  <ul>
                    <li>
                      Consignez toutes les requêtes, mais évitez d'enregistrer
                      des données sensibles comme des mots de passe ou des
                      tokens.
                    </li>
                    <li>
                      Utilisez des outils comme <strong>Elastic Stack</strong>,{" "}
                      <strong>DataDog</strong>, ou <strong>Splunk</strong> pour
                      la journalisation.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Traçabilité des appels</strong> :
                  </p>
                  <ul>
                    <li>
                      Implémentez un système de traçabilité (distributed
                      tracing) avec des outils comme <strong>Jaeger</strong> ou{" "}
                      <strong>Zipkin</strong>.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>7. Sécurisation des Conteneurs et Orchestration</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Images Docker sécurisées</strong> :
                  </p>
                  <ul>
                    <li>
                      Utilisez des images vérifiées et scannez-les pour détecter
                      les vulnérabilités (outils comme <strong>Trivy</strong> ou{" "}
                      <strong>Aqua Security</strong>).
                    </li>
                    <li>Ne donnez pas d'accès root aux conteneurs.</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Kubernetes</strong> :
                  </p>
                  <ul>
                    <li>
                      Configurez des politiques réseau avec{" "}
                      <strong>NetworkPolicies</strong>.
                    </li>
                    <li>
                      Utilisez des outils comme{" "}
                      <strong>OPA (Open Policy Agent)</strong> pour appliquer
                      les politiques de sécurité.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>8. Tests de Sécurité</strong>
              </h6>
              <ul>
                <li>
                  <strong>Tests réguliers</strong> :
                  <ul>
                    <li>
                      Effectuez des tests de pénétration pour identifier les
                      failles potentielles.
                    </li>
                    <li>
                      Intégrez des outils de sécurité dans la chaîne CI/CD,
                      comme <strong>Snyk</strong>, <strong>SonarQube</strong>,
                      ou <strong>OWASP Dependency-Check</strong>.
                    </li>
                  </ul>
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
