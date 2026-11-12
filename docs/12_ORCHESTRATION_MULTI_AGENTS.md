# 12 — Orchestration multi-agents de Codex (V1 portfolio)

## 0. Nature de ce document

Ce document complète, sans remplacer, les décisions du `AGENTS.md`, de `docs/00_DECISIONS_ET_PERIMETRE.md` et de `docs/07_PHASES_CODEX.md`. Ce sont des **instructions de coordination**, pas une garantie que l'interface Codex en cours supporte la création de sous-agents. N'utiliser la délégation native que si les outils de délégation sont réellement disponibles ; sinon exécuter les tâches séquentiellement ou dans des sessions distinctes isolées.

**Objectif :** livrer une première V1 propre et déployable, pas créer une usine à agents.

## 1. Règles de priorité et de sécurité

- Priorité des sources : demande explicite actuelle du propriétaire > `AGENTS.md` > `docs/00_DECISIONS_ET_PERIMETRE.md` > `docs/01_CAHIER_DES_CHARGES.md` > reste de `docs/`. Les rôles ne peuvent pas modifier le périmètre validé.
- Coordonnateur unique ; seul lui distribue les responsabilités, traite les dépendances, intègre les résultats et tient `PROJECT_PROGRESS.md` à jour.
- Trois sous-agents de production en parallèle **au maximum**, dans des zones de fichiers disjointes ; le coordinateur peut réduire la concurrence si le risque de conflit est élevé.
- Aucun agent ne doit inventer un contenu, une expérience, une durée, un lien GitHub accessible, un résultat client ni une capture.
- Aucun changement de stack, nouveau backend, CMS, DB, authentification, analytics ou dépendance importante sans validation explicite.
- Pas de commit, push, merge, suppression, publication, ou action externe sans instruction explicite du propriétaire.
- Aucun agent ne peut modifier les instructions fondatrices, le cahier des charges ni la charte graphique pour « résoudre » un conflit de code.
- Une revue n'est jamais une validation : ne déclarer `lint`, `typecheck`, `build` ou tests `PASS` qu'après exécution et preuve.
- Priorité : résultats fonctionnels et qualité essentielle avant décorations, refactors et animations avancées.

## 2. Les six rôles

| Rôle | Charte | Mission | Moment d'activation |
|---|---|---|---|
| Orchestrator / Tech Lead | `agents/01_ORCHESTRATOR.md` | Audit, socle, contrats, arbitrages, intégration et journal | Toujours |
| Frontend & UI | `agents/02_FRONTEND_UI.md` | Home, composants, header/footer, responsive, direction 03 | Lots 1 à 2 |
| Content & i18n | `agents/03_CONTENT_I18N.md` | Dictionnaires EN/FR, textes et données typées vérifiables | Lots 1 à 2 |
| Project Pages | `agents/04_PROJECT_PAGES.md` | Projects, pages études de cas, About, Resume, Contact | Lot 2, préparations possibles après socle |
| Contrôle qualité, régression et sécurité | `agents/05_QA_ACCESSIBILITY.md` | Revue indépendante, tests et signalement de défauts avec actions proposées | Après chaque tâche ajoutant ou modifiant du code, si la session autorise la délégation |
| SEO & Release | `agents/06_SEO_RELEASE.md` | Métadonnées, export statique, préparation Cloudflare | Lot 3 |

**Pourquoi aucun agent backend ?** Le site V1 est statique : pas d'API, de base de données ou de serveur applicatif.

## 3. Répartition de propriété des fichiers (après audit de la structure réelle)

> Chemins indicatifs ; le coordinateur fixe la liste définitive selon la structure détectée (`src/` ou non, `app/`, `messages/`...). Il publie la matrice de propriété en début de lot. Aucun agent ne crée de dossier alternatif pour contourner cette matrice.

| Propriétaire | Espace exclusif indicatif | Interdictions |
|---|---|---|
| Orchestrator | `package.json`, lockfile, configs Next/TS/Tailwind, `app/[locale]/layout.tsx`, `app/globals.css`, types partagés, `PROJECT_PROGRESS.md` | déléguer des changements conflictuels de configuration |
| Frontend/UI | `components/layout/**`, `components/home/**`, `app/[locale]/page.tsx` | modifier dictionnaires, données projets, configs, styles globaux sans accord |
| Content/i18n | `content/**`, `data/**`, `dictionaries/**` (ou chemins équivalents définis) | modifier les pages ou la configuration |
| Project Pages | `components/projects/**`, `app/[locale]/projects/**`, `app/[locale]/about/**`, `app/[locale]/resume/**`, `app/[locale]/contact/**` | modifier data/dictionnaires, composants du Hero, layout commun |
| QA | diagnostics dans `handoffs/` ; tests isolés si autorisés | changer l'application pendant un audit, corriger directement du code sans attribution |
| Release | diagnostics dans `handoffs/` ; fichiers de release sur autorisation du coordinateur | déployer, changer le fournisseur, modifier les secrets, publier |

La source des textes (dictionnaires typés) et la forme des objets `Project` sont définies **avant** que les agents Frontend et Project Pages écrivent du code. Le coordinateur fournit les noms d'exports, signatures et routes, puis les gèle jusqu'à la gate d'intégration.

## 4. Graphe d'exécution (DAG)

