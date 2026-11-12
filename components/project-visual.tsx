import Image from 'next/image';
import type {Locale} from '@/content/data';
import styles from './project-visual.module.css';

// Add approved, anonymised project screenshots here once the owner supplies them.
// Paths must point to real assets in public/; never use illustrative mockups as evidence.
const screenshots: Record<string, {src: string; alt: Record<Locale, string>} | undefined> = {};
export const hasProjectScreenshot = (slug:string) => Boolean(screenshots[slug]);

export function ProjectVisual({slug, name, lang, index, large=false}:{slug:string;name:string;lang:Locale;index:number;large?:boolean}) {
  const screenshot=screenshots[slug];
  return <div className={`${styles.visual} ${styles[`tone${index % 3}`]} ${large?styles.large:''}`}>
    {screenshot ? <Image src={screenshot.src} alt={screenshot.alt[lang]} fill sizes={large?'(max-width: 800px) 100vw, 1200px':'(max-width: 800px) 100vw, 700px'} className={styles.image}/> : <>
      <span className={styles.number}>0{index+1} / {name}</span>
      <span className={styles.symbol} aria-hidden="true">✳</span>
      <span className={styles.placeholder}>{lang==='fr'?'Capture du projet à venir':'Project screenshot coming soon'}</span>
    </>}
  </div>;
}
