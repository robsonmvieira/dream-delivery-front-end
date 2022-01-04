import type { NextPage } from 'next'
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react'


const Home: NextPage = () => {
  return (
  <Flex p="4" align="center">
    <Box p='2' display={['none', 'block', 'block', 'block']}>
      <Heading size='md'>Chakra App</Heading>
    </Box>
    <Spacer />
    <Box>
      <Button colorScheme='teal' mr='4'>
        Sign Up
      </Button>
      <Button colorScheme='teal'>Log in</Button>
    </Box>
  </Flex>
  )
}

export default Home
