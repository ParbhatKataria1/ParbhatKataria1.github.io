import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';



const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const About = () => {
  return (
    <Container id="about" className="about section" maxW={'7xl'} p="12" pt={'20'}
    textAlign='center'
    >
      <Heading mb={'10'} as="h1">About Me</Heading>
      <Box 
      w={'80%'}
      m='auto'
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius='20px'
      p='20px'
      textAlign={'left'}
      boxShadow={'rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;'}
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          marginRight="3">
          
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}>
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
              class="home-img"
                borderRadius="50%"
                src={
                  'PP.jpg'
                }
                h='350px'
                w='350px'
                alt="some good alt text"
                objectFit="cover"
              />
            </Link>
          </Box>
          
        </Box>
          <Box
            display="flex"
            flex="1"
            w={'70%'}
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            {/* <BlogTags tags={['Engineering', 'Product']} /> */}
            <Box display={'flex'} justifyContent={'space-between'} textAlign='center' marginBottom={'20px'}>
              <Box w='30%' padding={'18px'} borderRadius="9px" boxShadow={'rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 32px 16px'}>
              <Text>1200+ Hours</Text>
              <Text>Full Stack Coding</Text>
              </Box>

              <Box w='30%' padding={'18px'} borderRadius="9px" boxShadow={'rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 32px 16px'}>
              <Text>4+ Major Projects</Text>
              <Text>30+ Mini Projects</Text>
              </Box>


              <Box w='30%' padding={'18px'} borderRadius="9px" boxShadow={'rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 32px 16px'}>
              <Text>100+ Hours</Text>
              <Text>Soft Skills</Text>
              </Box>
            </Box>
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Summary
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg">
              Analytical and detail-oriented Full Stack Developer in
              MERN stack. Adaptable to learning new technologies,
              accountable team player, and highly productive.
              Aims to create world-class web applications while
              facilitating organizations in achieving ambitious
              goals.
            </Text>
            {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
          </Box>
      </Box>
      <Divider marginTop="20" />
    </Container>
  );
};

export default About;