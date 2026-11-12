# 10 — Registre des informations manquantes et décisions éditoriales

Les éléments sont organisés pour **ne pas bloquer l'implémentation**. Ce fichier peut être mis à jour par le propriétaire ou Codex après vérification. Ne pas traiter un placeholder comme une donnée prête à publier.

## A. Bloquants avant une publication professionnelle

| ID | Information | État | Comportement d'attente |
|---|---|---|---|
| P-01 | Au moins un contact fiable : e-mail professionnel ou profil LinkedIn exact | Fourni par le propriétaire | Coordonnées intégrées ; vérifier les destinations en conditions réelles avant publication |
| P-02 | Droit de présentation des projets clients et de leurs captures | Présentation publique des noms FIJADA et Belkin SAS confirmée ; droits sur les captures à confirmer séparément | Aucun média client sans vérification des droits et des données sensibles |
| P-03 | Nom public exact tel que souhaité sur le site et CV | Fourni : Pistis Banzietele | Nom intégré |

## B. Importants mais non bloquants pour une préversion

| ID | Information | État | Comportement d'attente |
|---|---|---|---|
| M-01 | Captures FIJADA (public, backoffice, RTL) | Disponibles chez propriétaire, non transmises | Illustration de marque, sans fausse capture |
| M-02 | Captures SALMOSPHARM (tableau de bord, produits, ventes) | Disponibles, non transmises | Illustration de marque, sans fausse capture |
| M-03 | Captures Belkin (public, blog, admin) | Disponibles, non transmises | Illustration de marque, sans fausse capture |
| M-04 | Portrait professionnel | Non fourni pour la présente version | Illustration abstraite plutôt que portrait fictif |
| M-05 | CV anglais PDF actualisé | Non fourni dans ce pack | Page Resume HTML ; cacher Download CV |
| M-06 | CV français PDF actualisé | Non fourni | Page Resume HTML ; cacher Download CV |
| M-07 | Date et intitulé exact de la formation | Niveau licence en informatique confirmé ; établissement et date non fournis | Formation décrite sans établissement ni date inventés |
| M-08 | Périodes des missions FIJADA / Belkin | À confirmer | Ne pas montrer une timeline chronologique datée |
| M-09 | Contribution individuelle détaillée Belkin / SALMOSPHARM | Fournie par le propriétaire | Intégrée dans les études de cas |
| M-10 | URLs publiques production FIJADA / Belkin | À confirmer/valider | Cacher `Visit site` |
| M-11 | Publicité autorisée du code des 3 projets | FIJADA/Belkin privés, Salmospharm inaccessible ou non confirmé | Cacher `View code` sur les case studies |
| M-12 | Technologies supplémentaires à mettre en avant | React, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, Express.js, Laravel, PHP, Python, PostgreSQL, MySQL, SQLite et Prisma fournis | Compétences présentées séparément des stacks propres aux projets ; Docker non revendiqué |
| M-13 | Témoignages clients / données chiffrées | Non fournis | Ne pas créer les sections |
| M-14 | Nom de domaine `.dev` | Pas encore acheté dans ce cadre | Utiliser `*.pages.dev` |
| M-15 | Langues parlées / niveau d'anglais | Français courant, anglais intermédiaire confirmés | Affichés sans niveau CECRL inventé |

## C. Informations acquises

- [x] Priorité : recrutement remote international.
- [x] Identité métier : Software Developer.
- [x] Spécialisation : Full-stack ; domaines : web **et** desktop.
- [x] Direction visuelle : Créatif & Distinctif (troisième piste).
- [x] Langues du site : anglais et français.
- [x] Projets V1 : FIJADA, SALMOSPHARM 133, Belkin SAS.
- [x] Photozone non retenu pour V1.
- [x] Trois projets annoncés terminés.
- [x] FIJADA et Belkin : projets pour de vrais clients.
- [x] Choix FIJADA : Laravel public Blade + backoffice React/Inertia, MySQL.
- [x] GitHub général : `https://github.com/pistis-banz`.

## D. Protocole d'ajout de contenu

1. Le propriétaire fournit le média/information ; vérifier autorisation de diffusion si client.
2. Codex met à jour les données locales, pas une chaîne en dur dans le composant.
3. Vérifier EN/FR, alt, métadonnées, tailles images.
4. Build/test puis contrôle visuel.
5. Ne jamais mettre à jour silencieusement les affirmations d'expérience ou de certification.

## E. Questions non urgentes qui peuvent être reportées

- Portrait dans Hero ou image abstraite définitive ? Les deux sont compatibles avec le design, ne pas bloquer.
- Domaine final `pistisbanz.dev` ou autre ? Décision après preview.
- Ajout d'un formulaire contact ? Non dans V1.
- Section « Beyond the code » et hobbies ? À explorer après publication, sans inventer d'éléments biographiques.
