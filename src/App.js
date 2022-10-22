import "./styles.css";
import { Link } from "react-scroll";
import About from "../src/Components/About";
import Home from "./Components/Home";

import { Skills } from "../src/Components/Skills";
import { Projects } from "../src/Components/Projects";
import Contact from "../src/Components/Contact";

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
              <a  
                href="https://drive.google.com/file/d/1uriT8K1Oa4vsXwx0e2AzIR1xV6PJOT9i/view?usp=sharing"
                target="_shaik"
              >
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
