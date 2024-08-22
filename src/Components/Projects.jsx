import githubicon from "../assets/github.svg"
import linkicon from "../assets/link.svg"
import mongodbicon from "../assets/mongodb-icon.svg";
import reacticon from"../assets/react.svg";
import nodeicon from"../assets/nodejs.svg";
import jsicon from "../assets/js.svg";
import cplusplusicon from"../assets/c-.svg";
import cprogrammingicon from"../assets/C_Programming.svg.png";
import imageprocessingimg from "../assets/Image-Processing.png";
import phototaggingimg from "../assets/Photo-Tagging-Img.png";
import messagingimg from "../assets/Messagin-App-Img2.png";
import geometrygameimg from "../assets/GeometryGame2.png";


import "../Style/Projects.css"  

const Projects = () => {

    

        return (
        <section id="projects">
          <div id="skillsheader">My Projects</div> 
          <div id="projectscont">
            <div className= "container">
           
                <div className="card">

                    <div className="image">
                      <img width=""href = "#" src ={phototaggingimg}/>
                    </div>
                    {/* <p>Title of Project</p> */}
                    <div className="content">
                      
                    <h3 className="vi">Photo Tagging App</h3>
                      <div className="hiddencontent">
                        <div id="techicons">
                          <img src={mongodbicon} width="30px" alt="" />
                          <img src={reacticon} width="30px" alt="" />
                          <img src={nodeicon} width="30px" alt="" />
                          <img src={jsicon} width="30px" alt="" />
                        </div>
                        <p>A Full Stack Web Application &#40;Nonmobile devices&#41;</p>
                        <p>This web app is designed with the MERN stack. It is a photo tagging game that implements a RESTful API to handle all game data. This game also tracks players scores, with the top scores displayed on a leaderboard. </p>
                        <div id="projectlinks">
                          <a href="https://github.com/Prab102/PhotoTaggingFrontend-Waldo" target="_blank" rel="noopener noreferrer"> <img  id="githublink"className="links"src={githubicon} width="50"alt=" githublink" /> </a>
                          <a href="https://phototaggingapp.prabsingh.io/" target="_blank" rel="noopener noreferrer"> <img id="projectlink"className="links"src={linkicon} width="50"alt=" projectlink" /> </a>
                        </div>
                      </div>
                    </div>

                </div> 
              {/* </div>    */}

              <div className="card">

                  <div className="image">
                    <img width="" href = "" src ={imageprocessingimg}/>
                  </div>
                  {/* <p>Title of Project</p> */}
                  <div className="content">
                    
                    <h3 className="vi">Image Processing kit</h3>
                    <div className="hiddencontent">
                      <div id="techicons">
                        <img src={cplusplusicon} width="30px" alt="" />
                        <img src={cprogrammingicon} width="28px" alt="" />
                      </div>
                      <p>A toolkit for image processing, analysis and visualization </p>
                      <p>Signal Processing software that obtains information from digital images, and applies fundamental processing operations such as edge detection, binarizing filters, rgb filters, noise reduction and more. </p>
                      <div id="projectlinks">
                        <a href="https://github.com/Prab102/ImageProcessingToolkit-" target="_blank" rel="noopener noreferrer"> <img  id="githublink"className="links"src={githubicon} width="50"alt=" githublink" /> </a>
  
                      </div>
                    </div>
                  </div>

              </div>   

              <div className="card">

                  <div className="image">
                    <img href = "#" src = {messagingimg}/>
                  </div>
                  {/* <p>Title of Project</p> */}
                  <div className="content">
                    
                    <h3 className="vi">Messaging App</h3>
                    <div className="hiddencontent">
                      <div id="techicons">
                        <img src={mongodbicon} width="30px" alt="" />
                        <img src={reacticon} width="30px" alt="" />
                        <img src={nodeicon} width="30px" alt="" />
                        <img src={jsicon} width="30px" alt="" />
                      </div>
                      <p>A Full Stack Messaging App </p>
                      <p>A messaging application built with the MERN stack, this app implements a RESTful API to handle all user and message data. It also uses PassportJS to handle authenication and authorization for users.</p>
                      <div id="projectlinks">
                        <a href="https://github.com/Prab102/Messaging-App-Frontend" target="_blank" rel="noopener noreferrer"> <img  id="githublink"className="links"src={githubicon} width="50"alt=" githublink" /> </a>
                        <a href="https://messagingapp.prabsingh.io/" target="_blank" rel="noopener noreferrer"> <img id="projectlink"className="links"src={linkicon} width="50"alt=" projectlink" /> </a>
                      </div>
                    </div>
                  </div>

              </div>   

              <div className="card">

                  <div className="image">
                    <img href = "#" src = {geometrygameimg}/>
                  </div>
                  {/* <p>Title of Project</p> */}
                  <div className="content">
                    
                    <h3 className="vi">2D Game Engine</h3>
                    <div className="hiddencontent">
                      <div id="techicons">
                        <img src={cplusplusicon} width="30px" alt="" />
                        {/* <img src={cprogrammingicon} width="28px" alt="" /> */}
                      </div>
                      <p>A game engine built in c++ with the SFML library</p>
                      <p>This game engine is built using the Entity Component System &#40;ECS&#41; architecture. This allows it to have a factory style implementaion, so the creation and destruction of entities are handled in an organized structure. </p>
                      <div id="projectlinks">
                        <a href="https://github.com/Prab102/GeometryGame" target="_blank" rel="noopener noreferrer"> <img  id="githublink"className="links"src={githubicon} width="50"alt=" githublink" /> </a>

                      </div>
                    </div>
                  </div>

              </div> 

            </div>

          </div>
        </section>
        );
      };
      
      export default Projects;