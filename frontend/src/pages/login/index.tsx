import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@pages/routes";

export const LoginPage: FC = () => {
  return (
    <Center h={"100vh"} bgColor={"lightgray"}>
      <Card w={"100%"} maxW={"350px"}>
        <CardHeader>
          <Heading>Войти</Heading>
        </CardHeader>
        <CardBody>
          <form>
            <Stack direction="column">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="text" placeholder="E-mail" />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Password" />
              </FormControl>

              <Button colorScheme="green" variant="outline" mt={4}>
                Войти
              </Button>
            </Stack>
          </form>

          <Text align={"center"} mt={4}>
            Еще нет аккаунта? <Link to={ROUTES.LOGIN}>Регистрация</Link>
          </Text>
        </CardBody>
      </Card>
    </Center>
  );
};
