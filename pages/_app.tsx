import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { wrapper } from '../redux/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AuthProvider } from '../contexts/AuthContext';
import SimpleReactLightbox from 'simple-react-lightbox'

function MyApp({ Component, pageProps }: AppProps) {
  const env = process.env.NODE_ENV;
  /* @ts-ignore */
  const store = useStore((state: any) => state);

  const client = new ApolloClient({
    uri: env == "development" ? "http://localhost:4000/graphql" : "https://jemmastables.herokuapp.com/graphql",
    credentials: "include",
    cache: new InMemoryCache({
      typePolicies: {
        DateSlots: {
          fields: {
            timeslots: {
              merge(existing, incoming) {
                console.log(existing, incoming);
                return incoming;
              }
            }
          }
        },
        TimeSlots: {
          fields: {
            users: {
              merge(existing, incoming) {
                return incoming;
              }
            },
            date: {
              merge(existing, incoming) {
                return incoming;
              }
            }
          }
        },
        User: {
          fields: {
            timeslots: {
              merge(existing, incoming) {
                return incoming;
              }
            }
          }
        }
      }
    }),
    connectToDevTools: true,
  });

  console.log(client);

  return (
    <ApolloProvider client={client}>
      <SimpleReactLightbox>
        <AuthProvider>
          {/* @ts-ignore */}
          <PersistGate persistor={store.__persistor} loading={<div>...Loading</div>}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </AuthProvider>
      </SimpleReactLightbox>
    </ApolloProvider >
  )
}

export default wrapper.withRedux(MyApp);
