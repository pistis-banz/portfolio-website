# AGENTS.md — Règles permanentes pour Codex

Tu interviens comme développeur senior chargé d'implémenter le portfolio décrit dans les documents du dossier `docs/`.

## Mission

Construire **rapidement une V1 déployable**, sans élargir le périmètre. Le résultat attendu est du code clair, maintenable et maîtrisable par le propriétaire du projet. Les fichiers de ce pack constituent la spécification. En cas de divergence, appliquer la priorité : demandes explicites récentes du propriétaire > `docs/00_DECISIONS_ET_PERIMETRE.md` > cahier des charges > UX/design > architecture > exemples et notes.

## Avant toute modification

1. Inspecter l'état réel du dépôt : fichiers existants, branche, `package.json`, lockfile, version Node, configuration, changements locaux, Git status.
2. **Ne jamais écraser un projet déjà initialisé ni ses modifications non commitées.** Adapter le plan à l'existant.
3. Lire les documents cités dans `README.md` ; ne pas déduire de fonctionnalités d'une image illustrative.
4. Résumer en cinq à dix lignes l'implémentation du lot courant, ses risques et ses critères de validation ; ensuite exécuter le lot sans demander une confirmation à chaque petit détail.
5. Vérifier les versions stables officielles et la compatibilité du framework, des bibliothèques et de l'hébergement avant leur installation. Verrouiller les dépendances.

## Principes non négociables

- **MVP first.** Privilégier fichiers locaux typés, génération statique, peu de bibliothèques, pas de services externes par défaut.
- Stack de référence : Next.js App Router, TypeScript strict, Tailwind CSS et déploiement statique sur Cloudflare Pages. Voir architecture.
- Priorité éditoriale anglais, traduction française complète et naturelle.
- Identité : **Software Developer** ; spécialisation : **Full-stack Development** ; domaines : **web + desktop**. Ne pas réduire le profil à « web developer ».
- Projet phare : FIJADA ; projets suivants : SALMOSPHARM 133 et Belkin SAS ; Photozone absent de la V1.
- Les trois projets sont déclarés terminés. Les dépôts FIJADA et Belkin SAS sont privés ; le dépôt SALMOSPHARM n'a pas été vérifié comme public. Aucun lien GitHub trompeur.
- Documentation sur FIJADA : choix d'architecture et pilotage par le propriétaire, code largement généré avec Codex. Décrire **honnêtement** le rôle, ne pas faire croire à une implémentation manuelle totale ou à des performances vérifiées non établies.
- Ne pas inventer dates, durées, diplôme, années d'expérience, chiffres de performance, utilisateurs, retours clients, citations, disponibilité contractuelle, témoignages ou coordonnées.
- Ne pas exposer secrets, tokens, données client, captures d'administration contenant des identifiants ou données personnelles.
- Ne jamais remplacer des informations manquantes par du faux contenu public. Omettre élégamment ce qui manque, et consigner la lacune dans `docs/10_CONTENUS_A_COMPLETER.md` ou `PROJECT_PROGRESS.md`.
- **Pas de liens morts, formulaires factices, boutons sans action ou faux téléchargements.** Un CTA doit avoir une destination réelle, sinon il est masqué ou désactivé avec explication hors interface.
- Construire un frontend accessible : HTML sémantique, parcours clavier, focus visible, alt, contrastes, préférences de mouvement réduit.
- Design validé : « Créatif & Distinctif » blanc cassé/noir/bleu électrique/vert citron ; conserver la lisibilité et un aspect professionnel.
- Jamais de changement silencieux de stack, d'architecture, de fournisseur cloud ou de direction artistique.

## Compétences de design

- Pour chaque travail sur le design, l'interface ou l'expérience utilisateur, utiliser la compétence installée `impeccable` lorsqu'elle est disponible et sélectionner les compétences pertinentes parmi `web-design-guidelines`, `ui-ux-pro-max`, `frontend-design` et `design-taste-frontend`. Les combiner lorsque leurs apports se complètent et que leurs instructions sont applicables.
- Lire leurs instructions applicables et les utiliser comme guides de conception, d'implémentation et de vérification. Les demandes du propriétaire, les décisions du projet et les contraintes de la session priment en cas de conflit.
- Si plusieurs choix de design importants restent réellement possibles ou si des recommandations applicables conduisent à un dilemme que les décisions existantes ne tranchent pas, présenter brièvement les options et demander au propriétaire de choisir. Régler directement les détails de réalisation non bloquants.
- Conserver la direction « Créatif & Distinctif » validée, l'accessibilité et le périmètre V1. Ne pas appliquer une règle de style générique qui contredirait ces choix.
- Pour les icônes de l'interface, utiliser `lucide-react` comme bibliothèque de référence, conformément au choix du propriétaire ; vérifier sa version et sa compatibilité avant installation, et conserver des libellés accessibles pour les actions. Envisager une autre bibliothèque seulement si une icône nécessaire n'existe pas dans Lucide.
- Si une compétence n'est pas disponible dans la session, le signaler lorsqu'elle est nécessaire et poursuivre avec les compétences et ressources disponibles.

