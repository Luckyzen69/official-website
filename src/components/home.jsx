import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io"; 


export default function Home(){
    return <>
    <div className='flex justify-center items-center bg-primary w-full h-screen snap-center'>
      <h1 className='font-serif text-5xl text-white  text-center'>Lagzen Thakuri  </h1>
      <p className='absolute bottom-64 text-grey'>Mern Stack Developer</p>
    <div className="absolute bottom-2 left-2">
      <ul className="text-white text-2xl flex space-x-2">
        <li><a href="https://github.com/Luckyzen69" target="blank" ><FaGithub/></a></li>
        <li><a href="https://github.com/Luckyzen69" target="blank" ><FaLinkedin /></a></li>
        <li><a href="https://www.instagram.com/lagzenthakuri/" target="blank" ><AiFillInstagram/></a></li>
        <li><a href="https://www.youtube.com/channel/UCQmp909J8KpqHM32EbYfyKQ" target="blank" translate="2"><IoLogoYoutube/></a></li>
      </ul>
    </div>
    </div>
    </>
}