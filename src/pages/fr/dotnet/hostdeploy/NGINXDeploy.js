import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function NGINXDeploy() {
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
                    href="#iis-deploy-1"
                  >
                    1️⃣ Prepare the Application for Deployment
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#iis-deploy-2"
                  >
                    2️⃣ Prepare the IIS Environment on the Windows VM
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#iis-deploy-3"
                  >
                    3️⃣ Configure IIS Website
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#iis-deploy-4"
                  >
                    4️⃣ Configure Application Pool
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#iis-deploy-5"
                  >
                    5️⃣ Test and Troubleshoot
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
          <h6>Deploy on Linux VM (NGINX)</h6>
          <article id="iis-deploy-1">
            <h6>1️⃣ Publish the App</h6>
            <div>
              <h6>
                <strong>1️⃣ Publish the App</strong>
              </h6>
              <p>
                Just like on Windows, publish the app in{" "}
                <strong>Release mode</strong>:
              </p>
              <Highlight language="bash">{`dotnet publish -c Release -o /app/publish`}</Highlight>
              <p>This creates the compiled files that Kestrel will host.</p>
              <hr />
            </div>
          </article>
          <article id="iis-deploy-2">
            <h6>2️⃣ Copy the Files to the Linux VM</h6>
            <div>
              <h6>
                <strong>2️⃣ Copy the Files to the Linux VM</strong>
              </h6>
              <p>You can use:</p>
              <ul>
                <li>
                  <p>
                    <strong>SCP</strong>:
                  </p>
                  <Highlight language="bash">{`scp -r ./publish/ user@your-linux-vm:/var/www/myapp`}</Highlight>
                </li>
                <li>
                  <p>
                    or a <strong>CI/CD pipeline</strong> (Azure DevOps, GitHub
                    Actions, etc.)
                  </p>
                </li>
              </ul>
              <hr />
            </div>
          </article>
          <article id="iis-deploy-3">
            <h6>3️⃣ Install .NET Runtime on the Linux VM</h6>
            <div>
              <h6>
                <strong>3️⃣ Install .NET Runtime on the Linux VM</strong>
              </h6>
              <p>
                SSH into your Linux VM and install the required .NET version.
              </p>
              <p>Example for Ubuntu:</p>
              <Highlight language="bash">{`sudo apt-get update
sudo apt-get install -y dotnet-runtime-8.0`}</Highlight>
              <p>Verify:</p>
              <Highlight language="bash">{`dotnet --info`}</Highlight>
              <hr />
            </div>
          </article>
          <article id="iis-deploy-4">
            <h6>4️⃣ Run the App (with Kestrel)</h6>
            <div>
              <h6>
                <strong>4️⃣ Run the App (with Kestrel)</strong>
              </h6>
              <p>Test if it runs properly:</p>
              <Highlight language="bash">{`cd /var/www/myapp
dotnet MyApp.dll`}</Highlight>
              <p>If you see something like:</p>
              <Highlight language="plaintext">{`Now listening on: http://localhost:5000`}</Highlight>
              <p>✅ The app is running via Kestrel.</p>
              <hr />
            </div>
          </article>
          <article id="iis-deploy-5">
            <h6>5️⃣ Configure a Reverse Proxy (NGINX)</h6>
            <div>
              <h6>
                <strong>5️⃣ Configure a Reverse Proxy (NGINX)</strong>
              </h6>
              <p>
                Because Kestrel isn’t exposed to the public directly in
                production, we usually put <strong>NGINX</strong> in front.
              </p>
              <p>Install NGINX:</p>
              <Highlight language="bash">{`sudo apt-get install nginx -y`}</Highlight>
              <p>Edit config file:</p>
              <Highlight language="bash">{`sudo nano /etc/nginx/sites-available/myapp`}</Highlight>
              <p>Add:</p>
              <Highlight language="nginx">{`server {
    listen 80;
    server_name myapp.example.com;

    location / {
        proxy_pass         http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}`}</Highlight>
              <p>Enable and restart NGINX:</p>
              <Highlight language="bash">{`sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
sudo systemctl restart nginx`}</Highlight>
              <hr />
            </div>
          </article>
          <article id="iis-deploy-6">
            <h6>6️⃣ Create a systemd Service (for Auto-Start)</h6>
            <div>
              <h6>
                <strong>6️⃣ Create a systemd Service (for Auto-Start)</strong>
              </h6>
              <p>You want the app to start automatically when the VM boots.</p>
              <p>Create the file:</p>
              <Highlight language="bash">{`sudo nano /etc/systemd/system/myapp.service`}</Highlight>
              <p>Add:</p>
              <Highlight language="ini">{`[Unit]
Description=My ASP.NET Core App
After=network.target

[Service]
WorkingDirectory=/var/www/myapp
ExecStart=/usr/bin/dotnet MyApp.dll
Restart=always
# Restart on crash or failure
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=myapp
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production

[Install]
WantedBy=multi-user.target`}</Highlight>
              <p>Then enable and start it:</p>
              <Highlight language="bash">{`sudo systemctl enable myapp
sudo systemctl start myapp`}</Highlight>
              <p>Check status:</p>
              <Highlight language="bash">{`sudo systemctl status myapp`}</Highlight>
              <hr />
            </div>
          </article>
          <article id="iis-deploy-7">
            <h6>7️⃣ Test Deployment</h6>
            <div>
              <h6>
                <strong>7️⃣ Test Deployment</strong>
              </h6>
              <p>Open browser:</p>
              <Highlight language="cpp">{`http://<your-linux-vm-ip>`}</Highlight>
              <p>If everything is correct:</p>
              <ul>
                <li>NGINX listens on port 80</li>
                <li>Forwards requests to Kestrel on port 5000</li>
                <li>Kestrel serves your ASP.NET Core app</li>
              </ul>
              <p>🧭 Flow:</p>
              <Highlight language="scss">{`Client → NGINX (port 80) → Kestrel (port 5000) → .NET App`}</Highlight>
              <hr />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
