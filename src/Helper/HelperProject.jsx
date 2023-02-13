import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';


function HelperProject() {
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
          
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              JS
            </Badge>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              HTML
            </Badge>

            <Badge borderRadius='full' px='2' colorScheme='teal'>
              CSS
            </Badge>

            <Badge borderRadius='full' px='2' colorScheme='teal'>
              JQuery
            </Badge>
            
          </Box>
  
          <Box
            mt='4'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={2}
            textAlign='left'
          >
            It is a beauty product-based website which is used to
order cosmetic products
          </Box>
  
  
          <Flex mt={'4'} justifyContent='space-between'>
            <Button size='sm' colorScheme='teal' variant='solid'>
            <Text mr={'4px'}>GitHub</Text>
              
              <BsGithub/>
            </Button>
            <Button size='sm' colorScheme='teal' variant='outline'>
              <Text mr={'4px'}>Deployed Link</Text>
              <BiLinkExternal/>
              
            </Button>
          </Flex>
        </Box>
      </Box>
    )
  }

  export default HelperProject;