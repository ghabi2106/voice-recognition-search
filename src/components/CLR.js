import React from "react";

export default function Clr() {
  return (
    <>
      <h1>CLR</h1>
      <p>
        La compilation traduit votre code source en langage MSIL (Microsoft
        Intermediate Language) et génère les métadonnées requises.
      </p>
      <p>
        Au moment de l'exécution, un compilateur juste-à-temps (JIT) transforme
        le MSIL en code natif.
      </p>
      <p>
        Le code managé -MSIL- bénéficie de fonctionnalités telles que
        l’intégration interlangage, la gestion des exceptions inter-langages, la
        sécurité améliorée, la prise en charge du contrôle de version et du
        déploiement, un modèle simplifié pour l’interaction des composants,
        ainsi que des services de débogage.
      </p>
      <p>
        Les métadonnées décrivent tous les types et membres définis dans votre
        code sous une forme indépendante du langage
      </p>
      <ul>
        <li>
          <p>Description de l'assembly.</p>
          <ul>
            <li>
              <p>Identité (nom, version, culture, clé publique).</p>
            </li>
            <li>
              <p>Les types exportés.</p>
            </li>
            <li>
              <p>Les autres assemblys dont dépend cet assembly.</p>
            </li>
            <li>
              <p>Les autorisations de sécurité nécessaires à l'exécution.</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Description des types.</p>
          <ul>
            <li>
              <p>Nom, visibilité, classe de base et interfaces implémentées.</p>
            </li>
            <li>
              <p>
                Membres (méthodes, champs, propriétés, événements, types
                imbriqués).
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>Attributs.</p>
          <ul>
            <li>
              Éléments descriptifs supplémentaires qui modifient les types et
              les membres.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
