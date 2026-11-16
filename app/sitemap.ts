import type {MetadataRoute} from 'next';
import {locales} from '@/content/data';
import {sitePaths, siteUrl} from '@/content/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths.flatMap(path => locales.map(lang => ({url: `${siteUrl}/${lang}${path}`})));
}
