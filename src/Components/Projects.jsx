import React from "react";

const Projects = () => {
  const projectsdata = [
    {
      id: 1,
      title: "E-commerce Website",
      about:
        "Uboric.com is an E-commerce website where customers able to purchase the mens, womens wear and footwear products.",
      tags: " HTML5,CSS3, Javascript(ES6)",
      demo: "https://curious-donut-e64880.netlify.app/",
      github: "https://github.com/priyarajawat/team-project-work",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAcgYn8P-zpcUQANBMadeJx_QjGnOD0nLsQ&usqp=CAU",
    },
    {
      id: 2,
      title: "Boat Website Clone",
      about:
        "Boat is a famous electronic gadgets website where customers able to shop the boat premium boat products.",
      tags: "HTML5,CSS3, Javascript(ES6) ,FETCH API ",
      demo: "https://reliable-salmiakki-d3ab17.netlify.app/",
      github: "https://github.com/Anantk05/boat-lifestyle.com-Clone",
      image:
        "https://resize.indiatvnews.com/en/resize/newbucket/740_-/2022/06/boat-airdopes-601-anc-boat-website-1655721470.jpg",
    },
    {
      id: 3,
      title: "StyleCraze.com",
      about:
        "Stylecraze.com is a website where clients able to purchase different types of cosmetics.",
      tags: "HTML5, CSS3, Javascript(ES6),FETCH API",
      demo: "https://wonderful-arithmetic-ff3a3a.netlify.app/",
      github: "https://github.com/ChanduDhakad/misty-act-3451",
      image:
        "https://site-images.similarcdn.com/image?url=stylecraze.com&t=1&s=1&h=d4fed1d9b7b90d05a6841bf5a88ffb7942ae1d15e9f12cda18229c21ac477b14",
    },
    {
      id: 4,
      title: "E-commerce Website",
      about:
        "This is a ramdom project I am using to React.JS,Javascript, HTML/CSS.This is portfolio website and I hope you are enjoying this portfolio.Make sure you like and comment if you have any doubt",
      tags: "ReactJS, Javascript, Firebase, Portfolio",
      demo: "https://github.com/ThantZinPhyo-OP/Portfolio-Website",
      github: "https://github.com/ThantZinPhyo-OP/Portfolio-Website",
      image:
        "https://github.com/ThantZinPhyo-OP/Portfolio-Website/raw/main/home.png",
    },
  ];

  return (
    <div id="pro">
      <h1 id="title">My Projects</h1>

      {projectsdata.map((ele) => {
        return (
          <div key={ele.id}>
            <img id="proimg" src={ele.image} alt={ele.name} />
            <h1 id="pt" >{ele.title}</h1>
            <p id="desc">{ele.about}</p>
           <p id="tags">Tech Stack - {ele.tags}</p>
            <div class="btn">
            <button>
              <a href={ele.demo} target="_blank" rel="noreferrer">LIVE</a>
            </button>
            <button>
              <a href={ele.github} target="_blank" rel="noreferrer">GITHUB</a>
            </button>
            </div>
          </div>
        );
      })}

      </div>
 )
    }

export { Projects };
