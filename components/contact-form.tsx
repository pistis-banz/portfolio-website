'use client';

import {useId, type FormEvent} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {Toaster, toast} from 'sonner';
import {contactContent, profile, type Locale} from '@/content/data';
import styles from './contact-section.module.css';

export function ContactForm({lang}:{lang: Locale}) {
  const t = contactContent[lang];
  const id = useId();

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get('subject') ?? '').trim();
    const body = String(data.get('body') ?? '').trim().replace(/\r?\n/g, '\r\n');
    if (!subject || !body) {
      const field = form.elements.namedItem(!subject ? 'subject' : 'body');
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        field.setCustomValidity(t.requiredMessage);
        field.reportValidity();
      }
      return;
    }
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.reset();
    toast(t.toastTitle, {description: t.toastDescription, duration: 8000});
  }

  return <><Toaster position="top-right" containerAriaLabel={t.toastRegion} toastOptions={{classNames: {toast: styles.toast, description: styles.toastDescription}}} /><form className={styles.form} action={`mailto:${profile.email}`} method="get" onSubmit={prepareEmail} aria-describedby={`${id}-help`}>
    <div className={styles.field}>
      <label htmlFor={`${id}-subject`}>{t.subject}</label>
      <input id={`${id}-subject`} name="subject" type="text" maxLength={160} onInput={event => event.currentTarget.setCustomValidity('')} required />
    </div>
    <div className={styles.field}>
      <label htmlFor={`${id}-body`}>{t.message}</label>
      <textarea id={`${id}-body`} name="body" rows={5} maxLength={3000} onInput={event => event.currentTarget.setCustomValidity('')} required />
    </div>
    <button className={styles.primary} type="submit">{t.send}<ArrowUpRight size={19} aria-hidden="true" /></button>
    <p id={`${id}-help`} className={styles.formHelp}>{t.formHelp}</p>
  </form></>;
}
