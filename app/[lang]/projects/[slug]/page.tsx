import {ArrowUpRight, ArrowLeft} from 'lucide-react';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {copy,isLocale,projects} from '@/content/data';
import {PageShell} from '@/components/page-shell';
import {ProjectVisual,hasProjectScreenshot} from '@/components/project-visual';
import styles from './case-study.module.css';

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{lang:string;slug:string}>}){
  const {lang,slug}=await params;
  const p=projects.find(p=>p.slug===slug);
  if(!p||!isLocale(lang))return {};
  return {title:`${p.name} — ${lang==='en'?'Case Study':'Étude de cas'}`,description:p[lang].summary};
}
export default async function Page({params}:{params:Promise<{lang:string;slug:string}>}){
  const {lang,slug}=await params;
  if(!isLocale(lang))notFound();
  const index=projects.findIndex(p=>p.slug===slug);
  if(index<0)notFound();
  const p=projects[index],t=copy[lang],next=projects[(index+1)%projects.length],data=p[lang];
  const sections=[
    {title:lang==='fr'?'Contexte':'Context',body:data.summary},
    {title:t.challenge,body:data.challenge},
    {title:t.solution,body:data.solution},
    {title:t.role,body:data.role},
  ];
  return <PageShell lang={lang} path={`/projects/${slug}`} title={p.name} eyebrow={data.category}>
    <ProjectVisual slug={slug} name={p.name} lang={lang} index={index} large/>
    <div className={styles.layout}>
      <aside className={styles.facts} aria-label={lang==='fr'?'Informations sur le projet':'Project details'}>
        <p className="label">{t.completed}</p>
        <h2>{t.stack}</h2>
        <div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
      </aside>
      <div className={styles.content}>{sections.map(({title,body},i)=><section className={styles.section} key={title}><span className={styles.index}>0{i+1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}
        <section className={styles.section}><span className={styles.index}>05</span><div><h2>{lang==='fr'?'Captures du projet':'Project screenshots'}</h2><p>{hasProjectScreenshot(slug) ? (lang==='fr'?'Une capture du projet est présentée ci-dessus.':'A project screenshot is shown above.') : (lang==='fr'?'Les captures réelles du projet seront ajoutées ici lorsqu’elles seront disponibles.':'Real project screenshots will be added here when available.')}</p></div></section>
      </div>
    </div>
    <div className="page-links"><Link href={`/${lang}/projects`}><ArrowLeft className="icon-inline" aria-hidden="true" size={18} /> {t.back}</Link><Link href={`/${lang}/projects/${next.slug}`}>{t.next}: {next.name} <ArrowUpRight className="icon-inline" aria-hidden="true" size={18} /></Link></div>
  </PageShell>;
}
