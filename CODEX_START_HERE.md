# Prompt de lancement pour Codex

Copier le message ci-dessous dans Codex, à la racine du dépôt qui contient ce dossier de documentation :

---

Tu es chargé de produire la première version publiable de mon portfolio professionnel, qui fait également office de CV. **Le projet doit être réellement implémenté, pas seulement planifié.**

Lis d'abord `AGENTS.md` et `README.md`, puis les documents de `docs/` dans l'ordre indiqué. Respecte les décisions validées, notamment : identité « Software Developer », spécialisation full-stack, projets web **et** desktop, recrutement remote international prioritaire, anglais/français, direction graphique 03 « Créatif & Distinctif », trois projets FIJADA/SALMOSPHARM 133/Belkin SAS.

**Travaille par lots conformément à `docs/07_PHASES_CODEX.md`** :
1. inspecte le dépôt et résume brièvement l'architecture et le plan du premier lot ;
2. initialise si nécessaire Next.js + TypeScript strict + Tailwind et la structure de données locales ;
3. construis immédiatement un premier écran d'accueil réel et responsive avec la charte choisie ;
4. implémente ensuite navigation bilingue, pages projets + études de cas, About, Resume, Contact, SEO et déploiement statique Cloudflare Pages ;
5. exécute les contrôles de qualité et mets à jour `PROJECT_PROGRESS.md`.

Je privilégie une V1 utilisable **au plus tôt**, pas un projet démesuré. Aucun backend, CMS, authentification, Supabase/Firebase, formulaire serveur, blog ou effets 3D. N'invente aucune donnée personnelle, date, résultat de projet ou capture ; les informations non confirmées doivent être omises ou signalées dans la documentation, **jamais affichées comme des faits**.

Après chaque lot : indique fichiers modifiés, tests vraiment exécutés, résultat, tâches manuelles restantes, proposition de commit/push **sans les exécuter toi-même**, puis passe au lot suivant tant qu'il n'exige pas une information bloquante ou une action extérieure.

Commence maintenant par l'audit du dépôt puis l'implémentation du premier lot.

---

## Variante « budget tokens strict »

Si le coût Codex est une contrainte, remplacer la dernière phrase par : « Implémente uniquement le lot 1 de `docs/07_PHASES_CODEX.md`, exécute lint/typecheck/build, mets à jour PROJECT_PROGRESS.md et arrête-toi avec les instructions manuelles. »
