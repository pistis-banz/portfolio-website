# 03 — Design system : « Créatif & Distinctif »

**Statut : direction artistique validée par l'utilisateur.** Elle correspond à la **troisième proposition du dernier comparatif visuel**, pas à Editorial Prestige ni Swiss Grid. Elle doit être visiblement plus expressive et humaine qu'un site SaaS générique.

## 1. Intention

« Sérieux dans le travail, singulier dans la présentation ». Équilibre entre graphisme expressif et crédibilité pour un recruteur technique. Grande typographie, composition asymétrique, noir profond, fond blanc cassé, bleu cobalt/électrique, accents vert citron, éléments graphiques façon coups de pinceau/annotation/flèches. Les vrais produits restent au cœur de la page.

**Image de référence** : `assets/reference/direction-03-creative-distinctive.png`. Le visuel est un moodboard **fictif** : ne pas reprendre des screenshots inventés, contenus illisibles ou fausses photos pour les présenter comme réalités.

## 2. Tokens (source de vérité)

### Couleurs

| Token | Hex | Usage |
|---|---|---|
| `canvas` | `#F8F8F5` | Fond de page, surface principale |
| `ink` | `#17181D` | Texte, CTA sombre, titres |
| `blue` | `#343BEE` | Identité, surlignages, CTA, détails |
| `lime` | `#DFFF48` | Accent contrastant, petites touches expressives |
| `surface` | `#EDEDE9` | Cartes et bandes secondaires |
| `muted` | `#53565F` | Texte secondaire |
| `border` | `#D4D4D0` | Séparateurs fins |
| `white` | `#FFFFFF` | Texte sur fond bleu/noir et surfaces contrôlées |
| `darkSurface` | `#292B34` | Cartes dans section sombre |

Ne pas multiplier les couleurs pour chaque section. Ne pas utiliser blanc sur lime. Tester le contraste réel de toutes les combinaisons ; privilégier le noir sur lime, blanc sur bleu et noir.

### Typographie

- Display : `Sora`, poids 700–800 ; fallback sans-serif système.
- Corps/UI : `Inter`, 400–600.
- Micro-labels et numérotations : `IBM Plex Mono`, 400–500.
- H1 desktop : clamp(3.5rem, 7.5vw, 6.5rem), interligne 0.95–1.05, lettre serrée raisonnablement. Mobile : clamp(2.8rem, 10vw, 4rem).
- H2 desktop : clamp(2.3rem, 4.5vw, 3.5rem) ; mobile 2–2.6rem.
- H3 : 1.4–2.25rem ; body 1–1.125rem ; captions 0.8–0.875rem ; labels 0.75–0.8125rem.
- Limiter longueur du texte courant à 60–75 caractères/ligne ; textes longs en paragraphes structurés.
- Titres denses mais ne jamais couper une ligne au milieu d'un mot ; vérifier i18n FR plus long.

### Mise en page et rythme

- Container : `max-width: 1280px` ; marges horizontales fluides `clamp(16px, 4vw, 48px)`.
- Grille desktop : 12 colonnes ; tablette : 6 ; mobile : 4 ou une colonne selon besoin.
- Unité : base 4px ; échelle préférée 8, 16, 24, 32, 48, 64, 96, 128 px.
- Espace vertical de section : `clamp(80px, 10vw, 144px)` desktop ; 64–96px mobile.
- Cartes : rayon 12–20px ; boutons 4–8px ; badges 2–6px ; garder une cohérence intentionnelle.
- Borders 1px ; ombres ponctuelles très discrètes ; éviter le glassmorphism partout.
- Zones respirantes entre compositions expressives : tout ne doit pas être simultanément animé/illustré.

## 3. Composants UI à créer

- `SiteHeader` : marque `PB` ou nom confirmé, links Projects/About/Resume/Contact, EN/FR, CTA contact facultatif ; sticky uniquement si ça ne prend pas une place excessive et respecte focus.
- `MobileNav` : bouton libellé accessible, état `aria-expanded`, piège focus uniquement si véritable dialogue modal, fermeture Escape, retour du focus au bouton, verrouillage scroll si overlay.
- `PrimaryButton`, `SecondaryButton`, `TextLink` : actions réelles, hover et focus-visible distincts, état disabled uniquement si justifié, cible min 44×44px lorsque possible.
- `SectionHeading` : eyebrow numéroté `01 / HERO`, titre et paragraphe.
- `ProjectCard` : capture réelle si disponible, contexte, intitulé, catégories, technologies, link ; variante featured et standard.
- `TechTag` : badge discret, pas de jauge ou score arbitraire.
- `CaseStudyHero` : titre, résumé, stack, catégorie, grand média réel si présent.
- `ProjectGallery` : grille responsive ; lightbox facultative **après** fonctionnalité de base ; alt descriptifs et légendes.
- `LanguageSwitcher` : conserve route et slug courant, `aria-label`, indique langue active.
- `Footer` : navigation secondaire, GitHub, LinkedIn confirmé, coordonnées confirmées, copyright calculé ou sans année fixe inventée.
- `BackToProjects`, `ProjectPagination`, `ResumeSection` et `ContactLinks`.
- `DecorativeMark` : illustrations SVG géométriques/strokes bleu+lime, décoratives avec `aria-hidden=true`.

