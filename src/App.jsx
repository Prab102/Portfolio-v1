import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'




import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'

import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

function App() {


  const [click, setClick] = useState(false);
  const [activelink, setActiveLink] = useState('homelink');


  window.onscroll = () => {
  const sections =  document.querySelectorAll('section');

    // console.log(sections);
    sections.forEach(section =>{
      let top = window.scrollY;
      let offset = section.offsetTop - 300; //added to offset for blended transition
      let height = section.offsetHeight;
      let id = section.id+"link";
      // console.log(section.id);
      //use section.id and activelink
      if((top >= offset && top< offset + height)&& (click === false)){
        // console.log("section id "+ id);
        setActiveLink(section.id +"link");
      }
      // console.log(section.id);
      // console.log("active link " + activelink);
      if((top >= offset && top< offset + height)&& (id == activelink)&& (click === true)){
        // console.log("this is in scroll");
        setClick(false);
      }
    })
  }



  


  const handleClick =(e)=> {
    setActiveLink(e.target.id)
    setClick(true);
    // setClick(false);

  };
  

  return (
    <>
      <div id="navbarcont">
            {/* <div>logo</div> */}
            <nav id="navbar">
                    {/* think states  */}
                    <HashLink 
                      id="homelink" 
                      className ={
                        activelink=='homelink' ? "linkactive": "link"  
                      }
                      onMouseDown={(e) => {handleClick(e)}}
                      // onMouseUp={(e) =>{handleMouseUp(e)}}
                      smooth
                      to="#home" >Home
                    </HashLink>


                    <HashLink 
                      id="projectslink" 
                      className ={
                        activelink=='projectslink' ? "linkactive": "link"  
                      }
                      onMouseDown={(e) => {handleClick(e)}}
                      // onMouseUp={(e) =>{handleMouseUp(e)}}

                      smooth
                      to="#projects" >Projects
                    </HashLink> 

                    <HashLink 
                      onMouseDown={(e) => {handleClick(e)}}
                      // onMouseUp={(e) =>{handleMouseUp(e)}}
                      id="skillslink" 
                      className ={
                        activelink=='skillslink' ? "linkactive": "link"  
                      }
                      smooth
                      to="#skills" >Skills
                    </HashLink>

                    {/* <HashLink  to="#extra" smooth>Extra</HashLink> */}

                    <HashLink 
                      id="contactlink" 
                      className ={
                        activelink=='contactlink' ? "linkactive": "link"  
                      }
                      onClick={(e) => {handleClick(e)}}
                      // onMouseUp={(e) =>{handleMouseUp(e)}}

                      smooth
                      to="#contact" >Contact
                    </HashLink>  
                    <span> </span> 
            </nav>
      </div>
      <Home/>
      <Projects/>
      <Skills/>
      <Contact/>

     
    </>
  )
}

export default App