```text
LOT 0 — SÉQUENTIEL
Orchestrator : audit -> initialisation -> build socle -> contrats TS -> file ownership
                             |
                             v
LOT 1 — PARALLÈLE APRÈS CONTRATS
    Frontend UI : Home + composants  ||  Content/i18n : EN/FR + données
    Project Pages : squelette routes/études de cas (uniquement si contrats figés)
                             |
                             v
GATE 1 — SÉQUENTIEL
Orchestrator : intégrer -> lint/typecheck/build -> QA ciblée -> présenter les constats -> accord du propriétaire avant correction -> aperçu visuel propriétaire
                             |
                             v
LOT 2 — PARALLÈLE PAR DOSSIER
    Project Pages : pages complètes || Content/i18n : traductions complètes
    Frontend UI : ajustements réactifs des composants (sans fichiers partagés)
                             |
                             v
GATE 2 — SÉQUENTIEL
Orchestrator : intégrer -> navigation EN/FR -> QA, accessibilité -> présenter les constats -> accord du propriétaire avant retouches
                             |
                             v
LOT 3 — SÉQUENTIEL PUIS REVUES EN PARALLÈLE
Orchestrator : config finale/export; SEO/Release : audit; QA : audit indépendant
                             |
                             v
GATE 3 — HUMAIN + OUTILS
Lint + typecheck + build + vérifications navigateur et liens -> accord de publication
                             |
                             v
Publication explicite / lot 4 facultatif
```

**Gate 1 humaine :** le propriétaire valide le rendu de la homepage. C'est la seule validation visuelle obligatoire avant d'achever le lot 2. Les autres gates restent techniques et ne doivent pas exiger une confirmation sur chaque détail.

## 5. Contrat de communication de tâche

Chaque délégation doit préciser, en un message :

```text
TASK_ID: L1-UI-01
OWNER: Frontend & UI
OBJECTIF: Home EN complète selon docs/03 + docs/04
LECTURES: AGENTS.md, docs/00, docs/02, docs/03, docs/04
ENTRÉES FOURNIES: types / exports figés et routes
FICHIERS AUTORISÉS: components/layout/**, components/home/**, app/[locale]/page.tsx
FICHIERS INTERDITS: package.json, app/globals.css, dictionaries/**, data/**
DÉPENDANCES: socle, types et styles globaux établis
DONE WHEN: six sections, responsive, navigation et CTAs réels, pas de données fictives
PREUVES: fichiers touchés, commandes exécutées, risques, capture ou limite de preview
```

Les tâches de plus d'une demi-page doivent être décomposées par résultat vérifiable plutôt que par « écran vaguement fini ». Ne pas partager de consignes floues du type « améliore l'app ».

## 6. Gate de fin de lot

1. Le sous-agent remet un court rapport selon `handoffs/TEMPLATE.md`.
2. Le coordinateur vérifie fichiers autorisés, API partagée, liens, contenus et changements inattendus.
3. Si modifications dans une zone interdite, ne pas les intégrer automatiquement ; résoudre le conflit d'abord.
4. Exécuter réellement `pnpm lint`, `pnpm typecheck`, `pnpm build` (si scripts présents) et les tests spécifiques utiles.
5. Le QA agent vérifie les chemins critiques : `/en`, `/fr`, Projects, études de cas, About, Resume, Contact, switch de langue, menu mobile, clavier et liens.
6. Tout bug `P0` ou `P1` bloque la gate. Présenter tout problème détecté et les actions proposées au propriétaire ; attendre son aval explicite avant correction. Un défaut cosmétique peut être consigné pour le lot 4 après décision.
7. Le coordinateur met à jour `PROJECT_PROGRESS.md` avec preuves, risques, statut et prochaine tâche.
8. Proposer les commandes Git manuelles, sans les exécuter sans autorisation.

## 7. Sévérité des défauts

- **P0** : fuite de données/secrets, application cassée, crash général, contenu sensible exposé : bloque intégration et publication.
- **P1** : build cassé, pages principales indisponibles, navigation ou changement de langue brisé, contact trompeur, erreur d'accessibilité bloquante : bloque la gate.
- **P2** : défaut mobile localisé, métadonnée incomplète, incohérence visuelle gênante : corriger avant publication si possible, sinon documenter et arbitrer.
- **P3** : polissage, micro-interaction, détail non essentiel : lot 4.

## 8. Isolation et concurrence

### Option A — Subagents natifs dans un même espace de travail
Utiliser seulement si le client Codex supporte réellement la délégation. Risque de modifications simultanées dans le même filesystem : appliquer strictement la propriété des fichiers. Le coordinateur doit limiter la concurrence dès qu'un agent touche aux routes, dépendances ou fichiers globaux.

### Option B — Plusieurs sessions Codex + Git worktrees
Pour un environnement sans délégation native, lancer une session par worktree/branche (`feat/home-ui`, `feat/content-i18n`, `feat/project-pages`) **après un premier commit de socle approuvé**. Les branches isolées évitent les écrasements ; les fusions/commits/push sont déclenchés après validation du propriétaire. Il faudra gérer les éventuels conflits de fusion. Ne pas demander à plusieurs agents de modifier la même branche concurrentiellement.

### Option C — Séquentiel
Si fonctionnalités multi-agents indisponibles, faible budget ou tâches trop dépendantes, le coordinateur exécute lui-même les tâches dans l'ordre du graphe. Les chartes de rôle restent utiles comme checklists spécialisées.

## 9. Entrées manquantes / anti-blocage

Ne pas attendre pour lancer la preview : portrait, PDF CV et captures finales peuvent être absents. Présenter des emplacements visuellement cohérents sans prétendre qu'ils représentent le produit réel. Ne jamais créer une fausse URL, une fausse statistique, un contact factice ni un bouton de téléchargement cassé. La publication professionnelle impose au moins une vraie coordonnée de contact confirmée.

## 10. Résultat attendu à la fin de la V1

- Home + toutes les pages publiques EN/FR, trois études de cas véridiques.
- Responsive, accessibilité de base, SEO, export statique, builds et parcours vérifiés.
- Journal d'avancement et derniers bugs documentés.
- Prévisualisation déployable, publication seulement après accord explicite.
- Aucune dépendance inutile ni complexification du MVP.
