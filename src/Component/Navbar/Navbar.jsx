import classes from "./Navbar.module.css";
import React,{useState,useContext} from 'react'
import Logo from "../../Media/Logo.png"
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink,Link } from "react-router-dom";
import { User } from "../../App";
import {Avatar} from '@mui/material';
import { pink } from '@mui/material/colors';


export default function Navbar() {
  const {LoggedInUserData, setLoggedInUserData,createUser}=useContext(User);
  console.log(LoggedInUserData)
  const [Style, setStyle] = useState("none");

  const Toggle=()=>{
    if(LoggedInUserData?.isAuthrized){
      if(Style=="none"){
        setStyle("");

      }
      else if(Style==""){
        setStyle("none")
      }
    }

  }
  const Logout=()=>{
    setLoggedInUserData(
      {id:"",firstName:"",lastName:"",email:"",Gender:"",isAuthrized:false,Liked:[],Cart:[],isbpn:[],isbpn_Cart:[]}
    ) 
}



 
    return (
    <div className={classes.container}>
        
        <NavLink style={{textDecoration:"none",color:"black"}} to={"/about"}  className={classes.about}>About</NavLink>
        {LoggedInUserData.isAuthrized &&
          <NavLink style={{textDecoration:"none",color:"black"}} to={"/wishlist"}  className={classes.about}>Wishlist</NavLink>}
          <NavLink style={{textDecoration:"none",color:"black"}} to="/Modular Kitchen"  className={classes.about}>Kitchen</NavLink>
        <NavLink to="/" className={classes.logo}>
        </NavLink>
        <NavLink to="/contact"style={{textDecoration:"none",color:"black"}} className={classes.services}>Contact</NavLink>
        <div className={classes.contact}>
        
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="">
        Services
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
<NavLink to="/luxury" style={{textDecoration:"none"}}>
<Dropdown.Item href="#/action-2">LUXURY/COMMERCIAL INTERIOR DESIGNER</Dropdown.Item>
</NavLink>
          
<NavLink to="/managment" style={{textDecoration:"none"}}>
<Dropdown.Item href="#/action-2">PROJECT MANAGEMENT</Dropdown.Item>
</NavLink>
<NavLink to="/turnkey" style={{textDecoration:"none"}}>
<Dropdown.Item href="#/action-2">ALL TURNKEY PROJECT</Dropdown.Item>
</NavLink>
<NavLink to="/Resdential" style={{textDecoration:"none"}}>
<Dropdown.Item href="#/action-2">RESIDENTIAL / OFFICE FURNITURE SUPPLIER</Dropdown.Item>
</NavLink>
<NavLink to="/Resdent" style={{textDecoration:"none"}}>
<Dropdown.Item href="#/action-2">RESIDENTIAL INTERIOR DESIGNER</Dropdown.Item>
</NavLink>
        </Dropdown.Menu>
      </Dropdown>

        </div>
        {
  !LoggedInUserData.isAuthrized && 

<Link style={{textDecoration:"none",color:"white"}} to={"/signup"}><Button style={{textDecoration:"none",color:"white"}}  style={{backgroundColor:"#161619",padding:"12px",fontSize:"1rem"}}>Register</Button></Link>
}
{
  LoggedInUserData.isAuthrized && 
<div style={{positon:"relative"}}>
<Avatar
  onClick={Toggle}
  sx={{ bgcolor:pink[400] }}
  alt={LoggedInUserData.firstName}
  src="/broken-image.jpg"
></Avatar>
<div className={classes.impForm} style={{display:`${Style}`}}>
  <ul className={classes.line}>
    <li>hi, {LoggedInUserData.firstName}</li>
    <hr style={{width:"100%",margin:"auto"}}/>
    <li onClick={Logout} style={{cursor:"pointer"}}>Logout</li>
  </ul>
  </div>
</div>
}
    </div>
  )
}
