import classes from "./Section.module.css"
import React from 'react'

function Section(props) {
console.log(props.data)
    return (
    <>
    <div className={classes.background} style={{backgroundImage:`url(${props.data.image})`}}>
        <span className={classes.text}>{props?.data?.caption}</span>
    </div>
    <div className={classes.Title}>
        <span className={classes.caption}>{props?.data?.caption}</span>
        <span className={classes.para}>{props?.data?.para}</span>

    </div>
    </>
  )
}

export default Section