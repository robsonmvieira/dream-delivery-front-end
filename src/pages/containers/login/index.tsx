import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Image from 'next/image'
import {
  Flex,
  Input,
  InputGroup,
  Stack,
  Button,
} from "@chakra-ui/react";

import { RiLoginCircleLine } from "react-icons/ri";
const LoginContainer: NextPage = () => {
  const router =  useRouter();

  const onLoginSubmitted = () =>{
    router.push('dashboard');
  }
  return (
    <Flex justify="space-between" direction={["column", "row"]}>
      <Flex h="100vh" w="100%" position="relative" display={["none",'none', "flex"]}>
        <Image
           src="/img/login-img.jpg"
           alt="Woman holding her credentials card"
           layout="fill"
           objectFit='cover'
        >
        </Image>
      </Flex>
      <Flex w="100%" h="100vh" justify={["center"]}>
        <Stack spacing={6} mt={["64"]}>
          <InputGroup w={["90vw", '70vw', '40vw', '30vw']}>
            <Input 
            type="email"
            placeholder="E-mail"
            _focus={{
              border: 'none',
              boxShadow: "none",
              outlineColor: 'green.400'}} />
          </InputGroup>

          <InputGroup>
            <Input placeholder="Password" _focus={{
              border: 'none',
              boxShadow: "none",
              outlineColor: 'green.400'}} />
          </InputGroup>
          <Button
            onClick={onLoginSubmitted}
            leftIcon={<RiLoginCircleLine size={24} />}
            loadingText="Logando"
            colorScheme="green"
            size="lg"
          >
            Login
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default LoginContainer;
