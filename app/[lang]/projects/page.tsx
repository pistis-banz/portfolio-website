import {pageMetadata} from '@/content/seo';
import {notFound} from 'next/navigation';
import {copy,isLocale} from '@/content/data';
import {Cards} from '@/components/site';
import {PageShell} from '@/components/page-shell';
export async function generateMetadata({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if (!isLocale(lang)) return {}; const metadata = {title:lang==='fr'?'Projets':'Projects',description:lang==='fr'?'Projets web et logiciel desktop sélectionnés.':'Selected web platforms and desktop software projects.'}; return pageMetadata(lang, '/projects', metadata.title, metadata.description)}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!isLocale(lang))notFound();const t=copy[lang];return <PageShell lang={lang} path="/projects" title={t.projectsTitle} eyebrow={t.projects} intro={t.projectsIntro}><Cards lang={lang}/></PageShell>}
