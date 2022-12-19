import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const About = () => {
  return (
    <Stack id="about" pt="8%" pb="8%" bg="lightblue">
      <Text fontWeight="bold" textAlign={"center"} fontSize={"30px"}>
        ABOUT ME
      </Text>

      <Flex
        h="95%"
        align="center"
        justify="center"
        gap={[0, 0, 12]}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Stack textAlign="justify" w={["90%", "90%", "50%"]}>
          <Box color="gray" p={6} fontSize={["18px", "22px"]}>
            <Text
              fontSize="40px"
              textAlign="center"
              color="red"
              mr="99%"
              mb="3%"
            >
              <ImQuotesLeft />
            </Text>

            <Text color={"black"}>
              I'm a Passionate Full-Stack Web Developer with Skills React,
              Redux, HTML, CSS3, JavaScript, NPM, GIT etc... Adaptive to all
              kinds of people and surroundings and always appreciate
              constructive criticism to improve my performance.Able to write
              production ready clean code by using frontend technologies. Having
              very Strong Passion towards coding and eager to learn and enhance
              my skills and explore my skills in the Product based organization
              and want to contribute to the big projects.
            </Text>
            <Text fontSize="40px" textAlign="center" color="red" ml="90%">
              <ImQuotesRight />
            </Text>
          </Box>
        </Stack>
        <Img
          src="https://avatars.githubusercontent.com/u/101376314?v=4"
          h="280px"
          bg="rgb(247, 224, 224,0.5)"
          borderRadius="5%"
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        />
      </Flex>
    </Stack>
  );
};

export default About;

// <h1  >My story</h1>
//       <div id="about">
//         <img  src="https://www.web24zone.com/wp-content/uploads/2022/09/2c778e_89d09c380b7b4a09bcdbcb329c4734b3_mv2.gif" alt="img" />

//         <p id="para">
//           I am from Kadapa, Andhra Pradesh. I am a Full Stack Web Developer with skills
//           HTML5, CSS3, JavaScript(ES-6), React JS, Redux , NPM, Github, ... and I'm a passionate Full Stack Web Developer who loves
//           to wite a Clean elegant and efficient code. I
//           want to explore my skills into the market and want to contribute to
//           the big Projects.
//         </p>
//       </div>
