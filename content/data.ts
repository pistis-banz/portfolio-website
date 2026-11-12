export type Locale = 'en' | 'fr';
export const locales: Locale[] = ['en', 'fr'];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
export const profile = {
  name: 'Pistis Banzietele',
  email: 'pistisbasolua@gmail.com',
  phone: '+243830918800',
  phoneDisplay: '+243 830 918 800',
  linkedin: 'https://www.linkedin.com/in/pistis-banzietele',
  github: 'https://github.com/pistis-banz',
};

export const contactContent: Record<Locale, {eyebrow: string; title: string; description: string; emailAction: string; pageAction: string; directory: string; email: string; phone: string; social: string; location: string; subject: string; message: string; send: string; formHelp: string; requiredMessage: string; toastTitle: string; toastDescription: string; toastRegion: string}> = {
  en: {
    eyebrow: 'International collaborations',
    title: 'Let’s build something useful.',
    description: 'Have a project or opportunity in mind? I’d be glad to hear from you.',
    emailAction: 'Write me an email',
    pageAction: 'More ways to connect',
    directory: 'Get in touch',
    email: 'Email',
    phone: 'Phone',
    social: 'Find me online',
    location: 'Kinshasa, DR Congo',
    subject: 'Subject',
    message: 'Your message',
    send: 'Send via email',
    formHelp: 'This opens your email app with a draft to review and send. You can also use the email address shown here.',
    requiredMessage: 'Please enter some text.',
    toastTitle: 'Email app launch requested',
    toastDescription: 'Review and send your message from your email app.',
    toastRegion: 'Notifications',
  },
  fr: {
    eyebrow: 'Collaborations internationales',
    title: 'Construisons quelque chose d’utile.',
    description: 'Un projet ou une opportunité en tête ? Je serai ravi d’en discuter avec vous.',
    emailAction: 'M’écrire par e-mail',
    pageAction: 'Tous les contacts',
    directory: 'Me contacter',
    email: 'E-mail',
    phone: 'Téléphone',
    social: 'Me retrouver en ligne',
    location: 'Kinshasa, RD Congo',
    subject: 'Objet',
    message: 'Votre message',
    send: 'Envoyer par e-mail',
    formHelp: 'Votre messagerie s’ouvrira avec un brouillon à vérifier et à envoyer. Vous pouvez aussi utiliser l’adresse e-mail indiquée ici.',
    requiredMessage: 'Veuillez saisir du texte.',
    toastTitle: 'Ouverture de votre messagerie demandée',
    toastDescription: 'Vérifiez et envoyez votre message depuis votre messagerie.',
    toastRegion: 'Notifications',
  },
};

export const aboutContent: Record<Locale, string[]> = {
  en: [
    'I’m a software developer focused on full-stack development, with experience designing and developing web applications and desktop software, including projects for clients.',
    'I like to understand the requirements, consider different solutions and choose technologies suited to the problem. I take a pragmatic approach to building useful, reliable and maintainable software.',
    'I welcome new challenges, collaborations and opportunities to contribute, learn and grow professionally.',
  ],
  fr: [
    'Je suis développeur logiciel, principalement orienté full-stack, avec une expérience dans la conception et le développement d’applications web et de logiciels desktop, notamment pour des clients.',
    'J’aime comprendre les besoins, réfléchir aux différentes solutions et choisir les technologies adaptées. Je privilégie une approche pragmatique pour créer des logiciels utiles, fiables et faciles à maintenir.',
    'Je suis ouvert aux nouveaux défis, aux collaborations et aux opportunités qui me permettent de contribuer, d’apprendre et d’évoluer professionnellement.',
  ],
};

