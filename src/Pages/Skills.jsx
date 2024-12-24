import {
  Box,
 
  Image,
  Stack,
  Text,
  SimpleGrid,
 
} from "@chakra-ui/react";
import React from "react";
import "../style/skills.css";
 
 
 
import Stats from "./Stats";

const Skills = () => {
  return (
    
      <Box id="skills"  >

      
    <Stack   pt={10} pb="10%" spacing={["40%", "5%", "5%", "3%"]}>
   
      
      <Stack spacing="4%">
        <Text textAlign={"center"}    fontSize={"25px"} color="black" fontWeight="bold">
          TECHNICAL SKILLS
        </Text>
        <SimpleGrid
           id="skillDiv"
         
          columns={[2, 3, 3, 5]}
          align="center"
          justify="space-evenly"
          spacingY={12}
          spacingX={12}
          fontWeight="bold"
          color="gray"
          
        >
          <Box>
            <Image src="https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360" alt="html" />
            <Text>MS SQL SERVER</Text>
          </Box>
          <Box>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="css" />
            <Text>Power BI</Text>
          </Box>
          <Box>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" />
            <Text>SSIS</Text>
          </Box>
          <Box>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" />
            <Text>SSRS</Text>
          </Box>
          <Box>
            <Image src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="mongoDB" />
            <Text>SSAS</Text>
          </Box>
          <Box>
            <Image src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="redux" />
            <Text>Azure</Text>
          </Box>
          <Box>
            <Image src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="Node.js" />
            <Text>Data Analysis</Text>
          </Box>
          <Box>
            <Image
              src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              alt="Express.js"
              border="1px solid white"
              borderRadius="50%"
            />
            <Text>DAX</Text>
          </Box>
          <Box>
            <Image src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png" alt="Chakra-ui" />
            <Text>Microsoft Excel</Text>
          </Box>
          <Box>
            <Image src="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg" alt="git" />
            <Text>Tableau</Text>
          </Box>
        </SimpleGrid>
        
     
        
      </Stack>
    </Stack>
       <Stats />
       </Box>
  )
}

export default Skills
 
// function Skills() {
//   const SkillsData = [
//     {
//       id: 1,
//       name: "HTML5",
//       image:
//         " https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg ",
//     },
//     {
//       id: 2,
//       name: "CSS3",
//       image:
//         " https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg ",
//     },
//     {
//       id: 3,
//       name: "JAVASCRIPT",
//       image:
//         " https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg ",
//     },
//     {
//       id: 4,
//       name: "REACT",
//       image:
//         "https://www.svgrepo.com/show/327388/logo-react.svg",
//     },
//     {
//       id: 5,
//       name: "REDUX",
//       image: "https://cdn.worldvectorlogo.com/logos/redux.svg",
//     },
//     {
//       id: 6,
//       name: "GITHUB",
//       image:
//               "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png" ,
//     },
//     {
//       id:7,
//       name : "GIT",
//       image:"https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg",

//     },
//     {
//       id:7,
//       name : "GIT",
//       image:"https://cdn-icons-png.flaticon.com/512/919/919825.png",

//     },
   
 
  
//   ];
//   return (
    
//     <div id="Skillsid">
       
//        <h1 id="tex">Technical Skills</h1>
       
      
      
     
//       {SkillsData.map((ele) => (

        
//         <div id="container">
          
//           <img src={ele.image} alt={ele.name} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export { Skills };
