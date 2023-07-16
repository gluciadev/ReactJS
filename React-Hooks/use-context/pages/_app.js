import { ContextAppProvider } from '@/context/ContextApp'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextAppProvider>
        <Component {...pageProps} />
      </ContextAppProvider>
    </>
  )
  
  
}
