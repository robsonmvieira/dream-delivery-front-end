import { LinkIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";

import { FaUserFriends } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

import UserAvatar from "./userAvatar";

export type SidebarProps = {
  sideBarWidth: string;
};

const Sidebar = ({ sideBarWidth }: SidebarProps) => {
  return (
    <Flex
      display={["none", "block"]}
      bg="blue.910"
      h="100vh"
      pt="8"
      align="flex-start"
      pl="10"
      w="60"
      direction="column"
    >
      <UserAvatar name="Joe Doe" role="Admin nivel I" />

      <Box as='aside'>
          <Stack spacing="4" align="flex-start">
            <Link align="center" display="flex" mt='12'>
              <LinkIcon as={FaUserFriends} fontSize="24" color="white"/>
              <Text ml='4' color="white" fontWeight='medium'>Fornecedores</Text>
            </Link>

            <Link align="center" display="flex" mt='12'>
              <LinkIcon as={RiVisaLine} fontSize="24" color="white"/>
              <Text ml='4' color="white" fontWeight='medium'>Vendas</Text>
            </Link>
          </Stack>
      </Box>
    </Flex>
  );
};

export default Sidebar;
