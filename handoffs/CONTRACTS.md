# Contrats de travail — aperçu lot 1

L'application existante est à la racine : `app/`, `components/`, `content/`, `public/` ; pas de `src/` ni de second projet. Les chartes et le modèle de rapport sont dans `portfolio-codex/agents/` et `portfolio-codex/handoffs/TEMPLATE.md`.

- Routes : `/en`, `/fr`, `/{lang}/projects`, `/{lang}/projects/{slug}`, `/{lang}/about`, `/{lang}/resume`, `/{lang}/contact`. Sur Cloudflare Pages, `public/_redirects` redirige `/` vers `/en` (302).
- `content/data.ts` exporte `Locale = 'en' | 'fr'`, `locales`, `isLocale`, `projects` et `copy`. Chaque projet possède `slug`, `name`, `stack`, `en` et `fr` ; les slugs sont `fijada`, `salmospharm-133`, `belkin-sas`. Les composants consomment directement ces exports ; aucune API imaginaire n'est imposée.
- `components/site.tsx` exporte `Header`, `Footer`, `Label`, `Cards`, `ContactBand` ; `components/page-shell.tsx` exporte `PageShell`. Styles et tokens : `app/globals.css`. Layout de langue : `app/[lang]/layout.tsx`.
- Orchestrateur : configs, lockfile, styles globaux, layouts, contrats, journal et intégration. UI : `components/site.tsx` et nouveaux fichiers de style propres au composant uniquement. Contenu : `content/data.ts` uniquement si correction expressément attribuée. Pages : `app/[lang]/{projects,about,resume,contact}/**` uniquement si attribué. QA : lecture seule. Aucun chevauchement en écriture.
- Fin de tâche : rapport factuel selon le modèle du pack ; pas d'invention, de dépendance ni de modification hors périmètre. Gate : intégration, lint, typecheck, build, QA ciblée et revue visuelle humaine.
