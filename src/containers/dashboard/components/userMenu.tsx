import { Stack, Flex, Icon, Text } from "@chakra-ui/react";
import { RiNotification2Line } from "react-icons/ri";
import UserAvatar from "./userAvatar";

const UserMenu = () => {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Flex mr="10" color="red.100" as="button" position="relative">
        <Icon as={RiNotification2Line} w={8} h={8} color="white" />
        <Text
          as="span"
          bg="red.500"
          width="full"
          position="absolute"
          h="8"
          pt="1"
          right="-31"
          top="-2"
          borderRadius="full"
        >
          4
        </Text>
      </Flex>
      <UserAvatar />
    </Stack>
  );
}

export default UserMenu
