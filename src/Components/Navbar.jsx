import React from "react";
import Resume from "../Components/ResumeFile/Shaik-Gouse Mohiddin-Resume.pdf"

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
      window.open("https://drive.google.com/file/d/1Vf4IFTvVt7ix-WO8ASZZ-We8xelPDbb3/view?usp=share_link")
  }
 

  return (
    <Stack style={navstyle} bg="black" p={2} color="white">
      <Show below="lg">
        <MdMenu ref={btnRef} onClick={onOpen} fontSize="25px" />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerContent bg="whitesmoke">
            <SimpleGrid
              columns={1}
              align="center"
              justify="space-between"
              id="navbar"
            >
               
              <Flex
                align="center"
                justify="right"
                gap={9}
                fontWeight="bold"
                flexDirection="column"
              >
                <Link activeClass="active1" smooth spy to="home">
                  Home
                </Link>
                <Link activeClass="active1" smooth spy to="about">
                  About
                </Link>
                <Link activeClass="active1" smooth spy to="skill">
                  Skills
                </Link>
                <Link activeClass="active1" smooth spy to="projects">
                  Project
                </Link>
                <Link activeClass="active1" smooth spy to="contact">
                  Contact
                </Link>
                <a
              href={Resume}
               target="_blank" download ={Resume}
            >
              <Button   colorScheme='red' variant='solid'>
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
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
            <Link activeClass="active" smooth spy to="skill">
              Skills
            </Link>
            <Link activeClass="active" smooth spy to="projects">
              Projects
            </Link>
            <Link activeClass="active" smooth spy to="contact">
              Contact
            </Link>
            <a
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
  );
};

export default Navbar;
