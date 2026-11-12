import Link from 'next/link';
import {ArrowRight, ArrowUpRight, Mail, MapPin, Phone} from 'lucide-react';
import {contactContent, profile, type Locale} from '@/content/data';
import styles from './contact-section.module.css';

export function ContactSection({lang, page = false}:{lang: Locale; page?: boolean}) {
  const t = contactContent[lang];
  const Heading = page ? 'h1' : 'h2';

  return <section className={`${styles.section} ${page ? styles.page : styles.home}`} aria-labelledby="contact-heading">
    <div className={`wrap ${styles.grid}`}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}><span aria-hidden="true">✳</span> {t.eyebrow}</p>
        <Heading id="contact-heading" className={styles.title}>{t.title}</Heading>
        <p className={styles.description}>{t.description}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={`mailto:${profile.email}`}>{t.emailAction}<ArrowUpRight size={19} aria-hidden="true" /></a>
          {!page && <Link className={styles.secondary} href={`/${lang}/contact`}>{t.pageAction}<ArrowRight size={18} aria-hidden="true" /></Link>}
        </div>
      </div>
      <div className={styles.directory}>
        <div className={styles.directoryHeading}><span>{t.directory}</span><span aria-hidden="true">✳</span></div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <Mail size={20} aria-hidden="true" />
            <div><p>{t.email}</p><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          </div>
          <div className={styles.detail}>
            <Phone size={20} aria-hidden="true" />
            <div><p>{t.phone}</p><a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a></div>
          </div>
        </div>
        <div className={styles.social}>
          <p>{t.social}</p>
          <div><a href={profile.linkedin}>LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a><a href={profile.github}>GitHub <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        </div>
        <p className={styles.location}><MapPin size={16} aria-hidden="true" /> {t.location}</p>
      </div>
    </div>
  </section>;
}
