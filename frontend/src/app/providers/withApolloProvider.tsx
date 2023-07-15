import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://127.0.0.1:1337/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem("jwt");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const withApolloProvider =
  (Component: React.FC): React.FC =>
  () => {
    return (
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    );
  };
