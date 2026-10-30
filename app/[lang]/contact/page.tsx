import {notFound} from 'next/navigation';
import {copy,isLocale} from '@/content/data';
import {PageShell} from '@/components/page-shell';
export async function generateMetadata({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return {title:lang==='fr'?'Contact':'Get in touch'}}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!isLocale(lang))notFound();const t=copy[lang];return <PageShell lang={lang} path="/contact" title={lang==='fr'?'Échangeons.':'Let’s connect.'} eyebrow={t.collab} intro={t.contactBody}><a className="button" href="https://github.com/pistis-banz">{t.contactLink} <span>↗</span></a></PageShell>}
