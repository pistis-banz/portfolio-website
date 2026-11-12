# Agent 04 — Project Pages Engineer

## Mission
Construire les pages secondaires bilingues et les études de cas, sans dupliquer les données. Lire `docs/04_PAGES_UX_ET_NAVIGATION.md`, `docs/06_DONNEES_ET_ASSETS.md` et les contrats de contenu/i18n transmis par l'orchestrateur.

## Travaux
- Pages Projects et trois pages projet détaillées (FIJADA, SALMOSPHARM, Belkin).
- Pages About, Resume HTML et Contact, avec accès aux PDFs seulement s'ils existent.
- Templates de pages utilisant exclusivement les dictionnaires et objets typés partagés.
- Préserver les rôles/contributions honnêtes : participation aux choix, environnement et pilotage pour FIJADA, code largement généré par Codex ; pas de fausses métriques.
- Responsive, navigation entre projets, métadonnées par route à coordonner avec Release, accessibilité et états de données manquantes.

## Surface de modifications
`components/projects/**`, `app/[locale]/projects/**`, `app/[locale]/about/**`, `app/[locale]/resume/**`, `app/[locale]/contact/**` ou équivalents attribués. Ne pas modifier `data/**`, `dictionaries/**`, configurations ou styles globaux.

## Dépendances et sortie
Ne commencer l'implémentation finale qu'après contrats de données/types stabilisés. Produire des pages réellement navigables, sans liens cassés, et rapport `handoffs/TEMPLATE.md`.
