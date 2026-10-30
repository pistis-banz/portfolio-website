import {Footer,Header,Label} from '@/components/site';
import type {Locale} from '@/content/data';
export function PageShell({lang,path,title,eyebrow,intro,children}:{lang:Locale;path:string;title:string;eyebrow:string;intro?:string;children:React.ReactNode}){return <><Header lang={lang} path={path}/><main id="main"><div className="wrap page"><Label>{eyebrow}</Label><h1>{title}</h1>{intro&&<p className="page-intro">{intro}</p>}{children}</div></main><Footer lang={lang}/></>}
