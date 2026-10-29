# 01 — Cahier des charges fonctionnel du portfolio V1

## 1. Vision

Créer un site personnel professionnel qui combine portfolio de réalisations et CV numérique. L'objectif principal est de faciliter une candidature à des postes de Software Developer / Full-stack Developer en télétravail international. Les clients freelance représentent un public secondaire. Le site valorise **des applications web et desktop**.

## 2. Publics et besoins

### Recruteur RH / talent acquisition
- Comprendre le métier et les domaines du candidat immédiatement.
- Consulter réalisations, expériences et formation sans long parcours.
- Télécharger un CV adapté au recrutement quand disponible.
- Trouver un moyen de contact rapidement.

### Tech lead / hiring manager
- Voir des preuves concrètes, la nature des projets et les choix techniques.
- Comprendre ce qui a été réalisé par le candidat, y compris sa contribution à la conception et au pilotage par IA.
- Naviguer entre études de cas, technologies et informations d'architecture vérifiables.

### Client potentiel
- Comprendre les solutions déjà réalisées pour des organisations.
- Évaluer la crédibilité et prendre contact sans compte utilisateur.

## 3. Parcours prioritaires

**Parcours A — recruteur pressé** : ouvrir `/en` → lire titre/métier → consulter un projet phare → voir Resume → contacter. Navigation simple sans friction.

**Parcours B — recruteur technique** : `/en/projects` → FIJADA → problème / approche / système / contribution / stack → SALMOSPHARM → retour à Resume et GitHub général.

**Parcours C — visiteur francophone** : passer de `/en/projects/fijada` à `/fr/projects/fijada` et garder le contexte, revenir à l'accueil FR, ouvrir Contact.

**Parcours D — mobile** : menu hamburger accessible, projets en pile, images consultables, CV HTML lisible et lien direct e-mail.

## 4. Pages obligatoires

| Route type | Contenu minimum | Critère de réception |
|---|---|---|
| `/en`, `/fr` | 6 sections : Hero, Selected Work, What I Do, About, Experience & Technologies, Get in Touch | Profil et 3 projets accessibles sans erreur |
| `/{lang}/projects` | Introduction, trois cartes détaillées, renvois case studies | FIJADA, SALMOSPHARM, Belkin présents ; Photozone absent |
| `/{lang}/projects/{slug}` | Overview, challenge, role, solution, technical decisions, evidence/results, gallery/links | Informations non inventées, prev/next, images réelles lorsqu'elles existent |
| `/{lang}/about` | Identité, parcours, approche, domaines | Positionnement Software Developer, présence web et desktop |
| `/{lang}/resume` | CV HTML : expérience client, projets, formation, compétences, langues si connues | Lisible en mobile et imprimable ; PDFs selon disponibilité |
| `/{lang}/contact` | Message court et canaux confirmés | Lien de contact réellement fonctionnel ; aucun formulaire factice |
| `404` | Page introuvable, navigation vers l'accueil | Retour vers un chemin existant |

Langues : toutes ces routes doivent exister en anglais et en français. Slugs de projet stables (`fijada`, `salmospharm-133`, `belkin-sas`). Structure identique et contenu adapté.

## 5. Exigences de navigation

- Logo/nom cliquable vers accueil courant, menu Projects / About / Resume / Contact, sélecteur `EN / FR` ; menu mobile pilotable par clavier.
- CTA hero `View projects` et `Resume` (la page HTML existe même sans PDF). CTA `Download CV` uniquement si PDF confirmé.
- Les cartes projets pointent vers leurs études de cas ; prev/next dans les pages projets.
- Site accessible sans compte et sans consentement cookies (aucun tracking nécessitant consentement en V1).
- Pas de carousel auto-défilant, ni navigation uniquement par animation.
- Fils de navigation sur les études de cas ou retour clair `All projects`.
- Liens externes sécurisés `rel="noopener noreferrer"`, indicateur accessible quand nouvelle fenêtre.

