import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io"; 
import About from "./about";
import Projects from "./project";
import Contact from "./contact";


export default function Home(){
    return <>
    <div className='flex justify-center items-center bg-primary w-full h-screen snap-center'>
      <Link to="/" className="absolute top-4 left-5 text-5xl text-grey font-serif">LT</Link>
      
      <h1 className='font-serif text-5xl text-white text-center'>Lagzen Thakuri <br/>
       <span className=' font-thin text-2xl  text-grey '>Mern Stack Developer</span> 
       </h1>
       
      <Link to="/poetry" className="absolute right-2 bottom-2 text-white border rounded-full p-2 hover:bg-white hover:text-black  font-serif text-xl">under construction</Link>

    <div className="absolute bottom-2 left-2 ">

      <ul className="text-white text-2xl flex space-x-2">
        <li><a href="https://github.com/Luckyzen69" target="blank" ><FaGithub/></a></li>
        <li><a href="https://github.com/Luckyzen69" target="blank" ><FaLinkedin /></a></li>
        <li><a href="https://www.instagram.com/lagzenthakuri/" target="blank" ><AiFillInstagram/></a></li>
        <li><a href="https://www.youtube.com/channel/UCQmp909J8KpqHM32EbYfyKQ" target="blank" translate="2"><IoLogoYoutube/></a></li>
      </ul>
    </div>

    </div>
      <hr className="text-white"/>
      <About/>
      <Projects/>
      <Contact/>
    </>
}