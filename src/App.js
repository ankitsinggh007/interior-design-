import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Slider from "./Component/Slider";
import Home from "./Pages/Home/Home";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact";
import Luxury from "./Pages/Luxury";
import MANAGEMENT from "./Pages/MANAGEMENT";
import TurnKey from "./Pages/TURNKEY";
import Resident from "./Pages/Resident";
import Residen from "./Pages/RESIDENTIAL";
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div  className="boxer">
      <Navbar/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/luxury" element={<Luxury/>}/>
<Route path="/managment" element={<MANAGEMENT/>}/>
<Route path="/turnkey" element={<TurnKey/>}/>
<Route path="/Resdential" element={<Resident/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/Resdent" element={<Residen/>}/>

</Routes>
<Footer/>
    </div>
  );
}

export default App;
