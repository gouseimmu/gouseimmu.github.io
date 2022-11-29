import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  SimpleGrid,
 
  Link,
   
} from "@chakra-ui/react";
import { IoIosCall, IoMdMail, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import "../style/contact.css"

const Contact = () => {
  const iconstyle = {
    borderRadius: "30% 5% 30% 5%",
    backgroundColor: "whitesmoke",
    color: "black",
    padding: 3,
  };
  const iconhover = {
    cursor: "pointer",
  };
  return (
    <Stack id="contact" pb={10} pt={2} bg="black" spacing={5}>
     
      <Text textAlign={"center"} color="gray" fontWeight="bold">
        CONTACT ME
      </Text>
      <Heading textAlign={"center"} color="lightgray">Get in Touch</Heading>

      <SimpleGrid>
        {/* <Flex
          fontSize="34px"
          align="center"
          justify="center"
          gap={8}
          color="white"
        > */}
        <Stack     w="50%" fontSize="30px" spacing={5} p={5}>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <Link
                href="https://github.com/gouseimmu"
                target="_blank"
              >
                <BsGithub />
              </Link>
            </Box>
            <Link href="https://github.com/gouseimmu" target="_blank">
              <Text  fontSize={["12px", "16px", "18px", "20px"]} color="gray">
                Github
              </Text>
            </Link>
          </Flex>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <Link
                href="https://www.linkedin.com/in/sumeet-more-368322230/"
                target="_blank"
              >
                <IoLogoLinkedin />
              </Link>
            </Box>
            <Link
              href="https://www.linkedin.com/in/shaik-gouse-94b50a1b8"
              target="_blank"
            >
              {" "}
              <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
                Linkedin
              </Text>
            </Link>
          </Flex>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <IoIosCall />
            </Box>
            <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
              +91 7386756120
            </Text>
          </Flex>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <IoLogoWhatsapp />
            </Box>
            <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
               <a href="https://api.whatsapp.com/send?phone=916300354091">+91 6300354091</a>
            </Text>
          </Flex>
          <Flex align="center" gap={3}>
            <Link
              href="mailto:gouseimmugh@gmail.com?subject = Feedback&body = Message"
              color="white"
            >
              <Box style={iconstyle} _hover={iconhover}>
                <IoMdMail />
              </Box>
            </Link>

            <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
              gouseimmugh@gmail.com
            </Text>
          </Flex>
        </Stack>
        <Box></Box>
        {/* </Flex> */}
      </SimpleGrid>

     
    </Stack>
  )
}

export default Contact

 
// const Contact = () => {
//   return (
//     <div id="Contactsid">
//       <div>
//       {<Stats />}
//       </div>
      
//       <div id="insiC">
//       <h3> Contact Me </h3>
//       <p> {<FaPhoneAlt />} 6300354091</p>
//       <p> {<TfiEmail />} gouseimmugh@gmail.com</p>

//       <p> {<GoLocation />} Kadapa, AndhraPradesh</p>
      
      
//       <div id="ci">
//         <h2>
//           <a
//             href="https://www.linkedin.com/in/shaik-gouse-94b50a1b8"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {<FaLinkedin />}
//           </a>
//         </h2>
//         <h1>
//           <a
//             href="https://github.com/gouseimmu"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {<FaGithub />}
//           </a>
//         </h1>
//         <h1>
//           <a
//             href="https://api.whatsapp.com/send?phone=916300354091"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {<FaWhatsapp />}
//           </a>
//         </h1>
//       </div>
//       <p id="reg">All rights Reserved {<FaRegistered />}</p>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// <h1> Contact Me </h1>
// <p> {<FaPhoneAlt/>}    6300354091</p>
// <p> {<TfiEmail/>}    gouseimmugh@gmail.com</p>

// <p> {<GoLocation/>}  Kadapa, AndhraPradesh</p>

// <div id="ci">
//   <h2><a href="https://www.linkedin.com/in/shaik-gouse-94b50a1b8" target="_blank" rel="noopener noreferrer"  >{<FaLinkedin/>}</a></h2>
//   <h1><a href="https://github.com/gouseimmu" target="_blank" rel="noopener noreferrer"  >{<FaGithub />}</a></h1>
//   <h1><a href="https://api.whatsapp.com/send?phone=916300354091" target="_blank" rel="noopener noreferrer">{<FaWhatsapp/>}</a></h1>
// </div>
//  <p id="reg">All rights Reserved {<FaRegistered/>}</p>
//  <div>
//  </div>
