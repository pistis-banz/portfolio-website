import {notFound} from 'next/navigation';
import {aboutContent,copy,isLocale} from '@/content/data';
import {PageShell} from '@/components/page-shell';
export async function generateMetadata({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return lang==='fr'?{title:'À propos',description:'Découvrez le parcours et l’approche de Pistis Banzietele, développeur logiciel full-stack.'}:{title:'About',description:'Meet Pistis Banzietele and discover his approach to full-stack software development.'}}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!isLocale(lang))notFound();const t=copy[lang];return <PageShell lang={lang} path="/about" title={t.beyond} eyebrow={t.about}><div className="prose">{aboutContent[lang].map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></PageShell>}
