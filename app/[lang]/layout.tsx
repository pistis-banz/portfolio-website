import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {isLocale, locales} from '@/content/data';
import '../globals.css';
export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{const {lang}=await params; return lang==='fr'?{title:{default:'Développeur logiciel | Full-stack, Web & Desktop',template:'%s | Développeur logiciel'},description:'Portfolio d’un développeur logiciel spécialisé dans les plateformes web full-stack et les applications desktop.'}:{title:{default:'Software Developer | Full-stack, Web & Desktop',template:'%s | Software Developer'},description:'Portfolio of a software developer working on full-stack web platforms and desktop applications.'}}
export function generateStaticParams(){return locales.map(lang=>({lang}))}
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}){const {lang}=await params;if(!isLocale(lang)) notFound();return <html lang={lang}><body>{children}</body></html>}
