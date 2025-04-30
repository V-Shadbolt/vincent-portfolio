import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'

export default function App({ Component, pageProps }: AppProps) {
  const domain = process.env.NODE_ENV === 'production'
    ?  ( process.env.NEXT_PUBLIC_CUSTOM_DOMAIN || 'vincentshadbolt.ca' )
    : 'localhost:3000'

  return (
    <PlausibleProvider 
      domain={domain}
      customDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_CUSTOM_DOMAIN}
      selfHosted={true}
      trackOutboundLinks
      trackFileDownloads
      enabled={true}
      trackLocalhost={true}
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
