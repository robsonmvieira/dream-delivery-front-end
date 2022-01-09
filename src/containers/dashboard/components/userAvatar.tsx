import {
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Box,
  Text
} from "@chakra-ui/react";

export type UserAvatarProps = {
  name?: string
  role?: string
}

const UserAvatar = ({name, role}: UserAvatarProps) => {
  return (
    <Menu id="navbar" isLazy>
      <MenuButton display="flex" direction="row">
        {/* <Avatar> */}
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        {/* </Avatar> */}
        <Box color="white" display={['none', 'none', 'block']}>
        { name && <Text>{ name }</Text>}
         { role && <Text>{ role }</Text>}
        </Box>
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
          <MenuItem>Logout </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default UserAvatar
