import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@pages/routes";
import { useLoginForm } from "../model/useLoginMutation";

export const LoginForm: FC = () => {
  const { handleSubmit, methods, validationErrors, loading, error } =
    useLoginForm();

  return (
    <>
      <Center h={"100vh"} bgColor={"lightgray"}>
        <Card w={"100%"} maxW={"350px"}>
          <CardHeader>
            <Heading>Войти</Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <Stack direction="column">
                <FormControl isInvalid={!!validationErrors.identifier}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="text"
                    placeholder="E-mail"
                    {...methods.register("identifier")}
                  />
                  <FormErrorMessage>
                    {validationErrors.identifier?.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!validationErrors.password}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...methods.register("password")}
                  />
                  <FormErrorMessage>
                    {validationErrors.password?.message}
                  </FormErrorMessage>
                </FormControl>

                {error && <Alert mt={4}>{error?.message}</Alert>}

                <Button
                  type="submit"
                  colorScheme="green"
                  variant="outline"
                  mt={4}
                  isLoading={loading}
                >
                  Войти
                </Button>
              </Stack>
            </form>

            <Text align={"center"} mt={4}>
              Еще нет аккаунта? <Link to={ROUTES.REGISTER}>Регистрация</Link>
            </Text>
          </CardBody>
        </Card>
      </Center>
    </>
  );
};
