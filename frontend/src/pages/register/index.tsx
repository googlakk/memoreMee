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

export const RegisterPage: FC = () => {
  return (
    <Center h={"100vh"} bgColor={"lightgray"}>
      <Card w={"100%"} maxW={"350px"}>
        <CardHeader>
          <Heading>Регистрация</Heading>
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

              <FormControl>
                <FormLabel>Retype Password</FormLabel>
                <Input type="password" placeholder="Password" />
              </FormControl>

              <Button colorScheme="green" variant="outline" mt={4}>
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
