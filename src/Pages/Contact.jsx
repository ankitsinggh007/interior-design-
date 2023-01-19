import classes from "./Contact.module.css"
import React,{useContext,useEffect,useState} from 'react'
import {ImLocation} from "react-icons/im"
import {BsTelephoneFill } from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {RiInstagramFill} from "react-icons/ri"
import {BsYoutube} from "react-icons/bs"
import { User } from "../App"
import Database from "../Component/Firbase"
import {doc,getDoc,updateDoc} from "firebase/firestore"
import Swal from "sweetalert2"
import { Navigate, useNavigate } from "react-router-dom"

function Contact() {
  const {LoggedInUserData, setLoggedInUserData,createUser}=useContext(User);
  const Navigate=useNavigate()
  const [Data, setData] = useState({
    email:"",
    phone:"",
    name:"",
    message:""
  });
  useEffect(() => {
    if(LoggedInUserData?.isAuthrized){
      setData({
        email:LoggedInUserData.email,
        phone:"",
        name:LoggedInUserData.firstName,
        message:"",
      })
    }
    
  }, [])
  const sendData=async(e)=>{
    e.preventDefault();
    const washingtonRef = doc(Database, "Feedback","Messages");
    const d=await getDoc(washingtonRef)
    const {message}=d.data(); 
    console.log(message)
    message.push(Data);
    console.log(message)

    await updateDoc(washingtonRef, {
        message
        });
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: `We get your message`,
          showConfirmButton: true,
        })
        Navigate("/")
        
    //     setLoggedInUserData({...LoggedInUserData,Cart:[]})
    }
console.log(Data)
  
  
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
        <input type="text" className={classes.Input}
        defaultValue={Data.name}
        required
        value={Data.name}
        onChange={(e)=>setData({...Data,name:e.target.value})}
        placeholder="Name"></input>
        <input type="email" className={classes.Input}
        defaultValue={Data.email}
        required
        value={Data.email}
        onChange={(e)=>setData({...Data,email:e.target.value})}
        placeholder="Email"></input>
        <input type="phone" className={classes.Input}
        defaultValue={Data.phone}
        required
          value={Data.phone}
        onChange={(e)=>setData({...Data,phone:e.target.value})}
        placeholder="Phone"></input>
        <textarea  className={classes.Input} style={{height:"10rem"}}
        defaultValue={Data.message}
        required
        value={Data.message}
        onChange={(e)=>setData({...Data,message:e.target.value})}
        placeholder="Message"></textarea>
        <button type="submit"onClick={sendData} style={{width:"7rem",height:"3.5rem",backgroundColor:"#3267E0",color:"white",letterSpacing:".4rem",border:"none"}}>SUBMIT</button>
        </div>
    </div>
    </div>
  )
}

export default Contact