import type {Locale} from './data';

// Add the corresponding public URL only after the real PDF has been supplied.
export const resumePdfUrls: Record<Locale, string | null> = {en: null, fr: null};

export const resumePageCopy: Record<Locale, {projects: string; freelance: string; download: string}> = {
  en: {projects: 'Software projects', freelance: 'Freelance software testing', download: 'Download resume (PDF)'},
  fr: {projects: 'Projets logiciels', freelance: 'Tests logiciels en freelance', download: 'Télécharger le CV (PDF)'},
};
