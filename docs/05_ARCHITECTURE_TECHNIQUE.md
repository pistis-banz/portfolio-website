# 05 — Architecture technique de la V1

## 1. Objectif architectural

Portfolio bilingue multipage, généré **statiquement** à la compilation, hébergé sans serveur applicatif ni base de données. Favoriser lisibilité, vélocité Codex, sécurité et simplicité de maintenance. La V1 ne doit pas payer le coût de complexité d'un futur CMS hypothétique.

## 2. Stack proposée

| Couche | Choix | Justification |
|---|---|---|
| Framework | Next.js App Router, version stable compatible | Métadonnées, routing, pré-rendu statique, réutilisation React |
| Langage | TypeScript strict | Contrat de données, lisibilité, erreurs tôt |
| UI | React, Server Components par défaut | Moins de JS client, contenu SSR généré au build |
| Styles | Tailwind CSS + variables CSS | Cohérence tokens, responsive rapide |
| Fonts | Sora + Inter + IBM Plex Mono | Direction créative validée ; chargement optimisé |
| Contenu | Fichiers TypeScript/JSON locaux typés | Modification simple sans API/DB |
| Images | Fichiers optimisés dans `public/` | Captures réelles, prévisibles et contrôlées |
| Hébergement | Cloudflare Pages, export statique | Faible coût, HTTPS, CDN, Git deploy |
| Contact | `mailto:` et liens sociaux confirmés | Pas de serveur, pas de données stockées |
| Qualité | ESLint, TS check, build ; tests ciblés | Tests utiles, pas de surinvestissement |

N'ajouter **aucune** dépendance d'animation, CMS, i18n ou bibliothèque de composants lourde sans raison concrète et écrite. `next-intl` n'est pas requis pour dix à douze pages statiques ; dictionnaires simples suffisent.

## 3. Génération statique et limites

Configurer l'export statique supporté par la version Next.js choisie : `output: 'export'`. Toutes les routes doivent être connues au build. Pour `/[lang]` et `/[slug]`, utiliser `generateStaticParams()` ; ne pas appeler des données dépendant de la requête en runtime.

**Non supporté dans un export statique Next.js traditionnel :** Server Actions, handlers dépendant de la requête, cookies serveur, ISR, routes dynamiques non générées, optimisation d'image par défaut nécessitant serveur, middleware/proxy conditionné à requêtes. Ne pas contourner ces restrictions sans documenter et revoir l'architecture.

Toutes les données de projet proviennent de fichiers au build. `use client` seulement pour menu mobile, interactions galerie éventuelles et effets légers. Pas de route API.

## 4. Arborescence de code recommandée

