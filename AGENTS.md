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

## Travail par lots

Après chaque lot :
1. Expliquer **ce qui a été fait** (fichiers et fonctionnalités), les choix techniques et les limites.
2. Exécuter `pnpm lint`, `pnpm typecheck`, `pnpm build` et les tests définis lorsque les scripts existent. **Ne jamais annoncer un test comme réussi sans l'avoir exécuté.**
3. Vérifier un parcours utilisateur réel ou indiquer explicitement que la vérification navigateur reste manuelle.
4. Mettre à jour `PROJECT_PROGRESS.md` : état, preuves, bugs, actions humaines, prochaine étape.
5. Fournir les commandes Git manuelles, une proposition de message de commit et les instructions de déploiement si pertinent.
6. Ne pas lancer automatiquement `git commit`, `git push`, fusion, suppression, migration ou publication sans instruction explicite.

## Identité Git

Le propriétaire souhaite des commits sous l'identité **`pistisbanz`**. Ne pas attribuer des commits à l'IA ni ajouter `Co-authored-by: AI`. Vérifier le `git config user.name` du dépôt, demander la configuration du courriel si elle est absente, ne pas inventer de courriel.

## Sécurité et confidentialité

Ne jamais imprimer ou commiter `.env`, tokens, secrets de déploiement, identifiants clients ni capturer des écrans d'admin non anonymisés. Aucun outil IA ne doit produire de faux chiffres comme des résultats factuels. Si un site client est privé, ne pas mettre en place d'extraction publique non autorisée.

## Clause anti-blocage

Les éléments manquants qui n'empêchent pas un site cohérent (portrait final, certaines captures, dates de formation, PDF CV, e-mail ou LinkedIn non confirmés) ne doivent **pas** empêcher le développement d'une V1 de prévisualisation. Ne pas publier de faux détails ; utiliser une version neutre et fonctionnelle, masquer les CTA impossibles, documenter ce qu'il reste à fournir.
