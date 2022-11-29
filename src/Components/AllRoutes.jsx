import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
 
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import Skills from '../Pages/Skills'
import Navbar from './Navbar'

const AllRoutes = () => {
  return (
    <Stack>
      <Navbar/>
      <Box>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        
      </Box>
      
    </Stack>
  )
}

export default AllRoutes