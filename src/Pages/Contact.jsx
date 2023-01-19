import classes from "./Contact.module.css"
import React from 'react'
import {ImLocation} from "react-icons/im"
import {BsTelephoneFill } from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {RiInstagramFill} from "react-icons/ri"
import {BsYoutube} from "react-icons/bs"

function Contact() {
  return (
    <div>
        <div className={classes.Contact}>
        <span>CONTACT US</span>
    </div>
    <div className={classes.form}>
        <div className={classes.address}>
            <span style={{color:"grey",fontSize:"1.5rem",color:"black",fontWeight:"400"}}>We'd love to hear from you</span>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"1.4rem"}}>
                <span><BsTelephoneFill fill="#3267E0"/>99XXXXXXXX</span>
                <span><ImLocation fill="#3267E0"/> 251/EXXYYZZ Karnataka</span>
            </div>
            <span style={{fontSize:"1.4rem"}}><MdEmail fill="#3267E0"/> xyz@gmail.com</span>
            <span>    <BsFacebook className={classes.icon1}/>
                        <AiFillTwitterCircle className={classes.icon2}/>
                        <RiInstagramFill className={classes.icon3}/>
                        <BsYoutube className={classes.icon4}/></span>
        </div>
        <div className={classes.forum}>
        <input type="text" className={classes.Input} placeholder="Name"></input>
        <input type="email" className={classes.Input} placeholder="Email"></input>
        <input type="phone" className={classes.Input} placeholder="Phone"></input>
        <textarea  className={classes.Input} style={{height:"10rem"}} placeholder="Message"></textarea>
        <button type="submit" style={{width:"7rem",height:"3.5rem",backgroundColor:"#3267E0",color:"white",letterSpacing:".4rem",border:"none"}}>SUBMIT</button>
        </div>
    </div>
    </div>
  )
}

export default Contact