import "./styles.css";
import Resume from "./Components/ResumeFile/Shaik-Gouse Mohiddin-Resume.pdf"
import { Link } from "react-scroll";
import About from "../src/Components/About";
import Home from "./Components/Home";

import { Skills } from "../src/Components/Skills";
import { Projects } from "../src/Components/Projects";
import Contact from "../src/Components/Contact";
//import { useState } from "react";

export default function App() {
 
  return (
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="home">
                HOME
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="skills">
                SKILLS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT
              </Link>
            </li>
            <li>
              <a href={Resume} download>
                RESUME
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home">{<Home />}</section>
      <section id="about">{<About />}</section>
      <section id="skills">{<Skills />}</section>
      <section id="projects"> {<Projects />}</section>
      <section id="contact">{<Contact />}</section>
    </div>
  );
}
