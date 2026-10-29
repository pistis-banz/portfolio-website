# 04 — UX, arborescence, écrans et navigation

## 1. Arborescence à coder

```text
/
├── /en
│   ├── /projects
│   │   ├── /fijada
│   │   ├── /salmospharm-133
│   │   └── /belkin-sas
│   ├── /about
│   ├── /resume
│   └── /contact
└── /fr
    ├── /projects
    │   ├── /fijada
    │   ├── /salmospharm-133
    │   └── /belkin-sas
    ├── /about
    ├── /resume
    └── /contact
```

`/` : **redirection hébergeur** vers `/en` si Cloudflare Pages. En local, ajouter une page racine statique de repli ou vérifier le comportement de `_redirects` après déploiement ; ne pas introduire un middleware incompatible export statique.

URL francophone de projet stable `/fr/projects/fijada` pour garder un routage simple, même si les labels UI sont traduits.

## 2. Header commun

Desktop : identité à gauche, 4 liens au centre ou à droite, EN/FR visible, CTA Contact facultatif. État actif souligné ou avec accent bleu, pas seulement couleur. Mobile : header compact, bouton menu accessible et switch langue disponible. Au menu, six entrées au maximum. Header sur fond canvas ; garde-fous de focus et scroll.

## 3. Home — ordre et contenu exact

### H1/Hero
- Eyebrow métier et spécialisation.
- H1 expressif `IDEAS. CODE. IMPACT.` (une seule balise h1 ; descriptif métier adjacent en texte normal ou accessible).
- Description claire incluant web et desktop.
- CTA Projects + Resume (HTML), Download CV si fichier vrai.
- Illustration/portrait authentique si fourni, sinon composition SVG abstraite clairement décorative.

### Selected Work
- H2, intro, 3 projets ; ordre FIJADA (featured) → SALMOSPHARM → Belkin.
- Chaque carte : catégorie, titre, résumé, stack limitée, média si disponible, lien case study.
- `All projects` facultatif (utile si page projets existe, oui). Aucune carte Photozone.

### What I Do
- H2, trois domaines avec phrase descriptive ; technologie secondaire.
- Pas de devis ou prix ; acquisition freelance secondaire.

### About
- Court texte à la première personne ; contexte Kinshasa, apport au projet, lien `/about`.

### Experience & Technologies
- Missions FIJADA/Belkin présentées comme `client work`, SALMOSPHARM comme projet desktop.
- Stack de base confirmée ; éviter redondance des technologies. Ne pas inventer une chronologie d'emploi.

### Get in Touch
- CTA `/contact` ; LinkedIn et email affichés uniquement si leurs URLs sont confirmées.
- Aucun formulaire fictif, aucun statut contractuel non confirmé.

## 4. Projects listing

- H1 `Selected work` / `Mes réalisations`, intro, 3 cartes visuelles.
- FIJADA en premier ; SALMOSPHARM ensuite pour montrer l'étendue au desktop ; Belkin troisième.
- Descriptions courtes lisibles sans survol.
- Mobile : pas de filtres, pas de grille chargée, 1 colonne de cartes verticales.

## 5. Case Study — template

A. `Back to all projects` et identification catégorie.  
B. Hero : nom du projet, 2 phrases de contexte, technologies précises, capture réelle disponible sinon représentation abstraite **légendée**.  
C. `Project at a glance` : type (client/personal), plateforme, technologies, statut. N'ajouter dates/rôle/chiffres qu'après validation.  
D. `The challenge` / `Le besoin` : pourquoi l'outil existe.  
E. `My contribution` / `Ma contribution` : rôle personnel et limites. Pour FIJADA, conception/pilotage et développement assisté par Codex.  
F. `Solution & features` : 3 à 6 fonctionnalités vérifiables.  
G. `Technical decisions` : un choix important, compromis et contexte (FIJADA Blade + React/Inertia ; SALMOSPHARM offline-first Python/SQLite ; Belkin Laravel/Livewire pour site/blog).  
H. `Screens / gallery` : 2 à 5 images réelles quand fournies, alt ; ne pas simuler une galerie si vide.  
I. `Results & learnings` : livraison déclarée terminée et apprentissages descriptifs, **pas** chiffres inventés.  
J. `Links` : site en ligne si confirmé, code public si confirmé, autrement rien.  
K. `Prev/next` + retour Projects + lien Contact.

**Longueur** : FIJADA ~ 600–900 mots au maximum si le contenu est confirmé ; SALMOSPHARM 350–600 ; Belkin 300–500. Éviter des murs de texte, paragraphes + captures alternées.

## 6. About

- Intro personnelle avec métier, localisation publique au niveau ville et photo seulement si donnée.
- Parcours à la première personne, trois paragraphes éditoriaux.
- `How I work` : compréhension des besoins → choix de solution → exécution et validation, sans s'attribuer une maîtrise non vérifiée.
- `What I build` : web / desktop / logiciel métier.
- CTA vers projets et Resume.
- Les loisirs « hors informatique » ne sont pas obligatoires ; section facultative sans contenu inventé.

## 7. Resume HTML

- H1 + courte description + bouton de téléchargement si PDF existe (adapter EN/FR).
- Sections : `Client projects` (sans dates fictives), `Selected projects`, `Skills`, `Education` (uniquement informations validées), `Languages` (uniquement niveaux confirmés), `Contact` (coordonnées confirmées).
- Mêmes informations qu'un CV PDF, sans imiter la mise en page A4 à l'écran.
- CSS print sobre, afficher les liens complets utiles, masquer navigation/animations en impression.
- Si dossier PDF absent, proposer `Print / Save as PDF` via fonction native du navigateur si souhaité ; ce bouton doit déclencher l'impression réelle. Ne pas afficher « Download CV » pointant dans le vide.

## 8. Contact

- H1, petite introduction, liens e-mail, LinkedIn confirmés et GitHub général.
- Un visiteur peut ouvrir un lien actif ; une absence de mail ou LinkedIn ne doit jamais engendrer des placeholders publics.
- Aucun champ contact à remplir en V1. Si aucun canal n'a été confirmé, signaler explicitement le **blocage de publication** au propriétaire ; ne pas publier une page contact vide ou simulée.

## 9. États et accessibilité

- Navigation : actif, hover, focus-visible, mobile ouvert/fermé, Escape.
- Liens externes : icône indicative, destination réelle.
- Galerie : si image indisponible, ne pas rendre une image cassée ; masquer le bloc ou utiliser un motif de marque identifié comme décoratif.
- URL inconnue : page 404 avec liens vers EN/FR.
- Image : proportions stables pour éviter CLS.
- Aucun loader pour contenu statique ; aucun skeleton factice.

## 10. Comportement i18n

- La langue par défaut est EN.
- De `/en/projects/fijada`, passage FR → `/fr/projects/fijada` ; identique pour toutes les pages.
- Langue conserve la route et le slug ; ne pas renvoyer systématiquement à Home.
- `lang` HTML correct et libellés traduits, direction LTR pour les deux langues.
- Menu et meta title changent avec la langue.
- `hreflang` EN/FR réciproques et canonical par URL.
- Pas de persistance locale obligatoire ; URL source de vérité.

## 11. Comportements responsive à tester

- 320, 375, 390, 768, 1024, 1280 et 1440px, zoom à 200%, affichage de texte long en français.
- Menu mobile : accessible, sans chevauchement avec langue ; état cohérent après navigation.
- H1 ne déborde pas, CTA restent utilisables, images ne tronquent pas le texte.
- Carrousels interdits en V1 ; grille suffisante.
- Séquence mobile : métier → slogan → description → CTA → visuel → projets.
