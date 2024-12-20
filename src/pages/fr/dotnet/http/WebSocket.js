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
                    href="#multiple-chats-optimize"
                  >
                    Multiplee chats optimisation
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
              <h6>
                <strong>WebSocket</strong>
              </h6>
              <p>
                <strong>WebSocket</strong> est un protocole de communication
                bidirectionnelle en temps réel, idéal pour les applications
                nécessitant une faible latence et une connexion persistante.
              </p>
              <h6>
                <strong>Caractéristiques principales de WebSocket</strong>
              </h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Caractéristique</strong>
                    </th>
                    <th>
                      <strong>Description</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Communication bidirectionnelle</strong>
                    </td>
                    <td>
                      Permet l'envoi et la réception de messages entre le client
                      et le serveur simultanément.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Connexion persistante</strong>
                    </td>
                    <td>
                      Établit une connexion durable réduisant la surcharge par
                      rapport aux requêtes HTTP classiques.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Basé sur TCP</strong>
                    </td>
                    <td>
                      Utilise le protocole TCP, souvent en démarrant via une
                      requête HTTP d'upgrade.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Faible latence</strong>
                    </td>
                    <td>
                      Optimisé pour les communications en temps réel, idéal pour
                      les applications interactives.
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>Cas d'usage</strong>
              </h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Cas d'usage</strong>
                    </th>
                    <th>
                      <strong>Exemple</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Applications de chat</strong>
                    </td>
                    <td>
                      Messagerie instantanée, applications de chat en direct.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Collaboration en temps réel</strong>
                    </td>
                    <td>Outils collaboratifs comme Google Docs ou Miro.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Streaming en temps réel</strong>
                    </td>
                    <td>
                      Jeux en ligne, données financières, streaming vidéo.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>IoT</strong>
                    </td>
                    <td>Communication entre appareils connectés.</td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>Avantages</strong>
              </h6>
              <ol>
                <li>
                  <strong>Faible surcharge</strong> : Une seule connexion est
                  maintenue, réduisant les headers inutiles d'HTTP.
                </li>
                <li>
                  <strong>Temps réel</strong> : Latence minimale pour des
                  expériences utilisateur interactives.
                </li>
                <li>
                  <strong>Économique</strong> : Meilleure utilisation des
                  ressources réseau et serveurs.
                </li>
              </ol>
              <h6>
                <strong>Inconvénients</strong>
              </h6>
              <ol>
                <li>
                  <strong>Complexité</strong> : Plus complexe à implémenter et
                  déboguer qu'une API REST classique.
                </li>
                <li>
                  <strong>Support réseau</strong> : Certains pare-feu ou proxies
                  peuvent interférer avec le protocole WebSocket.
                </li>
              </ol>
              <h6>
                <strong>Exemple en .NET</strong>
              </h6>
              <h6>Ajout de WebSocket dans une application ASP.NET Core :</h6>
              <Highlight language="csharp">
                {`public void Configure(IApplicationBuilder app)
{
    app.UseWebSockets();

    app.Use(async (context, next) =>
    {
        if (context.WebSockets.IsWebSocketRequest)
        {
            var webSocket = await context.WebSockets.AcceptWebSocketAsync();
            await Echo(context, webSocket);
        }
        else
        {
            await next();
        }
    });
}

private async Task Echo(HttpContext context, WebSocket webSocket)
{
    var buffer = new byte[1024 * 4];
    WebSocketReceiveResult result = await webSocket.ReceiveAsync
        (new ArraySegment<byte>(buffer), CancellationToken.None);

    while (!result.CloseStatus.HasValue)
    {
        await webSocket.SendAsync(new ArraySegment<byte>(buffer, 0, result.Count), 
        result.MessageType, result.EndOfMessage, CancellationToken.None);
        result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
    }

    await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
}`}
              </Highlight>
            </div>
          </article>
          <article id="multiple-chats">
            <h6>Multiple chats</h6>
            <div>
              <p>
                Créer une application de chat WebSocket qui gère efficacement 50
                utilisateurs simultanés nécessite une architecture bien conçue
                pour les connexions, les messages et la scalabilité.
              </p>
              <h6>
                <strong>Architecture générale</strong>
              </h6>
              <ol>
                <li>
                  <strong>Serveur WebSocket</strong> : Gère les connexions
                  clients et facilite la communication en temps réel.
                </li>
                <li>
                  <strong>Gestion des connexions</strong> : Stocke les
                  connexions des utilisateurs avec une logique de suivi et de
                  désinscription.
                </li>
                <li>
                  <strong>Broadcast des messages</strong> : Diffuse les messages
                  entrants aux autres utilisateurs connectés.
                </li>
                <li>
                  <strong>Sécurité</strong> : Authentifie et autorise chaque
                  utilisateur.
                </li>
              </ol>
              <h6>
                <strong>Étapes clés pour un chat avec 50 utilisateurs</strong>
              </h6>
              <h6>
                <strong>1. Mise en place d’un serveur WebSocket</strong>
              </h6>
              <p>Utilisez ASP.NET Core pour un serveur performant :</p>
              <Highlight language="csharp">
                {`public void Configure(IApplicationBuilder app)
{
    app.UseWebSockets();

    app.Use(async (context, next) =>
    {
        if (context.WebSockets.IsWebSocketRequest)
        {
            var webSocket = await context.WebSockets.AcceptWebSocketAsync();
            await ChatHandler.Handle(context, webSocket);
        }
        else
        {
            await next();
        }
    });
}`}
              </Highlight>
              <h6>
                <strong>2. Gestion des connexions</strong>
              </h6>
              <p>
                Créez une liste centralisée pour suivre les connexions des
                utilisateurs :
              </p>
              <Highlight language="csharp">
                {`public static class ConnectionManager
{
    private static readonly ConcurrentDictionary<string, WebSocket> Connections = new();

    public static void AddConnection(string userId, WebSocket socket) => Connections[userId] = socket;
    public static void RemoveConnection(string userId) => Connections.TryRemove(userId, out _);

    public static ConcurrentDictionary<string, WebSocket> GetConnections() => Connections;
}`}
              </Highlight>
              <h6>
                <strong>3. Diffusion des messages</strong>
              </h6>
              <p>
                Diffusez les messages entrants à tous les utilisateurs sauf
                l’expéditeur :
              </p>
              <Highlight language="csharp">
                {`public static async Task BroadcastMessage(string senderId, string message)
{
    var connections = ConnectionManager.GetConnections();

    foreach (var (userId, socket) in connections)
    {
        if (userId != senderId && socket.State == WebSocketState.Open)
        {
            var buffer = Encoding.UTF8.GetBytes(message);
            await socket.SendAsync(new ArraySegment<byte>(buffer), WebSocketMessageType.Text, true, CancellationToken.None);
        }
    }
}`}
              </Highlight>
              <h6>
                <strong>4. Gestion des messages côté serveur</strong>
              </h6>
              <p>
                Traitez les messages des utilisateurs et mettez en place des
                règles :
              </p>
              <Highlight language="csharp">
                {`public static async Task Handle(HttpContext context, WebSocket socket)
{
    var buffer = new byte[1024 * 4];
    var result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

    while (!result.CloseStatus.HasValue)
    {
        var message = Encoding.UTF8.GetString(buffer, 0, result.Count);
        await BroadcastMessage("UserX", message); // Remplacez "UserX" par l’ID réel
        result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
    }

    await socket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
}`}
              </Highlight>
              <h6>
                <strong>Gestion côté client</strong>
              </h6>
              <p>
                Côté client, connectez-vous au serveur WebSocket et gérez les
                messages :
              </p>
              <Highlight language="javascript">
                {`-vous au serveur WebSocket et gérez les messages :

javascript
Copy code
const socket = new WebSocket("wss://example.com/chat");

socket.onopen = () => {
    console.log("Connecté au serveur.");
    socket.send(JSON.stringify({ userId: "user123", message: "Salut tout le monde !" }));
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("Nouveau message :", data.message);
};

socket.onclose = () => {
    console.log("Déconnecté du serveur.");
};

socket.onerror = (error) => {
    console.error("Erreur WebSocket :", error);
};`}
              </Highlight>
              <h6>
                <strong>Optimisation pour 50 utilisateurs</strong>
              </h6>
              <ol>
                <li>
                  <strong>Compression des messages</strong> : Utilisez des
                  extensions comme <strong>Per-Message Deflate</strong> pour
                  réduire la taille des messages.
                </li>
                <li>
                  <strong>Ping/Pong</strong> : Implémentez des messages
                  ping/pong pour vérifier la santé des connexions.
                </li>
                <li>
                  <strong>Limite de taille des messages</strong> : Empêchez les
                  messages volumineux pour éviter de surcharger le serveur.
                </li>
                <li>
                  <strong>Bascule des utilisateurs inactifs</strong> :
                  Déconnectez les utilisateurs inactifs après un certain temps.
                </li>
              </ol>
              <h6>
                <strong>Scalabilité</strong>
              </h6>
              <ol>
                <li>
                  <strong>Horizontal Scaling</strong> :
                  <ul>
                    <li>
                      Utilisez un équilibreur de charge pour distribuer les
                      connexions WebSocket entre plusieurs serveurs.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Synchronisation inter-serveurs</strong> :
                  <ul>
                    <li>
                      Intégrez <strong>Redis Pub/Sub</strong> ou{" "}
                      <strong>SignalR</strong> pour partager les messages entre
                      plusieurs instances du serveur.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Monitoring</strong> :
                  <ul>
                    <li>
                      Surveillez les connexions et les métriques avec des outils
                      comme <strong>Prometheus</strong> ou{" "}
                      <strong>Grafana</strong>.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
          <article id="multiple-chats-optimize">
            <h6>Multiple chats optimisation</h6>
            <div>
              <h6>
                <strong>
                  Exemples pour optimiser une application WebSocket
                </strong>
              </h6>
              <h6>
                <strong>
                  1. Compression des messages : Per-Message Deflate
                </strong>
              </h6>
              <p>
                Per-Message Deflate est une extension de compression pour
                WebSocket qui réduit la taille des messages échangés.
              </p>
              <h6>
                <strong>Exemple en ASP.NET Core</strong>
              </h6>
              <p>Configurer le serveur pour activer Per-Message Deflate :</p>
              <h6>
                <strong>Exemple côté client (JavaScript)</strong>
              </h6>
              <p>
                Les navigateurs modernes prennent en charge Per-Message Deflate
                automatiquement. Aucune configuration client supplémentaire
                n'est nécessaire si le serveur l'active.
              </p>
              <h6>
                <strong>
                  2. Ping/Pong : Vérification de la santé des connexions
                </strong>
              </h6>
              <p>
                Les messages <strong>ping</strong> et <strong>pong</strong>{" "}
                permettent de détecter si une connexion est toujours active.
              </p>
              <h6>
                <strong>Exemple en ASP.NET Core (Serveur)</strong>
              </h6>
              <p>Envoyez un ping à intervalle régulier :</p>
              <Highlight language="csharp">
                {`private async Task SendPing(WebSocket socket)
{
    while (socket.State == WebSocketState.Open)
    {
        await socket.SendAsync(
            new ArraySegment<byte>(new byte[0]), 
            WebSocketMessageType.Binary, 
            true, 
            CancellationToken.None
        );
        await Task.Delay(TimeSpan.FromSeconds(30)); // Intervalle du ping
    }
}`}
              </Highlight>
              <h6>
                <strong>Exemple côté client (JavaScript)</strong>
              </h6>
              <p>Répondez au ping avec un pong automatiquement :</p>
              <Highlight language="csharp">
                {`const socket = new WebSocket("wss://example.com/chat");

socket.onmessage = (event) => {
    if (event.data === "ping") {
        socket.send("pong");
    } else {
        console.log("Message reçu :", event.data);
    }
};`}
              </Highlight>
              <h6>
                <strong>3. Limite de taille des messages</strong>
              </h6>
              <p>
                Pour éviter les messages volumineux qui surchargent le serveur,
                imposez une limite de taille.
              </p>
              <h6>
                <strong>Exemple en ASP.NET Core</strong>
              </h6>
              <p>Rejetez les messages dépassant une taille prédéfinie :</p>
              <Highlight language="csharp">
                {`private async Task HandleIncomingMessages(WebSocket socket)
{
    var buffer = new byte[1024]; // Taille maximale autorisée
    var result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

    if (result.Count > buffer.Length)
    {
        Console.WriteLine("Message trop volumineux. Connexion fermée.");
        await socket.CloseAsync(WebSocketCloseStatus.MessageTooBig, "Message too large", CancellationToken.None);
    }
    else
    {
        Console.WriteLine("Message reçu :", Encoding.UTF8.GetString(buffer, 0, result.Count));
    }
}`}
              </Highlight>
              <h6>
                <strong>4. Bascule des utilisateurs inactifs</strong>
              </h6>
              <p>
                Déconnectez les utilisateurs inactifs après un certain délai
                d'inactivité.
              </p>
              <h6>
                <strong>Exemple en ASP.NET Core</strong>
              </h6>
              <p>
                Ajoutez un délai d’inactivité avec un compteur de temporisation
                :
              </p>
              <Highlight language="csharp">
                {`private async Task MonitorInactivity(WebSocket socket)
{
    var lastActivity = DateTime.Now;

    while (socket.State == WebSocketState.Open)
    {
        if ((DateTime.Now - lastActivity).TotalMinutes > 5) // 5 minutes d'inactivité
        {
            Console.WriteLine("Utilisateur inactif. Connexion fermée.");
            await socket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Inactivity timeout", CancellationToken.None);
            break;
        }

        await Task.Delay(TimeSpan.FromSeconds(30)); // Vérifiez toutes les 30 secondes
    }
}`}
              </Highlight>
              <h6>
                <strong>Mise à jour de l'activité utilisateur</strong>
              </h6>
              <p>Réinitialisez le délai à chaque message reçu :</p>
              <Highlight language="csharp">
                {`private async Task HandleMessages(WebSocket socket)
{
    var buffer = new byte[1024];
    var lastActivity = DateTime.Now;

    while (socket.State == WebSocketState.Open)
    {
        var result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
        lastActivity = DateTime.Now; // Mise à jour de l'activité

        // Traitez le message ici
        Console.WriteLine($"Message reçu : {Encoding.UTF8.GetString(buffer, 0, result.Count)}");
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="test-websocket">
            <h6>Test WebSocket</h6>
            <div>
              <h6>
                <strong>
                  1. Tester avec des outils de développement de navigateurs
                </strong>
              </h6>
              <p>
                Les navigateurs modernes comme Chrome, Firefox ou Edge disposent
                d'outils intégrés pour tester les WebSockets :
              </p>
              <ul>
                <li>
                  <strong>Étapes</strong> :
                  <ol>
                    <li>
                      Ouvrez les outils de développement (<code>F12</code> ou{" "}
                      <code>Ctrl + Shift + I</code>).
                    </li>
                    <li>
                      Allez dans l'onglet <strong>Network</strong>.
                    </li>
                    <li>
                      Filtrez sur <strong>WS</strong> (WebSocket).
                    </li>
                    <li>
                      Connectez un client WebSocket dans votre application ou
                      via la console.
                    </li>
                    <li>Observez les messages échangés.</li>
                  </ol>
                </li>
              </ul>
              <h6>
                <strong>Tester via la console du navigateur</strong> :
              </h6>
              <Highlight language="javascript">
                {`const socket = new WebSocket("ws://localhost:5000/chat");

// Événements
socket.onopen = () => console.log("WebSocket connecté");
socket.onmessage = (event) => console.log("Message reçu :", event.data);
socket.onerror = (error) => console.error("Erreur WebSocket :", error);
socket.onclose = () => console.log("WebSocket fermé");

// Envoyer un message
socket.send("Bonjour, WebSocket !");`}
              </Highlight>
              <h6>
                <strong>2. Utiliser un client WebSocket tiers</strong>
              </h6>
              <p>Des outils tiers facilitent les tests manuels :</p>
              <ul>
                <li>
                  <strong>Postman</strong> (nouveau support WebSocket intégré).
                </li>
                <li>
                  <strong>Insomnia</strong> (via des plugins WebSocket).
                </li>
                <li>
                  <strong>WebSocket King</strong> (outil en ligne simple).
                </li>
                <li>
                  <strong>wscat</strong> (outil en ligne de commande).
                </li>
              </ul>
              <h6>
                <strong>Exemple avec wscat</strong> :
              </h6>
              <ul>
                <li>
                  Installez wscat via npm :
                  <Highlight language="bash">
                    {`npm install -g wscat`}
                  </Highlight>
                </li>
              </ul>
              <ul>
                <li>
                  Connectez-vous au serveur WebSocket :
                  <Highlight language="bash">
                    {`wscat -c ws://localhost:5000/chat`}
                  </Highlight>
                </li>
              </ul>
              <ul>
                <li>
                  Envoyez des messages et observez les réponses directement dans
                  la console.
                </li>
              </ul>
              <h6>
                <strong>3. Scripts automatisés pour les tests WebSocket</strong>
              </h6>
              <p>
                Pour des tests automatisés, vous pouvez utiliser des
                bibliothèques de tests comme <strong>JUnit</strong>,{" "}
                <strong>Mocha</strong>, ou <strong>pytest</strong>.
              </p>
              <h6>
                <strong>Exemple en Node.js avec Mocha</strong> :
              </h6>
              <Highlight language="javascript">
                {`const WebSocket = require('ws');
const assert = require('assert');

describe("WebSocket Tests", () => {
    it("should connect and echo a message", (done) => {
        const ws = new WebSocket("ws://localhost:5000/chat");

        ws.on("open", () => {
            ws.send("Hello Server");
        });

        ws.on("message", (message) => {
            assert.strictEqual(message, "Hello Server"); // Vérifie l'écho
            ws.close();
            done();
        });
    });
});`}
              </Highlight>
              <h6>
                <strong>4. Tests de performance avec des outils dédiés</strong>
              </h6>
              <p>
                Pour tester les performances sous charge (plusieurs connexions
                simultanées), utilisez :
              </p>
              <ul>
                <li>
                  <strong>k6</strong> (outil de test de charge).
                </li>
                <li>
                  <strong>Artillery</strong> (outil JavaScript pour tests de
                  charge).
                </li>
                <li>
                  <strong>Gatling</strong> (outil Scala pour tests haute
                  performance).
                </li>
              </ul>
              <h6>
                <strong>Exemple avec Artillery</strong> :
              </h6>
              <p>Installez Artillery :</p>
              <Highlight language="bash">
                {`npm install -g artillery`}
              </Highlight>
              <p>
                Créez un fichier de configuration (<code>test.yml</code>) :
              </p>
              <Highlight language="yaml">
                {`config:
  target: "ws://localhost:5000/chat"
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - engine: "ws"
    flow:
      - send: "Hello Server"
      - wait: 1
      - send: "How are you?"`}
              </Highlight>
              <p>Exécutez le test :</p>
              <Highlight language="bash">{`artillery run test.yml`}</Highlight>
              <h6>
                <strong>5. Assertions et vérifications</strong>
              </h6>
              <p>Lors des tests :</p>
              <ul>
                <li>Vérifiez si la connexion s'établit correctement.</li>
                <li>
                  Assurez-vous que les messages sont bien transmis (envoyés et
                  reçus).
                </li>
                <li>
                  Testez les scénarios de déconnexion ou d'erreurs (par exemple,
                  serveur injoignable).
                </li>
                <li>Simulez des charges élevées pour tester la stabilité.</li>
              </ul>
              <h6>
                <strong>6. Surveillance et logs</strong>
              </h6>
              <ul>
                <li>
                  Activez les journaux serveur pour suivre les connexions, les
                  messages et les erreurs.
                </li>
                <li>
                  Utilisez des outils de monitoring comme{" "}
                  <strong>Grafana</strong> ou <strong>Prometheus</strong> pour
                  observer les performances.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
