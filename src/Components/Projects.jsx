import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import HelperProject from '../Helper/HelperProject'

let data = [
  {image:'https://serving.photos.photobox.com/78056824e1d2dcb063cf8a5ea1341a6907cb7b0db09d946e3a34b0372449333665356f22.jpg',
  title:'Sugar Cosmetics Clone',
  desc:'It is a beauty product-based website which is used to order cosmetic products',
  techStack:['HTML', 'CSS', 'JavaScript', 'JQuery']
}, 
  {image:'https://serving.photos.photobox.com/4315878941189d29f37cdb91e3aae0780f8c84e24e9a2df8c15c13d1be664bbffb5fec01.jpg',
  desc:'It is a hotel booking website for vacations',
  title:'Tripvillas Clone',
  techStack:['HTML', 'CSS', 'JavaScript', 'JQuery']
}
]

const Projects = () => {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
// will have the same effect.
<Box textAlign={'center'} marginTop='130px'>
    <Heading>Projects</Heading>
  <SimpleGrid m={'auto'} columns={[2, null, 3]} spacing='40px' w={'81%'} marginTop='70px' marginBottom={'50px'}>
    {
      data.map((el, ind)=>{
        return <HelperProject key={Date.now()+ind} {...el}  />
      })
    }
  </SimpleGrid>
</Box>
  )
}

export default Projects