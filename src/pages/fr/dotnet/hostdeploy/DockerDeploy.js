import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function DockerDeploy() {
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
                    href="#docker-deploy-1"
                  >
                    1️⃣ Create a Dockerfile
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#docker-deploy-2"
                  >
                    2️⃣ Build the Docker Image
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#docker-deploy-3"
                  >
                    3️⃣ Push the Image to a Container Registry
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#docker-deploy-4"
                  >
                    4️⃣ Prepare the Linux VM
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#docker-deploy-5"
                  >
                    5️⃣ Pull and Run the Container
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#docker-deploy-6"
                  >
                   6️⃣ (Optional) Use docker-compose
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#docker-deploy-7"
                  >
                    7️⃣ Keep It Running After Reboot
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#docker-deploy-8"
                  >
                    8️⃣ (Optional) Add NGINX Reverse Proxy
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#docker-deploy-9"
                  >
                    9️⃣ Verify and Monitor
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
                    to="/docker"
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
          <h3>Docker deployment</h3>
          <article id="docker-deploy-1">
            <h6>1️⃣ Create a Dockerfile</h6>
            <div>
              <h6>
                <strong>1️⃣ Create a Dockerfile</strong>
              </h6>
              <p>
                In your .NET project root, create a file named{" "}
                <code>Dockerfile</code>:
              </p>
              <Highlight language="dockerfile">{`# 1. Use official .NET runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

# 2. Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet publish -c Release -o /app/publish

# 3. Final runtime image
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]
`}</Highlight>
              <p>This:</p>
              <ul>
                <li>Builds your app inside a container</li>
                <li>Copies it to a clean runtime image</li>
                <li>
                  Exposes port <code>8080</code> (Kestrel will run inside)
                </li>
              </ul>
              <hr />
            </div>
          </article>
          <article id="docker-deploy-2">
            <h6>2️⃣ Build the Docker Image</h6>
            <div>
              <h6>
                <strong>2️⃣ Build the Docker Image</strong>
              </h6>
              <p>From your project folder:</p>
              <Highlight language="bash">{`docker build -t myapp .`}</Highlight>
              <p>Now you have a Docker image named myapp.</p>
              <p>Test it locally (optional):</p>
              <Highlight language="bash">{`docker run -d -p 8080:8080 myapp`}</Highlight>
              <p>
                Visit → <code>http://localhost:8080</code>
              </p>
              <hr />
            </div>
          </article>
          <article id="docker-deploy-3">
            <h6>3️⃣ Push the Image to a Container Registry</h6>
            <div>
              <h6>
                <strong>3️⃣ Push the Image to a Container Registry</strong>
              </h6>
              <p>
                You can’t directly copy your local Docker image to a remote VM
                easily — so you store it in a container registry (like GitHub,
                Docker Hub, or Azure Container Registry)
              </p>
              <p>Example with Docker Hub:</p>
              <Highlight language="bash">{`sudo apt-get update
sudo apt-get install -y dotnet-runtime-8.0`}</Highlight>
              <p>Verify:</p>
              <Highlight language="bash">{`docker tag myapp assaadghabi/myapp:latest
docker login
docker push assaadghabi/myapp:latest`}</Highlight>
              <p>
                Now your image is stored online and ready to be pulled on any
                VM.
              </p>
              <hr />
            </div>
          </article>
          <article id="docker-deploy-4">
            <h6>4️⃣ Prepare the Linux VM</h6>
            <div>
              <h6>
                <strong>4️⃣ Prepare the Linux VM</strong>
              </h6>
              <p>SSH into your Linux VM:</p>
              <Highlight language="bash">{`ssh user@your-linux-vm-ip`}</Highlight>
              <p>Then install Docker (if not already):</p>
              <Highlight language="bash">{`sudo apt update
sudo apt install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker`}</Highlight>
              <p>Verify Docker is running:</p>
              <Highlight language="bash">{`docker --version`}</Highlight>
              <hr />
            </div>
          </article>
          <article id="docker-deploy-5">
            <h6>5️⃣ Pull and Run the Container</h6>
            <div>
              <h6>
                <strong>5️⃣ Pull and Run the Container</strong>
              </h6>
              <p>Now pull your image from Docker Hub:</p>
              <Highlight language="bash">{`docker pull assaadghabi/myapp:latest`}</Highlight>
              <p>Run it:</p>
              <Highlight language="bash">{`docker run -d -p 80:8080 --name myapp assaadghabi/myapp:latest`}</Highlight>
              <p>🧭 Flow:</p>
              <Highlight language="java">{`Client → Linux VM (port 80) → Docker container (port 8080) → Kestrel → .NET App`}</Highlight>
              <p>✅ The app is now deployed and running inside a container!</p>
              <hr />
            </div>
          </article>
          <article id="docker-deploy-6">
            <h6>6️⃣ (Optional) Use docker-compose</h6>
            <div>
              <h6>
                <strong>6️⃣ (Optional) Use docker-compose</strong>
              </h6>
              <p>
                If your app has multiple services (like API + DB + Redis), use{" "}
                <strong>docker-compose.yml</strong>:
              </p>
              <Highlight language="yaml">{`version: "3.9"
services:
  myapp:
    image: assaadghabi/myapp:latest
    ports:
      - "80:8080"
    restart: always`}</Highlight>
              <p>Run:</p>
              <Highlight language="bash">{`docker-compose up -d`}</Highlight>
              <hr />
            </div>
          </article>
          <article id="docker-deploy-7">
            <h6>7️⃣ Keep It Running After Reboot</h6>
            <div>
              <h6>
                <strong>7️⃣ Keep It Running After Reboot</strong>
              </h6>
              <p>You can ensure Docker auto-starts containers:</p>
              <Highlight language="bash">{`sudo systemctl enable docker`}</Highlight>
              <p>Or use restart policies in the container:</p>
              <Highlight language="bash">{`docker run -d -p 80:8080 --restart always myapp`}</Highlight>
              <hr />
            </div>
          </article>
          <article id="docker-deploy-8">
            <h6>8️⃣ (Optional) Add NGINX Reverse Proxy</h6>
            <div>
              <h6>
                <strong>8️⃣ (Optional) Add NGINX Reverse Proxy</strong>
              </h6>
              <p>If you need HTTPS or load balancing, use NGINX in front:</p>
              <Highlight language="arduino">{`Client → NGINX → Docker Container (Kestrel)`}</Highlight>
              <p>You can either:</p>
              <ul>
                <li>Install NGINX directly on the VM, or</li>
                <li>
                  Run NGINX as another container in the same Docker network.
                </li>
              </ul>
              <p>Example docker-compose setup:</p>
              <Highlight language="yaml">{`version: "3.9"
services:
  web:
    image: assaadghabi/myapp:latest
    expose:
      - "8080"
  nginx:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - web`}</Highlight>
              <hr />
            </div>
          </article>
          <article id="docker-deploy-9">
            <h6>9️⃣ Verify and Monitor</h6>
            <div>
              <h6>
                <strong>9️⃣ Verify and Monitor</strong>
              </h6>
              <p>Test:</p>
              <Highlight language="bash">{`curl http://localhost`}</Highlight>
              <p>View running containers:</p>
              <Highlight language="bash">{`docker ps`}</Highlight>
              <p>Logs:</p>
              <Highlight language="bash">{`docker logs myapp`}</Highlight>
              <p>Stop or remove:</p>
              <Highlight language="bash">{`docker stop myapp
docker rm myapp`}</Highlight>
              <hr />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
