# 08 — Qualité, accessibilité, SEO et recette V1

## 1. Politique de test

Tester les comportements critiques plutôt que créer des centaines de tests artificiels. **Ne jamais confondre un build qui passe avec un site utilisable.** Exécuter les commandes réelles, noter résultats et versions dans `PROJECT_PROGRESS.md`.

### Commandes minimales

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Selon les scripts réellement définis, `pnpm test` pour les tests utiles ; ne jamais déclarer « test passé » sans exécution. Un test de dictionnaire/route ne doit pas se limiter à `expect(true).toBe(true)`.

## 2. Matrice de tests fonctionnels manuels

| ID | Scénario | Attendu |
|---|---|---|
| NAV-01 | Ouvrir `/en` et `/fr` directement | Deux pages traduites, sans erreur console |
| NAV-02 | Header Projects/About/Resume/Contact | Routes valides et bon état actif |
| NAV-03 | Cliquer carte FIJADA | Étude de cas correcte |
| NAV-04 | Cliquer SALMOSPHARM | Étude de cas desktop, pas web |
| NAV-05 | Cliquer Belkin | Étude de cas correspondante |
| NAV-06 | Passer `/en/projects/fijada` vers FR | `/fr/projects/fijada`, même projet |
| NAV-07 | Retour Projet précédent/suivant | Slugs et langues conservés |
| NAV-08 | Ouvrir URL inconnue | 404 utile, retour Home |
| NAV-09 | Direct `/` sur Cloudflare Pages | Redirigé vers `/en` ou repli clairement fonctionnel |
| NAV-10 | Ouvrir `/fr/resume` | CV HTML complet, pas de liens PDF absents |
| NAV-11 | Cliquer contact | `mailto:` ou LinkedIn confirmé et fonctionnel |
| NAV-12 | GitHub projets privés | Aucun bouton source trompeur |
| NAV-13 | Changer langue du menu mobile | Menu reste cohérent, pas de scroll verrouillé |
| NAV-14 | Recharger directement une étude de cas | Page renvoyée par hébergeur, pas 404 du routeur |
| NAV-15 | `prefers-reduced-motion` | Animations non indispensables désactivées |

## 3. Matrice responsive

Contrôler au minimum : 320, 375, 390, 768, 1024, 1280, 1440px, orientation paysage mobile et zoom navigateur 200%.

- [ ] Pas de défilement horizontal, texte coupé, superposition illisible.
- [ ] Hero conserve hiérarchie métier → slogan → texte → CTA.
- [ ] Toutes les cartes ont du texte lisible et un lien accessible sans hover.
- [ ] Touch targets utilisables, éviter boutons 20px.
- [ ] Titre FR long s'affiche sans chevauchement.
- [ ] Menu, switch langue et CTA restent utilisables au clavier et au toucher.
- [ ] Captures réelles préservent leurs proportions et le texte n'est pas illisible.

## 4. Accessibilité (cible WCAG 2.2 AA)

### Structure
- Un seul H1 par page, titres H2/H3 hiérarchiques ; `<main>`, `<header>`, `<nav>`, `<footer>`.
- Lien d'évitement `Skip to main content` / `Aller au contenu`.
- Langue HTML correcte (`en`, `fr`).
- Décorations/astérisques SVG `aria-hidden="true"` ; texte non remplacé par une image.

### Interactions
- Tous les liens et contrôles focusables, activables au clavier.
- Focus visible distinct d'un hover ; ne pas `outline: none` sans substitution.
- Menu mobile `aria-expanded`, label compréhensible et gestion Escape.
- Éviter le piège de focus involontaire ; fermer overlay après navigation.
- Respect de `prefers-reduced-motion`, aucune animation d'entrée rendant le texte invisible au chargement.

### Perception
- Contraste visé 4.5:1 texte normal, 3:1 grand texte/éléments UI selon critères AA ; tester les combinaisons de couleurs réelles.
- Ne pas encoder les informations uniquement par couleur ou position.
- Alt utile pour les vrais screenshots, alt vide pour décorations pures.
- Captions des captures, liens descriptifs et explication si ouverture de lien externe.
- Texte redimensionnable sans perte d'information au zoom 200%.

## 5. SEO de base (en/fr)

- Titres/descriptions uniques et naturels pour Home, Projects, 3 Case Studies, About, Resume, Contact.
- Canonical vers URL réelle de production ; en preview ne pas pointer vers un domaine fantôme.
- `hreflang` alternates correspondants EN/FR sur les 2 variantes d'une même page.
- `og:title`, `og:description`, `og:image` et Twitter cards ; utiliser un visuel de marque réel, pas une fausse capture.
- Sitemap incluant toutes les routes indexables (2 langues × 8 pages = **16 pages** : Home, Projects, 3 projets, About, Resume, Contact). Remarque : 1+1+3+1+1+1=8 par langue.
- `robots.txt` n'interdit pas le site public ; previews Cloudflare peuvent être noindex selon fournisseur.
- URLs lisibles, slugs stables, langues conservées.
- Vérifier sur page déployée le HTML source (title, description, H1) et OG.
- Ne pas ajouter de balisage JSON-LD exagéré ou de notes `AggregateRating` sans preuves.

## 6. Mesures de performance

Objectifs indicatifs (pas garanties) sur Lighthouse mobile : Performance >=90, Accessibilité >=90, Bonnes pratiques >=90, SEO >=90. Viser Core Web Vitals satisfaisants (LCP <=2.5s, CLS <=0.1, INP <=200ms en données terrain si disponibles).

Actions :
- Compresser médias / définir dimensions / lazy-loader images non critiques.
- Limiter JS client et CSS inutilisé.
- Éviter polices multi-poids et effets coûteux.
- Éviter vidéos et lourdes animations dans Hero.
- Préférer CDN statique, pas dépendance API au chargement.

## 7. Sécurité et protection des données

- Aucun secret ou token commité et aucune donnée personnelle de clients dans les médias.
- Les seuls liens de dépôt publics affichés doivent être effectivement consultables et autorisés.
- Pas d'API, auth ou cookies de tracking pour la V1.
- Liens `target="_blank"` avec `rel="noopener noreferrer"`.
- Attention aux headers CSP : Next.js peut générer des scripts qu'une politique trop restrictive casserait. Introduire une CSP testée sur la preview plutôt que copier une politique standard non adaptée.
- Sauf collecte de données ou services tiers, éviter un bandeau cookies artificiel ; prévoir mentions de confidentialité adaptées aux services réellement utilisés si nécessaire.

## 8. Validation des contenus et assets

- [ ] Rôle dans FIJADA honnête (cadrage, architecture, mise en place, pilotage Codex).
- [ ] Belkin rôle individuel non suraffirmé.
- [ ] SALMOSPHARM bien catégorisé logiciel desktop offline-first.
- [ ] Captures réelles autorisées, anonymisées et correctement légendées.
- [ ] Aucune durée ou métrique non vérifiée.
- [ ] Un vrai canal de contact disponible avant publication professionnelle.
- [ ] Fichiers CV PDF uniquement avec fichier valide.
- [ ] Images OG / favicons réels et appropriés.

## 9. Journal de bugs et clôture

Chaque anomalie : ID, gravité (bloquante/majeure/mineure), reproduction, capture éventuelle, correction, vérification. La V1 ne peut pas être dite livrée avec lien cassé majeur, débordement mobile bloquant, navigation inaccessible, projet confondu ou données personnelles fuitées.
