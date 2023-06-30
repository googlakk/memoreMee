import { compose } from "ramda";
import { withCharkaProvider } from "./withCharkaProvider";
import { withRouterProvider } from "./withRouterProvider";

export const withProviders = compose(withCharkaProvider, withRouterProvider);
