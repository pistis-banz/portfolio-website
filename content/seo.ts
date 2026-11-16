import type {Metadata} from 'next';
import {locales, projects, type Locale} from '@/content/data';

// Update this origin when the portfolio moves to its permanent domain.
export const siteUrl = 'https://pistis.pistisbasolua.workers.dev';
export const sitePaths = ['', '/projects', ...projects.map(({slug}) => `/projects/${slug}`), '/about', '/resume', '/contact'];

export function pageMetadata(lang: Locale, path: string, title: string, description: string): Metadata {
  const url = `${siteUrl}/${lang}${path}`;
  const socialTitle = path ? `${title} | Pistis Banzietele` : title;
  const image = `${siteUrl}/images/portrait-portfolio.webp`;
  return {
    title: path ? title : {absolute: title},
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map(locale => [locale, `${siteUrl}/${locale}${path}`])),
    },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Pistis Banzietele',
      locale: lang === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: lang === 'fr' ? 'en_US' : 'fr_FR',
      title: socialTitle,
      description,
      images: [{url: image, width: 729, height: 766, alt: 'Pistis Banzietele'}],
    },
    twitter: {card: 'summary', title: socialTitle, description, images: [image]},
  };
}
