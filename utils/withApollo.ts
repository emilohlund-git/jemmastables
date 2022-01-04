import { ApolloClient, InMemoryCache } from '@apollo/client';
import { withApollo as createWithApollo } from 'next-apollo';

const env = process.env.NODE_ENV;

const client = new ApolloClient({
  uri:
    env == 'development'
      ? 'http://localhost:4000/graphql'
      : 'https://jemmastables.herokuapp.com/graphql',
  credentials: 'include',
  cache: new InMemoryCache({
    typePolicies: {
      DateSlots: {
        fields: {
          timeslots: {
            merge(existing, incoming) {
              console.log(existing, incoming);
              return incoming;
            },
          },
        },
      },
      TimeSlots: {
        fields: {
          users: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          date: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
      User: {
        fields: {
          timeslots: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  connectToDevTools: true,
});

export const withApollo = createWithApollo(client);
