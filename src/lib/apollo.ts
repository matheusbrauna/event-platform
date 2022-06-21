import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o66mz30ql901z79q0m24pi/master',
  cache: new InMemoryCache(),
});
