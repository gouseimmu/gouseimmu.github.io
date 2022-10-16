 import React from 'react'
 import { Box , Image  } from "@chakra-ui/react"
 
 function Skills() {
  const SkillsData = [
    {
      id:1,
      name: "HTML5",
      image:" https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg " ,

    },
    {
      id:2,
      name: "CSS3",
      image:" https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg " ,

    },
    {
      id:3,
      name: "JAVASCRIPT",
      image:" https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg " ,

    },
    {
      id:4,
      name: "REACT" ,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNErx29Xj1-HZGSX74XQZTz0xOa7t2WYaTGg&usqp=CAU"  ,

    },
    {
      id:5,
      name: "REDUX",
      image:" https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png  " ,

    },
    {
      id:6,
      name: "GITHUB",
      image:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVX4T8aK1B1achwL0ghFbp6HRI70Grdo_U7w&usqp=CAU " ,

    },

  ]
   return (
     <div id='Skillsid'> 
      {
          SkillsData.map((ele)=>(
             
           <Box ml={"4vh"} display={"inline-grid"}  p={"5vh"}>

           
              <Image  borderRadius={"full"} boxSize="150px" objectFit={"cover"}   width="20vh" height="20vh" src={ele.image} alt = {ele.name} />
              </Box>
              
        
           
          
            
            
           
             
             
            
          ))
      }

     </div>
   )
 }
 
 export  {Skills}


 