# État du projet

## Situation actuelle

- Portfolio bilingue déployé sur `https://pistis.pistisbasolua.workers.dev/` ; la dernière version effectivement publiée et les derniers changements doivent encore être comparés dans le navigateur.
- Projets et CV améliorés, portrait et favicon intégrés ; la page 404 personnalisée est créée. Le cadrage du portrait, la 404 en ligne, les parcours clavier et l'affichage mobile, tablette et ordinateur restent à vérifier.
- Captures réelles des projets et PDF de CV non fournis ; droits de diffusion des captures clients à confirmer. Canonical, hreflang, sitemap et image sociale restent à finaliser avec l'URL définitive.
- Derniers contrôles applicatifs : `pnpm lint`, `pnpm typecheck` et `pnpm build` réussis après l'ajustement du portrait. L'avertissement d'accessibilité relevé sur une phrase française de la 404 attend l'accord du propriétaire pour correction.
- Les commits sont désormais créés automatiquement après les lots ; push et déploiement nécessitent toujours une demande explicite. L'état Git doit être vérifié au moment considéré.

## Historique initial

- Branche : `main` ; base : `5c31bf4` (initialisation).
- Lots 0, 1 et 2 : pages implémentées, dont accueil bilingue, études de cas, About, CV HTML et contact. Les projets, textes et coordonnées sont stockés localement ; validation visuelle encore attendue.
- Lot 3 : export statique et redirection Cloudflare préparés ; publication et recette sur Cloudflare Pages non effectuées. Site de prévisualisation, pas encore prêt pour une publication professionnelle : les vérifications de parcours, des coordonnées et des médias restent à effectuer.
- Lot 4 : facultatif, non commencé.

## Vérifications

- `corepack pnpm lint` : réussi.
- `corepack pnpm typecheck` : réussi après régénération des types Next ; les anciens types de `.next` correspondaient à l'application initiale.
- `corepack pnpm build` : réussi ; 16 pages bilingues générées.
- Contrôle des 16 fichiers HTML exportés : langues, un H1 et liens internes vérifiés, aucune erreur détectée.
- Contrôle visuel navigateur, clavier, zoom, lecteur d'écran et Cloudflare : non réalisés.

## À compléter

- Vérifier les coordonnées en conditions réelles et confirmer les droits de diffusion des captures clients.
- Fournir si souhaité les captures autorisées et anonymisées, les CV PDF et les dates de formation ou de mission ; le portrait a été fourni depuis.
- Choisir l'URL de production pour définir canonical, hreflang absolus, sitemap et image sociale. Aucune URL fictive n'est utilisée.
- Les polices Sora, Inter et IBM Plex Mono ont depuis été intégrées localement.
- Avant publication : contrôler l'accessibilité, le rendu mobile, les métadonnées et la redirection `/` sur la preview Pages. Commande de build : `corepack pnpm build` ; dossier de sortie : `out`.
- Au moment de cet état initial, aucun commit, push ou déploiement n'avait été effectué par Codex.

## Orchestration et gate 1 — 10 novembre 2026

- Mode : `NATIVE_MULTIAGENT` dans cette session. Sonde `/root/sonde` réussie en lecture seule sur `docs/00`. `codex-cli 0.147.0` ; `codex features list` affiche `multi_agent` stable et actif. Limite de session : trois sous-agents simultanés. Aucun réglage global ni TOML projet créé : la délégation est déjà disponible dans cette session ; les rôles Markdown sont des mandats, pas des rôles natifs configurés ou découverts.
- Pack utilisateur non suivi `portfolio-codex/` conservé ; installation des documents additionnels dans `agents/`, `docs/12_ORCHESTRATION_MULTI_AGENTS.md`, `CODEX_MULTIAGENT_START.md` et `handoffs/TEMPLATE.md`. Les contrats et la propriété des chemins sont dans `handoffs/CONTRACTS.md`. Les documents manquaient initialement à la racine mais existaient dans le pack.
- Socle existant conservé : Node 24.10.0, pnpm 10.10.0, Next 16.4.3, React 19.3.0, TypeScript strict, Tailwind 4 et export statique. Pas de nouvelle dépendance.