## Convention de code

- TypeScript strict ; pas de `any` par commodité ; types explicites aux frontières de données.
- Composants Server Components par défaut ; `use client` uniquement pour de vraies interactions.
- Nommage cohérent, responsabilités séparées, composants petits et réutilisables sans abstraction prématurée.
- Ne pas dupliquer le contenu EN et FR dans les composants. Utiliser des dictionnaires typés et un modèle local de projets.
- Éviter la surarchitecture (hexagonal/CQRS, interfaces pour une seule implémentation, state manager global, ORM, API pour données statiques).
- En cas de besoin de JS dans le navigateur, favoriser CSS pour les animations simples ; ajouter Motion/GSAP uniquement si un besoin réel du design le justifie après la V1 fonctionnelle.
- Dépendances légères et maintenues. Interdire les dépendances pour simples effets décoratifs.
- Pas de navigateur/localStorage comme prérequis à l'affichage du contenu.
- Ne pas faire dépendre le site d'un service tiers pour ses contenus.

## Délégation automatique souhaitée

- Pour chaque nouvelle demande concernant ce dépôt, le propriétaire souhaite que l'agent principal choisisse et lance automatiquement le ou les sous-agents adaptés à la tâche, sans qu'il ait à les nommer à chaque fois, lorsque la session expose la délégation et que ses instructions l'autorisent.
- Choisir les rôles selon le besoin réel en s'appuyant sur `agents/` et `docs/12_ORCHESTRATION_MULTI_AGENTS.md` ; limiter la concurrence à trois sous-agents actifs et attribuer des fichiers d'écriture distincts. L'orchestrateur garde la responsabilité de l'intégration et des vérifications.
- Les tâches dépendantes sont ordonnées. Après chaque tâche ayant ajouté ou modifié du code, lancer l'agent de contrôle défini dans `agents/05_QA_ACCESSIBILITY.md` pour une revue indépendante lorsque la session l'autorise. Ne pas faire croire qu'un agent a été lancé si ce n'est pas le cas.
- Si le contrôle relève un problème, en présenter les preuves, l'impact et les actions proposées, puis attendre l'aval explicite du propriétaire avant toute correction issue de cette revue. Si aucun problème n'est relevé, communiquer un résultat positif limité au périmètre vérifié et mentionner les contrôles non exécutés.
- Si la délégation est indisponible ou interdite dans la session, exécuter la demande de façon séquentielle et signaler clairement cette limite. Les capacités et instructions de la session priment sur cette préférence de projet.
- Cette préférence n'autorise pas à elle seule les commits, pushs, publications ou autres opérations réservées à une demande explicite.

## Travail par lots

Après chaque lot :
1. Expliquer **ce qui a été fait** (fichiers et fonctionnalités), les choix techniques et les limites.
2. Exécuter `pnpm lint`, `pnpm typecheck`, `pnpm build` et les tests définis lorsque les scripts existent. **Ne jamais annoncer un test comme réussi sans l'avoir exécuté.**
3. Vérifier un parcours utilisateur réel ou indiquer explicitement que la vérification navigateur reste manuelle.
4. Mettre à jour `PROJECT_PROGRESS.md` : état, preuves, bugs, actions humaines, prochaine étape.
5. Créer automatiquement un commit pour les changements du lot, après vérification, sous l'identité Git du propriétaire. Exclure les changements sans rapport et signaler si un contrôle nécessaire n'a pas pu être effectué.
6. Ne pas lancer automatiquement `git push`, fusion, suppression, migration ou publication sans instruction explicite. Si le propriétaire demande de ne pas commiter pour une tâche, respecter cette demande.

## Identité Git

Le propriétaire souhaite des commits sous l'identité **`pistisbanz`**. Ne pas attribuer des commits à l'IA ni ajouter `Co-authored-by: AI`. Vérifier le `git config user.name` du dépôt, demander la configuration du courriel si elle est absente, ne pas inventer de courriel.

## Sécurité et confidentialité

Ne jamais imprimer ou commiter `.env`, tokens, secrets de déploiement, identifiants clients ni capturer des écrans d'admin non anonymisés. Aucun outil IA ne doit produire de faux chiffres comme des résultats factuels. Si un site client est privé, ne pas mettre en place d'extraction publique non autorisée.

## Clause anti-blocage

Les éléments manquants qui n'empêchent pas un site cohérent (portrait final, certaines captures, dates de formation, PDF CV, e-mail ou LinkedIn non confirmés) ne doivent **pas** empêcher le développement d'une V1 de prévisualisation. Ne pas publier de faux détails ; utiliser une version neutre et fonctionnelle, masquer les CTA impossibles, documenter ce qu'il reste à fournir.
