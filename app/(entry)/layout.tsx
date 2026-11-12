import type {ReactNode} from 'react';

export default function EntryLayout({children}:{children:ReactNode}) {
  return <html lang="en" suppressHydrationWarning><head><meta httpEquiv="refresh" content="0;url=/en" /></head><body>{children}</body></html>;
}
