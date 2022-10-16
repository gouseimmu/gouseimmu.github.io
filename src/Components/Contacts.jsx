import {  HStack ,Flex, IconButton} from '@chakra-ui/react'
import React from 'react'
import { BsGithub, BsLinkedin  } from "react-icons/bs";

const Contacts = () => {
  return (
    <div id='Contactsid'> 
      <HStack  spacing= "29px"
       padding={15}
        
        
      justifyContent="flex-end"
        >
        <Flex spacing="24px" columnGap={"12vh"} flexDirection={"column"}  >
          <IconButton icon={<BsGithub/>}></IconButton>
          <IconButton icon={<BsLinkedin/>}></IconButton>
           

           
        </Flex>
      </HStack>

    </div>
  )
}

export  {Contacts}