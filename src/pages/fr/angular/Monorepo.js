import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Monorepo() {
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
                    href="#monorepo"
                  >
                    🧩 What is a Monorepo?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use-monorepo"
                  >
                    🧠 Why use a Monorepo?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages-nx"
                  >
                    💡 Advantages Nx
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#example-pilgo"
                  >
                    🧩 Practical Example(Pilgo)
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#problems-nx-solves"
                  >
                    ⚙️ Problems Nx Solves
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#when-to-use-monorepo"
                  >
                    🧱 When to Use Monorepo (with Nx)
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#nx-commands"
                  >
                    🧠 Common Nx Commands
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
                    to="/angular"
                  >
                    Angular
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
          <h3>Monorepo Nx</h3>
          <article id="monorepo">
            <h6>🧩 What is a Monorepo?</h6>
            <div>
              <p>
                A <strong>monorepo</strong> (short for{" "}
                <em>monolithic repository</em>) is a{" "}
                <strong>single code repository</strong> that stores the{" "}
                <strong>code for multiple projects or applications</strong> —
                often related — instead of having a separate repository for
                each.
              </p>
              <Highlight language="pgsql">{`/pilgo-monorepo
 ├── apps/
 │   ├── admin-portal/
 │   ├── agency-portal/
 │   └── mobile-app/
 ├── libs/
 │   ├── shared-ui/
 │   ├── core-data/
 │   └── auth-service/
 ├── tools/
 ├── nx.json
 ├── tsconfig.base.json
 └── package.json`}</Highlight>
            </div>
          </article>
          <article id="use-monorepo">
            <h6>🧠 Why use a Monorepo?</h6>
            <div>
              <p>
                Because it provides a{" "}
                <strong>
                  unified development, testing, and deployment environment
                </strong>{" "}
                for multiple interdependent projects.
                <br />
                It is particularly valuable in{" "}
                <strong>large-scale systems</strong> with{" "}
                <strong>shared codebases</strong>, such as:
              </p>
              <ul>
                <li>
                  <p>Admin + Agency dashboards</p>
                </li>
                <li>
                  <p>
                    Shared domain logic (authentication, models, API clients)
                  </p>
                </li>
                <li>
                  <p>Shared UI components</p>
                </li>
              </ul>
            </div>
          </article>
          <article id="advantages-nx">
            <h6>💡 Advantages Nx</h6>
            <div>
              <ol>
                <li>
                  Code Sharing & Reusability
                  <ul>
                    <li>
                      You can define shared <strong>libraries</strong> (e.g.,
                      UI, models, services) and import them into any app.
                    </li>
                    <li>
                      Example:
                      <br />
                      <code>libs/shared-ui</code> → used in both{" "}
                      <code>apps/admin</code> and <code>apps/agency</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  Consistent Tooling
                  <ul>
                    <li>
                      One consistent setup for linting, formatting, testing,
                      building, and deploying all projects.
                    </li>
                  </ul>
                </li>
                <li>
                  Dependency Graph & Intelligent Caching
                  <ul>
                    <li>
                      Nx builds a <strong>dependency graph </strong>to
                      understand relationships between apps and libraries.
                    </li>
                    <li>
                      It only <strong>rebuilds affected parts</strong> after a
                      change (smart rebuilds).
                    </li>
                    <li>Drastically improves build times.</li>
                  </ul>
                </li>
                <li>
                  Enforced Boundaries
                  <ul>
                    <li>
                      Nx enforces <strong>modular boundaries</strong> — so no
                      app can accidentally import private/internal code from
                      another.
                    </li>
                    <li>
                      Example: Agency app cannot access Admin-only libraries
                      unless allowed.
                    </li>
                  </ul>
                </li>
                <li>
                  Powerful CLI & Generators
                  <ul>
                    <li>
                      Nx CLI helps you{" "}
                      <strong>
                        generate apps, components, services, and modules
                      </strong>{" "}
                      using templates
                    </li>
                    <li>
                      Example:
                      <br />
                      <Highlight language="bash">
                        {`nx generate @nrwl/angular:component header --project=shared-ui`}
                      </Highlight>
                    </li>
                  </ul>
                </li>
                <li>
                  Integrated Testing & CI/CD
                  <ul>
                    <li>
                      Run tests only for affected projects (
                      <code>nx affected:test</code>).
                    </li>
                    <li>
                      Integrates easily with GitHub Actions, Azure DevOps, or
                      GitLab CI/CD.
                    </li>
                  </ul>
                </li>
                <li>
                  Polyglot Support
                  <ul>
                    <li>
                      You can mix <strong>frontend (React/Angular)</strong> and{" "}
                      <strong>backend (NestJS/.NET)</strong> in one repo, with
                      proper isolation.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
          <article id="example-pilgo">
            <h6>🧩 Practical Example(Pilgo)</h6>
            <div>
              <p>Let’s say:</p>
              <ul>
                <li>
                  <p>
                    You have <strong>Admin Portal</strong> for managing agencies
                    and pilgrims.
                  </p>
                </li>
                <li>
                  <p>
                    You have <strong>Agency Workspace</strong> for agency-level
                    operations.
                  </p>
                </li>
                <li>
                  <p>
                    Both share the same <strong>Pilgrim model</strong>,{" "}
                    <strong>authentication</strong>, and{" "}
                    <strong>contract generation</strong> logic.
                  </p>
                </li>
              </ul>
              <p>
                With <strong>Nx Monorepo</strong>, you can:
              </p>
              <ul>
                <li>
                  <p>
                    Store both portals in <code>/apps/</code>
                  </p>
                </li>
                <li>
                  <p>
                    Create <code>/libs/core-data</code> for shared interfaces
                    (like <code>Pilgrim</code>, <code>Agency</code>)
                  </p>
                </li>
                <li>
                  <p>
                    Create <code>/libs/shared-ui</code> for common UI components
                  </p>
                </li>
                <li>
                  <p>Reuse logic, while still deploying apps independently.</p>
                </li>
              </ul>
            </div>
          </article>
          <article id="problems-nx-solves">
            <h6>⚙️ Problems Nx Solves</h6>
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Problem</th>
                    <th>Nx Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Multiple apps with duplicate logic</td>
                    <td>Shared libraries</td>
                  </tr>
                  <tr>
                    <td>Long build/test times</td>
                    <td>Cached + incremental builds</td>
                  </tr>
                  <tr>
                    <td>Hard to enforce module boundaries</td>
                    <td>Nx dependency graph &amp; rules</td>
                  </tr>
                  <tr>
                    <td>CI/CD complexity</td>
                    <td>Affected commands optimize pipelines</td>
                  </tr>
                  <tr>
                    <td>Inconsistent tooling across teams</td>
                    <td>Unified lint/test/build configuration</td>
                  </tr>
                  <tr>
                    <td>Code discoverability</td>
                    <td>Centralized repo with project graph</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="when-to-use-monorepo">
            <h6>🧱 When to Use Monorepo (with Nx)</h6>
            <div>
              <ul>
                ✅ Use it when:
                <li>
                  You have <strong>multiple related apps</strong> (Admin +
                  Agency + Mobile).
                </li>
                <li>
                  You share <strong>domain logic or UI</strong> between them.
                </li>
                <li>
                  You want <strong>consistent CI/CD</strong> and{" "}
                  <strong>automated dependency management</strong>.
                </li>
              </ul>
              <ul>
                ❌ Avoid it if:
                <li>
                  Each project is <strong>completely independent</strong>{" "}
                  (different clients, tech stacks, or deployment lifecycles)
                </li>
              </ul>
            </div>
          </article>
          <article id="nx-commands">
            <h6>🧠 Common Nx Commands</h6>
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Command</strong>
                    </th>
                    <th>
                      <strong>Description / Purpose</strong>
                    </th>
                    <th>
                      <strong>Example</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>nx generate</code> (or <code>nx g</code>)
                    </td>
                    <td>
                      Generates new code using Nx schematics (apps, libs,
                      components, services, etc.).
                    </td>
                    <td>
                      <code>
                        nx g @nrwl/angular:component header --project=shared-ui
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx build</code>
                    </td>
                    <td>Builds a specific project (frontend or backend).</td>
                    <td>
                      <code>nx build admin-portal</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx serve</code> (or{" "}
                      <code>nx run &lt;project&gt;:serve</code>)
                    </td>
                    <td>
                      Runs a project locally (like <code>ng serve</code> for
                      Angular or <code>dotnet run</code> for .NET).
                    </td>
                    <td>
                      <code>nx serve agency-portal</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx test</code>
                    </td>
                    <td>Runs unit tests for a specific project.</td>
                    <td>
                      <code>nx test pilgrim-api</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx lint</code>
                    </td>
                    <td>
                      Runs linter checks on a project to enforce code style and
                      quality.
                    </td>
                    <td>
                      <code>nx lint shared-ui</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx e2e</code>
                    </td>
                    <td>Executes end-to-end (E2E) tests for frontend apps.</td>
                    <td>
                      <code>nx e2e admin-portal-e2e</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx run</code>
                    </td>
                    <td>
                      Executes a specific <strong>target</strong> (build, serve,
                      test, etc.) defined in a project.
                    </td>
                    <td>
                      <code>nx run pilgrim-api:build</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx affected:build</code>
                    </td>
                    <td>
                      Builds only projects{" "}
                      <strong>affected by recent changes</strong> (smart
                      incremental build).
                    </td>
                    <td>
                      <code>nx affected:build</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx affected:test</code>
                    </td>
                    <td>Runs tests only for changed or affected projects.</td>
                    <td>
                      <code>nx affected:test</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx affected:lint</code>
                    </td>
                    <td>
                      Lints only affected projects since last commit or branch.
                    </td>
                    <td>
                      <code>nx affected:lint</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx graph</code>
                    </td>
                    <td>
                      Opens a <strong>visual dependency graph</strong> of all
                      projects and libraries.
                    </td>
                    <td>
                      <code>nx graph</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx run-many</code>
                    </td>
                    <td>
                      Runs a command on <strong>multiple projects</strong> at
                      once (build, test, etc.).
                    </td>
                    <td>
                      <code>nx run-many --target=build --all</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx format:check</code>
                    </td>
                    <td>Checks if files are formatted correctly (Prettier).</td>
                    <td>
                      <code>nx format:check</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx format:write</code>
                    </td>
                    <td>Automatically formats all source files.</td>
                    <td>
                      <code>nx format:write</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx migrate</code>
                    </td>
                    <td>
                      Updates Nx and its dependencies to the latest version
                      safely.
                    </td>
                    <td>
                      <code>nx migrate latest</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx affected</code>
                    </td>
                    <td>
                      Detects which projects are affected by recent changes
                      (used in CI/CD).
                    </td>
                    <td>
                      <code>nx affected --target=build</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx reset</code>
                    </td>
                    <td>
                      Clears the Nx computation cache (useful when builds behave
                      unexpectedly).
                    </td>
                    <td>
                      <code>nx reset</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx list</code>
                    </td>
                    <td>
                      Lists all available Nx plugins and their
                      generators/executors.
                    </td>
                    <td>
                      <code>nx list</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nx connect-to-nx-cloud</code>
                    </td>
                    <td>
                      Connects the workspace to Nx Cloud for distributed caching
                      and CI insights.
                    </td>
                    <td>
                      <code>nx connect-to-nx-cloud</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
