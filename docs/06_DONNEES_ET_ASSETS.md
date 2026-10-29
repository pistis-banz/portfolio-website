# 06 — Modèle de contenu, projets, médias et intégrité éditoriale

## 1. Source de vérité du contenu

Les informations factuelles viennent des validations du propriétaire, des conversations sur FIJADA, et des README/dossiers techniques lorsqu'ils ont pu être consultés. Les textes éditoriaux dans `02_CONTENU_ET_TRADUCTIONS.md` sont des **propositions à transformer en copy** sans ajouter des faits inédits. Les médias réels ne sont pas encore présents dans le pack.

## 2. Inventaire des réalisations

| Slug | Nom | Type | Statut utilisateur | Technique connue | Preuve publique |
|---|---|---|---|---|---|
| `fijada` | FIJADA | Plateforme institutionnelle client | Terminé | Laravel, Blade, React, TypeScript, Inertia, MySQL | Dépôt GitHub privé ; captures disponibles chez propriétaire |
| `salmospharm-133` | SALMOSPHARM 133 | Application desktop | Terminé | Python, PySide6, SQLite | Dépôt fourni mais accès non confirmé ; captures disponibles |
| `belkin-sas` | Belkin SAS | Site d'entreprise/blog client | Terminé | Laravel 12, Livewire 4, MySQL | Dépôt GitHub privé ; captures disponibles |
| `photozone` | Photozone | Réseau social photos | Refonte/reprise prévue | Stack historique non à promouvoir ici | **Exclu V1** |

### Liens connus

- Profil GitHub général : `https://github.com/pistis-banz`.
- FIJADA : `https://github.com/pistis-banz/fijada_v2` — **privé**, NE PAS mettre de CTA « code » visible.
- Belkin : `https://github.com/pistis-banz/belkin` — **privé**, NE PAS mettre de CTA « code » visible.
- SALMOSPHARM : `https://github.com/tech-engineer635/salmospharm` — accès non confirmé ; NE PAS afficher en bouton « code » tant que public et autorisé non vérifiés.
- Les liens de démo/production des trois projets doivent être fournis ou vérifiés avant affichage ; ne pas prendre une URL historique de déploiement comme preuve d'URL actuelle.

## 3. FIJADA — faits documentés

- Plateforme institutionnelle multilingue avec contenus éditoriaux.
- Laravel / Blade pour le public, Laravel / Inertia / React / TypeScript pour le back-office, MySQL.
- Langues FR, EN, ES, PT, AR ; RTL arabe.
- Gestion de contenus, événements, ressources, médias, rôles et permissions selon documentation fonctionnelle.
- Déploiement conçu autour d'un hébergement Hostinger mutualisé sans serveur Node permanent ; compilation préalable des assets.
- Propriétaire : participation au cadrage, choix technique de React back-office, environnement et pilotage Codex.
- **Ne pas prétendre** avoir programmé manuellement la totalité du projet ni avoir prouvé une conformité sécurité absolue.
- Ne pas afficher des chiffres de tests issus d'un ancien `PROJECT_PROGRESS.md` sans revalidation de la version réellement livrée.

### Captures souhaitées (seulement si autorisées)

1. `hero.webp` : accueil institutionnel public.
2. `admin-dashboard.webp` : back-office, après anonymisation.
3. `editor.webp` : éditeur de contenu, après anonymisation.
4. `rtl-arabic.webp` : affichage RTL réel si disponible.

## 4. SALMOSPHARM 133 — faits déclarés

- Logiciel desktop orienté gestion de pharmacie sous Windows.
- Python/PySide6 et SQLite local, mode hors connexion.
- Fonctionnalités conçues : produits/stock, vente, facture, alertes, rôles, backup/restore ; vérifier les captures de version achevée avant de détailler chaque écran.
- Aucun système de paiement externe ni synchronisation cloud revendiqués.
- Les captures doivent contenir des données fictives ou anonymisées, pas des noms de patients ou des chiffres sensibles.

### Captures souhaitées

1. `dashboard.webp` : écran principal.
2. `products.webp` : gestion des produits et stocks.
3. `sales.webp` : vente et/ou facture.
4. `alerts.webp` : alertes ou sauvegardes si disponibles.

## 5. Belkin SAS — faits documentés

- Site vitrine et blog pour une entreprise.
- Laravel 12, Livewire 4, MySQL, Vite, Intervention Image.
- Gestion du blog dans un back-office Livewire.
- Images originales et variantes thumb/medium, routage de médias documenté.
- Projet client terminé selon propriétaire.
- Rôle individuel précis pas encore confirmé : afficher formulation sobre et ne pas s'attribuer une responsabilité spécifique non vérifiée.

### Captures souhaitées

1. `home.webp` : accueil public.
2. `blog.webp` : listing ou article.
3. `admin-posts.webp` : administration anonymisée si diffusion autorisée.

## 6. Normes de fichiers images

- Répertoire final : `public/images/projects/{slug}/`.
- Noms de fichiers descriptifs en kebab-case ; aucun espace ni accent.
- WebP préférentiel pour captures, JPG pour photographie, PNG uniquement si transparence/détails nécessaires.
- Largeur principale 1400–2000px si screenshot desktop ; variantes responsives au besoin.
- `alt` = « Capture d'écran de l'interface [fonction] de [projet] » / `Screenshot of the [feature] interface in [project]` ; ne pas utiliser « beautiful modern dashboard » générique.
- Exclure des captures : noms complets privés, emails clients, tokens, identifiants, données financières réelles, cookies admin, informations internes de sécurité.
- Consentement/autorisation de publication des travaux client à vérifier.
- Ne pas gonfler le poids de la page avec 15 captures pleines résolutions.

## 7. Identité publique / coordonnées

- Marque compacte provisoire : `PB`.
- Nom public complet : **à confirmer** ; ne pas publier une identité arbitraire.
- Localisation générale : Kinshasa, DR Congo.
- Email de contact : **à confirmer**.
- LinkedIn exact : **à confirmer**.
- CV EN + FR : **fichiers à fournir** ; tant qu'absents, page Resume HTML disponible et bouton download absent.
- Formation : université connue, mais niveau/diplôme/dates **à confirmer** avant présentation précise.

## 8. Politique d'absence de médias

Si les vraies captures ne sont pas disponibles au premier commit :
1. Créer un élément de design de marque neutre et clairement non représentatif du produit ; ne pas ajouter un dashboard fictif trompeur.
2. Construire la mise en page avec un `aspect-ratio` stable pour insertion future.
3. Faire la V1 prévisualisable sans médias finaux, puis compléter au lot contenu/recette.
4. Toute image substitutive est `aria-hidden` si purement décorative, sans légende affirmant montrer une fonctionnalité réelle.

## 9. Séparation public / interne

Seuls les fichiers placés sous `public/` sont destinés au public. Les documents de pilotage peuvent contenir des choix d'architecture, mais ne doivent pas contenir de secrets, mots de passe, liens jetons, données clients ou informations non destinées à être publiées. Les fichiers de référence créative sont des sources de design et non des captures de projets.
