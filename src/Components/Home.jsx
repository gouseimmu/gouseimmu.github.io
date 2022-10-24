import React from "react";
import "../styles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Resume from "./ResumeFile/Shaik-Gouse Mohiddin-Resume.pdf";

const Home = () => {
  return (
    <div class="my_i">
      <img
        src="https://avatars.githubusercontent.com/u/101376314?s=400&u=e9c502f3abf0c99f1c2e189579cb60a6e215ee29&v=4"
        alt="shaik"
      />

      <img
        id="my_img"
        src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=25&pause=1000&color=000000&width=435&lines=Hii%2C+I'm+Shaik Gouse  👋;Full-Stack+Web+Developer...; "
        alt="Shaik"
      />

      <div id="resume">
        <h1>
          <a
            href="https://www.linkedin.com/in/shaik-gouse-94b50a1b8"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaLinkedin />}
          </a>
        </h1>
        <h1>
          <a
            href="https://github.com/gouseimmu"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaGithub />}
          </a>
        </h1>
        <button>
          <a href={Resume}  download>Resume</a>
        </button>
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g data-name="11.download">
            <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
            <path d="M12 14.414 7.293 9.707l1.414-1.414L12 11.586l3.293-3.293 1.414 1.414L12 14.414z" />
            <path d="M11 5h2v8h-2zM17 19H7v-3h2v1h6v-1h2v3z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Home;
