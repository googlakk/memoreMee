import { compose } from "ramda";
import { withApolloProvider } from "./withApolloProvider";
import { withCharkaProvider } from "./withCharkaProvider";
import { withRouterProvider } from "./withRouterProvider";

export const withProviders = compose(
  withCharkaProvider,
  withRouterProvider,
  withApolloProvider
);
