import Link from 'next/link';
import {notFound} from 'next/navigation';
import {copy,isLocale,projects} from '@/content/data';
import {PageShell} from '@/components/page-shell';
export async function generateMetadata({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return {title:lang==='fr'?'Parcours et CV':'Experience & Resume'}}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!isLocale(lang))notFound();const t=copy[lang];return <PageShell lang={lang} path="/resume" title={t.resumeTitle} eyebrow={t.resume} intro={t.resumeIntro}><div className="resume-grid"><section><h2>{t.selected}</h2>{projects.map(p=><article className="resume-item" key={p.slug}><p className="label">{p[lang].category}</p><h3><Link href={`/${lang}/projects/${p.slug}`}>{p.name} ↗</Link></h3><p>{p[lang].summary}</p></article>)}</section><section><h2>{t.skills}</h2><div className="tags">{['React','TypeScript','Laravel','Blade','Inertia.js','Livewire','Python','PySide6','MySQL','SQLite'].map(x=><span key={x}>{x}</span>)}</div></section></div></PageShell>}
