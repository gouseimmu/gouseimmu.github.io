import React from "react";

import {
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <Stack id="projects" mt={"4em"} pb="5%" spacing={4}>
      <Heading textAlign={"center"}>MY PROJECTS</Heading>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={15}>
        <Flex
          flexDirection={["column", "column", "column", "row"]}
          p={6}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            alt="name"
            src="https://i.ibb.co/JBgFFvq/Screenshot-2023-01-23-104129.png"
            w={["100%", "100%", "100%", "50%"]}
            h="100%"
            objectFit="fill"
          />
          <Stack
            w={["100%", "100%", "100%", "50%"]}
            bg="lightblue"
            p="5%"
            textAlign="left"
            spacing={5}
              
            
          >
            <Heading fontSize="25px" color="black">
              Adorama Clone
            </Heading>
            <Text color="black" fontSize="14px" class="project-description">
              Adorama is a Ecommerce website which provides DSLR cameras &
              accessories , 4K video gear, and latest smart home devices.
            </Text>
            <Text color="black" fontSize="14px" fontWeight={"bold"}>
              Areas of Responsibility : Authentication in frontend
            </Text>
            <Text color="black" fontSize="14px">
              Collaborative project with 5 team-members, executed in 5 days.
            </Text>
            <Text color="black" fontWeight={"bold"} fontSize="14px">
              Tech Stack : React JS| Redux | NodeJS | CSS | CHAKRA UI |
              ExpressJS | MongoDB
            </Text>

            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/gouseimmu/Adorama-Clone"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="orange">
                <Link
                class="project-deployed-link"
                  href="https://adorama-photography.vercel.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
        <Flex
          flexDirection={["column", "column", "column", "row"]}
          p={6}
      
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
           <Image
            alt="name"
            src="https://play-lh.googleusercontent.com/D82omFSKvRExAz6bUEQrwTdVRgImhf1xgSqH6ApFMRJUzpxkJ9tfCNmZ01uha2ME7v8"
            w={["100%", "100%", "100%", "50%"]}
            h="70%"
            objectFit="fill"
            
          />
         
          <Stack
            w={["100%", "100%", "100%", "50%"]}
            bg="lightblue"
            p="5%"
            textAlign="left"
            spacing={5}
          >
            <Heading fontSize="25px" color="black">
              GeekBuying Clone (E-Commerce Website)
            </Heading>
            <Text color="black" fontSize="14px" class="project-description">
              We have built a E-commerce Website where users able to shop
              different kinds of products.
            </Text>
            <Text color="black" fontSize="14px" fontWeight={"bold"}>
              Areas of Responsibility : Product Detail Page
            </Text>
            <Text color="black" fontSize="14px">
              Collaborative project with 5 team-members, executed in 5 days.
            </Text>
            <Text color="black" fontWeight={"bold"} fontSize="14px" class="project-tech-stack">
              Tech Stack : React JS| Redux | JSON-SERVER | CSS | CHAKRA UI
            </Text>

            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                class="project-github-link"
                  href="https://github.com/tarun-upadhyay/sensitive-meat-4664"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="orange">
                <Link
                class="project-deployed-link"
                  href="https://the-great-tarunu88-gmail-com-site-a4747.netlify.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>

        <Flex
          flexDirection={["column", "column", "column", "row"]}
          p={6}
         
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src="https://i0.wp.com/themes.svn.wordpress.org/clothing-store/0.2.1/screenshot.png"
            w={["100%", "100%", "100%", "50%"]}
            h="100%"
            objectFit="fill"
            
          
          />
          
          <Stack
            w={["100%", "100%", "100%", "50%"]}
            bg="lightblue"
            p="5%"
            textAlign="left"
            spacing={5}
           
          
          >
            
            <Heading fontSize="25px" color="black" class="project-title">
              LifeStyle Clone (E-Commerce Website)
            </Heading>
            <Text color="black" fontSize="14px" class="project-description">
              LifeStyle Store is a ecommerce web application that allows you to
              purchase different types of mens , womens , kids and shoeswares
              products.
            </Text>
            <Text color="black" fontSize="14px" fontWeight={"bold"}>
              Areas of Responsibility : Admin Site
            </Text>
            <Text color="black" fontSize="14px">
              Collaborative project with 5 team-members, executed in 5 days.
            </Text>
            <Text color="black" fontWeight={"bold"} fontSize="14px" class="project-tech-stack">
              Tech Stack : React JS | Redux | REST API | REDUX-THUNK | CHAKRA UI
              | AXIOS
            </Text>

            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                class="project-github-link"
                  href="https://github.com/gouseimmu/incompetent-act-9106"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="orange">
                <Link
                class="project-deployed-link"
                  href="https://lifestyylestoree.netlify.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
        {/* .................................. */}
        

        {/* .................................. */}
        <Flex
          // h={["600px", "600px", "480px", "480px"]}
          flexDirection={["column", "column", "column", "row"]}
          p={4}
          
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src= "https://i.ibb.co/vqT95zg/boa.jpg"
            w={["100%", "100%", "100%", "50%"]}
            h="80%"
            objectFit="fill"
             
            
          />
          
          <Stack
            w={["100%", "100%", "100%", "50%"]}
            bg="lightblue"
            p="5%"
            textAlign="left"
            spacing={5}
             
           
          >
            
            <Heading fontSize="25px" color="black" class="project-title">
              Boat Website Clone
            </Heading>
            <Text color="black" fontSize="14px" class="project-description">
              Boat is a famous website where customers able to purchase
              different types of electronic gadgets.
            </Text>
            <Text color="black" fontSize="14px" fontWeight={"bold"}>
              Areas of Responsibility : Login/SignUp Authentication
            </Text>
            <Text color="black" fontSize="14px">
              Collaborative project with 5 team-members, executed in 5 days.
            </Text>
            <Text color="black" fontWeight={"bold"} fontSize="14px" class="project-tech-stack">
              Tech Stack : Fetch API | JavaScript(ES6) | HTML | CSS
            </Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link class="project-github-link"
                  href="https://github.com/Anantk05/boat-lifestyle.com-Clone"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="orange">
                <Link
                class="project-deployed-link"
                  href="https://reliable-salmiakki-d3ab17.netlify.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
        
      </SimpleGrid>
    </Stack>
  );
};

export default Projects;

 