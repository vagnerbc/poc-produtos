import {
  Text,
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useBreakpointValue
} from 'components/atoms'
import Changes from './changes'
import Search from './search'
import Avatar from './avatar'

const Header = () => {
  const logo = useBreakpointValue({ base: 'yh', sm: 'yh', md: 'yandeh' })

  return (
    <>
      <Box bg="primary" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Text color="white" fontSize="30px" fontWeight="bold">
            {logo}
          </Text>
          <Search />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} paddingRight={3}>
              <Changes />
            </Stack>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Header
