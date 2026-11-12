'use client';

import {useRef, type KeyboardEvent} from 'react';
import styles from './site.module.css';

type NavigationLink = {href: string; label: string; current: 'page' | 'location' | undefined};

export function MobileMenu({links, navigationLabel}:{links: NavigationLink[]; navigationLabel: string}) {
  const summaryRef = useRef<HTMLElement>(null);

  function handleKeyDown(event: KeyboardEvent<HTMLDetailsElement>) {
    if (event.key === 'Escape' && event.currentTarget.open) {
      event.preventDefault();
      event.currentTarget.open = false;
      summaryRef.current?.focus();
    }
  }

  return <details className={styles.mobileMenu} onKeyDown={handleKeyDown}>
    <summary ref={summaryRef} className={styles.menuToggle}>Menu <span aria-hidden="true" /></summary>
    <nav className={styles.mobileNav} aria-label={navigationLabel}>
      {links.map(link => <a key={link.href} href={link.href} aria-current={link.current}>{link.label}</a>)}
    </nav>
  </details>;
}
