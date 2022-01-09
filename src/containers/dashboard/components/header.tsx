/* eslint-disable react/no-children-prop */
import {
  Flex,
  Box,
  Icon,
  InputGroup,
  InputRightElement,
  Input,
  Text,
} from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiMenuAltLeft, BiSearch } from "react-icons/bi";
import UserMenu from "./userMenu";
import Logo from "./logo";

export type HeaderProps = {
  isColapsed: boolean;
  sideBarWidth: string;
  handlerState: () => void;
};
const Header = ({ isColapsed, sideBarWidth, handlerState }: HeaderProps) => {
  return (
    <Flex>
      <Flex
        as="header"
        bgColor="blue.910"
        w={["100vw", "100%"]}
        h="24"
        minW='425px'
      >
        {/* <Flex align="center" w="100vw" pr={["4", "10", "8"]}> */}
        <Flex align="center" w="100vw" pr={["4", "10", "8"]}>
          <Logo sideBarWidth={sideBarWidth} />
          <Box align="center" mr="24" display="flex">
            {!isColapsed && (
              <Icon
                onClick={handlerState}
                as={BiMenuAltLeft}
                display={["block", "none", "block"]}
                w={12}
                h={12}
                color="white"
                mr={["2", "10"]}
                _hover={{ cursor: "pointer" }}
              />
            )}
            {isColapsed && (
              <Icon
                onClick={handlerState}
                as={AiOutlineArrowRight}
                display={["block", "none", "block"]}
                w={8}
                h={8}
                color="red.500"
                mr={["2", "10"]}
                _hover={{ cursor: "pointer" }}
              />
            )}
            <Text
              fontSize="2xl"
              display={["none", "flex"]}
              color="white"
              fontWeight="bold"
              as="span"
            >
              Current Context
            </Text>
          </Box>

          <Flex
            as="label"
            borderRadius="full"
            display={["none", "none", "none", "block"]}
            width="400px"
            align="center"
          >
            <InputGroup>
              <InputRightElement
                mt="1"
                pointerEvents="none"
                children={<BiSearch color="white" size={24} />}
              />
              <Input
                color="white"
                bgColor="blue.920"
                border="none"
                size="lg"
                _focus={{ outlineColor: "none" }}
              />
            </InputGroup>
          </Flex>

          <Box ml="auto">
            <UserMenu />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