## 4. Répartition des sections Home

1. **Hero** : typographie centrale `IDEAS. CODE. IMPACT.` ; sur desktop 55% texte / 45% visuel ; photo facultative + formes contrôlées. Eyebrow `SOFTWARE DEVELOPER / FULL-STACK` visible sans scroll. CTA primaire Projects, secondaire Resume. Localisation et statut de collaboration présentés sans surpromesse.
2. **Selected Work** : section noire, FIJADA featured sur grande surface ; SALMOSPHARM et Belkin comme deux cartes ; captures **réelles** une fois fournies. Les cards ne doivent pas se faire passer pour captures du projet en leur absence.
3. **What I Do** : trois domaines Web Platforms, Desktop Software, Software Design ; pictos simples ; pas de services tarifés.
4. **About** : bloc clair avec court portrait narratif et photo facultative ; lien About.
5. **Experience & Technologies** : timeline ou colonnes sobres ; vrais projets clients et stack pertinente ; pas de scores ni faux employeurs.
6. **Contact** : large bloc bleu, typography forte, touche lime pour un CTA réel ; lien Contact et canaux disponibles.
7. **Footer** : liens, langue, GitHub, coordonnées confirmées.

## 5. Détails d'expression

- Accents inspirés du moodboard : grandes lettres, aplats bleus, surlignage lime sur `IMPACT`, étoiles/asterisques SVG, flèches à main levée **mesurées**, couches en superposition modérée, papier blanc cassé.
- Portrait si fourni : traitement noir/blanc avec fond graphique bleu/lime, **sans retouche modifiant l'identité du visage**. Ne pas générer un visage fictif et l'attribuer au propriétaire.
- Le style « collage » se concentre sur le Hero et quelques transitions ; les pages techniques restent sobres pour lecture confortable.
- Site en anglais et en français : pas de typo/texte imprimé dans des images pour du contenu essentiel.
- La charte n'est pas un thème « sombre permanent ». Les sections sombres sont des contrastes ponctuels.

## 6. Interaction et motion

- CTA et boutons : 180–250ms, transform au maximum 2–4px.
- Cartes : léger lift/zoom image, uniquement lorsque `hover` existe ; ne pas masquer le contenu au repos.
- Scroll reveal : très léger après implémentation core ; éviter animations sur chaque ligne de texte et reflow.
- Mobile : réduire les mouvements décoratifs, éviter animations de chargement lentes ; aucun effet de parallaxe indispensable.
- `prefers-reduced-motion: reduce` : animations/transitions optionnelles désactivées sans perte d'information.
- Aucune bibliothèque Motion obligatoire en V1 ; CSS suffit. GSAP / Motion seulement pour une évolution justifiée.

## 7. Variantes responsives

| Format | Hero | Cards | Header |
|---|---|---|---|
| >= 1200px | 2 colonnes 55/45, fort titre | FIJADA large + 2 autres | Navigation complète |
| 768–1199px | 2 colonnes équilibrées ou empilées selon encombrement | 2 colonnes puis adaptation | Header simplifié |
| 320–767px | Une colonne, titre puis visuel, CTA empilables | Toutes les cartes empilées | Logo, langue et menu accessible |

Contrôler FR longue sur iPhone SE, à 320px et zoom 200%. Ne jamais imposer de hauteur Hero qui coupe du texte.

## 8. Iconographie et images

- Icônes : Lucide ou SVG internes, cohérentes (pas mélange gratuit de plusieurs bibliothèques).
- Visuels du projet : vraies captures réduites au poids approprié, jamais screenshots d'une UI fictive attribuée au client.
- `next/image` en export statique nécessite une configuration compatible (ex. `unoptimized`), sinon images HTML optimisées au build ; documenter ce choix.
- Pas d'images de banques d'images gratuites figurant comme captures des projets.

## 9. Critères de fidélité visuelle

- [ ] Un visiteur reconnaît la direction 03 avant de lire (typographie expressive, cobalt + lime, compositions vivantes).
- [ ] Le projet SALMOSPHARM n'est pas traité comme un site web.
- [ ] Les projets sont lisibles avant les détails décoratifs.
- [ ] Au moins une section sombre bien utilisée, sans virer au « thème SaaS dark » générique.
- [ ] Pas de surcharge d'effets, de cartes avec badges inutiles ou de texte minuscule.
- [ ] Version française et mobile visuellement abouties.
- [ ] Focus visible, contrastes et lecteur d'écran non perturbés par la décoration.
