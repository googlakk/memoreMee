import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://127.0.0.1:1337/graphql",
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
