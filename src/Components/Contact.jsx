import React from "react";
 import { FaGithub, FaLinkedin,FaWhatsapp ,FaRegistered,FaPhoneAlt  } from "react-icons/fa";
 import {TfiEmail} from "react-icons/tfi"
import {GoLocation} from "react-icons/go"

import Stats from "./Stats";
const Contact = () => {
  return (
    <div id="Contactsid">
      <div>
      {<Stats />}
      </div>
      
      <div id="insiC">
      <h3> Contact Me </h3>
      <p> {<FaPhoneAlt />} 6300354091</p>
      <p> {<TfiEmail />} gouseimmugh@gmail.com</p>

      <p> {<GoLocation />} Kadapa, AndhraPradesh</p>
      
      
      <div id="ci">
        <h2>
          <a
            href="https://www.linkedin.com/in/shaik-gouse-94b50a1b8"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaLinkedin />}
          </a>
        </h2>
        <h1>
          <a
            href="https://github.com/gouseimmu"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaGithub />}
          </a>
        </h1>
        <h1>
          <a
            href="https://api.whatsapp.com/send?phone=916300354091"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaWhatsapp />}
          </a>
        </h1>
      </div>
      <p id="reg">All rights Reserved {<FaRegistered />}</p>
      </div>
    </div>
  );
};

export default Contact;

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
