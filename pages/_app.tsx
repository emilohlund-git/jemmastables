import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { wrapper } from '../redux/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  /* @ts-ignore */
  const store = useStore((state: any) => state);

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return process.browser ? (
    <ApolloProvider client={client}>
      {/* @ts-ignore */}
      <PersistGate persistor={store.__persistor} loading={<div>...Loading</div>}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </ApolloProvider >
  ) : (
    <ApolloProvider client={client}>
      {/* @ts-ignore */}
      <PersistGate persistor={store.__persistor} loading={<div>...Loading</div>}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </ApolloProvider >
  )
}

export default wrapper.withRedux(MyApp);