| TASK_ID | Agent | Statut | Écriture autorisée | Dépendances | Preuves |
|---|---|---|---|---|---|
| L0-PROBE | sonde | terminé | aucune | docs/00 | Réponse de `/root/sonde` reçue. |
| L1-UI-01 | UI | terminé, validation visuelle attendue | `components/site.tsx`, `components/site.module.css`, `components/mobile-menu.tsx` | contrats existants | Menu mobile, Échap et état actif ; ESLint ciblé réussi. |
| L1-CONTENT-01 | contenu | terminé | aucune | `content/data.ts`, docs | Revue EN/FR ; précision FIJADA intégrée par l'orchestrateur. |
| L1-QA-01 | QA | terminé, audit statique | aucune | UI et contenu | Revue indépendante et contre-revue des deux corrections ; navigateur non exécuté. |

- Contrôles après modifications : `corepack pnpm lint`, `corepack pnpm build`, puis `corepack pnpm typecheck` réussis ; build statique achevé. `/en` a répondu HTTP 200 via serveur local avant les derniers ajustements. Le navigateur intégré a répondu « browser access host is unavailable » : rendu, interaction réelle du menu, clavier, zoom et mobile restent à contrôler manuellement.
- P0/P1 : aucun relevé par l'audit statique, sans prétendre à une recette navigateur complète. P2 corrigés dans le code : Échap/focus du menu et indication de navigation active, à confirmer en conditions réelles. P2 ouverts : page 404 personnalisée et risque de débordement du titre SALMOSPHARM à 320 px, à vérifier. P3 : la parité future des dictionnaires n'est pas garantie par leur type actuel.
- Au 10 novembre, contact, identité et autorisations restaient à confirmer ; voir la mise à jour du 12 novembre ci-dessous. SEO absolu et Cloudflare restent à vérifier après choix de l'URL.
- Prochaine gate : validation visuelle de l'accueil par le propriétaire avant tout nouveau lot. Les pages déjà implémentées sont conservées ; aucun déploiement, push ou commit effectué.

## Correction d'hydratation — 10 novembre 2026

- Capture : des attributs étrangers apparaissent sur `<html>`, probablement ajoutés par des extensions ; `suppressHydrationWarning` est limité à cet élément, ce qui masque les écarts d'attributs à ce niveau sans empêcher leur injection. Confirmation dans le navigateur de l'utilisateur encore nécessaire.
- La route `/` locale, auparavant 404, possède désormais une entrée statique avec redirection HTML vers `/en` et lien de secours. La redirection Cloudflare existante est conservée.
- Vérification navigateur indisponible dans la session. Confirmer dans le navigateur, et tester sans extensions si l'avertissement persiste. La 404 personnalisée reste à faire.

## Contenus textuels — 12 novembre 2026

- Nom public, e-mail, téléphone, LinkedIn et GitHub fournis ; présentation et CV EN/FR enrichis avec formation niveau licence, compétences, langues, missions QA freelance et atouts.
- Rôles FIJADA, SALMOSPHARM 133 et Belkin SAS précisés à partir des informations du propriétaire, y compris le pilotage assisté par Codex ; FIJADA décrit comme une nouvelle plateforme.
- Présentation publique des noms FIJADA et Belkin SAS confirmée. Autorisation de publication des captures à confirmer séparément ; médias reportés. Dates, établissement, PDF et URL publiques des projets restent non fournis.
- Les anciennes mentions de coordonnées, nom, niveau de formation ou rôles non confirmés dans ce journal sont historiques et remplacées par cette mise à jour. Recette navigateur, validation visuelle, URL de production et contrôles Cloudflare restent à réaliser avant publication.
- Vérifications exécutées : `corepack pnpm lint`, `corepack pnpm build`, puis `corepack pnpm typecheck` réussis. Contrôle des HTML exportés EN/FR : quatre liens de contact et présence du nom, d'Upwork et de Prisma dans les CV vérifiés. Ouverture réelle des liens et parcours navigateur non vérifiés.

## Préférence de délégation

