# 00 — Décisions, hypothèses et périmètre officiel

## 1. Décisions explicitement validées par le propriétaire

| Domaine | Décision | Conséquence |
|---|---|---|
| But | Portfolio personnel faisant aussi office de CV | Profil, projets, expériences, CV et contact facilement trouvables |
| Objectif prioritaire | Décrocher un poste **remote international** | Anglais prioritaire, preuves techniques, UX adaptée aux recruteurs |
| Objectif secondaire | Missions freelance | Possibilité de prise de contact pour projets clients, sans brouiller le message principal |
| Identité | **Software Developer** | Titre principal sur le site |
| Spécialisation | **Full-stack Developer** | Sous-titre/description, jamais identité web-exclusive |
| Domaines | Web **et** applications desktop | SALMOSPHARM aussi visible que les réalisations web |
| Langues | Anglais primaire et français secondaire | Toutes les pages clés et métadonnées traduites |
| Direction artistique | **03 — Créatif & Distinctif** | Composition expressive et contrastée, bleu électrique + lime |
| Présentation | Moderne, mémorable, crédible, pas un template banal | Un vrai système graphique mais très lisible |
| Format | Site multipage avec accueil complet | Pages Home, Projects, Case Study, About, Resume, Contact |
| Projets V1 | FIJADA, SALMOSPHARM 133, Belkin SAS | Trois études de cas ; FIJADA plus mis en avant |
| FIJADA | Terminé, projet client | Site institutionnel multilingue, CMS et back-office custom |
| SALMOSPHARM | Terminé, logiciel desktop | Gestion de pharmacie offline-first Python / SQLite |
| Belkin | Terminé, projet client | Site vitrine et blog Laravel / Livewire / MySQL |
| Photozone | Projet à recommencer | Ne pas publier en V1 |
| Sources médias | Captures disponibles chez le propriétaire | Ne pas créer de fausses captures et ne pas attendre les médias pour coder |
| Code avec IA | Codex générera la majorité du code portfolio ; FIJADA a été piloté avec Codex | Cadre de contrôle et description honnête des contributions |
| Coût | Rapport qualité/prix, alternatives gratuites | Site statique, hébergement statique peu coûteux |
| Délai | Une première version le plus rapidement possible | Exclure les options non essentielles ; livraison par lots |

## 2. Décisions d'implémentation proposées (non exprimées comme engagements personnels)

Ces décisions visent à réaliser la V1 vite et peuvent être modifiées seulement si une contrainte technique factuelle le nécessite, après justification :

- Next.js App Router, TypeScript strict, Tailwind CSS ; version stable compatible au moment du développement.
- Export statique `output: 'export'`, adapté à Cloudflare Pages.
- Aucune base de données/API/CMS pour des données statiques.
- Localisation via dictionnaires typés locaux et routes `/en/...`, `/fr/...`, sans middleware obligatoire.
- Cloudflare Pages pour la première mise en ligne (sous-domaine de prévisualisation), achat de `.dev` plus tard.
- Contact direct par e-mail et LinkedIn, sans formulaire V1.
- Motion légère en CSS ; bibliothèque d'animation facultative après fonctionnement complet.
- GitHub privé : ne pas exposer le code ou présenter un lien accessible lorsqu'il ne l'est pas.
- CV PDF EN/FR visible et téléchargeable seulement lorsque fourni ; page HTML Resume disponible en attendant.

## 3. Situation connue et incertitudes

**Confirmé par le propriétaire :** trois projets terminés ; FIJADA et Belkin réalisés pour des clients ; FIJADA a bénéficié de décisions de conception/architecture et de code généré via Codex ; images/captures existantes mais non encore fournies dans ce dossier.

**Confirmé via consultation antérieure des dépôts :** `pistis-banz/fijada_v2` et `pistis-banz/belkin` sont privés ; FIJADA décrit un monolithe Laravel, site public Blade et back-office React/Inertia TypeScript, MySQL et 5 langues ; Belkin documente Laravel 12, Livewire 4, MySQL et gestion des images ; l'accès public au dépôt `tech-engineer635/salmospharm` n'a pas été confirmé.

**Non confirmé :** nom public définitif, mail professionnel, lien LinkedIn exact, CV à jour, dates et diplômes, chiffres métier, URLs publiques actuelles, droits de diffusion des captures, témoignages, détails de la contribution aux projets autres que FIJADA. Ces lacunes ne justifient pas de fabriquer des données.

## 4. Interdictions V1

- Aucune assertion « senior », « expert », « X ans d'expérience », « open to work » comme statut contractuel garanti sans validation.
- Aucun faux avis client, logos de clients comme caution officielle non autorisée, statistiques inventées, projets non terminés présentés comme achevés.
- Aucun champ de contact qui ne fonctionne pas, lien vers GitHub privé comme si public, bouton CV pointant vers un PDF absent.
- Aucun backend, login, dashboard, blog, CMS, formulaire serveur, analytics intrusives, moteur de recherche, carte des visiteurs, pricing freelance, animations lourdes.
- Pas d'exclusion implicite du desktop.

## 5. Critère de périmètre V1

Si une fonctionnalité n'est pas indispensable pour qu'un recruteur comprenne le profil et contacte le propriétaire, elle va dans un backlog **après publication**. Une fonctionnalité importante mais dépendante d'une information non fournie est préparée et masquée plutôt que simulée.
