import React, { useState } from 'react'
import Navbar from '../../Component/Navbar'
import Slider from '../../Component/Slider'
import Banner1 from "../../Media/Banner1.jpg"
import Banner2 from "../../Media/Banner2.jpg"
import Banner3 from "../../Media/Banner3.jpg"
import Banner4 from "../../Media/Banner4.jpg"
import Banner5 from "../../Media/Banner5.jpg"
import classes from "./Home.module.css"
import office1 from "../../Media/office1.jpg"
import office2 from "../../Media/office2.jpg"
import office3 from "../../Media/office3.jpg"
import office4 from "../../Media/office4.jpg"
import office5 from "../../Media/office5.jpg"
import office6 from "../../Media/office6.jpg"
import office7 from "../../Media/office7.jpg"
import office8 from "../../Media/office8.jpg"
import office9 from "../../Media/office9.jpg"
import office10 from "../../Media/office10.jpg"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Home1 from "../../Media/Home1.jpg";
import Home2 from "../../Media/Home2.jpg";
import Home3 from "../../Media/Home3.jpg";
import Home4 from "../../Media/Home4.jpg";
import Home5 from "../../Media/Home5.jpg";
import Home6 from "../../Media/Home6.jpg";
import Architectur1 from "../../Media/Architectur1.jpg" 
import Architectur2 from "../../Media/Architectur2.jpg" 
import Architectur3 from "../../Media/Architectur3.jpg" 
import Architectur4 from "../../Media/Architectur4.jpg" 
import Architectur5 from "../../Media/Architectur5.jpg" 
import Architectur6 from "../../Media/Architectur6.jpg" 
import Architectur7 from "../../Media/Architectur7.jpg" 
import Architectur8 from "../../Media/Architectur8.jpg" 
import Villa1 from "../../Media/Villa1.jpg"
import Villa2 from "../../Media/Villa2.jpg"
import Villa3 from "../../Media/Villa3.jpg"
import Villa4 from "../../Media/Villa4.jpg"
import Villa5 from "../../Media/Villa5.jpg"
import Villa6 from "../../Media/Villa6.jpg"
import Villa7 from "../../Media/Villa7.jpg"
import { NavLink } from 'react-router-dom'

