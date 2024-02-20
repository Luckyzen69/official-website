 import Jobportal from "../assets/jobportal.png"
import Portfoilo from "../assets/portfoilo.png"
import { GoDotFill } from "react-icons/go";
import Hangman from "../assets/hangman.png"

 export default function Projects(){
   return <>
   <div className=" bg-primary text-white">
    
    <div className="   flex flex-col bg-primary p-4">
      <div className="border flex flex-col sm:flex-row">

      <img src={Portfoilo}  alt="Portfoilo" />

        <div className="flex flex-col">

      <h3 className="font-bold sm:ml-5 flex text-xl font-mono"><GoDotFill className="text-orange m-1"/>PORTFOILO </h3>
      <p className="font-mono text-lg m-2">A personal portfolio website built using ReactJS for better  user experience and responsiveness.</p>
      <p className=" text-grey sm:ml-5 "><a href="https://portfoilo-cyan.vercel.app/" target="blank" className="underline text-green">View Project</a> </p>

        </div>
      </div>

      <div className="border flex  flex-col sm:flex-row p-4">
        <img src={Jobportal} alt="Jobportal" />

      <div className="flex flex-col">

      <h3 className="font-bold sm:ml-5 text-white flex text-xl font-mono"><GoDotFill className="text-orange m-1"/>JOB PORTAL </h3>
      <p className="font-mono text-lg m-2">A job portal website clone  built using ReactJS, Redux and Nodejs with Express server and mongodb as database.</p>
      <p  className="sm:ml-5 text-grey"> <a href="https://job-portal-0.netlify.app/" target="blank" className="underline text-green">View Project</a> </p>

      </div>
      </div>

      <div className="border flex flex-col sm:flex-row">

<img src={Hangman}  alt="hangman game" />

  <div className="flex flex-col">

<h3 className="font-bold sm:ml-5 flex text-xl font-mono"><GoDotFill className="text-orange m-1"/>Hangman Game </h3>
<p className="font-mono text-lg m-2">A hangman game project where user should guess the word before the stickman body becomes fully visible.</p>
<p className=" text-grey sm:ml-5 "><a href="https://luckyzen69.github.io/Hangman-Game/" target="blank" className="underline text-green">View Project</a> </p>

  </div>
</div>

    </div>
   </div>

   <hr className="text-white"/>

   </>
 }