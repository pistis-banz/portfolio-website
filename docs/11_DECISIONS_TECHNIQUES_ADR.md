# 11 — Journal de décisions architecturales (ADR)

Chaque décision exprime un compromis explicite. Ne pas remettre en débat sans contrainte factuelle ou changement de besoin.

## ADR-001 — Site statique Next.js

- **Décision :** Next.js App Router + export statique pour V1.
- **Motif :** portfolio orienté contenu, routes connues, pas de données dynamiques runtime ; bon SEO et déploiement léger.
- **Compromis :** impossibilité d'utiliser Server Actions, route handlers dépendant de la requête, ISR et autres fonctionnalités nécessitant serveur.
- **Réexamen si :** formulaire serveur, CMS, authentification ou contenu régulièrement édité par des non-développeurs.

## ADR-002 — Pas de base de données

- **Décision :** projets et traductions dans des fichiers typés.
- **Motif :** trois projets, deux langues et CV statique, pas de besoin de stockage dynamique.
- **Compromis :** mise à jour via Git/rebuild plutôt qu'interface d'édition.
- **Réexamen si :** volume de contenus élevé et contribution d'éditeurs non techniques.

## ADR-003 — Hébergement Cloudflare Pages

- **Décision :** déployer sur Cloudflare Pages preview avant domaine.
- **Motif :** CDN, Git deployment, coût initial nul dans limites Free, compatibilité export Next.
- **Compromis :** export statique ; certaines fonctionnalités cloud deviennent spécifiques au fournisseur (`_redirects`).
- **Réexamen si :** besoin serveur ou contraintes commerciales/documentaires différentes.

## ADR-004 — Anglais/français par route

- **Décision :** `/en/` et `/fr/` ; même slug pour les projets ; dictionnaires locaux typés.
- **Motif :** SEO international, URLs partageables, faible complexité.
- **Compromis :** traductions maintenues dans le code et deux variantes statiques pour chaque page.
- **Réexamen si :** nombreuses langues, traductions éditoriales fréquentes et workflow de traduction.

## ADR-005 — Direction créative 03

- **Décision :** canvas clair, noir, bleu `#343BEE`, lime `#DFFF48`, Sora/Inter/IBM Plex Mono.
- **Motif :** choisie explicitement après comparaison de cinq directions.
- **Compromis :** design expressif exige discipline de hiérarchie, contrastes et performance.
- **Réexamen si :** tests de lisibilité révèlent un problème ; modifier les valeurs tout en préservant l'identité, pas remplacer par un template SaaS.

## ADR-006 — Contact sans formulaire

- **Décision :** e-mail et LinkedIn directs.
- **Motif :** aucun backend, maintenance ni stockage de messages ; canaux compréhensibles par les recruteurs.
- **Compromis :** le logiciel de messagerie local peut être nécessaire pour `mailto:` ; LinkedIn sert d'alternative.
- **Réexamen si :** nécessité démontrée de collecte de leads dans un formulaire.

## ADR-007 — Véracité et sources privées

- **Décision :** ne pas publier liens GitHub de projets privés ni résultats techniques non vérifiés ; présenter rôle IA-assisté honnêtement.
- **Motif :** crédibilité et confidentialité des clients.
- **Compromis :** moins de liens de preuve directe ; compenser par vraies captures et études de cas.
- **Réexamen si :** dépôts rendus publics avec autorisation ou démos live vérifiées.

## ADR-008 — Animations après fonctionnement

- **Décision :** interactions CSS sobres pour V1, aucune dépendance Motion/GSAP obligatoire.
- **Motif :** vitesse de livraison, poids JS réduit, accessibilité.
- **Compromis :** certains effets du moodboard ne seront pas présents à la première publication.
- **Réexamen si :** V1 stable et bénéfice visuel clairement identifié.

## ADR-009 — CV HTML + PDF conditionnels

- **Décision :** Resume HTML toujours disponible ; PDF EN/FR uniquement lorsqu'ils existent et sont validés.
- **Motif :** accessibilité, indexation, mobile et suppression des liens 404.
- **Compromis :** PDF pas automatiquement synchronisé avec le contenu, à tenir à jour manuellement.
- **Réexamen si :** besoin d'une génération PDF automatisée démontrée.

## ADR-010 — Livraison par petits lots et Git manuel

- **Décision :** 4 lots MVP, contrôle et journal de progression à chaque lot, commits/push par le propriétaire.
- **Motif :** autonomie de compréhension, contrôle coûts/tokens et risques de code généré par IA.
- **Compromis :** interventions humaines entre lots.
- **Réexamen si :** le propriétaire autorise explicitement une CI/CD et des commits automatisés.
