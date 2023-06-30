import { ChakraProvider } from "@chakra-ui/react";

export const withCharkaProvider =
  (Component: React.FC): React.FC =>
  () => {
    return (
      <ChakraProvider>
        <Component />
      </ChakraProvider>
    );
  };
