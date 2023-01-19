import classes from "./About.module.css"
import React from 'react'
import { Button } from "react-bootstrap"

function About() {
  return (
    <div>
      <div className={classes.banner}>
      <span>ABOUT US</span>
    </div>
    <div className={classes.info}>
      <span className={classes.first}>
        <p className={classes.Title} style={{color:"grey",fontSize:"2rem",fontWeight:"600"}}>OUR STORY</p>
        <p className={classes.Para} style={{lineHeight:"1.5rem",wordSpacing:".4rem",textAlign:"justify",color:"grey"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      </span>
      <span className={classes.Technial}>
        <span>Founded in 2009</span>
        <hr/>
        <span style={{textAlign:"center"}}>More than 2000 Happy Customers</span>
        <hr/>
        
        <span>98 Completed Projects</span>
        <hr/>
      
      </span>
    </div>
    <div className={classes.Carousal}></div>
    <div className={classes.Career}>
       <div className={classes.Bronze}>
    <span style={{fontSize:"2rem"}}>WANT TO WORK WITH US?</span>
      <span style={{textAlign:"center"}}>Be a part of our dynamic team, where opportunities for growth are endless. Apply now!</span>
    <button>GET IN TOUCH</button>
    </div>
    </div>
   
    </div>
  )
}

export default About