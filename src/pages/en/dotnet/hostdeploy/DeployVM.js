import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function DeployVM() {
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
                    href="#publish-profile"
                  >
                    Publish Profile
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#publish-ci-cd"
                  >
                    Publish CI-CD
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
          <h3>Deploy to VM</h3>
          <article id="publish-profile">
            <h6>Publish Profile</h6>
            <div>
              <h6>
                Publish Profile using <code>IISProfile.pubxml</code>
              </h6>
              <h6>
                <strong>1. Prerequisites</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Prepare Your VM:</strong>
                  </p>
                  <ul>
                    <li>
                      Ensure the IIS role is installed and configured on the
                      virtual machine.
                    </li>
                    <li>
                      Install the <strong>ASP.NET Core Hosting Bundle</strong>{" "}
                      (if required).
                    </li>
                    <li>
                      Enable necessary ports (e.g., 80 for HTTP, 443 for HTTPS)
                      in the firewall.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Prepare Your Application:</strong>
                  </p>
                  <ul>
                    <li>Open your .NET application in Visual Studio.</li>
                    <li>
                      Ensure it is properly configured for deployment with any
                      necessary settings in <code>appsettings.json</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Set Up Remote Management:</strong>
                  </p>
                  <ul>
                    <li>
                      On the virtual machine, enable <strong>Web Deploy</strong>{" "}
                      for IIS:
                      <ul>
                        <li>
                          Install the <strong>Web Deploy 4.0</strong> tool.
                        </li>
                        <li>
                          Configure IIS to allow publishing with Web Deploy.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Set up permissions for the deployment user (e.g., create
                      an IIS manager user).
                    </li>
                  </ul>
                </li>
              </ol>
              <h6>
                <strong>2. Create a Publish Profile</strong>
              </h6>
              <p>
                A publish profile (<code>*.pubxml</code>) contains all the
                deployment configuration settings, such as the target server,
                site name, and credentials.
              </p>
              <h6>Steps to Create:</h6>
              <ol>
                <li>
                  <p>
                    <strong>In Visual Studio:</strong>
                  </p>
                  <ul>
                    <li>
                      Right-click the project in{" "}
                      <strong>Solution Explorer</strong> &gt;{" "}
                      <strong>Publish</strong>.
                    </li>
                    <li>
                      Select <strong>IIS, FTP, etc.</strong> &gt; Click{" "}
                      <strong>Next</strong>.
                    </li>
                    <li>
                      Choose <strong>Web Deploy</strong>.
                    </li>
                    <li>
                      Fill in the required details:
                      <ul>
                        <li>
                          <strong>Server:</strong> The IP or hostname of your
                          VM.
                        </li>
                        <li>
                          <strong>Site Name:</strong> The IIS site name (e.g.,{" "}
                          <code>Default Web Site/MyApp</code>).
                        </li>
                        <li>
                          <strong>User Name:</strong> The IIS manager user
                          credentials.
                        </li>
                        <li>
                          <strong>Password:</strong> The IIS manager password.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Click <strong>Validate Connection</strong> to test the
                      setup.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Save the Publish Profile:</strong>
                  </p>
                  <ul>
                    <li>
                      Click <strong>Save</strong> to create the{" "}
                      <code>IISProfile.pubxml</code> file in your project under
                      the <code>Properties/PublishProfiles</code> directory.
                    </li>
                  </ul>
                </li>
              </ol>
              <h6>
                <strong>3. Deploy Using the Publish Profile</strong>
              </h6>
              <p>
                Once the publish profile is ready, you can deploy your
                application directly using Visual Studio or the command line.
              </p>
              <h6>
                <strong>Method 1: Visual Studio</strong>
              </h6>
              <ol>
                <li>
                  Right-click on your project in{" "}
                  <strong>Solution Explorer</strong>.
                </li>
                <li>
                  Select <strong>Publish</strong>.
                </li>
                <li>
                  Choose the created publish profile (<code>IISProfile</code>
                  ).
                </li>
                <li>
                  Click <strong>Publish</strong> to deploy the application to
                  the VM.
                </li>
              </ol>
              <h6>
                <strong>Method 2: Command Line</strong>
              </h6>
              <p>
                You can use the publish profile with the <code>dotnet</code>{" "}
                CLI:
              </p>
              <Highlight language="bash">
                {`dotnet publish -c Release -p:PublishProfile=IISProfile.pubxml`}
              </Highlight>
              <p>Or, if you're using MSBuild:</p>
              <Highlight language="bash">
                {`msbuild /p:DeployOnBuild=true /p:PublishProfile=IISProfile.pubxml`}
              </Highlight>
              <p>This command will:</p>
              <ul>
                <li>Build the application.</li>
                <li>Package it for deployment.</li>
                <li>Deploy it to the IIS server on the virtual machine.</li>
              </ul>
              <h6>
                <strong>4. Post-Deployment Configuration</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Verify the Deployment:</strong>
                  </p>
                  <ul>
                    <li>
                      Access the application via the VM's IP address or domain
                      (e.g., <code>http://&lt;server-ip&gt;</code> or{" "}
                      <code>http://&lt;server-ip&gt;/MyApp</code>).
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Set Up HTTPS (Optional):</strong>
                  </p>
                  <ul>
                    <li>
                      Bind an SSL certificate to your IIS site for secure
                      connections.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Monitor and Troubleshoot:</strong>
                  </p>
                  <ul>
                    <li>
                      Check logs in the <code>Event Viewer</code> on the VM.
                    </li>
                    <li>
                      Ensure proper permissions on deployed files if issues
                      arise.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
          <article id="publish-ci-cd">
            <h6>Publish CI-CD</h6>
            <div>
              <h6>Publish using CI-CD</h6>
              <h6>
                <strong>1. Prerequisites</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Setup IIS and Web Deploy on the Server:</strong>
                  </p>
                  <ul>
                    <li>Install and configure IIS.</li>
                    <li>
                      Install <strong>Web Deploy</strong> on the server and
                      ensure it allows incoming deployments.
                    </li>
                    <li>
                      Configure an IIS site (e.g.,{" "}
                      <code>Default Web Site/MyApp</code>) and grant necessary
                      permissions to the Web Deploy user.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Create a Publish Profile:</strong>
                  </p>
                  <ul>
                    <li>
                      In Visual Studio:
                      <ul>
                        <li>
                          Go to <strong>Publish</strong> &gt; Create a new
                          publish profile.
                        </li>
                        <li>
                          Select <strong>Web Deploy</strong> and configure it
                          with the server details:
                          <ul>
                            <li>
                              Server: <code>&lt;Server-IP or Domain&gt;</code>
                            </li>
                            <li>
                              Site Name: <code>Default Web Site/MyApp</code>.
                            </li>
                            <li>
                              User Name: Web Deploy user account (e.g.,{" "}
                              <code>Administrator</code> or a custom user).
                            </li>
                            <li>Password: Password for the Web Deploy user.</li>
                          </ul>
                        </li>
                        <li>
                          Save it as <code>IISProfile.pubxml</code>.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Store Web Deploy User Credentials Securely:</strong>
                  </p>
                  <ul>
                    <li>
                      Save the Web Deploy user credentials in{" "}
                      <strong>GitHub Secrets</strong>:
                      <ul>
                        <li>
                          <code>IIS_SERVER</code> - IP/Domain of the IIS server.
                        </li>
                        <li>
                          <code>IIS_USER</code> - Web Deploy username.
                        </li>
                        <li>
                          <code>IIS_PASSWORD</code> - Web Deploy password.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
              <h6>
                <strong>2. Define the GitHub Actions Workflow</strong>
              </h6>
              <p>
                Create a <code>.github/workflows/deploy.yml</code> file in your
                repository with the following content:
              </p>

              <Highlight language="yaml">
                {`name: Deploy to IIS

on:
  push:
    branches:
      - main  # Trigger deployment on pushes to the main branch

jobs:
  build-and-deploy:
    runs-on: windows-latest

    steps:
    # Step 1: Checkout Code
    - name: Checkout Code
      uses: actions/checkout@v3

    # Step 2: Setup .NET SDK
    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: '6.x' # Adjust to match your application version

    # Step 3: Restore Dependencies
    - name: Restore Dependencies
      run: dotnet restore

    # Step 4: Build the Application
    - name: Build Application
      run: dotnet build --configuration Release

    # Step 5: Deploy to IIS using Publish Profile
    - name: Publish and Deploy
      env:
        IIS_SERVER: secrets.IIS_SERVER
        IIS_USER: secrets.IIS_USER
        IIS_PASSWORD: secrets.IIS_PASSWORD
      run: |
        dotnet publish -c Release -p:PublishProfile=IISProfile.pubxml 
          /p:Password=$IIS_PASSWORD 
          /p:UserName=$IIS_USER 
          /p:PublishUrl=https://$IIS_SERVER/MSDeploy.axd
`}
              </Highlight>
              <h6>
                <strong>3. Explanation of Workflow Steps</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Checkout Code:</strong>
                  </p>
                  <ul>
                    <li>
                      Uses GitHub's <code>actions/checkout</code> to pull your
                      repository code into the runner.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Setup .NET SDK:</strong>
                  </p>
                  <ul>
                    <li>
                      Ensures the appropriate version of the .NET SDK is
                      available in the runner.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Restore Dependencies:</strong>
                  </p>
                  <ul>
                    <li>
                      Installs NuGet packages required by your application.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Build Application:</strong>
                  </p>
                  <ul>
                    <li>
                      Compiles the application in <strong>Release</strong> mode.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Publish and Deploy:</strong>
                  </p>
                  <ul>
                    <li>
                      Uses the <code>dotnet publish</code> command with the{" "}
                      <code>IISProfile.pubxml</code> file to deploy the app to
                      IIS on the server:
                      <ul>
                        <li>
                          The Web Deploy endpoint (<code>MSDeploy.axd</code>) is
                          specified via the <code>PublishUrl</code> parameter.
                        </li>
                        <li>
                          Credentials (<code>IIS_USER</code> and{" "}
                          <code>IIS_PASSWORD</code>) are injected securely from
                          GitHub Secrets.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
