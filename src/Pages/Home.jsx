 
 import Resume from "../Components/ResumeFile/Shaik-Gouse Mohiddin-Resume.pdf"
import { Box, Button,   Text, Stack,   Flex, Link } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import React from 'react'
 
 
import "../style/home.css"

const Home = () => {
  return (
    <Box>

<Stack id="home" bg="black" pt="13%" pb="13%" spacing={5}>
        <Flex align="center" justify="center">
          <Stack align="center" justify="center" spacing={5}>

            <Text color="skyblue" fontSize="30px">
               @!🙋!@
            </Text>
            <img   src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=35&pause=1000&color=FFFFFF&width=565&lines=Hii%2C+I'm+Shaik Gouse  👋;Full-Stack+Web+Developer..." alt="name" />
            {/* <Heading color="white" fontSize={["50px", "60px", "70px", "90px"]}>
             SHAIK GOUSE
            </Heading>

            <Flex
              id="txt1"
              color="white"
              gap={3}
              fontSize={["20px", "25px", "30px", "40px"]}
            >
              <Text>FULL STACK WEB </Text>
              <Text id="txt">DEVELOPER</Text>
            </Flex> */}
            <Link
              href={Resume}
              target="_blank" download
            >
              <Button rightIcon={<ArrowForwardIcon />} colorScheme='red' variant='solid'>
         View Resume
        </Button>
            </Link>
          </Stack>
        </Flex>
      </Stack>
    
    </Box>
  )
}

export default Home
// const Home = () => {
//   return (
//     <div class="my_i">
//       <img
//         src="https://avatars.githubusercontent.com/u/101376314?s=400&u=e9c502f3abf0c99f1c2e189579cb60a6e215ee29&v=4"
//         alt="shaik"
//       />

//       <img
//         id="my_img"
//         src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=25&pause=1000&color=000000&width=435&lines=Hii%2C+I'm+Shaik Gouse  👋;Full-Stack+Web+Developer...; "
//         alt="Shaik"
//       />

//       <div id="resume">
//         <h1>
//           <a
//             href="https://www.linkedin.com/in/shaik-gouse-94b50a1b8"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {<FaLinkedin />}
//           </a>
//         </h1>
//         <h1>
//          
//             href="https://github.com/gouseimmu"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {<FaGithub />}
//           </a>
//         </h1>
//         <button>
//           <a href={Resume}  download>Resume</a>
//         </button>
//         <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <g data-name="11.download">
//             <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
//             <path d="M12 14.414 7.293 9.707l1.414-1.414L12 11.586l3.293-3.293 1.414 1.414L12 14.414z" />
//             <path d="M11 5h2v8h-2zM17 19H7v-3h2v1h6v-1h2v3z" />
//           </g>
//         </svg>
//       </div>
//     </div>
//   );
// ;

 