- Le propriétaire souhaite une sélection et une délégation automatiques aux rôles adaptés pour les prochaines demandes du dépôt. Préférence consignée dans `AGENTS.md`, applicable seulement si la session autorise et expose les sous-agents. En cas d'indisponibilité, exécution séquentielle annoncée ; aucun lancement permanent en arrière-plan.
- Contrôles de cette modification documentaire : build et typecheck réussis ; `git diff --check` réussi. Lint lancé mais interrompu après une attente prolongée, résultat non vérifié. Aucun changement d'interface à valider au navigateur.
- À la demande du propriétaire, mandat QA renforcé pour contrôler chaque tâche modifiant du code, proposer des actions en cas de constat et attendre son accord avant correction. Définition projet `controle_qualite` ajoutée sous `.codex/agents/` ; découverte et lancement effectifs dépendent du client et de la session. Un contrôle séquentiel annoncé reste possible si la délégation n'est pas disponible.
- Vérifications de cette configuration : fichier TOML analysé, `pnpm lint`, `pnpm typecheck`, `pnpm build` et `git diff --check` réussis. L'agent sollicité pour une validation indépendante n'avait pas accès aux fichiers ; sa revue et la découverte automatique du rôle restent à vérifier dans une session compatible. Aucun changement d'interface.
- Le propriétaire autorise désormais les commits automatiques en fin de lot, sans nouvelle demande d'accord ; les pushs et déploiements exigent toujours une instruction explicite.

## Avertissement d'hydratation sur body

- Ajout de `suppressHydrationWarning` au `body` du layout localisé pour éviter l'avertissement lié à un attribut injecté avant hydratation, visible sur la capture. Cette mesure masque les avertissements d'attributs de cet élément sans supprimer leur cause ; elle ne s'applique pas aux descendants.
- `pnpm lint`, `pnpm build` et `pnpm typecheck` réussis. Revue indépendante ciblée positive. La reproduction avec l'extension du navigateur reste à vérifier manuellement.

## Page 404 et déploiement Workers

- Le site est accessible sur `https://pistis.pistisbasolua.workers.dev/`. Les 16 pages bilingues répondent en HTTP ; `/` redirige vers `/en`. Le rendu mobile, le clavier et l'envoi réel du formulaire restent à vérifier.
- Une page 404 bilingue est générée statiquement et `wrangler.jsonc` configure Workers pour la servir avec un statut 404. Après publication, contrôler une URL inexistante imbriquée, les liens et le rendu sur mobile ; la validation en ligne n'a pas encore été effectuée.
- `pnpm lint`, `pnpm build` et `pnpm typecheck` réussis ; le fichier exporté contient les messages et liens EN/FR. Revue QA : une phrase française dans un document anglais n'a pas d'attribut `lang` ; correction proposée en attente de l'accord du propriétaire.

## Itération portfolio — crédibilité et réalisations

- Cartes projets réorganisées avec FIJADA en évidence ; études de cas structurées autour du contexte, du besoin, de la solution, de la contribution et des technologies. Les emplacements de captures sont explicites et attendent des fichiers réels autorisés ; leur registre se trouve dans `components/project-visual.tsx`.
- Page CV enrichie avec responsabilités confirmées, missions QA, formation et compétences. Les PDF restent masqués tant que leurs fichiers et chemins ne sont pas fournis (`content/resume-page.ts`) ; aucune période n'a été inventée.
- Polices Sora, Inter et IBM Plex Mono hébergées localement avec leurs licences ; tokens principaux alignés sur la direction graphique. Textes de l'accueil raccourcis et descriptions SEO des pages À propos, Contact et CV précisées en EN/FR.
- `pnpm lint`, `pnpm build` et `pnpm typecheck` réussis ; 16 pages exportées contrôlées pour leur langue, leur titre, leur description et leurs liens internes, sans erreur détectée. Sept routes locales ont répondu HTTP 200. Revue indépendante positive sur le code examiné.
- Recette visuelle mobile, tablette et desktop et navigation clavier non réalisées : navigateur intégré indisponible, Chrome occupé. Canonical, hreflang, sitemap et image sociale restent à compléter lorsque l'URL définitive est arrêtée. Aucun commit, push ou déploiement de cette itération.

## Favicon fourni par le propriétaire

- Le favicon fourni à la racine a été copié vers `app/favicon.ico`, emplacement utilisé par Next.js ; le fichier d'origine est conservé à la racine. L'export contient le même fichier et la page française y fait référence.
- `pnpm lint`, `pnpm typecheck` et `pnpm build` réussis. Vérification visuelle dans un navigateur et mise en ligne non effectuées.

## Portrait fourni par le propriétaire

