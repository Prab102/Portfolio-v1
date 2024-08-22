
import throttle from "lodash.throttle";

import "../Style/Home.css" ;
import MyImage from "../assets/me.png";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
// import componentDidMount from 'react'
import { useCallback,useState } from "react";
// import { Outlet } from "react-router-dom";

const Home = () => {
   // const _ = require(throttle);
   const [mouseX, setMouseX] = useState(-1000);
   const [mouseY,setMouseY] = useState(-1000);
   
   const handleMouseMove = useCallback(throttle((e) => {

      let x= e.clientX-30;
      let y= e.clientY-30
      setTimeout(() =>{
         setMouseX(x);
         setMouseY(y);
      },100)

    },)); 
      

   const handleMouseLeave = (event) =>{

      setTimeout(() =>{
         setMouseX(-1000);
         setMouseY(-1000);
      },100)

   }


        return (
        <section id="home" >
           
           <div onMouseMove={handleMouseMove} onMouseLeave={(event)=>{handleMouseLeave(event)}}  id="animatedcont"> 
               {/* <div id="imgcont"> */}
                  <img id="imgcont" className="animate__animated animate__zoomIn"src={MyImage}  width="200"alt="Prab Singh" />
                  
               {/* </div> */}
               <div id="homecontent">

                  <div id="welcome">
                   <p className="typewriter">Hi, I&#39;m Prab</p>
                  </div>
                  <p id="hello" >
                     {/* I'm Prab  */}
                  </p>
                  <p id="title">Software Developer</p>
                  

               </div>


               <span id="circle" style={{left: `${mouseX}px`,top: `${mouseY}px`}}className="circle"></span>

               
           </div>
           <div id="socialscont" className="animate__animated animate__bounceInLeft">
                  <a id="githubicon"href="https://github.com/Prab102" target="_blank" rel="noopener noreferrer"> <img src={GithubIcon} width="80"alt="" /> </a>

                  <a id="linkedinicon"href="https://www.linkedin.com/in/prabjot-singh-123867281" target="_blank" rel="noopener noreferrer"> <img src={LinkedinIcon} width="80"alt="" /> </a>
            </div>


        </section>
        );
      };
      
      export default Home;