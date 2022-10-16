 
 
import React  from 'react'
import { Link } from 'react-router-dom'

import {   Flex,   HStack  } from '@chakra-ui/react'
 
 
 
const Navbar = () => {
   
  
  return (
    <div>  
      <HStack >
      <Flex 
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-evenly"
        fontSize={"2xl"}
        _hover={{ bg: "blue.500", color: " white" }}
      >
        
          <Link     to={"./"} >Home</Link>
          <Link     to={"./about"} >About</Link>
          <Link    to={"./skills"} >Skills</Link>
          <Link   to={"./projects"} >Projects</Link>
          <Link    to={"./contacts"} >Contacts</Link>
           
         </Flex> 
         
          </HStack>
           
    </div>
  )
}

export default Navbar