
import { Box, Stack, Text } from "@chakra-ui/react"
export type LogoProps = {
  sideBarWidth: string,
}

const Logo = ({ sideBarWidth }: LogoProps) => {
  return (
    <Box justify="center" pl="10" mr={["10", "10", "10", sideBarWidth ]}>
    <Stack spacing={1}>
      <Box display={["none", "block"]}>
        <Text fontSize="2xl" color="white">
          Delivery
        </Text>
      </Box>

      <Box display={["none", "block"]}>
        <Text fontSize="1xl" color="white">
          Dreams admin.
        </Text>
      </Box>
      <Box>
        <Text display={["block", "none"]} fontSize="1xl" color="white">
          DDA
        </Text>
      </Box>
    </Stack>
  </Box>
  )
}

export default Logo