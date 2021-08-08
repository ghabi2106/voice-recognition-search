import React from "react";

export default function Dotnet() {
  return (
    <>
      <h1>Différence entre .Net sandard et .Net Core</h1>
      <p>.Net Core est plus perfermant dans les cas suivants :</p>
      <ul>
        <li>besoins multiplateformes</li>
        <li>Architecture microservices.</li>
        <li>utilisation des conteneurs d’ancrage.</li>
        <li>besoin de systèmes scalables et hautes performances.</li>
        <li>besoin de versions .NET côte à côte par application.</li>
      </ul>
      <h3>Besoins multiplateformes</h3>
      <p>
        Si votre application (Web/service) doit s’exécuter sur plusieurs
        plateformes (Windows, Linux et macOS), utilisez .NET Core.
      </p>
      <h3>Architecture de microservices</h3>
      <p>
        Toutes ces plateformes; Azure Service Fabric, Azure App Service et
        Docker prennent en charge .NET Core et les rendent idéales pour
        l’hébergement des microservices
      </p>
      <h3>Containers</h3>
      <p>
        Lorsque vous créez et déployez un conteneur, la taille de son image est
        plus petite avec .NET Core qu’avec .NET Framework. Grâce à sa nature
        multiplateforme, vous pouvez déployer des applications serveur sur des
        conteneurs Docker Linux, par exemple.
      </p>
      <h3>Systèmes hautes performances et évolutifs</h3>
      <p>
        Niveau de performance et scalabilité sont particulièrement pertinents
        pour les architectures en microservices. Avec ASP.NET Core, les systèmes
        sont exécutés avec un nombre bien inférieur de serveurs/machines
        virtuelles. Cette réduction engendre une baisse des coûts
        d’infrastructure et d’hébergement.
      </p>
      <h3>Versions .NET côte à côte par niveau d’application</h3>
      <p>
        Pour installer des applications avec des dépendances sur différentes
        versions de .NET, il est recommandé .NET Core. Cette implémentation de
        .NET prend en charge l’installation côte à côte de différentes versions
        du Runtime .NET sur le même ordinateur.
      </p>
      <p>
        L’installation côte à côte n’est pas possible avec .NET Framework. Il
        s’agit d’un composant Windows, et une seule version peut exister sur un
        ordinateur à la fois. Chaque version de .NET Framework remplace la
        version précédente. Si vous installez une nouvelle application qui cible
        une version ultérieure de .NET Framework, vous pouvez interrompre les
        applications existantes qui s’exécutent sur l’ordinateur, car la version
        précédente a été remplacée.
      </p>
      <h3>Technologies de .NET Framework non disponibles pour .NET Core</h3>
      <ul>
        <li>
          <p>ASP.NET Web Forms applications.</p>
        </li>
        <li>
          <p>
            L’implémentation de serveur WCF est actuellement disponible
            uniquement dans .NET Framework.
          </p>
        </li>
        <li>
          <p>
          Windows Workflow Foundation (WF).
          </p>
        </li>
        <li>
          <p>
            Prise en charge linguistique : Visual Basic et F # sont
            actuellement pris en charge dans .NET Core, mais pas pour tous
            les types de projets.
          </p>
        </li>
      </ul>
    </>
  );
}
