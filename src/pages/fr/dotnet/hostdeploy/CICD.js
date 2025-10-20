import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function CICD() {
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
                    href="#ci-cd"
                  >
                    🧠 What CI/CD Means
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#common-ci-cd-tools"
                  >
                    🧰 Common CI/CD Tools
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#example-ci-cd-flow"
                  >
                    🧩 Example CI/CD Flow
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#github-actions-ci-cd-workflow"
                  >
                    GitHub Actions CI/CD workflow
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
          <h3>CI-CD</h3>
          <article id="ci-cd">
            <h6>🧠 What CI/CD Means</h6>
            <div>
              <h6>
                <strong>🧠 What CI/CD Means</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>CI (Continuous Integration):</strong>
                    <br />
                    Automates building, testing, and integrating code every time
                    a developer commits changes to the repository.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>CD (Continuous Deployment / Delivery):</strong>
                    <br />
                    Automates deploying the tested code to staging or production
                    environments.
                  </p>
                </li>
              </ul>
              <p>
                Together, they create an <strong>automated pipeline</strong>{" "}
                from code to production.
              </p>
            </div>
          </article>
          <article id="common-ci-cd-tools">
            <h6>🧰 Common CI/CD Tools</h6>
            <div>
              <h6>
                <strong>🧰 Common CI/CD Tools</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Azure DevOps Pipelines</strong> (most common for
                    .NET)
                  </p>
                </li>
                <li>
                  <p>
                    <strong>GitHub Actions</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>GitLab CI/CD</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Jenkins</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>TeamCity</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>CircleCI</strong>
                  </p>
                </li>
              </ul>
              <hr />
            </div>
          </article>
          <article id="example-ci-cd-flow">
            <h6>🧩 Example CI/CD Flow</h6>
            <div>
              <h6>
                🧩 Example CI/CD Flow for a .NET App (to Linux VM with Docker)
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Push Code to GitHub/Azure DevOps</strong>
                    <br />→ Triggers the CI pipeline.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>CI Pipeline (Build + Test)</strong>
                  </p>
                  <ul>
                    <li>
                      <p>
                        Restore dependencies (<code>dotnet restore</code>)
                      </p>
                    </li>
                    <li>
                      <p>
                        Build (<code>dotnet build</code>)
                      </p>
                    </li>
                    <li>
                      <p>
                        Run tests (<code>dotnet test</code>)
                      </p>
                    </li>
                    <li>
                      <p>
                        Publish output (<code>dotnet publish</code>)
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Build Docker Image</strong>
                  </p>
                  <ul>
                    <li>
                      <p>
                        <code>docker build -t myapp:latest .</code>
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Push Image to Container Registry</strong>
                  </p>
                  <ul>
                    <li>
                      <p>e.g., Azure Container Registry, Docker Hub</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>CD Pipeline (Deploy)</strong>
                  </p>
                  <ul>
                    <li>
                      <p>SSH or use an agent to connect to the Linux VM</p>
                    </li>
                    <li>
                      <p>
                        Pull the latest image:{" "}
                        <code>docker pull myregistry/myapp:latest</code>
                      </p>
                    </li>
                    <li>
                      <p>Stop old container (if any)</p>
                    </li>
                    <li>
                      <p>Run the new one:</p>
                      <Highlight language="bash">
                        {`docker run -d -p 80:80 --name myapp myregistry/myapp:latest`}
                      </Highlight>
                    </li>
                  </ul>
                </li>
                <li data-start="2349" data-end="2457">
                  <p data-start="2352" data-end="2378">
                    <strong data-start="2352" data-end="2376">
                      Verify Health Checks
                    </strong>
                  </p>
                  <ul data-start="2382" data-end="2457">
                    <li data-start="2382" data-end="2457">
                      <p data-start="2384" data-end="2457">
                        CI/CD can run post-deployment validation (ping the API,
                        check logs, etc.)
                      </p>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
          <article id="github-actions-ci-cd-workflow">
            <h6>GitHub Actions CI/CD workflow</h6>
            <div>
              <h6>
                <strong>GitHub Actions CI/CD workflow</strong>
                <Highlight language="yaml">{`# Name of the workflow as shown in GitHub Actions UI
name: CI/CD Pipeline

# When to trigger this workflow
on:
  push:                      # Trigger on pushes
    branches:
      - main                 # - to branch 'main'
      - develop              # - to branch 'develop'
  pull_request:              # Trigger on pull requests
    branches:
      - main                 # - targeting branch 'main'

# Global environment variables accessible in all jobs
env:
  DOTNET_VERSION: '8.0.x'     # .NET SDK version used in backend jobs
  NODE_VERSION: '18.x'        # Node.js version used for frontend jobs
  DOCKER_REGISTRY: 'myregistry.azurecr.io' # Docker registry host
  IMAGE_NAME: 'myapp'         # Docker image name

jobs:
  # ----------------------------
  # Job: Build & Test Backend
  # ----------------------------
  build_backend:
    runs-on: windows-latest   # Runner VM type (Windows) because .NET builds/tests often need Windows
    steps:
      - name: Checkout code
        uses: actions/checkout@v3   # Check out repository code to the runner

      - name: Setup .NET
        uses: actions/setup-dotnet@v3   # Install .NET SDK on runner
        with:
          dotnet-version: \${{ env.DOTNET_VERSION }}  # Use version from env

      - name: Restore NuGet packages
        run: dotnet restore     # Restore project dependencies (NuGet)

      - name: Build Solution
        run: dotnet build --configuration Release   # Compile the solution in Release mode

      - name: Run Unit Tests
        run: dotnet test --no-build --verbosity normal  # Execute unit tests (fail job if tests fail)

      - name: Upload Backend Artifact
        uses: actions/upload-artifact@v3   # Upload compiled binaries as an artifact
        with:
          name: backend
          path: '**/bin/Release/**'        # Path glob to publish (adjust for your project structure)

  # ----------------------------
  # Job: Build & Test Frontend
  # ----------------------------
  build_frontend:
    runs-on: ubuntu-latest    # Runner VM type (Linux) for Node/Angular
    steps:
      - name: Checkout code
        uses: actions/checkout@v3    # Checkout repository code

      - name: Setup Node.js
        uses: actions/setup-node@v3 # Install Node.js on runner
        with:
          node-version: \${{ env.NODE_VERSION }}  # Use version from env

      - name: Install Dependencies
        run: npm install    # Install npm packages

      - name: Run Unit Tests
        run: npm run test -- --watch=false --browsers=ChromeHeadless
        # Run frontend unit tests in headless mode (CI friendly)

      - name: Build Angular App
        run: npm run build -- --prod
        # Build production-optimized frontend files into /dist

      - name: Upload Frontend Artifact
        uses: actions/upload-artifact@v3
        with:
          name: frontend
          path: dist/       # Upload the generated distribution folder

  # ----------------------------
  # Job: Docker Build & Push
  # ----------------------------
  docker_build:
    runs-on: ubuntu-latest
    needs: [build_backend, build_frontend]  # Only run after backend & frontend succeed
    steps:
      - name: Checkout code
        uses: actions/checkout@v3   # Checkout repo again (each job has isolated workspace)

      - name: Download Backend Artifact
        uses: actions/download-artifact@v3  # Download previously uploaded backend artifact
        with:
          name: backend
          path: ./backend

      - name: Download Frontend Artifact
        uses: actions/download-artifact@v3  # Download frontend artifact
        with:
          name: frontend
          path: ./frontend

      - name: Login to Docker Registry
        uses: docker/login-action@v2   # Login to Docker registry using secrets
        with:
          registry: \${{ env.DOCKER_REGISTRY }}
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}

      - name: Build and Push Docker Image
        uses: docker/build-push-action@v4  # Build image and push to registry
        with:
          context: .               # Build context (root of repo)
          file: ./Dockerfile       # Dockerfile path
          push: true               # Push image to registry
          tags: |
            \${{ env.DOCKER_REGISTRY }}/\${{ env.IMAGE_NAME }}:latest
            \${{ env.DOCKER_REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.run_number }}
            # Tag with 'latest' and with the workflow run number for versioning

  # ----------------------------
  # Job: Deploy to Staging
  # ----------------------------
  deploy_staging:
    runs-on: ubuntu-latest
    needs: docker_build        # Only run after docker build succeeded
    steps:
      - name: Login to Docker Registry
        uses: docker/login-action@v2
        with:
          registry: \${{ env.DOCKER_REGISTRY }}
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}

      - name: Deploy to Staging
        run: |
          echo "Pulling Docker image..."
          docker pull \${{ env.DOCKER_REGISTRY }}/\${{ env.IMAGE_NAME }}:latest
          docker stop myapp-staging || true
          docker rm myapp-staging || true
          docker run -d --name myapp-staging -p 80:80 \${{ env.DOCKER_REGISTRY }}/\${{ env.IMAGE_NAME }}:latest
        # Pull the image, remove previous container if exists, run new container for staging

  # ----------------------------
  # Job: Deploy to Production
  # ----------------------------
  deploy_production:
    runs-on: ubuntu-latest
    needs: deploy_staging      # Optionally chain: require staging success first
    if: github.ref == 'refs/heads/main'  # Only run on workflows triggered by pushes to main
    steps:
      - name: Manual Approval Placeholder
        run: echo "Manual approval should happen here (use environment protection rules or workflow_dispatch)"

      - name: Login to Docker Registry
        uses: docker/login-action@v2
        with:
          registry: \${{ env.DOCKER_REGISTRY }}
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}

      - name: Deploy to Production
        run: |
          echo "Deploying Docker image to production..."
          docker pull \${{ env.DOCKER_REGISTRY }}/\${{ env.IMAGE_NAME }}:latest
          docker stop myapp-prod || true
          docker rm myapp-prod || true
          docker run -d --name myapp-prod -p 80:80 \${{ env.DOCKER_REGISTRY }}/\${{ env.IMAGE_NAME }}:latest
        # Pull, stop/remove existing prod container, run new container for production
`}</Highlight>
              </h6>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
