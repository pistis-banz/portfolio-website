import {notFound} from 'next/navigation';
import {copy,isLocale,profile} from '@/content/data';
import {PageShell} from '@/components/page-shell';
export async function generateMetadata({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return {title:lang==='fr'?'Contact':'Get in touch'}}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!isLocale(lang))notFound();const t=copy[lang];return <PageShell lang={lang} path="/contact" title={lang==='fr'?'Échangeons.':'Let’s connect.'} eyebrow={t.collab} intro={t.contactBody}><div className="prose"><p>{profile.name}</p><p><a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a></p><p><a className="text-link" href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a></p><p><a className="text-link" href={profile.linkedin}>LinkedIn ↗</a></p><p><a className="text-link" href={profile.github}>GitHub ↗</a></p></div></PageShell>}
