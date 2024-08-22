import { useState } from 'react'

import './App.css'

import Home from './Components/Home.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import { HashLink } from 'react-router-hash-link'

function App() {


  const [click, setClick] = useState(false);
  const [activelink, setActiveLink] = useState('homelink');


  window.onscroll = () => {
  const sections =  document.querySelectorAll('section');

    sections.forEach(section =>{
      let top = window.scrollY;
      let offset = section.offsetTop - 300; 
      let height = section.offsetHeight;
      let id = section.id+"link";

      if((top >= offset && top< offset + height)&& (click === false)){

        setActiveLink(section.id +"link");
      }

      if((top >= offset && top< offset + height)&& (id == activelink)&& (click === true)){
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
            
            <nav id="navbar">
                  
                    <HashLink 
                      id="homelink" 
                      className ={
                        activelink=='homelink' ? "linkactive": "link"  
                      }
                      onClick={(e) => {handleClick(e)}}
                      
                      smooth
                      to="#home" >Home
                    </HashLink>


                    <HashLink 
                      id="projectslink" 
                      className ={
                        activelink=='projectslink' ? "linkactive": "link"  
                      }
                      onClick={(e) => {handleClick(e)}}

                      smooth
                      to="#projects" >Projects
                    </HashLink> 

                    <HashLink 
                      onClick={(e) => {handleClick(e)}}
                      id="skillslink" 
                      className ={
                        activelink=='skillslink' ? "linkactive": "link"  
                      }
                      smooth
                      to="#skills" >Skills
                    </HashLink>


                    <HashLink 
                      id="contactlink" 
                      className ={
                        activelink=='contactlink' ? "linkactive": "link"  
                      }
                      onClick={(e) => {handleClick(e)}}

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
