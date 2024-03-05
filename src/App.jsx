import { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import Home from './components/home'
import { Route,Routes } from "react-router-dom"

import './App.css'
import About from './components/about'
import Projects from './components/project'
import Contact from './components/contact'
import Poetry from './components/poetry'

function App() {

  const [loading,setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  return (
    <>
    <div className='snap bg-primary  w-full h-screen relative'>
      
      {
        loading ?
        <div className="flex justify-center items-center text-center flex-col pt-60 " >
          <p className="font-serif  text-center text-white text-2xl m-2">Lagzen Thakuri.</p>

        <BarLoader 
  color="#36d7b7"
  speedMultiplier={0.3}
  width={400}
  height={4}
  loading ={loading}
  
/>
<p className="font-serif  text-center text-grey text-xl m-2">official website</p>

  </div>
                :
<div>



    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/poetry" element={<Poetry/>}/>
     </Routes>
   
    </div>

}
    </div>
    </>
  )
}

export default App
