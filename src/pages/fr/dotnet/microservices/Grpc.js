import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Grpc() {
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
                    href="#grpc"
                  >
                    Grpc
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#rgrpc-rest"
                  >
                    Grpc vs Rest
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#grpc-message-broker"
                  >
                    Grpc vs Message Broker
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#grpc-example"
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
          <h3>Grpc</h3>
          <article id="grpc">
            <h6>Grpc</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <strong>Aspect</strong>
                  </th>
                  <th>
                    <strong>Description</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Définition</strong>
                  </td>
                  <td>
                    <strong>gRPC</strong> est un framework RPC (Remote Procedure
                    Call) open-source de Google, utilisant{" "}
                    <strong>HTTP/2</strong> et <strong>Protobuf</strong> pour
                    des communications rapides et efficaces entre services.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Cas d'usage</strong>
                  </td>
                  <td>
                    - Communication interservices dans les microservices. <br />{" "}
                    - Applications en temps réel (streaming bidirectionnel).{" "}
                    <br /> - Backend pour mobiles et IoT (faible latence).
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Avantages</strong>
                  </td>
                  <td>
                    - Performances élevées grâce à HTTP/2 et Protobuf. <br /> -
                    API fortement typée, réduisant les erreurs. <br /> -
                    Multilingue (supporte plusieurs langages). <br /> - Support
                    natif du streaming bidirectionnel.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Inconvénients</strong>
                  </td>
                  <td>
                    - Support limité dans les navigateurs (nécessite gRPC-Web).{" "}
                    <br /> - Courbe d’apprentissage (Protobuf, gRPC). <br /> -
                    Complexité supplémentaire par rapport à REST pour des
                    systèmes simples.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Types de communication</strong>
                  </td>
                  <td>
                    - <strong>Unary</strong> : Une requête = Une réponse. <br />{" "}
                    - <strong>Server streaming</strong> : Une requête =
                    Plusieurs réponses du serveur. <br /> -{" "}
                    <strong>Client streaming</strong> : Plusieurs requêtes = Une
                    réponse. <br /> - <strong>Bidirectional streaming</strong> :
                    Communication continue des deux côtés.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Comparaison avec REST</strong>
                  </td>
                  <td>
                    - <strong>Transport</strong> : HTTP/2 (gRPC) vs HTTP/1.1
                    (REST). <br /> - <strong>Format</strong> : Protobuf
                    (binaire, compact) vs JSON (texte, plus lourd). <br /> -{" "}
                    <strong>Performances</strong> : gRPC plus rapide. <br /> -{" "}
                    <strong>Interopérabilité</strong> : REST plus facile à
                    intégrer aux navigateurs.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Outils associés</strong>
                  </td>
                  <td>
                    - <strong>Protoc</strong> : Génération de code pour les
                    fichiers <code>.proto</code>. <br /> -{" "}
                    <strong>gRPC-Web</strong> : Communication avec les
                    navigateurs. <br /> - Bibliothèques de gRPC disponibles pour
                    plusieurs langages (C#, Java, Python, Go, etc.).
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Exemple de service</strong>
                  </td>
                  <td>
                    Création de services distribués pour un système de commande,
                    un chat en temps réel, ou des tableaux de bord interactifs.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Sécurité</strong>
                  </td>
                  <td>
                    Support natif de TLS pour chiffrer les communications.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="grpc-rest">
            <h6>Grpc vs Rest</h6>
            <div>
              <ul>
                <li>
                  <strong>gRPC</strong> : Idéal pour des communications rapides,
                  fortement typées, et bidirectionnelles entre microservices ou
                  applications en temps réel. <strong>HTTP/2</strong> et{" "}
                  <strong>Protocol Buffers</strong> permettent des échanges plus
                  rapides et efficaces.
                </li>
                <li>
                  <strong>REST</strong> : Adapté pour des API simples et
                  largement utilisées, avec une compatibilité étendue. Utilise{" "}
                  <strong>HTTP/1.1</strong> et <strong>JSON</strong>, ce qui le
                  rend plus accessible mais moins performant pour les scénarios
                  de haute demande.
                </li>
              </ul>
              <p>
                Le choix dépend du cas d'usage : <strong>gRPC</strong> pour les
                performances et la complexité, <strong>REST</strong> pour la
                simplicité et l'interopérabilité.
              </p>
            </div>
          </article>
          <article id="grpc-message-broker">
            <h6>Grpc vs Message Broker</h6>
            <div>
              <ul>
                <li>
                  <strong>gRPC</strong> est idéal pour des communications
                  rapides, directes et typées entre microservices.
                </li>
                <li>
                  <strong>RabbitMQ</strong> est plus adapté pour la messagerie
                  asynchrone, les traitements distribués et les systèmes
                  découplés.
                </li>
              </ul>
              <p>
                Le choix dépend du besoin : communication{" "}
                <strong>synchrone</strong> (gRPC) ou <strong>asynchrone</strong>{" "}
                (RabbitMQ).
              </p>
            </div>
          </article>
          <article id="grpc-example">
            <h6>Example</h6>
            <div>
              <h6>
                <strong>Étapes pour créer un service gRPC :</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Définir le contrat avec Protobuf :</strong>
                    <br />
                    Créer un fichier <code>.proto</code> qui définit :
                  </p>
                  <ul>
                    <li>Les services (RPCs).</li>
                    <li>Les messages échangés.</li>
                  </ul>
                  <p>
                    Exemple d’un fichier <code>greeting.proto</code> :
                  </p>
                  <Highlight language="protobuf">
                    {`syntax = "proto3";

service Greeter {
    rpc SayHello (HelloRequest) returns (HelloReply);
}

message HelloRequest {
    string name = 1;
}

message HelloReply {
    string message = 1;
}`}
                  </Highlight>
                </li>
                <li>
                  <p>
                    <strong>Compiler le fichier Protobuf :</strong>
                    <br />
                    Utiliser le compilateur <strong>protoc</strong> pour générer
                    les classes nécessaires dans le langage souhaité. Par
                    exemple :
                  </p>
                  <Highlight language="protobuf">
                    {`protoc --csharp_out=. --grpc_out=. --plugin=protoc-gen-grpc=grpc_csharp_plugin greeting.proto`}
                  </Highlight>
                </li>
                <li>
                  <p>
                    <strong>Implémenter le service côté serveur :</strong>
                    <br />
                    Exemple en C# avec ASP.NET Core :
                  </p>
                  <Highlight language="csharp">
                    {`public class GreeterService : Greeter.GreeterBase {
    public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context) {
        return Task.FromResult(new HelloReply {
            Message = $"Hello, {request.Name}!"
        });
    }
}`}
                  </Highlight>
                </li>
                <li>
                  <p>
                    <strong>Créer le client gRPC :</strong>
                    <br />
                    Exemple en C# :
                  </p>
                  <Highlight language="csharp">
                    {`var channel = GrpcChannel.ForAddress("https://localhost:5001");
var client = new Greeter.GreeterClient(channel);

var reply = await client.SayHelloAsync(new HelloRequest { Name = "Assaad" });
Console.WriteLine(reply.Message);`}
                  </Highlight>
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
