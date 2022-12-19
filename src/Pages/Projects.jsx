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
            <Text color="black" fontSize="14px">
              We have built a E-commerce Website where users able to shop
              different kinds of products.
            </Text>
            <Text color="black" fontSize="14px">
              Areas of Responsibility : Product Detail Page
            </Text>
            <Text color="black" fontSize="14px">
              Collaborative project with 5 team-members, executed in 5 days.
            </Text>
            <Text color="black" fontWeight={"bold"} fontSize="14px">
              Tech Stack : React JS| Redux | JSON-SERVER | CSS | CHAKRA UI
            </Text>

            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
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
             LifeStyle Clone (E-Commerce Website)
           </Heading>
           <Text color="black" fontSize="14px">
           LifeStyle Store is a ecommerce web application that allows you to purchase different types of mens , womens , kids and shoeswares products.
           </Text>
           <Text color="black" fontSize="14px">
             Areas of Responsibility : Admin Site
           </Text>
           <Text color="black" fontSize="14px">
             Collaborative project with 5 team-members, executed in 5 days.
           </Text>
           <Text color="black" fontWeight={"bold"} fontSize="14px">
             Tech Stack : React JS| Redux | REST API | REDUX-THUNK | CHAKRA UI | AXIOS
           </Text>

           <Flex gap={3} align="center">
             <Button size="xs" colorScheme="green">
               <Link
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
                 href="https://639feae4fceb1417b7a7f999--lifestyylestore.netlify.app/"
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
        <Flex
          // h={["600px", "600px", "480px", "480px"]}
          flexDirection={["column", "column", "column", "row"]}
          p={4}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src="https://cdn2.stylecraze.com/wp-content/uploads/2020/09/60-Most-Trending-Nail-Art-Designs-For-Short-Nails--2022.jpg.webp"
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
              StyleCraze Clone
            </Heading>
            <Text color="black" fontSize="14px">
              Stylecraze.com is a website where clients able to purchase
              different types of cosmetics.
            </Text>
            <Text color="black" fontSize="14px">
              Areas of Responsibility : Product Pages(Makeup, SkinCare,
              HairCare)
            </Text>
            <Text color="black" fontSize="14px">
              Collaborative project with 5 team-members, executed in 5 days.
            </Text>
            <Text color="black" fontWeight={"bold"} fontSize="14px">
              Tech Stack : Javascript(ES6) | HTML5 | CSS3 | Fetch API
            </Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/ChanduDhakad/misty-act-3451"
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
                  href="https://wonderful-arithmetic-ff3a3a.netlify.app/"
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
        <Flex
          // h={["600px", "600px", "480px", "480px"]}
          flexDirection={["column", "column", "column", "row"]}
          p={4}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src="https://resize.indiatvnews.com/en/resize/newbucket/740_-/2022/06/boat-airdopes-601-anc-boat-website-1655721470.jpg"
            w={["100%", "100%", "100%", "50%"]}
            h="70%"
            objectFit="cover"
          />
          <Stack
            w={["100%", "100%", "100%", "50%"]}
            bg="lightblue"
            p="5%"
            textAlign="left"
            spacing={5}
          >
            <Heading fontSize="25px" color="black">
              Boat Website Clone
            </Heading>
            <Text color="black" fontSize="14px">
               Boat is a famous website where customers able to purchase different types of electronic gadgets.
            </Text>
            <Text color="black" fontSize="14px">
              Collaborative project with 5 team-members, executed in 5 days.
            </Text>
            <Text color="black" fontWeight={"bold"} fontSize="14px">
              Tech Stack :  Fetch API | JavaScript(ES6) | HTML | CSS
            </Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
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