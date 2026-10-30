import {notFound} from 'next/navigation';
import {copy,isLocale} from '@/content/data';
import {PageShell} from '@/components/page-shell';
export async function generateMetadata({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return {title:lang==='fr'?'À propos':'About'}}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!isLocale(lang))notFound();const t=copy[lang];return <PageShell lang={lang} path="/about" title={t.beyond} eyebrow={t.about}><div className="prose"><p>{t.bio}</p><p>{t.bio2}</p></div></PageShell>}
