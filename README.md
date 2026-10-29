# Portfolio professionnel — Dossier de pilotage Codex

**Version de cadrage :** 1.0 — 29 octobre 2026  
**Objectif :** mettre en ligne rapidement une première version convaincante du portfolio/CV d'un Software Developer, orientée recrutement remote international.  
**Statut :** documentation de conception et d'exécution, **pas du code applicatif**.

## Démarrage rapide

1. Copier **tout le contenu** de ce dossier (`AGENTS.md`, `CODEX_START_HERE.md`, `README.md`, `docs/` et `assets/reference/`) à la racine du dépôt dédié au portfolio. Conserver `assets/reference/` hors du répertoire public du site ; ce sont des références de conception, pas des captures des projets.
2. Ouvrir le dépôt dans Codex. Lire `AGENTS.md`, puis donner à Codex le prompt de `CODEX_START_HERE.md`.
3. Codex effectue un audit du dépôt, initialise si besoin le projet, produit une **V1 publiable** par petits lots testables et signale les interventions manuelles.
4. Déployer une préversion sur `*.pages.dev` **avant** d'acheter un domaine.
5. Remplacer les visuels de substitution par les captures et le portrait réel lorsque fournis ; activer les liens vers les CV PDF seulement après ajout des fichiers.

## Ordre de lecture — source de vérité

1. [`AGENTS.md`](AGENTS.md) — comportement et contraintes imposés à Codex.
2. [`docs/00_DECISIONS_ET_PERIMETRE.md`](docs/00_DECISIONS_ET_PERIMETRE.md) — décisions de l'utilisateur, hypothèses et interdictions.
3. [`docs/01_CAHIER_DES_CHARGES.md`](docs/01_CAHIER_DES_CHARGES.md) — besoins, V1, critères d'acceptation.
4. [`docs/02_CONTENU_ET_TRADUCTIONS.md`](docs/02_CONTENU_ET_TRADUCTIONS.md) — contenu EN/FR et règles de véracité.
5. [`docs/03_DIRECTION_ARTISTIQUE.md`](docs/03_DIRECTION_ARTISTIQUE.md) — style graphique « Créatif & Distinctif ».
6. [`docs/04_PAGES_UX_ET_NAVIGATION.md`](docs/04_PAGES_UX_ET_NAVIGATION.md) — écrans, parcours, mobile.
7. [`docs/05_ARCHITECTURE_TECHNIQUE.md`](docs/05_ARCHITECTURE_TECHNIQUE.md) — stack et structure de projet.
8. [`docs/06_DONNEES_ET_ASSETS.md`](docs/06_DONNEES_ET_ASSETS.md) — données de projets et médias.
9. [`docs/07_PHASES_CODEX.md`](docs/07_PHASES_CODEX.md) — ordre de développement et points d'arrêt.
10. [`docs/08_QUALITE_ACCESSIBILITE_SEO.md`](docs/08_QUALITE_ACCESSIBILITE_SEO.md) — tests et définition de terminé.
11. [`docs/09_DEPLOIEMENT_ET_COUTS.md`](docs/09_DEPLOIEMENT_ET_COUTS.md) — publication et coûts.
12. [`docs/10_CONTENUS_A_COMPLETER.md`](docs/10_CONTENUS_A_COMPLETER.md) — informations manquantes, sans blocage inutile.
13. [`docs/11_DECISIONS_TECHNIQUES_ADR.md`](docs/11_DECISIONS_TECHNIQUES_ADR.md) — décisions architecturales argumentées.

## Priorité absolue

Livrer un portfolio **sobrement fonctionnel, crédible, beau et navigable** avant toute sophistication :
- site bilingue EN / FR ;
- accueil, projets, trois études de cas, About, Resume/CV, Contact ;
- design expressif 03 ;
- responsive, accessibilité et SEO de base ;
- CTA e-mail + LinkedIn (une fois les coordonnées confirmées), CV PDF seulement si fichiers fournis ;
- zéro lien mort, zéro témoignage ou résultat inventé.

## Hors V1

Back-office, CMS, Supabase, Firebase, authentification, blog, recherche, commentaires, tableau de bord, prise de rendez-vous, formulaire serveur, fonctionnalités « IA », analytics tiers, animation 3D, système de thème complexe. Aucun de ces éléments ne doit être ajouté sans demande explicite.

## Visuel de référence

Voir `assets/reference/direction-03-creative-distinctive.png`. **Moodboard uniquement** : la maquette générée contient des captures fictives et du texte illustratif. Ne pas copier ces images comme des preuves de projets réels.

## Définition du succès

Un recruteur trouve en moins de quelques secondes : métier, spécialisation, projets, CV et contact ; il peut ouvrir chaque étude de cas, comprendre le rôle réel du développeur et explorer le site en anglais depuis mobile et ordinateur.
