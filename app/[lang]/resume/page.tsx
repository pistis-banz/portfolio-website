import Link from 'next/link';
import {notFound} from 'next/navigation';
import {copy,isLocale,profile,projects,resumeContent} from '@/content/data';
import {PageShell} from '@/components/page-shell';
export async function generateMetadata({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return {title:lang==='fr'?'Parcours et CV':'Experience & Resume'}}
export default async function Page({params}:{params:Promise<{lang:string}>}) {
  const {lang}=await params;
  if(!isLocale(lang))notFound();
  const t=copy[lang], resume=resumeContent[lang];
  return <PageShell lang={lang} path="/resume" title={t.resumeTitle} eyebrow={profile.name} intro={t.resumeIntro}>
    <div className="resume-grid">
      <div>
        <section><h2>{resume.experience}</h2><div className="resume-item"><p>{resume.experienceDescription}</p><p>{resume.qaExperience}</p></div></section>
        <section><h2>{t.selected}</h2>{projects.map(p=><article className="resume-item" key={p.slug}><p className="label">{p[lang].category}</p><h3><Link href={`/${lang}/projects/${p.slug}`}>{p.name} ↗</Link></h3><p>{p[lang].summary}</p></article>)}</section>
        <section><h2>{resume.education}</h2><div className="resume-item"><p>{resume.educationDescription}</p></div></section>
      </div>
      <div>
        <section><h2>{t.skills}</h2>{resume.groups.map(group=><div className="resume-item" key={group.label}><h3>{group.label}</h3><div className="tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></div>)}</section>
        <section><h2>{resume.languages}</h2><div className="resume-item"><p>{resume.languagesDescription}</p></div></section>
        <section><h2>{resume.strengths}</h2><div className="resume-item"><p>{resume.strengthsDescription}</p></div></section>
      </div>
    </div>
  </PageShell>;
}
