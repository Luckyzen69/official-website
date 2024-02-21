import { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import Home from './components/home'
import './App.css'
import About from './components/about'
import Projects from './components/project'
import Contact from './components/contact'
import { SpeedInsights } from '@vercel/speed-insights/react';
import Aos from "aos";
import 'aos/dist/aos.css'


function App() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  
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

    <Home  data-aos="fade-right" />
    <About  data-aos="fade-left"/>
    <Projects  data-aos="fade-top"/>
    <Contact  data-aos="fade-left"/>
    <SpeedInsights  data-aos="fade-right"/>
    </div>

}
    </div>
    </>
  )
}

export default App