```text
portfolio/
├── AGENTS.md
├── README.md
├── CODEX_START_HERE.md
├── PROJECT_PROGRESS.md
├── docs/                      # documentation de pilotage
├── public/
│   ├── _redirects             # Cloudflare Pages: / -> /en 302
│   ├── images/
│   │   ├── brand/
│   │   └── projects/
│   │       ├── fijada/
│   │       ├── salmospharm-133/
│   │       └── belkin-sas/
│   ├── cv/                    # PDF vrais et validés uniquement
│   ├── favicon.ico
│   └── og/                    # images sociales authentiques ou brand
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   └── [lang]/
│   │       ├── layout.tsx     # root layout HTML avec <html lang={lang}>
│   │       ├── page.tsx
│   │       ├── projects/
│   │       │   ├── page.tsx
│   │       │   └── [slug]/page.tsx
│   │       ├── about/page.tsx
│   │       ├── resume/page.tsx
│   │       └── contact/page.tsx
│   ├── components/
│   │   ├── layout/            # Header, Footer, LanguageSwitcher
│   │   ├── sections/          # Hero, SelectedWork, AboutPreview, etc.
│   │   ├── projects/          # ProjectCard, ProjectGallery, CaseStudy
│   │   └── ui/                # Button, SectionHeading, TechTag, Marks
│   ├── content/
│   │   ├── projects.ts        # métadonnées factuelles typées
│   │   └── resume.ts          # expériences/formation confirmées
│   ├── i18n/
│   │   ├── config.ts          # supported locales + guards
│   │   ├── en.ts
│   │   ├── fr.ts
│   │   └── dictionaries.ts
│   ├── lib/
│   │   ├── paths.ts
│   │   └── seo.ts
│   └── types/
│       ├── project.ts
│       └── content.ts
├── package.json
├── pnpm-lock.yaml
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

Arborescence indicative, adapter à la version courante du framework et à un projet préexistant. Garder les fichiers de contenu modifiables sans toucher aux composants.

## 5. Contrats de données (description, pas du code applicatif)

```ts
type Locale = 'en' | 'fr';
type ProjectCategory = 'web-platform' | 'desktop-software' | 'business-website';
type LocalizedText = { en: string; fr: string };
type Project = {
  slug: 'fijada' | 'salmospharm-133' | 'belkin-sas';
  title: string;
  category: ProjectCategory;
  summary: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  contribution: LocalizedText;
  technologies: readonly string[];
  capabilities: { en: readonly string[]; fr: readonly string[] };
  gallery: readonly { src: string; alt: LocalizedText; caption?: LocalizedText }[];
  liveUrl?: string;     // seulement si URL vérifiée
  sourceUrl?: string;   // seulement si dépôt PUBLIC et autorisé
  featured: boolean;
};
```

Ne pas exposer un champ `metrics` tant que les métriques ne sont pas réelles. Pas d'`any`. Préférer des identifiants stables ; slug identique dans les deux langues ; textes séparés de la logique.

## 6. I18n avec export statique

- Dictionnaires en et fr, valider la présence de toutes les clés au build ou par tests.
- `generateStaticParams()` produit `en`, `fr` à toutes les routes requises et la combinaison des 3 slugs.
- Éviter le middleware de détection automatique du navigateur (non nécessaire en statique). Cloudflare redirige `/` vers `/en` dans `public/_redirects` : `/ /en 302` ; tester réellement.
- Changement de langue : remplacer uniquement le premier segment `/en` ↔ `/fr`, conserver slug.
- Générer `metadata` adaptée à chaque locale et page en suivant les capacités statiques de la version choisie.
- Le `html lang` doit correspondre à l'URL. **Attention App Router** : privilégier `src/app/[lang]/layout.tsx` comme *root layout*, avec `<html lang={lang}>`, sans `src/app/layout.tsx` parent qui figerait `lang="en"` sur les pages françaises. La racine `/` est redirigée côté Cloudflare par `_redirects` ; en développement local, ouvrir `/en`. N'ajouter une page `/` que si son HTML est valide et son export statique confirmé selon la version Next.js retenue. Ne jamais imbriquer deux éléments `<html>`.

## 7. SEO statique

- `generateMetadata` / metadata statique avec title, description, canonical par route et alternates EN/FR.
- Sitemap XML généré à build à partir des pages et projets en anglais/français.
- robots.txt permissif pour les pages publiques et excluant uniquement les chemins techniques éventuels ; pas de `Disallow: /` accidentel.
- Open Graph : image de marque propre ou capture autorisée, dimensions adaptées ; aucune photo fictive d'un projet.
- `Person`/`CreativeWork` structurés seulement si données vérifiées et utiles.
- Format HTML logique avec H1 unique, H2 cohérents, liens descriptifs.

## 8. Images

- Assets locaux sous `public/images`, sources originales hors dépôt si elles contiennent des données privées.
- Formats : WebP/AVIF pour captures si le pipeline de build les traite ; JPG/PNG si besoin ; poids cible pragmatique sans sacrifier le texte.
- Dimension explicite ou `aspect-ratio`, versions mobile/desktop adaptées.
- Avec export statique, `next/image` doit fonctionner sans serveur d'optimisation (par exemple `images.unoptimized: true` ou rendu équivalent). Tester le build.
- Si aucune vraie capture n'est fournie, utiliser un motif SVG de marque purement décoratif avec légende neutre, **pas** une capture de dashboard inventée.

## 9. Scripts et qualité

Scripts attendus : `pnpm dev`, `pnpm lint`, `pnpm typecheck`, `pnpm build`, `pnpm test` si tests en place. `pnpm` privilégié, choisir un seul gestionnaire de paquets et commiter lockfile. Ne pas ajouter Jest + Vitest + Playwright tous ensemble pour un site simple.

Tests automatisés utiles : dictionnaires FR/EN complets, données de projets uniques/slugs valides, génération des routes, absence de URLs factices, composants de navigation si tests UI installés. Validation visuelle manuelle indispensable.

## 10. Exigences de performance

- Server Components et contenu statique ; pas de framework animation global.
- Chargement des polices optimisé ; éviter 7 variations de font.
- Pas de vidéo autoplay ni de shader WebGL.
- Privilégier composition SVG légère et captures compressées.
- Pas d'images tierces distantes au premier affichage.

## 11. Sources officielles (consultées le 29/10/2026)

- Next.js App Router: https://nextjs.org/docs/app
- Next.js static export: https://nextjs.org/docs/app/guides/static-exports
- Next.js internationalization: https://nextjs.org/docs/app/guides/internationalization
- Cloudflare Pages static Next.js: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- Cloudflare Pages redirects: https://developers.cloudflare.com/pages/configuration/redirects/

Toujours revérifier la version courante au moment d'écrire les commandes. Ne pas extrapoler des fonctionnalités Node-server sur un export statique.
