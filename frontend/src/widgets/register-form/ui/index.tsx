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

import { Link } from "react-router-dom";
import { ROUTES } from "@pages/routes";
import { useRegisterForm } from "../model/useRegisterForm";

export const RegisterForm: React.FC = () => {
  const { handleSubmit, methods, validationErrors, loading, error } =
    useRegisterForm();

  return (
    <Center h={"100vh"} bgColor={"lightgray"}>
      <Card w={"100%"} maxW={"350px"}>
        <CardHeader>
          <Heading>Регистрация</Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Stack direction="column">
              <FormControl isInvalid={!!validationErrors.username}>
                <FormLabel>Login</FormLabel>
                <Input
                  type="text"
                  placeholder="Login"
                  {...methods.register("username")}
                />
                <FormErrorMessage>
                  {validationErrors.username?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!validationErrors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  placeholder="E-mail"
                  {...methods.register("email")}
                />
                <FormErrorMessage>
                  {validationErrors.email?.message}
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

              {error && (
                <Alert colorScheme="red" mt={4}>
                  {error?.message}
                </Alert>
              )}

              <Button
                type="submit"
                colorScheme="green"
                variant="outline"
                mt={4}
                isLoading={loading}
              >
                Зарегистрироваться
              </Button>
            </Stack>
          </form>

          <Text align={"center"} mt={4}>
            Уже есть аккаунт? <Link to={ROUTES.LOGIN}>Войти</Link>
          </Text>
        </CardBody>
      </Card>
    </Center>
  );
};