- Portrait réel intégré dans le visuel de l'accueil EN/FR, avec texte alternatif localisé. Le fichier utilisé par le site est `public/images/portrait-portfolio.webp`.
- `pnpm lint`, `pnpm typecheck` et `pnpm build` réussis. Présence du fichier et des textes alternatifs vérifiée dans l'export des deux langues ; revue indépendante positive. Cadrage et rendu responsive restent à vérifier dans un navigateur.
- Ajustement ultérieur du cadrage dans le Hero : légère augmentation de l'échelle, position centrée et suppression du texte et de la décoration superposés. L'image source reste inchangée ; `pnpm lint`, `pnpm typecheck` et `pnpm build` réussis, revue indépendante positive. Le navigateur intégré est indisponible : vérifier le cadrage desktop, tablette et mobile manuellement.

## Préférence de design

- Le propriétaire souhaite utiliser `impeccable` et les autres compétences de design installées pertinentes pour guider les travaux d'interface. Préférence consignée dans `AGENTS.md`, sous réserve de leur disponibilité et des instructions de la session. Aucune interface modifiée.
- Compétences complémentaires désignées : `web-design-guidelines`, `ui-ux-pro-max`, `frontend-design` et `design-taste-frontend` ; les combiner selon la tâche et demander un choix au propriétaire en cas de dilemme de design important non tranché.
- Le propriétaire choisit `lucide-react` pour les icônes d'interface. Version exacte `1.72.0` installée avec pnpm ; les icônes existantes n'ont pas encore été remplacées. Le registre npm déclare la compatibilité avec React 19.
- Installation vérifiée par l'import de `Menu` ; `corepack pnpm lint`, `corepack pnpm build` et `corepack pnpm typecheck` réussis. Aucun changement visuel, parcours navigateur non exécuté. L'installation signale que la version existante d'ESLint 9 n'est plus maintenue ; mise à jour à examiner séparément.
- Icônes fonctionnelles remplacées par Lucide : flèches, localisation et état du menu mobile ; illustrations abstraites conservées. Vérifications : lint, build et typecheck réussis ; présence des icônes et liens principaux contrôlée dans les HTML exportés EN/FR. La navigation réelle et le rendu responsive restent à vérifier au navigateur.

## Espaces de contact

- Accueil et page Contact remaniés avec un composant partagé et deux variantes, inspirés des références fournies : composition en deux colonnes, coordonnées hiérarchisées, CTA e-mail et icônes Lucide. Textes EN/FR locaux, liens existants préservés et aucun formulaire serveur ajouté.
- `corepack pnpm lint`, `corepack pnpm build` et `corepack pnpm typecheck` réussis. Contrôle des HTML exportés : un H1 et présence des quatre liens de contact sur les pages d'accueil et Contact EN/FR. Navigateur de contrôle indisponible ; rendu mobile/desktop, clavier et ouvertures réelles des liens à vérifier manuellement.

## Formulaire de contact par messagerie

- À la demande du propriétaire, ajout de champs Objet et Message sur l'accueil et la page Contact, en EN/FR. Le bouton prépare un brouillon `mailto:` avec sujet et message encodés ; le visiteur doit envoyer le courrier dans son application de messagerie. Aucun service d'envoi serveur n'est ajouté et le lien e-mail direct reste disponible.
- Les champs possèdent des labels et sont requis. À la demande du propriétaire, ils sont réinitialisés après la demande d'ouverture de la messagerie, et un toast Sonner bilingue précise que le visiteur doit terminer l'envoi. Ce retour ne confirme ni l'ouverture effective de la messagerie ni la livraison. Les anciennes mentions du périmètre excluant tout champ de contact sont remplacées par cette demande explicite ; le site reste statique.
- `corepack pnpm lint`, `corepack pnpm build` et `corepack pnpm typecheck` réussis. Vérification des quatre HTML exportés : formulaire, destination, labels et champs requis présents. L'arbre d'accessibilité Chrome de l'accueil FR montre les deux champs et le bouton. Ouverture effective d'une messagerie, envoi, clavier complet et rendu mobile restent à tester manuellement.
- Toast : Sonner 2.0.8 installé et verrouillé, compatible avec React 19 selon ses dépendances déclarées. Après cette modification, lint, build et typecheck réussis ; les quatre HTML exportés contiennent le formulaire, les labels et champs requis. La réinitialisation et le toast n'ont pas été testés en interaction navigateur ; tester avec une application de messagerie configurée. Si aucune messagerie ne s'ouvre, la saisie est déjà réinitialisée et l'adresse de contact reste visible.