## 6. Contenus affichés

- Nom professionnel **à confirmer** ; jusqu'alors possibilité d'utiliser `PB` comme marque, sans fabriquer une identité publique.
- Titre `Software Developer`, spécialisation `Full-stack Development`, domaine `Web & Desktop Applications`.
- Localisation publique possible : `Kinshasa, DR Congo` (connue), pas d'adresse précise.
- Contenu EN de référence + traduction FR validée grammaticalement.
- Deux projets clients et un logiciel desktop ; bien distinguer expérience contractuelle, projets et formation.
- Bibliothèque de compétences pertinente, pas de pourcentages ni barres de maîtrise.
- Métriques : aucune tant qu'elles ne sont pas sourcées et validées.

## 7. Spécification des actions (aucune action fictive)

| Élément | Action | En cas de donnée absente |
|---|---|---|
| Projects CTA | Ouvre la liste des projets | Toujours disponible |
| About CTA | Ouvre About | Toujours disponible |
| Resume CTA | Ouvre Resume HTML | Toujours disponible |
| Download CV | Télécharge le PDF de la langue | Masquer/retirer tant que PDF absent |
| Contact email | `mailto:` vers e-mail confirmé | Masquer et garder LinkedIn si confirmé ; signaler blocage réel si aucun canal |
| LinkedIn | Profil exact confirmé | Masquer le lien sans confirmation |
| GitHub personnel | Profil GitHub connu `https://github.com/pistis-banz` | Peut figurer dans footer ; pas de liens privés trompeurs |
| Live site | URL publique explicitement vérifiée | Masquer tant que non vérifiée |
| Project source | Dépôt public autorisé et vérifié | Masquer si privé ou inaccessible |
| Gallery | Images locales de vrais projets | Omettre la galerie ou prévoir une vignette abstraite clairement non probante, sans prétendre représenter l'application |

## 8. Non fonctionnel

- Performance : objectif Lighthouse mobile >= 90 en Performance, Accessibilité, Bonnes pratiques, SEO, avec réserve sur les variations de mesure. LCP cible <= 2,5 s, CLS <= 0,1 en conditions de terrain lorsque mesurable.
- Mobile-first à partir d'environ 320px ; aucun débordement horizontal, menu et boutons tactiles utilisables.
- Standards WCAG 2.2 AA visés : contrastes, clavier, alt, focus, structure de titres et `prefers-reduced-motion`.
- SEO : titles/descriptions par langue/page, canonical, hreflang EN/FR, sitemap, robots, métadonnées Open Graph, données structurées véridiques et minimales.
- Sécurité : pas de secrets client, pas de scripts tiers inutiles, liens externes sécurisés, dépôt propre.
- Publication : build reproductible, preview et version stable accessibles, rollback par le fournisseur de déploiement.

## 9. Critères « V1 publiée »

- [ ] Toutes les routes EN/FR compilent et sont accessibles directement par URL.
- [ ] Navigation et changement de langue corrects pour toutes les pages et les trois projets.
- [ ] Trois études de cas sans claims inventés ni liens privés présentés publiquement.
- [ ] Responsive desktop, tablette, mobile ; pas de débordement à 320px.
- [ ] Semantics, clavier, focus, contrastes, réductions d'animation validés.
- [ ] Aucun faux CTA ni fichier CV introuvable.
- [ ] Images correctement attribuées et anonymisées ; sans médias réels, page honnête et utilisable.
- [ ] `lint`, `typecheck`, `build` réussissent réellement.
- [ ] Contrôle manuel navigation, clavier, liens, langues et console.
- [ ] Déploiement Cloudflare Pages prévisualisé et contrôlé.

## 10. Évolutions hors V1

Blog / notes techniques, galerie vidéo, calendrier de réservation, back-office, CMS, formulaire avec anti-spam, métriques non intrusives, projets additionnels (Photozone après refonte), switch thème si vraiment souhaité, animations avancées après audit performance.
