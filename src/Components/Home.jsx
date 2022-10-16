import React from 'react'
import { Button, Circle, Flex, Heading, HStack,Box ,Image,Text  } from '@chakra-ui/react'
 
 

const Home = () => {
  return (
    
    <div>
      
      
         <HStack  id='Homeid' borderRadius={"10vh"} _hover={{ bg: "teal.50", color: " white" }} boxShadow="base" p={5} w="80%" m={"auto"} backgroundColor="ButtonShadow">
          <Flex>
            <Heading ml={"45vh"} mt={"10vh"} fontWeight="semibold"  color="ActiveCaption" animation={"running"}> I'm Shaik Gouse 👋</Heading>
            <Text  fontSize={"3xl"} mt={"30vh"}  ml="-45vh" color="ActiveBorder" fontWeight={"bold"}>  ⚡️Full Stack Web Developer</Text>
            <Circle rounded={50}>
              <Image marginLeft={"10vh"} w="40vh" h={"40vh"}  borderRadius={"50vh"} src="https://avatars.githubusercontent.com/u/101376314?s=400&u=e9c502f3abf0c99f1c2e189579cb60a6e215ee29&v=4"/>
            </Circle>
           
          </Flex>
         
         </HStack>
         <Box>
         <Button _hover={{ bg: "blue.500", color: " white" }}  fontSize={"3vh"} border={"0px"} color={"white"} mt="7vh" backgroundColor="teal" borderRadius={"50vh"}  ml="75vh" ><a href='https://drive.google.com/file/d/1uriT8K1Oa4vsXwx0e2AzIR1xV6PJOT9i/view?usp=sharing' target="_shaik">Download CV</a></Button>
         </Box>
    </div>
  )
}

export default Home