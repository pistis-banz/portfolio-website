import {ArrowUpRight} from 'lucide-react';
import Link from 'next/link';
import {copy, projects, type Locale} from '@/content/data';
import styles from './site.module.css';
import {MobileMenu} from './mobile-menu';
import {ContactSection} from './contact-section';

export function Header({lang, path=''}:{lang:Locale;path?:string}) {
  const t = copy[lang];
  const other = lang === 'en' ? 'fr' : 'en';
  const navigationLabel = lang === 'en' ? 'Main navigation' : 'Navigation principale';
  const links = [
    {route: '/projects', label: t.projects},
    {route: '/about', label: t.about},
    {route: '/resume', label: t.resume},
    {route: '/contact', label: t.contact},
  ].map(({route, label}) => ({
    href: `/${lang}${route}`,
    label,
    current: path === route ? 'page' as const : route === '/projects' && path.startsWith(`${route}/`) ? 'location' as const : undefined,
  }));

  return <>
    <a className="skip" href="#main">{t.skip}</a>
    <header className={`header wrap ${styles.header}`}>
      <Link className="brand" href={`/${lang}`} aria-label={`${t.home} — PB`}>PB<span>.</span></Link>
      <nav className={styles.desktopNav} aria-label={navigationLabel}>
        {links.map(link => <Link key={link.href} href={link.href} aria-current={link.current}>{link.label}</Link>)}
      </nav>
      <Link className="language" href={`/${other}${path}`} aria-label={`${t.switch}: ${other.toUpperCase()}`}>{lang.toUpperCase()} <span>/</span> {other.toUpperCase()} <ArrowUpRight className="icon-inline" aria-hidden="true" size={18} /></Link>
      <MobileMenu links={links} navigationLabel={navigationLabel} />
    </header>
  </>;
}
export function Footer({lang}:{lang:Locale}) { const t=copy[lang]; return <footer className="footer"><div className="wrap footer-inner"><Link className="brand" href={`/${lang}`}>PB<span>.</span></Link><p>{t.footer}</p><a href="https://github.com/pistis-banz">GitHub <ArrowUpRight className="icon-inline" aria-hidden="true" size={18} /></a></div></footer> }
export function Label({children}:{children:React.ReactNode}) {return <p className="label"><span>✳</span> {children}</p>}
export function Cards({lang}:{lang:Locale}) {const t=copy[lang];return <div className="cards">{projects.map((p,i)=><article className={`card card-${i}`} key={p.slug}><Link href={`/${lang}/projects/${p.slug}`} className="card-art" aria-label={`${t.case}: ${p.name}`}><span className="art-number">0{i+1}</span><span className="art-symbol" aria-hidden="true">{i===0?'✳':i===1?'◉':<ArrowUpRight size={180} strokeWidth={1.5} />}</span><span className="art-name">{p.name}</span></Link><div className="card-info"><p className="label">{p[lang].category}</p><h3><Link href={`/${lang}/projects/${p.slug}`}>{p.name} <ArrowUpRight className="icon-inline" aria-hidden="true" size={18} /></Link></h3><p>{p[lang].summary}</p><div className="tags">{p.stack.slice(0,3).map(s=><span key={s}>{s}</span>)}</div></div></article>)}</div>}
export function ContactBand({lang}:{lang:Locale}){return <ContactSection lang={lang} />}
