import { ApolloClient, InMemoryCache } from '@apollo/client';
import { withApollo as createWithApollo } from 'next-apollo';

const env = process.env.NODE_ENV;

const client = new ApolloClient({
  uri:
    env == 'development'
      ? 'http://localhost:4000/graphql'
      : 'https://jemmastables.herokuapp.com/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export const withApollo = createWithApollo(client);
