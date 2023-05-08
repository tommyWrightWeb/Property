import Link from "next/link";
import { Flex, Box, Text, Button, Menu, Spacer, MenuItem, IconButton, MenuList, MenuButton } from "@chakra-ui/react"
import {FcMenu, FcHome, FcAbout} from 'react-icons/fc'
import { BsSearch } from "react-icons/bs";
import { FiKey} from 'react-icons/fi'



const Navbar = () => {
  return (
    <Flex borderColor="gray.100"  alignItems="center" padding="2">
      <Box paddingLeft='4rem' fontSize='2xl' color='blue.400' fontWeight='bold'>
        <Link paddingLeft='4rem' href="/">
          Real Estate Dubai
        </Link>
      </Box>
      <Spacer />
      <Box>
        
          <Menu color='black'>
            <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
            <MenuList>
<Link href='/'>
<MenuItem icon={<FcHome />}>Home</MenuItem>
</Link>
<Link href='/search'>
<MenuItem icon={<BsSearch />}>Search</MenuItem>
</Link>
<Link href='/search?purpose=for-sale'>
<MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
</Link>
<Link href='/search?purpose=for-rent'>
<MenuItem icon={<FiKey />}>Rent Property</MenuItem>
</Link>
            </MenuList>
          </Menu>
       
      </Box>
      <Box>
        <Link href="/contact">
          <Button colorScheme="whiteAlpha" variant="outline" size="sm">
            Contact
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
