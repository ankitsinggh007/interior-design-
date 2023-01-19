import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Slider from "./Component/Slider";
import { Route,Routes,Navigate, useNavigate } from "react-router-dom";
import { useState,useEffect, createContext } from "react";
import Login from "./Pages/Login.jsx"
import Signup from "./Pages/Signup.jsx"
import Home from "./Pages/Home/Home";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact";
import Luxury from "./Pages/Luxury";
import MANAGEMENT from "./Pages/MANAGEMENT";
import TurnKey from "./Pages/TURNKEY";
import Resident from "./Pages/Resident";
import { getDocs } from 'firebase/firestore';
import DataBase from "./Component/Firbase"
import { collection, addDoc } from "firebase/firestore";  
import { query, where,getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword , getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Residen from "./Pages/RESIDENTIAL";
export const User=createContext({});

function App() {
  const Navigate=useNavigate();
  const [Creadential, setCreadential] = useState({fname:"",lname:"",email:"",Gender:"",Password:""});
  const [LoggedInUserData, setLoggedInUserData] = useState({id:"",firstName:"",lastName:"",email:"",Gender:"",isAuthrized:false,Liked:[],Cart:[],isbpn:[],isbpn_Cart:[]});

 const auth = getAuth();
//  Fetch Data
const FetchData= async (email)=>{
  console.log(email,"email")
  const citiesRef = collection(DataBase, "User");
  const q = query(citiesRef, where("email", "==", `${email}`));
  console.log(q,"q");
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot,"querySnapshot")
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    setLoggedInUserData({...LoggedInUserData,...doc.data(),isAuthrized:true,id:doc.id});
  });
}
// Creat user in DataBase
   const CreateUserInDataBase = async ()=>{
    const DocRef= await addDoc(collection(DataBase,"User"),{
    email:Creadential.email,
    firstName:Creadential.fname,
    lastName:Creadential.lname,
    Gender:Creadential.Gender,
  }); 
  Navigate("/login")
 }
// Create User
const createUser=async (email,password)=>{
     createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user,"user");
      CreateUserInDataBase();

  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage,"error");
      setCreadential({...Creadential,message:errorCode.split("/")[1]})
      
  }); 
}
// Login User
const verifyCredential=async()=>{
  console.log("i am in verifyCredential")
   const res= await signInWithEmailAndPassword(auth, Creadential.email, Creadential.Password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email,"user");
      FetchData(user.email);
      
      Navigate("/")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage,"err");
      setCreadential({...Creadential,message:errorCode.split("/")[1]})

    });
  
}
console.log(LoggedInUserData);

  return (
    <div  className="boxer">
    <User.Provider value={{Creadential,setCreadential,createUser,verifyCredential,LoggedInUserData,setLoggedInUserData}}>

      <Navbar/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/luxury" element={<Luxury/>}/>
<Route path="/managment" element={<MANAGEMENT/>}/>
<Route path="/turnkey" element={<TurnKey/>}/>
<Route path="/Resdential" element={<Resident/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/Resdent" element={<Residen/>}/>

</Routes>
<Footer/>
</User.Provider>

    </div>
  );
}

export default App;
