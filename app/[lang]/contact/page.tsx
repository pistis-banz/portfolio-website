import {notFound} from 'next/navigation';
import {isLocale} from '@/content/data';
import {ContactSection} from '@/components/contact-section';
import {Footer,Header} from '@/components/site';
export async function generateMetadata({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return {title:lang==='fr'?'Contact':'Get in touch'}}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!isLocale(lang))notFound();return <><Header lang={lang} path="/contact" /><main id="main"><ContactSection lang={lang} page /></main><Footer lang={lang} /></>}