function Home() {
   
    const array=[Banner1,Banner2,Banner3,Banner4,Banner5]
    const OFFICE=[office2, office3, office4, office5,office6, office7, office8, office9,office10];
    const HOUSES=[Home1, Home2, Home3, Home4, Home5, Home6];
    const ARCHITECTURE=[Architectur1, Architectur2, Architectur3, Architectur4,Architectur5, Architectur6, Architectur7, Architectur8];
    const VILLA=[Villa1, Villa2, Villa3, Villa4, Villa5,Villa6,Villa7];
    const obj1={
        OFFICE,HOUSES,ARCHITECTURE,VILLA,
        ALL:[...OFFICE,...HOUSES,...ARCHITECTURE,...VILLA]
    }
    const [Data, setData] = useState(obj1.ALL);
    const Testimonial=[{
        caption:"I hired [Interior Designer] to completely revamp my living room and I couldn't be happier with the results. They listened to my vision and added their own expert touch to create a space that exceeded my expectations. I highly recommend [Interior Designer] to anyone looking to update their home.",
        name:"Vicky Kapoor"
    },
    {
        caption:"I had the pleasure of working with [Interior Designer] on my recent home renovation project. They were professional, responsive, and most importantly, their designs were absolutely stunning. I received so many compliments on the new look of my home, and I have [Interior Designer] to thank for it.",
        name:"Tushar Kumar"
    },
    {
        caption:"I was feeling overwhelmed and unsure about how to decorate my new home, but [Interior Designer] made the process so easy and enjoyable. They helped me find the perfect pieces to bring my vision to life, and I couldn't be happier with the end result. I highly recommend [Interior Designer] to anyone looking for expert design help.",
        name:"Rajesh Moer"
    },{
        caption:"I've been thinking overwhelmed with [Interior Designer] on my home renovation project. They were professional, responsive, and most importantly, their designs were absolutely stunning. I received so many compliments on the new look ",
        name:"Joseph "
    }
]
const Clients=["https://interior-website.netlify.app/img/about/client_6.png","https://interior-website.netlify.app/img/about/client_7.png","https://interior-website.netlify.app/img/about/client_8.png","https://interior-website.netlify.app/img/about/client_9.png","https://interior-website.netlify.app/img/about/client_1.png","https://interior-website.netlify.app/img/about/client_2.png"]
    const Decor=["ALL","OFFICE","ARCHITECTURE","HOUSES","VILLA"]
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
         {Data?.length}
        </Tooltip>
      );
      const State=(obj)=>{
        setData(obj1[obj]);
        console.log("hi")
      }
      console.log(Data)
    return (
        <div>
            <Slider Category="image" data={array} />
            <div className={classes.hero}>
                <span className={classes.title}>Who We Are</span>
                <span className={classes.para}>Lorem ipsum  deleniti minus nemo nihil quisquam deleniti omnis odio necessitatibus adipisci quam sint laudantium ex quos minima eveniet? Fugit cum ex excepturi quia veritatis laboriosam quidem accusamus, ad deleniti earum maiores ipsa, perspiciatis praesentium aliquam suscipit asperiores iste rerum sit pariatur voluptates! Exercitationem, repellendus praesentium odio natus blanditiis nemo vero officia dolores itaque cumque similique non, maxime autem nam reiciendis excepturi ullam ratione explicabo optio corrupti saepe enim! Nihil eligendi cumque maiores quidem dolorem illum, voluptatibus cum eos animi tempora odio doloribus enim eaque dolor nulla facilis, mollitia tempore. Reiciendis eum atque pariatur expedita corrupti alias maxime, similique vitae nam! Deserunt laudantium eius eaque libero sint dolor repudiandae nostrum possimus, magni asperiores dolore inventore repellat? Vero, aliquid incidunt cumque suscipit cum doloremque alias, pariatur quasi blanditiis sapiente velit eveniet sed ut corrupti animi veritatis optio magnam sint consequatur quidem rem inventore nobis neque tenetur! Beatae nihil accusamus recusandae voluptates ad rerum error officia, necessitatibus illum molestias! Itaque accusamus qui nam dolor id? Asperiores nobis totam in expedita amet eius, fugiat perspiciatis quasi sequi blanditiis maxime numquam eligendi aliquam quisquam impedit </span>
            </div>
            <div className={classes.work}>
                <span >OUR WORKS</span>
                <span className={classes.tabs}>

                {
                    Decor.map((obj,index)=>{
                        return(
                            <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 10 }}
      overlay={renderTooltip}
      key={index}
      trigger={['hover', 'focus']}
    >
      <Button style={{marginLeft:"15px",border:".1px solid black"}} onClick={()=>State(obj)} variant="">{obj}</Button>
    </OverlayTrigger>
                        )
                    })

                }
                </span>
                <div className={classes.container}>
                   {
                    Data?.map((img,index)=>{
                        return(
                            <span className={classes.item}>
                            <img src={img}   width="100%" height="80%" />
                            </span>
                        )
                    })
                   }
                </div>
               
            </div>
            <div className={classes.testimony}>
                        <span style={{fontSize:"1.5rem"}}>FROM CLIENTS</span>
                   <Slider Category="Testimonial" data={Testimonial}/>


            </div>
            <div className={classes.Clients}>
                <span>OUR CLIENTS</span>
                <Slider Category="T" data={Clients}/>
            </div>
            <NavLink to="/contact" style={{textDecoration:"none"}} className={classes.enquire}>Enquiry Now</NavLink>
            
        </div>
    )
}

export default Home