
import React from 'react'
import { GrMailOption } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
        <div className="contact-grid md:grid-cols-2">
            <div className="contact-space">
                <h2 className="contact-heading" >Get In Touch</h2>
                <p className="contact-text" >
                Thank you for visiting my portfolio! If youre interested in working together have any questions or simply want to chat about potential projects feel free to get in touch. Im always excited to connect with creative minds and explore new opportunities.
                 Lets bring your ideas to life!
                </p>
                <div className="contact-flex" data-aos="zoom-in-left">
                <GrMailOption size={30}/>hirajamil786@gmail.com
                </div>
                <div className="contact-flex" data-aos="zoom-in-left">
                <BsTelephoneFill size={30}/>(031)-666-536
                </div>
                
            </div>
            <div>
              <div className="contact-space">
                <div className="form" >
                  <label htmlFor="name">Name</label>
                  <input type="text" className="input-field" id="name"/>
                </div>
                <div className="form" >
                  <label htmlFor="email">Email</label>
                  <input type="text" className="input-field" id="email"/>
                </div>
                <div className="form" >
                  <label htmlFor="msg">Message</label>
                  <textarea className="textarea-field" id="msg" rows={8}></textarea>
                </div>
               <button className="button" >Send</button>

              </div>

            </div>
        </div>
    </div>
  )
}

export default Contact;
