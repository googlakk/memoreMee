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
import { useLoginForm } from "../model/useLoginMutation";

export const LoginForm: FC = () => {
  const { handleSubmit, methods, validationErrors, loading, error } =
    useLoginForm();

    return (
      <Center h={"100vh"} bgColor={"lightgray"}>
        <Card w={"100%"} maxW={"350px"}>
          <CardHeader>
            <Heading>Войти</Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <Stack direction="column">
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input 
                    type="text" 
                    placeholder="E-mail" 
                    isInvalid={!!validationErrors.identifier}
                    {...methods.register("identifier")}
                    />
                </FormControl>
  
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input 
                    type="password" 
                    placeholder="Password" 
                    isInvalid={!!validationErrors.password}
                    {...methods.register("password")}
                    />
                </FormControl>
  
                <Button type="submit" colorScheme="green" variant="outline" mt={4}  isLoading={loading}>
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
    );
  };
  