export const resumeContent = {
  en: {
    education: 'Education',
    educationDescription: 'Bachelor’s-level qualification in computer science, with knowledge of programming, databases, networking and software engineering.',
    experience: 'Experience',
    experienceDescription: 'Design and delivery of software projects for clients, including FIJADA and Belkin SAS, and development of the SALMOSPHARM 133 pharmacy management application.',
    qaExperience: 'Software quality assurance through freelance QA testing assignments on Upwork.',
    languages: 'Languages',
    languagesDescription: 'French: fluent · English: intermediate',
    strengths: 'Professional strengths',
    strengthsDescription: 'Software solution design, requirements analysis, problem-solving, adaptability and collaboration.',
    groups: [
      {label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS']},
      {label: 'Backend', items: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'Python']},
      {label: 'Data', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Prisma']},
      {label: 'Tools & practices', items: ['Git', 'GitHub', 'REST APIs', 'Software testing', 'Integration and deployment', 'AI-assisted development']},
    ],
  },
  fr: {
    education: 'Formation',
    educationDescription: 'Diplômé en informatique, niveau licence, avec des connaissances en programmation, bases de données, réseaux et génie logiciel.',
    experience: 'Expérience',
    experienceDescription: 'Conception et réalisation de projets logiciels pour des clients, notamment FIJADA et Belkin SAS, et développement de SALMOSPHARM 133, un logiciel de gestion de pharmacie.',
    qaExperience: 'Expérience en assurance qualité à travers des missions freelance de tests logiciels sur Upwork.',
    languages: 'Langues',
    languagesDescription: 'Français : courant · Anglais : intermédiaire',
    strengths: 'Atouts professionnels',
    strengthsDescription: 'Conception de solutions logicielles, analyse des besoins, résolution de problèmes, adaptabilité et collaboration.',
    groups: [
      {label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS']},
      {label: 'Backend', items: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'Python']},
      {label: 'Données', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Prisma']},
      {label: 'Outils et pratiques', items: ['Git', 'GitHub', 'API REST', 'Tests logiciels', 'Intégration et déploiement', 'Développement assisté par IA']},
    ],
  },
} satisfies Record<Locale, {education: string; educationDescription: string; experience: string; experienceDescription: string; qaExperience: string; languages: string; languagesDescription: string; strengths: string; strengthsDescription: string; groups: {label: string; items: string[]}[]}>;
type Copy = { category: string; summary: string; challenge: string; solution: string; role: string };
type Project = { slug: string; name: string; stack: string[]; en: Copy; fr: Copy };
export const projects: Project[] = [
 { slug:'fijada', name:'FIJADA', stack:['Laravel','Blade','React','Inertia.js','TypeScript','MySQL'], en:{category:'Institutional web platform',summary:'A new multilingual institutional platform with a custom editorial back office.',challenge:'Organize institutional content across multiple languages and give editors a practical management interface.',solution:'Laravel and Blade power the public website; React and Inertia.js support the editorial back office, with MySQL for application data. The platform includes multilingual content and Arabic right-to-left layouts.',role:'I contributed to product and architecture decisions, selected the React approach for administration, helped set up the development environment and directed the implementation workflow, with much of the code generated using Codex.'},fr:{category:'Plateforme web institutionnelle',summary:'Une nouvelle plateforme institutionnelle multilingue dotée d’un espace d’administration éditorial sur mesure.',challenge:'Organiser les contenus institutionnels en plusieurs langues et fournir aux rédacteurs une interface de gestion adaptée.',solution:'Laravel et Blade servent le site public ; React et Inertia.js constituent le back-office éditorial, avec MySQL pour les données. La plateforme prend en charge plusieurs langues et l’affichage arabe de droite à gauche.',role:'J’ai participé aux décisions produit et architecturales, retenu l’approche React pour l’administration, contribué à l’environnement de développement et piloté l’implémentation, dont une grande partie du code a été générée avec Codex.'}},
 { slug:'salmospharm-133', name:'SALMOSPHARM 133', stack:['Python','PySide6','SQLite'], en:{category:'Desktop business software',summary:'A pharmacy management application designed around offline workflows.',challenge:'Support everyday pharmacy operations without depending on a permanent internet connection.',solution:'A desktop application using Python, PySide6 and local SQLite storage, designed for pharmacy workflows.',role:'I contributed to the functional and technical design, defining features, business rules, architecture and technology choices, and directed development assisted by Codex.'},fr:{category:'Logiciel métier desktop',summary:'Une application de gestion de pharmacie conçue pour fonctionner hors connexion.',challenge:'Accompagner les opérations quotidiennes d’une pharmacie sans dépendre d’une connexion Internet permanente.',solution:'Une application desktop utilisant Python, PySide6 et une base SQLite locale, conçue pour les activités d’une pharmacie.',role:'J’ai participé à la conception fonctionnelle et technique, défini les fonctionnalités, les règles métier, l’architecture et les choix technologiques, et piloté le développement assisté par Codex.'}},
 { slug:'belkin-sas', name:'Belkin SAS', stack:['Laravel','Livewire','MySQL'], en:{category:'Corporate website & content management',summary:'A company website with a blog and editorial administration workflows.',challenge:'Provide a professional online presence and a manageable way to publish company content.',solution:'Laravel and Livewire backed by MySQL, with blog administration and image handling.',role:'I worked on the design and delivery of the company website, including its institutional pages, blog and administration interface.'},fr:{category:'Site d’entreprise et gestion de contenu',summary:'Un site d’entreprise comprenant un blog et une interface de gestion éditoriale.',challenge:'Offrir à l’entreprise une présence professionnelle en ligne et un moyen de publier ses contenus.',solution:'Laravel, Livewire et MySQL, avec administration du blog et gestion des images.',role:'J’ai travaillé sur la conception et la réalisation du site professionnel, comprenant une vitrine institutionnelle, un blog et une interface d’administration.'}}
];
export const copy = {
 en:{home:'Home',projects:'Projects',about:'About',resume:'Resume',contact:'Contact',skip:'Skip to main content',eyebrow:'SOFTWARE DEVELOPER / FULL-STACK',hero:'IDEAS. CODE. IMPACT.',heroTitle:'Software developer building useful web and desktop applications.',intro:'I work on web platforms and desktop software, turning practical requirements into useful digital solutions.',location:'Kinshasa, DR Congo',view:'Explore my work',cv:'View my resume',selected:'Selected work',workTitle:'Real projects. Practical solutions.',workIntro:'A selection of client projects and software applications I’ve worked on.',case:'View case study',all:'All projects',services:'What I do',servicesTitle:'From requirements to working software.',serviceItems:[['Web platforms','Institutional sites, content management and full-stack web applications.'],['Desktop software','Business applications designed for day-to-day use, including offline workflows.'],['Software design','Understanding needs, structuring solutions and making technical trade-offs.']],beyond:'Beyond the code.',bio:'I’m a software developer based in Kinshasa, DR Congo. My work includes client web platforms and desktop business software, with a focus on practical solutions and full-stack development.',bio2:'I value clear requirements, sensible technical decisions and software that people can actually use. I’m interested in contributing to international teams and meaningful software projects.',more:'More about me',tech:'Experience & technologies',techIntro:'A practical toolkit shaped by different projects.',collab:'International collaborations',contactTitle:'Let’s build something useful.',contactBody:'Interested in my work or have an opportunity in mind? Let’s connect.',contactLink:'Find me on GitHub',projectsTitle:'Selected work',projectsIntro:'Web platforms, a desktop application and client solutions — selected to show the variety of software I’ve worked on.',resumeTitle:'Experience & resume',resumeIntro:'A concise overview of my projects and software skills.',client:'Client work',skills:'Technical skills',challenge:'The challenge',solution:'The solution',role:'My contribution',stack:'Technologies',next:'Next project',back:'Back to all projects',completed:'Completed project',switch:'Switch language',footer:'Software development · Web & desktop'},
 fr:{home:'Accueil',projects:'Projets',about:'À propos',resume:'CV',contact:'Contact',skip:'Aller au contenu',eyebrow:'DÉVELOPPEUR LOGICIEL / FULL-STACK',hero:'IDÉES. CODE. IMPACT.',heroTitle:'Développeur logiciel spécialisé dans les applications web et desktop.',intro:'Je travaille sur des plateformes web et des logiciels desktop pour transformer des besoins concrets en solutions numériques utiles.',location:'Kinshasa, RD Congo',view:'Découvrir mes projets',cv:'Consulter mon CV',selected:'Projets sélectionnés',workTitle:'Des projets concrets. Des solutions utiles.',workIntro:'Une sélection de projets clients et d’applications logicielles auxquels j’ai contribué.',case:'Voir l’étude de cas',all:'Tous les projets',services:'Domaines d’intervention',servicesTitle:'Du besoin au logiciel fonctionnel.',serviceItems:[['Plateformes web','Sites institutionnels, gestion de contenus et applications web full-stack.'],['Logiciels desktop','Applications métier pensées pour un usage quotidien, y compris hors connexion.'],['Conception logicielle','Analyse des besoins, structuration des solutions et arbitrages techniques.']],beyond:'Au-delà du code.',bio:'Je suis développeur logiciel basé à Kinshasa, en RD Congo. Je travaille sur des plateformes web pour des clients et des logiciels métier desktop, avec une spécialisation full-stack et une approche centrée sur les besoins concrets.',bio2:'J’accorde de l’importance à la clarté des besoins, aux choix techniques adaptés et aux logiciels réellement utilisables. Je souhaite contribuer à des équipes internationales et à des projets logiciels utiles.',more:'En savoir plus',tech:'Expérience et technologies',techIntro:'Des outils choisis et utilisés selon les besoins des projets.',collab:'Collaborations internationales',contactTitle:'Construisons quelque chose d’utile.',contactBody:'Mon travail vous intéresse ou vous avez une opportunité à proposer ? Échangeons.',contactLink:'Me retrouver sur GitHub',projectsTitle:'Mes réalisations',projectsIntro:'Plateformes web, logiciel desktop et solutions clients : une sélection qui reflète la diversité de mes projets.',resumeTitle:'Parcours et CV',resumeIntro:'Un aperçu de mes projets et de mes compétences en développement.',client:'Projets clients',skills:'Compétences techniques',challenge:'Le besoin',solution:'La solution',role:'Ma contribution',stack:'Technologies',next:'Projet suivant',back:'Tous les projets',completed:'Projet terminé',switch:'Changer de langue',footer:'Développement logiciel · Web et desktop'}
} satisfies Record<Locale, Record<string, string | string[][]>>;
