import { Link } from "react-router-dom";
import lodash from "lodash.throttle";
import throttle from "lodash.throttle";
import debounce from "debounce";
import "../Style/Home.css" ;
import MyImage from "../assets/me.png";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
// import componentDidMount from 'react'
import { useCallback, useEffect,useState } from "react";
// import { Outlet } from "react-router-dom";

const Home = ({}) => {
   // const _ = require(throttle);
   const [mouseX, setMouseX] = useState(-1000);
   const [mouseY,setMouseY] = useState(-1000);
   
   const handleMouseMove = useCallback(throttle((e) => {
      // console.log('Mouse position:'); 

      let x= e.clientX-30;
      let y= e.clientY-30
      setTimeout(() =>{
         setMouseX(x);
         setMouseY(y);
      },100)
      // setMouseX(e.clientX-30);
      // setMouseY(e.clientY-30);


    },)); 
      

   const handleMouseLeave = (event) =>{

      // console.log("i left the area");
      setTimeout(() =>{
         setMouseX(-1000);
         setMouseY(-1000);
      },100)
      // setMouseX(-1000);
      // setMouseY(-1000);

   }


        return (
        <section id="home" >
           
           <div onMouseMove={handleMouseMove} onMouseLeave={(event)=>{handleMouseLeave(event)}}  id="animatedcont"> 
               {/* <div id="imgcont"> */}
                  <img id="imgcont" src={MyImage}  width="200"alt="Prab Singh" />
                  
               {/* </div> */}
               <div id="homecontent">

                  <div id="welcome">
                   <p className="typewriter">Hi, I'm Prab</p>
                  </div>
                  <p id="hello" >
                     {/* I'm Prab  */}
                  </p>
                  <p id="title">Software Developer</p>
                  
                  {/* <p className="typewriter">Welcome</p> */}
               </div>
               <div id="socialscont">
                  {/* <GithubIcon/> */}
                  <img   id="githubicon"src={GithubIcon}  width="80"alt="" />
                  <a href="https://www.linkedin.com/in/prabjot-singh-123867281" target="_blank" rel="noopener noreferrer"> <img src={LinkedinIcon} width="80"alt="" /> </a>
               </div>
               <span id="circle" style={{left: `${mouseX}px`,top: `${mouseY}px`}}className="circle"></span>

               
           </div>
           {/* <div id="line"> line

           </div> */}

        </section>
        );
      };
      
      export default Home;