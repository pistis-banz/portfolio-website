# 09 — Déploiement et budget : V1 à coût minimal

## 1. Choix recommandé

**Cloudflare Pages** avec **Next.js en export statique** et sous-domaine gratuit `*.pages.dev` au lancement. Les fichiers HTML/CSS/JS sont générés à la compilation, puis servis par CDN. Aucun besoin de runtime Node.js permanent, base de données, Supabase ou Firebase.

La solution répond au besoin actuel : site professionnel essentiellement éditorial, cinq types de pages statiques, trois études de cas et deux langues. **Ce choix n'engage pas le projet à rester statique pour toujours** ; si l'on ajoute un back-office ou une API plus tard, il faudra revoir l'architecture.

## 2. Alternatives considérées

| Option | Avantages | Contraintes | Décision V1 |
|---|---|---|---|
| Cloudflare Pages static | Gratuit pour petit site, HTTPS, CDN, Git integration, domaine personnalisé plus tard | Export statique : pas de SSR dynamique natif | **Retenu** |
| Vercel Hobby | Excellent DX Next.js, previews, intégration | Restrictions officielles d'usage personnel/non-commercial ; pour un portfolio prospectant des clients, vérifier l'éligibilité | Non retenu par défaut |
| Vercel Pro | Fonctionnalités Next.js serveur, usage professionnel | Coût récurrent plus élevé et inutile pour V1 | Hors MVP |
| GitHub Pages | Statique simple, gratuit | Configuration Next export, redirections/i18n moins commodes | Alternative viable |
| Hostinger | Hébergement déjà connu | Ajouterait de la gestion, sans avantage pour site statique | Non requis |
| Supabase/Firebase | Données/auth/backend si besoin | Complexité et coûts potentiels inutiles | Exclus |

> **Vigilance Vercel :** documentation officielle Hobby en 2026 : usage personnel/non-commercial. Ne pas considérer automatiquement qu'un portfolio à vocation commerciale y est éligible. Vérifier les conditions si envisagé ultérieurement.

## 3. Coûts prévisionnels

- Hébergement statique Cloudflare Pages : **0 $/mois** dans les limites du forfait Free applicables.
- DNS/HTTPS de base : compris dans l'offre d'hébergement/Cloudflare selon configuration ; pas d'option payante nécessaire.
- Nom de domaine personnalisé : **optionnel** pour le premier déploiement. Le `.dev` peut être acheté ultérieurement, vérifier le prix exact à la commande ; le tarif du registrar évolue (Cloudflare affiche en 2026 une liste publique de prix et renouvellements, ne pas traiter un montant comme garanti).
- Stockage de contenu/projets : dans le dépôt, aucun service SaaS additionnel.
- Formulaire : absent V1, pas de coût email API.
- Analytics : absent V1.

## 4. Pipeline de build Cloudflare Pages

1. Dépôt GitHub dédié au portfolio (privé possible) ; aucun secret dans le dépôt.
2. Depuis Cloudflare Dashboard, créer projet Pages et connecter le dépôt.
3. Preset : **Next.js (Static HTML Export)** ; commande `pnpm build` si supportée, ou `npx next build` selon l'environnement et le gestionnaire (s'assurer que le lockfile pnpm est pris en compte) ; dossier de sortie : `out`.
4. Configurer la version Node compatible avec les dépendances et celle retenue pour le projet.
5. `next.config` avec export statique ; images optimisées compatibles.
6. Preview générée à chaque push autorisé ; vérifier routes profondes et ressources statiques.
7. Promouvoir branche `main` stable après validation explicite du propriétaire.

## 5. Gestion de `/`

En `public/_redirects` pour Cloudflare Pages :

```text
/ /en 302
```

Le fichier `_redirects` doit se retrouver dans `out/` après compilation. Cette directive est **spécifique Cloudflare Pages**, pas une redirection native `next.config` (non disponible pour export statique de la même façon). Tester sur le sous-domaine preview ; un root statique minimal peut servir de repli en local. Aucune redirection automatique basée sur IP/`Accept-Language` nécessaire.

## 6. Domaine personnalisé

Après validation de la préversion :
- Choisir et acheter `*.dev` éventuellement via Cloudflare Registrar, si le budget et la disponibilité conviennent.
- Ajouter domaine personnalisé au projet Pages, configurer DNS/SSL et attendre propagation.
- Mettre à jour l'URL canonique et sitemap après ajout du domaine, vérifier les liens externes.
- `.dev` est associé à HTTPS/HSTS preload : déployer directement en HTTPS ; Cloudflare fournit HTTPS pour domaine configuré.
- Configurer redirection d'un éventuel ancien domaine vers le nouveau seulement après décision.

## 7. Recette post-déploiement

- [ ] Ouvrir `/`, vérifier redirection vers `/en`.
- [ ] Ouvrir directement `/en`, `/fr`, `/en/projects/fijada`, `/fr/projects/salmospharm-133`, `/fr/resume`, `/en/contact`.
- [ ] Tester les liens internes, switch langue, formulaire absent, GitHub général et contact confirmé.
- [ ] Vérifier les images et les polices, erreurs console, responsive et clavier.
- [ ] Vérifier metadata, favicon, robots, sitemap ; noindex de la preview selon politique du fournisseur.
- [ ] Vérifier les fichiers PDF s'ils existent, sinon pas de lien de téléchargement.
- [ ] Test sur connexion mobile raisonnable.
- [ ] Vérifier qu'aucun nom/email privé ne figure dans l'HTML généré ou les images.

## 8. Mise à jour et rollback

- Mise à jour contenu : modifier fichier local, vérifier, ouvrir PR ou commit sous identité propriétaire, rebuild Pages.
- Publication : par Git integration après validation.
- Rollback : via historique des déploiements de l'hébergeur selon fonctions du plan ; sinon revenir au commit stable et reconstruire.
- Aucune migration DB, aucun backup serveur métier en V1 ; conserver la source Git et les médias originaux dans un stockage personnel sûr.

## 9. Références officielles vérifiées au 29 octobre 2026

- Cloudflare static Next: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- Cloudflare Pages limites: https://developers.cloudflare.com/pages/platform/limits/
- Cloudflare Pages fonctions et assets: https://developers.cloudflare.com/pages/functions/pricing/
- Cloudflare Pages redirects: https://developers.cloudflare.com/pages/configuration/redirects/
- Cloudflare Registrar prix: https://pricing.registrar.cloudflare.com/
- Vercel Hobby: https://vercel.com/docs/plans/hobby
- Next.js static export: https://nextjs.org/docs/app/guides/static-exports

**Codex doit revérifier les paramètres en vigueur lors du déploiement** et ne pas déclarer un abonnement gratuit « sans limite ».
