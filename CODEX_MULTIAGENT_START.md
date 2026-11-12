# Prompt d'amorçage — Mode multi-agents Codex

> À envoyer à Codex en ouvrant la racine du dépôt contenant ce pack. Ce document est un **prompt**, pas un script qui active automatiquement des fonctions de sous-agents.

---

Agis comme **Orchestrator / Tech Lead** pour développer la V1 de mon portfolio Software Developer (full-stack, applications web et desktop), en priorisant une mise en ligne rapide et crédible pour du recrutement remote international.

Lis en premier `AGENTS.md`, `README.md`, `docs/00_DECISIONS_ET_PERIMETRE.md`, `docs/07_PHASES_CODEX.md`, `docs/12_ORCHESTRATION_MULTI_AGENTS.md` et les six chartes `agents/*.md`. Consulte les documents de produit/design/contenu avant d'implémenter. Respecte la direction graphique 03 « Créatif & Distinctif », la stack validée (Next.js TS Tailwind, sortie statique Cloudflare Pages), l'anglais/français et les trois projets FIJADA, SALMOSPHARM 133, Belkin SAS.

**Étape 1 — Audit + socle, séquentiel :** inspecte l'état réel du dépôt et des fichiers, sans écraser le travail existant. Initialise seulement si absent, définis les types partagés, contrats de dictionnaire et données projet, structure des routes, styles/tokens globaux et une matrice exclusive de propriété des fichiers. Passe vite à du code visible.

**Étape 2 — Délégation :** si cet environnement Codex expose réellement des outils de sous-agents, délègue à un maximum de 3 agents de production en parallèle :
- Frontend/UI : homepage + composants de présentation.
- Content/i18n : textes EN/FR et données de projet.
- Project Pages : structure des pages secondaires/études de cas, après fixation des contrats.
Attribue des chemins modifiables exclusifs et des critères `DONE WHEN`. Exige un compte rendu par tâche selon `handoffs/TEMPLATE.md`. Si les sous-agents natifs ne sont pas disponibles, ne prétends pas les avoir lancés : exécute selon le même plan **séquentiellement**, ou propose au propriétaire un workflow de sessions Codex et worktrees isolés.

**Étape 3 — Gate 1 :** intègre les résultats, lance les commandes de qualité réellement possibles, sollicite une revue QA ciblée (sous-agent si disponible), corrige P0/P1, mets à jour `PROJECT_PROGRESS.md`. **Arrête-toi uniquement pour validation visuelle de la page d'accueil** avant le lot 2 ; montre ce qui fonctionne et les chemins de preview. Aucune action Git externe sans mon accord.

**Étape 4 — Suite après validation :** achève toutes les pages bilingues, CV HTML, 3 études de cas et navigation ; QA puis SEO/Release. À chaque gate, vérifie les contraintes de `docs/12` et `docs/07`. Un agent Release ne peut pas publier sans ma permission.

**Contraintes :** aucun backend, aucune DB, aucun faux contenu ou téléchargement, aucun lien trompeur vers des dépôts privés, aucune modification silencieuse du périmètre, aucun `git commit`, `git push`, `merge` ou déploiement sans instruction explicite.

Commence maintenant par l'audit du dépôt et le socle technique minimal. Ne rédige pas seulement un plan : implémente le lot 1.
