import { Box, Button, Center, Container, Heading, Input, useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react'

import { FC } from "react";
import { Link } from "react-router-dom";

const LoginPage:FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <div>
            <Container mt="10px"  h="100vh" display="flex" alignItems="" justifyContent="flex-end">
            <Button onClick={onOpen}>Login</Button>
  
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent p="45px" bg="#C2B2FF">
      <ModalHeader display="flex" justifyContent="center">Войти</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <Input  bg="#FFFFFF" placeholder='Логин' mb="20px" size='md' />
      <Input bg="#FFFFFF"  placeholder='Пароль' mb="20px" size='md' />
      <Button colorScheme='teal' variant='outline'>
          <Link to="/main">
              Войти
          </Link>
      </Button>
  </ModalBody>
      <ModalFooter display="flex" flexDirection="column"  justifyContent="start">
        <Button colorScheme='blue'  onClick={onClose}>
          Закрыть
        </Button>
        <Button fontSize="14px" colorScheme="ghost">
          Забыли пароль
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
            </Container>
        </div>
      </>
    )
}

export default LoginPage