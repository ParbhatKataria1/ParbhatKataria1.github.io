import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import HelperProject from '../Helper/HelperProject'

const Projects = () => {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
// will have the same effect.
<Box textAlign={'center'} marginTop='130px'>
    <Heading>Projects</Heading>
  <SimpleGrid m={'auto'} columns={[2, null, 3]} spacing='40px' w={'81%'} marginTop='70px' marginBottom={'50px'}>
    <HelperProject/>
    <HelperProject/>
    <HelperProject/>
    <HelperProject/>
    <HelperProject/>
    <HelperProject/>
  </SimpleGrid>
</Box>
  )
}

export default Projects