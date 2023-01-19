import classes from "./Navbar.module.css";
import React from 'react'
import Logo from "../../Media/Logo.png"
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from "react-router-dom";

export default function Navbar() {
 
 
    return (
    <div className={classes.container}>
        <NavLink to="/" className={classes.logo}>
            <img src={Logo} height="70px" width="100px"/>
        </NavLink>
        <NavLink to={"/about"}  className={classes.about}>About</NavLink>
        <NavLink to="/contact" className={classes.services}>Contact</NavLink>
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
        <Button variant="dark">Log In</Button>
    </div>
  )
}
