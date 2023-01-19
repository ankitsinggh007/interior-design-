import React, { Component } from "react";
import Slider from 'react-slick';
import classes from "./Slider.module.css"

const Slide=(props)=>{
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const settings1= {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if(props?.Category==="image"){
    return (
      <div className={classes.container}>
        <Slider {...settings} style={{height:"80vh"}}>
          {
            props.data.map((slide, index)=>{
              return (
                <div key={index} style={{border:"1px solid black"}}>
                  <img src={slide} height="490vh" width="100%"/>
                </div>
              )
            })
          }
         
        </Slider>
      </div>
    );
        }
  else if (props?.Category==="Testimonial") {
    return (
    
        <Slider {...settings} className={classes.container1} >
          
          {
            props.data.map((slide, index)=>{
              return (
                <div key={index}  className={classes.feedback}>
                  <span className={classes.caption}>{slide.caption}</span>
                  <br/>
                  <span style={{fontWeight:"600"}}>-{slide.name}</span>
                 
                </div>
              )
            })
          }
         
        </Slider>
    
    );
  }
  else{
    return (
        <Slider {...settings1} style={{margin:"auto",width:"85%"}}>
          {
            props.data.map((slide, index)=>{
              console.log(slide)
              return (
                <div key={index} style={{border:"1px solid black"}}>
                  <img src={slide}  />
                </div>
              )
            })
          }
         
        </Slider>
    );

  }
  }
  export default Slide;