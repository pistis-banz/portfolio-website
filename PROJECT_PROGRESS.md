# État du projet

- Branche : `main` ; base : `5c31bf4` (initialisation).
- Lots 0, 1 et 2 : implémentés. Accueil complet, design responsive, navigation EN/FR, trois études de cas, About, CV HTML et contact via profil GitHub confirmé. Les projets et traductions sont stockés localement.
- Lot 3 : export statique et redirection Cloudflare préparés ; publication et recette sur Cloudflare Pages non effectuées. Site de prévisualisation, pas encore prêt pour une publication professionnelle : un canal de contact fiable et les autorisations clients doivent être confirmés.
- Lot 4 : facultatif, non commencé.

## Vérifications

- `corepack pnpm lint` : réussi.
- `corepack pnpm typecheck` : réussi après régénération des types Next ; les anciens types de `.next` correspondaient à l'application initiale.
- `corepack pnpm build` : réussi ; 16 pages bilingues générées.
- Contrôle des 16 fichiers HTML exportés : langues, un H1 et liens internes vérifiés, aucune erreur détectée.
- Contrôle visuel navigateur, clavier, zoom, lecteur d'écran et Cloudflare : non réalisés.

## À compléter

- Confirmer nom public, e-mail ou LinkedIn, droits de présentation des projets et des captures.
- Fournir les captures autorisées et anonymisées, le portrait et les CV PDF ; préciser les contributions Belkin et SALMOSPHARM, formation et dates si souhaité.
- Choisir l'URL de production pour définir canonical, hreflang absolus, sitemap et image sociale. Aucune URL fictive n'est utilisée.
- La typographie système évite un téléchargement externe au build ; les polices Sora, Inter et IBM Plex Mono restent à intégrer localement si souhaité.
- Avant publication : contrôler l'accessibilité, le rendu mobile, les métadonnées et la redirection `/` sur la preview Pages. Commande de build : `corepack pnpm build` ; dossier de sortie : `out`.
- Aucun commit, push ou déploiement effectué par Codex.
