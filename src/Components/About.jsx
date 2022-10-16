import {Box,   Heading,  Text,  Image} from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <div id='Aboutid'> 
       
           <Image h={"90vh"} w="100vh" ml={"50vh"} src="https://img.freepik.com/premium-vector/full-stack-developer-working-computer-vector-illustration-it-professional-web-developer-programmi_103044-1164.jpg?w=2000"/>
              
           <Heading textAlign={"center"}    fontWeight="semibold" >Hi my name is  Shaik Gouse,</Heading>
           <Box ml="35vh" h="20vh" w="150vh" mt="6vh"  backgroundColor="ButtonHighlight"  >
            <Text fontWeight={"medium"}  color="wheat"   fontSize={"3vh"} textColor={"ThreeDDarkShadow"} >
                    I am from Kadapa, Andhra Pradesh.  

                    I am a Fronted Developer with skill HTML5, CSS3, JavaScript(ES-6), React JS, Redux , NPM, Github, ... I want to  explore my skills into the market and want to contribute to the big Projects. I'm a passionate Full Stack web Developer who loves to wite a Clean and efficient code.
            </Text>
            </Box>
            
       
                 
                 
           

              
           
           
       

      
    </div>
  )
}

export default About