import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'


const API_URL = process.env.NEXT_PUBLIC_GRAFBASE_API_URL
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  </main>
  )
}
 