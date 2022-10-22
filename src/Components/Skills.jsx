import React from "react";
import "../styles.css";
 
function Skills() {
  const SkillsData = [
    {
      id: 1,
      name: "HTML5",
      image:
        " https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg ",
    },
    {
      id: 2,
      name: "CSS3",
      image:
        " https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg ",
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      image:
        " https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg ",
    },
    {
      id: 4,
      name: "REACT",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207",
    },
    {
      id: 5,
      name: "REDUX",
      image: " https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png  ",
    },
    {
      id: 6,
      name: "GITHUB",
      image:
              "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png" ,
    },
    {
      id:7,
      name : "GIT",
      image:"https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg",

    },
    {
      id:7,
      name : "GIT",
      image:"https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",

    },
   
 
  
  ];
  return (
    
    <div id="Skillsid">
       
       <h1 id="tex">Technical Skills</h1>
       
      
      
     
      {SkillsData.map((ele) => (

        
        <div id="container">
          
          <img src={ele.image} alt={ele.name} />
        </div>
      ))}
    </div>
  );
}

export { Skills };
