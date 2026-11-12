import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import './globals.css';
import styles from './not-found.module.css';

export const metadata: Metadata = { title: '404 | Pistis Banzietele' };

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main className={styles.page}>
          <div className={styles.topline}>
            <Link className={styles.brand} href="/en" aria-label="Pistis Banzietele — home">P<span>.</span>B</Link>
            <span className={styles.status}>404 / NOT FOUND</span>
          </div>
          <div className={styles.content}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}>Lost your way? / Vous êtes perdu ?</p>
              <h1>Page not found<span>.</span></h1>
              <p>The page you’re looking for doesn’t exist or has moved.</p>
              <p lang="fr">La page recherchée n’existe pas ou a été déplacée.</p>
              <div className={styles.actions}>
                <Link className={styles.primary} href="/en">Back to home <ArrowUpRight size={18} aria-hidden="true" /></Link>
                <Link className={styles.secondary} href="/fr" lang="fr">Retour à l’accueil <ArrowUpRight size={18} aria-hidden="true" /></Link>
              </div>
            </div>
            <div className={styles.art} aria-hidden="true"><span>404</span><i>PAGE NOT FOUND</i></div>
          </div>
        </main>
      </body>
    </html>
  );
}
