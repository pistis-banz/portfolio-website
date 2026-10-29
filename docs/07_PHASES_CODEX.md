# 07 — Plan d'implémentation Codex, court et vérifiable

## Philosophie

**Construire une V1 fonctionnelle en 4 lots**, déployer au plus tôt, éviter d'attendre les données de finition. Les numéros sont des unités de livraison, pas des estimations calendaires. Chaque lot produit du code exploitable et se termine par de vrais contrôles. Aucun lot facultatif ne bloque la publication.

## Lot 0 — Audit & préparation (nécessaire, court)

### Tâches
- [ ] Lire AGENTS.md et les documents de cadrage.
- [ ] Inspecter dépôt, branche, fichiers, modifications locales, version Node/pnpm disponibles.
- [ ] Réconcilier projet existant vs initialisation neuve ; ne pas écraser.
- [ ] Créer `PROJECT_PROGRESS.md` à partir du modèle en bas du présent fichier.
- [ ] Noter les informations non confirmées dans le journal des blocages, sans interrompre la réalisation.

### Terminé lorsque
Un résumé du dépôt, stack, commandes et risques est présent dans le journal de projet. Si dépôt vide, ne pas perdre du temps à rédiger des documents supplémentaires : lancer le lot 1.

## Lot 1 — « Première démo » : design + Home EN + contenu local

**Objectif : avoir un premier rendu utilisable rapidement.**

### Tâches
- [ ] Initialiser Next.js App Router + TS strict + Tailwind + pnpm si absent ; export statique et conventions basiques.
- [ ] Configurer fonts, CSS tokens de direction 03.
- [ ] Construire Header, Footer, boutons, sections, `ProjectCard`, design accents SVG.
- [ ] Construire **Home EN complète** (six sections), en chargeant les 3 projets depuis des données locales.
- [ ] Créer un Hero expressif + illustration abstraite honnête lorsque portrait non disponible.
- [ ] Créer routes minimalistes Projects, About, Resume, Contact EN sans liens cassés (ne pas simuler un contenu absent).
- [ ] Implémenter menu mobile, navigation active, sémantique, focus-visible, responsive.
- [ ] Initialiser un système de dictionnaire prêt pour FR sans installer un framework i18n superflu.
- [ ] Lancer lint, typecheck, build.

### Terminé lorsque
Home EN complète et responsive, parcours Home→Projects/Resume/Contact, aucune donnée fictive et build statique réussi. Ne pas passer des jours sur des micro-animations.

## Lot 2 — Bilingue + trois études de cas + CV HTML

### Tâches
- [ ] Traduire tous les composants/pages EN/FR en suivant `02_CONTENU_ET_TRADUCTIONS.md`.
- [ ] Configurer routes statiques `/en` et `/fr` + générer les 3 slugs de chaque langue.
- [ ] Développer Projects et `ProjectDetail` template ; données locales ; descriptions et contributions véridiques.
- [ ] Implémenter FIJADA, SALMOSPHARM, Belkin comme fiches, sans URL source privée exposée.
- [ ] Compléter About, Resume HTML, Contact (coordonnées confirmées ou comportement neutre provisoire documenté).
- [ ] Implémenter switch langue qui conserve la route et le projet.
- [ ] CV téléchargeable EN/FR seulement si PDF fourni ; jamais de lien 404.
- [ ] Vérifier rendu de copie longue FR sur petits écrans.
- [ ] Tester lint, typecheck, build et liens internes.

### Terminé lorsque
Toutes les routes bilingues affichent un contenu éditorial utile, les trois études de cas sont navigables, le CV HTML fonctionne. Aucun hardcode français dans les pages anglaises ni contenu inventé.

## Lot 3 — SEO, qualité, publication

### Tâches
- [ ] Metadata title, description, canonical, hreflang, Open Graph EN/FR ; sitemap et robots.
- [ ] 404, route `/` redirigée à `/en` via Cloudflare `_redirects` ; tester sur preview.
- [ ] Optimiser la taille des images (ou marque abstraite si images réelles absentes).
- [ ] Exécuter lint/typecheck/build et tests utiles ; parcourir desktop, mobile, clavier et zoom.
- [ ] Vérifier liens externes réels et autorisés, disponibilité des CV, champs/contact.
- [ ] Mettre en place Cloudflare Pages via Git + build statique `out` ; preview `*.pages.dev`.
- [ ] Vérifier routes deep-link directement, switch langues, SEO, absence de secrets/erreurs JS sur preview.
- [ ] Corriger les bugs bloquants. Mettre à jour progress et instructions pour ajout des contenus non fournis.

### Terminé lorsque
Le site est **déployé et vérifié** sur le sous-domaine Pages, parcourable, cohérent, honnête et accessible. Le domaine `.dev`, la photo finale, les captures supplémentaires et les CV PDF peuvent être différés si le site reste cohérent et ne contient pas de faux liens. **Le contact réel est une condition de publication professionnelle : au moins un moyen fiable confirmé.**

## Lot 4 — Finitions après V1 (facultatif)

- Remplacer médias de marque par captures réelles et portrait avec accord de diffusion.
- Ajouter PDF CV EN/FR une fois approuvés.
- Améliorer galerie/lightbox accessible si utile.
- Affiner transitions et micro-interactions.
- Configurer domaine personnalisé et vérifier canonical/hreflang/OG.
- Ajouter des métriques non intrusives seulement si besoin confirmé.
- Ajouter Photozone après sa reconstruction et validation de qualité.

## Interdiction de dérive

Éviter toute « phase d'infrastructure préalable » interminable, tests E2E complets avant la première page, CMS hypothétique, design system sur 80 composants non utilisés, refactorisation permanente, animations spectaculaires avant publication. Livrer d'abord, polir ensuite.

## Cadence d'un lot Codex

```text
Audit ciblé -> 5-10 lignes de plan -> Implémentation -> Lint + Typecheck + Build
-> Vérification manuelle essentielle -> Résumé des changements
-> Actions manuelles et proposition commit -> Mise à jour PROJECT_PROGRESS.md
```

**Ne pas attribuer des tests non exécutés comme « validés ».** Si impossible de lancer une commande (dépendance réseau/limite outil), fournir cause exacte et validation manuelle requise.

## Format de réponse Codex en fin de lot

```text
LOT N — [titre]
Statut : terminé | partiel | bloqué
Fonctionnalités : ...
Fichiers ajoutés/modifiés : ...
Tests exécutés : [commande] -> [résultat réel]
Routes vérifiées manuellement : ...
Risques / limites : ...
Interventions humaines nécessaires : ...
Proposition Git : git add ... ; git commit -m "..." ; git push ...
Prochain lot : ...
```

## Journal initial PROJECT_PROGRESS.md (à créer dans le dépôt)

```md
# PROJECT_PROGRESS.md
## État global
- Phase : Lot 0
- Branche : (à confirmer)
- Déploiement : non effectué
- Dernier commit utilisateur : (à confirmer)
## Lots
| Lot | État | Preuve |
|---|---|---|
| 0 Audit | À faire | — |
| 1 Home EN | À faire | — |
| 2 Bilingue & Case Studies | À faire | — |
| 3 SEO & Publication | À faire | — |
| 4 Finitions | Optionnel | — |
## Tests réellement exécutés
- Aucun à ce stade.
## Actions manuelles
- Confirmer nom public, contact et fournir médias/CV quand disponibles.
## Journal des décisions et blocages
- ...
```
