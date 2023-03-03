import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

import type { AppProps } from 'next/app'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return <Component {...pageProps} />
}
