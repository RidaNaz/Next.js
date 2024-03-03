// create index.tsx inside your pages folder

import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}                                        // For Pages Directory