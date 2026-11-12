import {ArrowDownToLine, ArrowUpRight} from 'lucide-react';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {copy, isLocale, profile, projects, resumeContent} from '@/content/data';
import {resumePageCopy, resumePdfUrls} from '@/content/resume-page';
import {PageShell} from '@/components/page-shell';
import styles from './resume.module.css';

export async function generateMetadata({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  return lang === 'fr'
    ? {title: 'Parcours et CV', description: 'Parcours, projets, formation et compétences de Pistis Banzietele en développement logiciel.'}
    : {title: 'Experience & Resume', description: 'Explore Pistis Banzietele’s software projects, education and technical skills.'};
}

export default async function Page({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  if (!isLocale(lang)) notFound();
  const t = copy[lang], resume = resumeContent[lang], page = resumePageCopy[lang];
  const pdfUrl = resumePdfUrls[lang];

  return <PageShell lang={lang} path="/resume" title={t.resumeTitle} eyebrow={profile.name} intro={t.resumeIntro}>
    {pdfUrl && <a className={`button ${styles.download}`} href={pdfUrl} download>
      {page.download}<ArrowDownToLine aria-hidden="true" size={18} />
    </a>}
    <div className={styles.layout}>
      <div>
        <section className={styles.section} aria-labelledby="experience-heading">
          <h2 id="experience-heading">{resume.experience}</h2>
          <p className={styles.introduction}>{resume.experienceDescription}</p>
          <h3 className={styles.subheading}>{page.projects}</h3>
          {projects.map(project => <article className={styles.entry} key={project.slug}>
            <p className={styles.category}>{project[lang].category}</p>
            <h4><Link href={`/${lang}/projects/${project.slug}`}>{project.name} <ArrowUpRight aria-hidden="true" size={18} /></Link></h4>
            <p>{project[lang].role}</p>
          </article>)}
          <article className={styles.entry}>
            <h3>{page.freelance}</h3>
            <p>{resume.qaExperience}</p>
          </article>
        </section>
        <section className={styles.section} aria-labelledby="education-heading">
          <h2 id="education-heading">{resume.education}</h2>
          <div className={styles.entry}><p>{resume.educationDescription}</p></div>
        </section>
      </div>
      <aside className={styles.sidebar}>
        <section className={styles.section} aria-labelledby="skills-heading">
          <h2 id="skills-heading">{t.skills}</h2>
          {resume.groups.map(group => <div className={styles.entry} key={group.label}>
            <h3>{group.label}</h3>
            <div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
          </div>)}
        </section>
        <section className={styles.section} aria-labelledby="languages-heading">
          <h2 id="languages-heading">{resume.languages}</h2>
          <div className={styles.entry}><p>{resume.languagesDescription}</p></div>
        </section>
        <section className={styles.section} aria-labelledby="strengths-heading">
          <h2 id="strengths-heading">{resume.strengths}</h2>
          <div className={styles.entry}><p>{resume.strengthsDescription}</p></div>
        </section>
      </aside>
    </div>
  </PageShell>;
}
