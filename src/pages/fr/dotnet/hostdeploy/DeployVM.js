import React from "react";
import { Link } from "react-router-dom";

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
                    href="#deploy"
                  >
                    Deploy
                  </a>
                </li>
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
          <article id="deloy">
            <h6>Deploy manuelle</h6>
            <div>
              <h3>
                <strong>Étape 1 : Préparer la machine virtuelle</strong>
              </h3>
              <ol>
                <li>
                  <p>
                    <strong>
                      Configurer le système d'exploitation Windows Server
                    </strong>{" "}
                    :
                  </p>
                  <ul>
                    <li>
                      Assurez-vous que toutes les mises à jour de sécurité sont
                      installées.
                    </li>
                    <li>
                      Activer le rôle{" "}
                      <strong>IIS (Internet Information Services)</strong> si
                      l'application est une application web.
                    </li>
                    <li>
                      Configurer les ports nécessaires (par exemple, ouvrir le
                      port 80 ou 443 pour une application web).
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Installer .NET</strong> :
                  </p>
                  <ul>
                    <li>
                      Téléchargez et installez le <strong>.NET Runtime</strong>{" "}
                      ou le <strong>.NET SDK</strong> en fonction des besoins.
                    </li>
                    <li>
                      Vérifiez la version .NET requise par votre application
                      avec :
                    </li>
                  </ul>
                </li>
              </ol>
              <h3>
                <strong>Étape 2 : Publier l'application .NET</strong>
              </h3>
              <ol>
                <li>
                  <p>
                    <strong>
                      Utiliser la commande <code>dotnet publish</code>
                    </strong>{" "}
                    :
                  </p>
                  <ul>
                    <li>
                      Exécutez la commande suivante pour compiler et publier
                      l'application :
                    </li>
                    <li>
                      Cela génère tous les fichiers nécessaires dans le
                      répertoire <code>./publish</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Vérifier les fichiers publiés</strong> :
                  </p>
                  <ul>
                    <li>
                      Les fichiers générés incluent les DLL de l'application,
                      les dépendances et, pour une application web, un fichier{" "}
                      <code>web.config</code> si nécessaire.
                    </li>
                  </ul>
                </li>
              </ol>
              <h3>
                <strong>Étape 3 : Transférer les fichiers sur la VM</strong>
              </h3>
              <ol>
                <li>
                  <p>
                    <strong>Utiliser un outil de transfert de fichiers</strong>{" "}
                    :
                  </p>
                  <ul>
                    <li>
                      <strong>RDP</strong> : Copier les fichiers via le bureau à
                      distance.
                    </li>
                    <li>
                      <strong>FTP/SFTP</strong> : Configurez un serveur FTP sur
                      la VM et utilisez des outils comme FileZilla.
                    </li>
                    <li>
                      <strong>Partages réseau</strong> : Configurez un partage
                      réseau pour transférer les fichiers.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      Placer les fichiers dans un répertoire cible
                    </strong>{" "}
                    :
                  </p>
                  <ul>
                    <li>
                      Par exemple, pour une application web, utilisez{" "}
                      <code>C:\inetpub\wwwroot\MyApp</code>.
                    </li>
                  </ul>
                </li>
              </ol>
              <h3>
                <strong>Étape 4 : Configurer IIS (si applicable)</strong>
              </h3>
              <ol>
                <li>
                  <p>
                    <strong>Créer un nouveau site web</strong> :
                  </p>
                  <ul>
                    <li>
                      Ouvrez <strong>IIS Manager</strong> sur la VM.
                    </li>
                    <li>
                      Faites un clic droit sur <strong>Sites</strong> &gt;{" "}
                      <strong>Add Website</strong>.
                    </li>
                    <li>
                      Remplissez les champs :
                      <ul>
                        <li>
                          <strong>Site name</strong> : Nom de votre application.
                        </li>
                        <li>
                          <strong>Physical path</strong> : Répertoire où vous
                          avez placé vos fichiers publiés.
                        </li>
                        <li>
                          <strong>Binding</strong> : Configurez le port (80 pour
                          HTTP ou 443 pour HTTPS).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Configurer le pool d'applications</strong> :
                  </p>
                  <ul>
                    <li>
                      Allez dans <strong>Application Pools</strong>.
                    </li>
                    <li>
                      Assurez-vous que le pool associé à votre site utilise le{" "}
                      <strong>.NET CLR</strong> approprié.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Configurer les permissions</strong> :
                  </p>
                  <ul>
                    <li>
                      Donnez les droits d'accès en lecture/écriture au compte
                      IIS (par ex., <code>IIS_IUSRS</code>) sur le répertoire de
                      l'application.
                    </li>
                  </ul>
                </li>
              </ol>
              <h3>
                <strong>Étape 5 : Configurer le pare-feu</strong>
              </h3>
              <ol>
                <li>
                  <p>
                    <strong>Ouvrir les ports nécessaires</strong> :
                  </p>
                  <ul>
                    <li>Pour HTTP : Port 80.</li>
                    <li>Pour HTTPS : Port 443.</li>
                    <li>Commande PowerShell pour ouvrir un port :</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Tester les connexions</strong> :
                  </p>
                  <ul>
                    <li>
                      Vérifiez que vous pouvez accéder à la machine via RDP,
                      HTTP, ou HTTPS depuis votre réseau.
                    </li>
                  </ul>
                </li>
              </ol>
              <h3>
                <strong>Étape 6 : Tester l'application</strong>
              </h3>
              <ol>
                <li>
                  <p>
                    <strong>Accéder à l’application</strong> :
                  </p>
                  <ul>
                    <li>
                      Accédez à votre application depuis un navigateur :{" "}
                      <code>http://&lt;ip-de-la-vm&gt;/</code> ou{" "}
                      <code>https://&lt;ip-de-la-vm&gt;/</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Vérifier les logs</strong> :
                  </p>
                  <ul>
                    <li>
                      Pour les erreurs dans IIS, consultez :
                      <ul>
                        <li>
                          <code>C:\inetpub\logs\LogFiles</code>.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Pour les erreurs de l’application .NET, configurez un
                      logger (ex., Serilog).
                    </li>
                  </ul>
                </li>
              </ol>
              <h3>
                <strong>Étape 7 : Maintenance et optimisation</strong>
              </h3>
              <ol>
                <li>
                  <p>
                    <strong>Configurer le redémarrage automatique</strong> :
                  </p>
                  <ul>
                    <li>
                      Utilisez des outils comme <strong>IIS Reset</strong> ou
                      configurez un superviseur pour redémarrer automatiquement
                      en cas d'erreur.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Mettre en place un monitoring</strong> :
                  </p>
                  <ul>
                    <li>
                      Outils comme Application Insights ou un service tiers pour
                      surveiller la santé de l'application.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Déployer automatiquement</strong> :
                  </p>
                  <ul>
                    <li>
                      Configurez un pipeline CI/CD avec des outils comme Azure
                      DevOps, GitHub Actions ou Jenkins pour automatiser les
                      futurs déploiements.
                    </li>
                  </ul>
                </li>
              </ol>
              <p>
                En suivant ces étapes, vous pourrez déployer efficacement une
                application .NET sur une VM Windows Server et assurer son bon
                fonctionnement en production.
              </p>
            </div>
          </article>
          <article id="publish-profile">
            <h6>Publish Profile</h6>
            <div>
              <h3>
                <strong>
                  Étape 1 : Créer un profil de publication dans Visual Studio
                </strong>
              </h3>
              <ol>
                <li>
                  <strong>Ouvrir le projet dans Visual Studio</strong>.
                </li>
                <li>
                  <strong>Créer un nouveau profil de publication</strong> :
                  <ul>
                    <li>
                      Faites un clic droit sur le projet dans{" "}
                      <strong>Solution Explorer</strong>.
                    </li>
                    <li>
                      Sélectionnez <strong>Publish</strong>.
                    </li>
                    <li>
                      Cliquez sur <strong>New Profile</strong> et choisissez une
                      méthode de publication :
                      <ul>
                        <li>
                          Pour une machine virtuelle avec IIS, sélectionnez{" "}
                          <strong>Folder</strong> si vous souhaitez transférer
                          manuellement les fichiers, ou{" "}
                          <strong>Web Deploy</strong> si la machine est
                          configurée pour Web Deployment.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Configurer les paramètres</strong> :
                  <ul>
                    <li>
                      <strong>Site/application name</strong> : Nom du site IIS
                      cible.
                    </li>
                    <li>
                      <strong>Server</strong> : Adresse IP ou nom de domaine de
                      la machine virtuelle.
                    </li>
                    <li>
                      <strong>User name et Password</strong> : Identifiants d'un
                      compte autorisé à publier sur la VM.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Générer le fichier .pubxml</strong> :
                  <ul>
                    <li>
                      Cliquez sur <strong>Save</strong> pour générer un fichier{" "}
                      <code>.pubxml</code> dans le répertoire{" "}
                      <code>Properties/PublishProfiles</code> du projet.
                    </li>
                  </ul>
                </li>
              </ol>
              <h3>
                <strong>
                  Étape 2 : Configurer IIS sur la machine virtuelle
                </strong>
              </h3>
              <ol>
                <li>
                  <strong>Installer IIS (si ce n'est pas déjà fait)</strong> :
                  <ul>
                    <li>
                      Utilisez le gestionnaire des rôles Windows Server pour
                      activer le rôle IIS.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Configurer le Web Deploy (si utilisé)</strong> :
                  <ul>
                    <li>
                      Installez <strong>Web Deploy 3.6</strong> ou une version
                      ultérieure sur le serveur.
                    </li>
                    <li>
                      Configurez IIS pour accepter les déploiements Web Deploy
                      en activant les règles nécessaires.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Créer le site IIS cible</strong> :
                  <ul>
                    <li>
                      Ajoutez un nouveau site avec le <strong>nom</strong>, le{" "}
                      <strong>répertoire physique</strong> et le{" "}
                      <strong>port</strong> appropriés.
                    </li>
                  </ul>
                </li>
              </ol>
              <h3>
                <strong>
                  Étape 3 : Publier l'application à partir de Visual Studio
                </strong>
              </h3>
              <ol>
                <li>
                  <strong>Choisir le profil de publication</strong> :
                  <ul>
                    <li>
                      Dans Visual Studio, sélectionnez le profil{" "}
                      <code>.pubxml</code> créé.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Déployer</strong> :
                  <ul>
                    <li>
                      Cliquez sur <strong>Publish</strong> pour envoyer
                      l’application directement sur le serveur.
                    </li>
                    <li>
                      Visual Studio utilise Web Deploy pour transférer les
                      fichiers vers la VM.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
          <article id="publish-ci-cd">
            <h6>Publish CI-CD</h6>
            <div>
              <ol>
                <li>
                  <p>
                    <strong>VM Préparée</strong> :
                  </p>
                  <ul>
                    <li>
                      Docker doit être installé et configuré sur la VM cible.
                    </li>
                    <li>
                      La VM doit être accessible via SSH ou des outils comme
                      Ansible.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Code source et Dockerfile</strong> :
                  </p>
                  <ul>
                    <li>
                      Votre application doit être prête avec un{" "}
                      <strong>Dockerfile</strong> pour construire l’image
                      Docker.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Outil CI/CD</strong> :
                  </p>
                  <ul>
                    <li>
                      Utilisez des outils comme <strong>GitHub Actions</strong>,{" "}
                      <strong>GitLab CI</strong>, <strong>Jenkins</strong>, ou{" "}
                      <strong>Azure DevOps</strong>.
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
