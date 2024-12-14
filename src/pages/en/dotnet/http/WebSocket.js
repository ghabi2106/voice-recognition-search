import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function WebSocket() {
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
                    href="#introduction"
                  >
                    WebSocket
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#multiple-chats"
                  >
                    Multiplee chats
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#test-websocket"
                  >
                    Test WebSocket
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#chat-middleware"
                  >
                    Chat middleware
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
                    to="/caching"
                  >
                    Caching
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controller"
                  >
                    Action Method, Result, Selectors
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controllervuedata"
                  >
                    ViewBag, ViewData and TempData
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/https"
                  >
                    HTTPS, HTTP and SSL
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpmethods"
                  >
                    HTTP Request Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/jwt"
                  >
                    JWT
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/"
                  >
                    Services, Microservices, Web API, Web API vs WCF
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
          <h3>WebSocket</h3>
          <article id="introduction">
            <h6>WebSocket</h6>
            <div class="markdown prose w-full break-words dark:prose-invert light">
              <p>
                <strong>WebSocket</strong> is a communication protocol that
                provides full-duplex communication channels over a single,
                long-lived TCP connection. It allows for real-time data transfer
                between a client (like a web browser) and a server with minimal
                overhead.
              </p>
              <h6>Common Use Cases:</h6>
              <ul>
                <li>Real-time messaging (e.g., chat apps).</li>
                <li>Live notifications or dashboards.</li>
                <li>Collaborative tools (e.g., online document editing).</li>
                <li>Streaming (e.g., stock market data, sports scores).</li>
              </ul>
            </div>
          </article>
          <article id="multiple-chats">
            <h6>Multiple chats</h6>
            <div>
              <p>
                <strong>Connection Storage</strong>: Maintain a list of
                connected clients using <code>ConcurrentDictionary</code>.
                <br />
                <code>ConcurrentDictionary</code> was used because it is a
                thread-safe collection in .NET
              </p>
              <h6>Deployment considerations</h6>
              <ul>
                <li>
                  <strong>Scaling</strong>: Use a message broker (e.g., Redis)
                  for managing connections across servers.
                </li>
                <li>
                  <strong>Load Balancing</strong>: Ensure WebSocket connections
                  are sticky if using multiple backend instances.
                </li>
              </ul>
            </div>
          </article>
          <article id="test-websocket">
            <h6>Test WebSocket</h6>
            <div>
              <p>
                To verify that WebSocket is working and supported in a web
                application running inside a Docker container with an API
                gateway:
              </p>
              <ol>
                <li>
                  <p>
                    <strong>Check API Gateway Configuration</strong>: Ensure the
                    gateway allows WebSocket traffic. For example:
                    <ul>
                      <li>
                        For <strong>NGINX</strong>, configure{" "}
                        <code>proxy_set_header Upgrade</code> and{" "}
                        <code>proxy_set_header Connection</code> for WebSocket
                        support.
                      </li>
                      <li>
                        For <strong>Traefik</strong>, enable WebSocket
                        pass-through in the configuration.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Verify Application Logs</strong>: Check backend
                    application logs for WebSocket connection events.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Test Connectivity</strong>:
                    <ul>
                      <li>
                        Use a WebSocket client (e.g., browser console{" "}
                        <code>new WebSocket('ws://example.com')</code>) to
                        initiate a connection.
                      </li>
                      <li>Send and receive test messages.</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Docker Configuration</strong>:
                    <ul>
                      <li>Ensure the container exposes the WebSocket port.</li>
                      <li>Check Docker networking for proper routing.</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Monitor Network Traffic</strong>: Use browser dev
                    tools to observe WebSocket frames under the "Network" tab.
                    Look for active frames and messages.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>End-to-End Test</strong>: Perform functional tests
                    simulating actual WebSocket usage.
                  </p>
                </li>
              </ol>
            </div>
          </article>
          <article id="chat-middleware">
            <h6>Chat Middleware</h6>
            <Highlight language="csharp">
              {`public class ChatMiddleware
{
    private static readonly ConcurrentDictionary<WebSocket, string> _connections = new();

    public async Task InvokeAsync(HttpContext context)
    {
        if (context.WebSockets.IsWebSocketRequest)
        {
            var socket = await context.WebSockets.AcceptWebSocketAsync();
            _connections.TryAdd(socket, "");

            while (socket.State == WebSocketState.Open)
            {
                var buffer = new byte[1024 * 4];
                var result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

                if (result.MessageType == WebSocketMessageType.Text)
                {
                    var message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                    foreach (var connection in _connections.Keys)
                    {
                        await connection.SendAsync(
                            new ArraySegment<byte>(Encoding.UTF8.GetBytes(message)),
                            WebSocketMessageType.Text,
                            true,
                            CancellationToken.None);
                    }
                }
                else if (result.MessageType == WebSocketMessageType.Close)
                {
                    _connections.TryRemove(socket, out _);
                    await socket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closed by client", CancellationToken.None);
                }
            }
        }
    }
}`}
            </Highlight>
          </article>
        </section>
      </div>
    </>
  );
}
