import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text
} from '@chakra-ui/react';


export default function Skills() {
  return (
    <Center py={12} flexDirection='column'>
      <Heading>Tech Stack And Developer Tools</Heading>
      <Flex justifyContent={'space-around'} w='90%' marginTop={'55px'}>
        <Box w='40%' border='1px solid white' >
          <Text fontSize={'23px'}>Teach Stack</Text>
          <Flex  flexWrap={'wrap'}>
            <Box textAlign={'center'} m='20px'p={'8px 15px'}border='1px solid white' borderRadius={'8px'}>
              <Image src={'https://img.icons8.com/color/1x/html-5.png'}></Image>
              <Text>HTML</Text>
            </Box>
            <Box textAlign={'center'} m='20px'p={'8px 15px'}border='1px solid white' borderRadius={'8px'}>
              <Image src={'https://img.icons8.com/color/1x/css3.png'}></Image>
              <Text>CSS</Text>
            </Box>
            <Box textAlign={'center'} alignItems='center' justifyContent={'center'} m='20px'p={'8px 15px'}border='1px solid white' borderRadius={'8px'}>
              <Image src={'https://img.icons8.com/color/1x/javascript.png'}></Image>
              <Text>JavaScript</Text>
            </Box>
            <Box textAlign={'center'} m='20px'p={'8px 15px'}border='1px solid white' borderRadius={'8px'}>
              <Image src={'https://img.icons8.com/color/1x/react-native.png'}></Image>
              <Text>React</Text>
            </Box>
            <Box textAlign={'center'} m='20px'p={'8px 15px'}border='1px solid white' borderRadius={'8px'}>
              <Image src={'https://img.icons8.com/color/1x/redux.png'}></Image>
              <Text>Redux</Text>
            </Box>
            <Box textAlign={'center'} m='20px'p={'8px 15px'}border='1px solid white' borderRadius={'8px'}>
              <Image src={'https://img.icons8.com/color/1x/chakra-ui.png'}></Image>
              <Text>Chakra UI</Text>
            </Box>

          </Flex>
        </Box>
        <Box w='40%' border='1px solid white'>
          <Text fontSize={'23px'}>Developer Tools</Text>
          <Flex flexWrap={'wrap'}>

          </Flex>
        </Box>
      </Flex>
    </Center>
  );
}