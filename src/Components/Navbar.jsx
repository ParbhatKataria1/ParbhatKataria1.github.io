import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BiDownload } from 'react-icons/bi';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleResume(){
    window.open(`https://drive.google.com/file/d/1h1lan92QxkqGlsHdt9_KQ5UWXqLiyaer/view`)
  }
  return (
    <>
      <Box id="nav-menu" as='header' bg={useColorModeValue('gray.100', 'gray.900')} px={4} position='fixed' w='100%' zIndex={'1000'} top={'0px'} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}m='auto' width={'94%'}>
          <Box fontSize={'22px'}>Parbhat</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={12} fontSize='18px' alignItems={'center'}>
            <Button  class="nav-link home" colorScheme='gray' variant='ghost'>Home</Button>
            <Button class="nav-link about" colorScheme='gray' variant='ghost'>About</Button>
            <Button class="nav-link skills" colorScheme='gray' variant='ghost'>Skills</Button>
            <Button class="nav-link projects" colorScheme='gray' variant='ghost'>Projects</Button>
            <Button class="nav-link contact" colorScheme='gray' variant='ghost'>Contact</Button>
            
            <Link  id="resume-link-1" href='Parbhat_Resume.pdf' download  onClick={handleResume } target='_blank'>
              <Button  id="resume-button-1"  class="nav-link resume" colorScheme='teal' size='md' >
                <Text mr={'4px'} >Resume</Text> <BiDownload/>
              </Button>
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}