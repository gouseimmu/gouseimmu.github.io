import React from "react";
 import Resume from "../Components/ResumeFile/Shaik Gouse Mohiddin_resume.pdf"

import {
  SimpleGrid,
  Drawer,
  DrawerContent,
  Flex,
  Stack,
  useDisclosure,
  Show,
  Button,
   
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
import "../style/navbar.css";
 
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navstyle = {
    position: "fixed",
    top: "0",
    display: "block",
    overflow: "hidden",
    transition: "top 0.3s",
    width: "100%",
    zIndex: 2,
  };
  const Download=()=>{
      window.open("https://drive.google.com/file/d/1b0eroflJQA0FAgswmg4LWzfrnHuLpIYp/view?usp=sharing")
  }
 

  return (
    <Stack style={navstyle} bg="black" p={2} color="white"      id="nav-menu">
      <Show below="lg">
        <MdMenu ref={btnRef} onClick={onOpen} fontSize="25px" />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerContent bg="whitesmoke"  id="nav-menu">
            <SimpleGrid
              columns={1}
              align="center"
              justify="space-between"
         
            >
               
              <Flex
                align="center"
                justify="right"
                gap={9}
                fontWeight="bold"
                flexDirection="column"
              >
                <Link id="home" class="nav-link home" activeClass="active1" smooth spy to="home">
                  Home
                </Link>
                <Link id="about"  class="nav-link about" activeClass="active1" smooth spy to="about">
                  About
                </Link>
                <Link  id="skills" class="nav-link skills" activeClass="active1" smooth spy to="skills">
                  Skills
                </Link>
                <Link id="projects" class="nav-link projects" activeClass="active1" smooth spy to="projects">
                  Project
                </Link>
                <Link  id="contact" class="nav-link contact" activeClass="active1" smooth spy to="contact">
                  Contact
                </Link>
                <a class="nav-link resume"
              href={Resume} rel="noreferrer" id="resume-link-1"
               target="_blank" download ={Resume}
            >
              <Button  id="resume-button-1" colorScheme='red' variant='solid'>
         Resume
        </Button>
            </a>
              </Flex>
            </SimpleGrid>
          </DrawerContent>
        </Drawer>
      </Show>
      <Show above="lg">
        <SimpleGrid
          columns={2}
          align="center"
          justify="space-between"
          id="navbar"
        >
          <Stack></Stack>
          <Flex
            columns={5}
            align="center"
            justify="right"
            gap={9}
            fontWeight="bold"
          >
            <Link class="nav-link home" activeClass="active" smooth spy to="home">
              Home
            </Link>
            <Link class="nav-link about"  activeClass="active" smooth spy to="about">
              About
            </Link>
            <Link class="nav-link skills" activeClass="active" smooth spy to="skills">
              Skills
            </Link>
            <Link class="nav-link projects" activeClass="active" smooth spy to="projects">
              Projects
            </Link>
            <Link class="nav-link contact" activeClass="active" smooth spy to="contact">
              Contact
            </Link>
            <a
              class="nav-link resume"
              href={Resume}
              download
            >
              <Button onClick={Download}  colorScheme='red' variant='solid'>
         Resume
        </Button>
            </a>
          </Flex>
        </SimpleGrid>
      </Show>
    </Stack>
    // <div>
    //   <nav id="nav-menu">
    // <ul>
    //   <li><a class="nav-link home" href="#home">Home</a></li>
    //   <li><a class="nav-link about" href="#about">About</a></li>
    //   <li><a class="nav-link skills" href="#skills">Skills</a></li>
    //   <li><a class="nav-link projects" href="#projects">Projects</a></li>
    //   <li><a class="nav-link contact" href="#contact">Contact</a></li>
    //   {/* <!-- <li><a class="nav-link resume" href="#Resume">Resume</a></li> --> */}
    //   <Link  href={Resume}
    //           id="resume-link-1"
    //           class="nav-link resume"
    //           target="_blank" download ><button id="resume-button-1">Resume</button></Link>
        
    //    {/* <li>
    //     <a href="https://drive.google.com/file/d/1pateOmpHP03hayVqPCkBwa_lJ0lTwSwO/view?usp=sharing" class="nav-link resume" download>
    //       <button  ></button>
    //     </a>
    //   </li>  */}
    // </ul>
    // </nav>
    // </div>
  );
};

export default Navbar;
