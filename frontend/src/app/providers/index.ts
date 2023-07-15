import { compose } from "ramda";
import { withApolloProvider } from "./withApolloProvider";
import { withAuthProvider } from "./withAuthProvider";
import { withCharkaProvider } from "./withCharkaProvider";
import { withRouterProvider } from "./withRouterProvider";

export const withProviders = compose(
  withCharkaProvider,
  withRouterProvider,
  withApolloProvider,
  withAuthProvider
);
