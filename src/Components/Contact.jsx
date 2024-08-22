
// import '.env'
import "../Style/Contact.css"  
import emailjs from"@emailjs/browser"
// import { useState } from 'react'
// import { useParams } from "react-router-dom";
// import { Outlet } from "react-router-dom";

const Contact = () => {
      // console.log(import.meta.env.VITE_SERVICEID);
      const sendEmail = (e)=>{
         e.preventDefault();
         emailjs.sendForm(import.meta.env.VITE_SERVICEID, import.meta.env.VITE_TEMPLATEID, e.target, import.meta.env.VITE_MYID) //use env variable maybe
         alert("email was successfully sent");
      }
    

        return (
        <section id="contact" >
         <div id="contactheader">Contact Me</div>
         <div id="contactcontainer">
            
            <p id="messagegreeting">If you want to know more, or would like to contact me. Send me a message using this form</p>
            
            <form id="formstuff"action="" onSubmit={sendEmail}>
                  <div id="inputcontainer">

                     <input name="from_email" id="emailinput"type="text"  placeholder="Your email" required/>

                     <textarea name="message" id="messageinput" cols="40" rows="13" placeholder="Message"required></textarea>

                     <button id="submitbutton" type="submit">Send </button>

                  </div>

            </form>
            
         </div>

        </section>
        );
      };
      
      export default Contact;