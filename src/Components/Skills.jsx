// import { Link } from "react-router-dom";
import jsicon from "../assets/js.svg";
import reacticon from"../assets/atom.svg";
import mongodbicon from"../assets/mongodb-icon.svg"
import pythonicon from"../assets/python.svg"
import giticon from"../assets/social.svg"
import linuxicon from"../assets/linux.svg"
import postgreicon from"../assets/postgre.svg"
import cplusplusicon from"../assets/c-.svg"
import htmlicon from"../assets/html-5.svg"
import cssicon from"../assets/css-3.svg"
import nodeicon from"../assets/nodejs.svg"




import "../Style/Skills.css"  

const Skills = () => {

    
    

        return (
        <section id="skills">
           <div id="skillsheader">My Skills</div> 
           <div id="iconcontainer">
               
               <div className="icon">
                  <img src={jsicon} width="80"alt="javascriptlogo"/>
                  <p>JavaScript</p>
               </div>
               <div className="icon">
                  <img src={reacticon} width="80"alt="javascriptlogo"/>
                  <p>React</p>
               </div>
               <div className="icon">
                  <img src={mongodbicon} width="80"alt="javascriptlogo"/>
                  <p>MongoDB</p>
               </div>
               <div className="icon">
                  <img src={pythonicon} width="80"alt="javascriptlogo"/>
                  <p>Python</p>
               </div>
               <div className="icon">
                  <img src={giticon} width="80"alt="javascriptlogo"/>
                  <p>Git/Github</p>
               </div>
               <div className="icon">
                  <img src={linuxicon} width="80"alt="javascriptlogo"/>
                  <p>Linux</p>
               </div>
               <div className="icon">
                  <img src={postgreicon} width="80"alt="javascriptlogo"/>
                  <p>PostgreSQL</p>
               </div>
               <div className="icon">
                  <img src={cplusplusicon} width="80"alt="javascriptlogo"/>
                  <p>C++</p>
               </div>
               <div className="icon">
                  <img src={htmlicon} width="80"alt="javascriptlogo"/>
                  <p>HTML</p>
               </div>
               <div className="icon">
                  <img src={cssicon} width="80"alt="javascriptlogo"/>
                  <p>CSS</p>
               </div>
               <div className="icon">
                  <img src={nodeicon} width="80"alt="javascriptlogo"/>
                  <p>Nodejs</p>
               </div>
           </div>
        </section>
        );
      };
      
      export default Skills;