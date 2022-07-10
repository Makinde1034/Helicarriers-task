import React from 'react'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Providers from '../Providers'
import { store } from '../state'
import '../styles/global.css'

const client = new ApolloClient({
  uri: 'https://buycoins-task-transactions.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <ApolloProvider client={client}>
      <Providers store={store}>
        <Component {...pageProps} />
      </Providers>
    </ApolloProvider>
      
    </>
  )
}

export default MyApp
