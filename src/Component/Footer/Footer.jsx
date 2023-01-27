import React from 'react'
import classes from "./Footer.module.css"
import Logo from "../../Media/Logo.png"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {RiInstagramFill} from "react-icons/ri"
import {BsYoutube} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import {BsTelephoneFill } from "react-icons/bs"
import {MdEmail} from "react-icons/md"


function Footer() {
  return (
    <div>
        <div className={classes.footer}>
                <div className={classes.office_logo}>
                    <img src={Logo}/>
                </div>
                <div className={classes.social}>
                   <span> follow us on</span>
                    <div>
                        <BsFacebook className={classes.icon1}/>
                        <AiFillTwitterCircle className={classes.icon2}/>
                        <RiInstagramFill className={classes.icon3}/>
                        <BsYoutube className={classes.icon4}/>
                        
                    </div>
                    <span className={classes.copywrigth}>© Copyright Design Heaven - All Rights Reserved</span>
                </div>

                {/* <div className={classes.address}>
                    
<p style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"90%"}}>
<span><MdLocationOn/>251-
Karnataka- 110057</span>
  <span><BsTelephoneFill/>P: (011) 123456789</span>
<span><BsTelephoneFill/>M: 9800000000</span>
<span><MdEmail/>aksahm959173@gmail.com</span>
</p>
                </div> */}
                 </div>
    </div>
  )
}

export default Footer