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
// const cardStyle = {
//   borderRadius: "10px",
//   // border: "1px Solid black",
//   textAlign: "left",
//   padding: "5%",
//   boxShadow: " #9b37ff 0px 2px 4px 0px inset",
//   backgroundColor: "whitesmoke",
//   color: "#1A1A1D",
// };
// const imgcardstyle = {
//   marginTop: "-113px",
// };

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
            src="https://play-lh.googleusercontent.com/D82omFSKvRExAz6bUEQrwTdVRgImhf1xgSqH6ApFMRJUzpxkJ9tfCNmZ01uha2ME7v8"
            w={["100%", "100%", "100%", "50%"]}
            h="70%"
            objectFit="fill"
          />
          <Stack
            w={["100%", "100%", "100%", "50%"]}
            bg="#111111"
            p="5%"
            textAlign="left"
            spacing={5}
          >
            <Heading fontSize="25px" color="white">
              GeekBuying (E-Commerce Website)
            </Heading>
            <Text color="lightgray" fontSize="14px">
              We have built a E-commerce Website where users able to shop
              different kinds of products.
            </Text>
            <Text color="lightgray" fontSize="14px">
              Areas of Responsibility : Product Detail Page
            </Text>
            <Text color="lightgray" fontSize="14px">
              Collaborative project with 5 team-members, executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="14px">
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
              <Button size="xs" colorScheme="red">
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
           src="https://play-lh.googleusercontent.com/D82omFSKvRExAz6bUEQrwTdVRgImhf1xgSqH6ApFMRJUzpxkJ9tfCNmZ01uha2ME7v8"
           w={["100%", "100%", "100%", "50%"]}
           h="70%"
           objectFit="fill"
         />
         <Stack
           w={["100%", "100%", "100%", "50%"]}
           bg="#111111"
           p="5%"
           textAlign="left"
           spacing={5}
         >
           <Heading fontSize="25px" color="white">
             GeekBuying (E-Commerce Website)
           </Heading>
           <Text color="lightgray" fontSize="14px">
             We have built a E-commerce Website where users able to shop
             different kinds of products.
           </Text>
           <Text color="lightgray" fontSize="14px">
             Areas of Responsibility : Product Detail Page
           </Text>
           <Text color="lightgray" fontSize="14px">
             Collaborative project with 5 team-members, executed in 5 days.
           </Text>
           <Text color="lightgray" fontSize="14px">
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
             <Button size="xs" colorScheme="red">
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
            bg="#111111"
            p="5%"
            textAlign="left"
            spacing={5}
          >
            <Heading fontSize="25px" color="white">
              StyleCraze.com
            </Heading>
            <Text color="lightgray" fontSize="14px">
              Stylecraze.com is a website where clients able to purchase
              different types of cosmetics.
            </Text>
            <Text color="lightgray" fontSize="14px">
              Areas of Responsibility : Product Pages(Makeup, SkinCare,
              HairCare)
            </Text>
            <Text color="lightgray" fontSize="14px">
              Collaborative project with 6 team-members, executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="14px">
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
              <Button size="xs" colorScheme="red">
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
            bg="#111111"
            p="5%"
            textAlign="left"
            spacing={5}
          >
            <Heading fontSize="25px" color="white">
              Boat Website Clone
            </Heading>
            <Text color="lightgray" fontSize="14px">
              Lumen5.com is a video creation website that helps marketers,
              publishers, and brands create video content in a breeze, without
              any technical expertise.
            </Text>
            <Text color="lightgray" fontSize="14px">
              Collaborative project with 6 team-members, executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="14px">
              Tech Stack : React | Chakra UI | JavaScript | HTML | CSS
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
              <Button size="xs" colorScheme="red">
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
// const Projects = () => {

//   const projectsdata = [
//     {
//       id: 1,
//       title: "GeekBuying.com (E-com Website)",
//       about:
//         "We have built a E-commerce Website where users able to shop different kinds of products.",
//       tags: "ReactJS, REDUX, JSON, CHAKRA UI",
//       demo: "https://the-great-tarunu88-gmail-com-site-a4747.netlify.app/",
//       github: "https://github.com/tarun-upadhyay/sensitive-meat-4664",
//       image:
//         "https://play-lh.googleusercontent.com/D82omFSKvRExAz6bUEQrwTdVRgImhf1xgSqH6ApFMRJUzpxkJ9tfCNmZ01uha2ME7v8",
//     },

//     {
//       id: 2,
//       title: "Boat Website Clone",
//       about:
//         "Boat is a famous electronic gadgets website where customers able to shop the boat premium boat products.",
//       tags: "HTML5, CSS3, Javascript(ES6), FETCH API ",
//       demo: "https://reliable-salmiakki-d3ab17.netlify.app/",
//       github: "https://github.com/Anantk05/boat-lifestyle.com-Clone",
//       image:
//         "https://resize.indiatvnews.com/en/resize/newbucket/740_-/2022/06/boat-airdopes-601-anc-boat-website-1655721470.jpg",
//     },
//     {
//       id: 3,
//       title: "StyleCraze.com",
//       about:
//         "Stylecraze.com is a website where clients able to purchase different types of cosmetics.",
//       tags: "HTML5, CSS3, Javascript(ES6), FETCH API",
//       demo: "https://wonderful-arithmetic-ff3a3a.netlify.app/",
//       github: "https://github.com/ChanduDhakad/misty-act-3451",
//       image:
//         "https://site-images.similarcdn.com/image?url=stylecraze.com&t=1&s=1&h=d4fed1d9b7b90d05a6841bf5a88ffb7942ae1d15e9f12cda18229c21ac477b14",
//     },

//     {
//       id: 4,
//       title: "E-commerce Website",
//       about:
//         "Uboric.com is an E-commerce website where customers able to purchase the mens, womens wear and footwear products.",
//       tags: " HTML5, CSS3, Javascript(ES6)",
//       demo: "https://curious-donut-e64880.netlify.app/",
//       github: "https://github.com/priyarajawat/team-project-work",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAcgYn8P-zpcUQANBMadeJx_QjGnOD0nLsQ&usqp=CAU",
//     },
//   ];

//   return (
//     <div id="pro">
//       <h1 id="title">My Projects</h1>

//       {projectsdata.map((ele) => {
//         return (
//           <div key={ele.id}>
//             <img id="proimg" src={ele.image} alt={ele.name} />
//             <h1 id="pt" >{ele.title}</h1>
//             <p id="desc">{ele.about}</p>
//            <p id="tags">Tech Stack - {ele.tags}</p>
//             <div class="btn">
//             <button>
//               <a href={ele.demo} target="_blank" rel="noreferrer">LIVE</a>
//             </button>
//             <button>
//               <a href={ele.github} target="_blank" rel="noreferrer">GITHUB</a>
//             </button>
//             </div>
//           </div>
//         );
//       })}
