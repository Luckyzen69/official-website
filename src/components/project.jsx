 import Jobportal from "../assets/jobportal.png"
import Portfoilo from "../assets/portfoilo.png"
 export default function Projects(){
   return <>
   <div className="sm:w-full sm:h-screen bg-primary text-white">
   <h2 className="text-center font-bold text-3xl "> Projects</h2>
    
    <div className="   flex flex-col">
      <div className="border flex flex-col sm:flex-row">
        <img src={Jobportal} alt="" className="h-80" />
      <h3 className="font-bold sm:ml-5">PORTFOILO </h3>
      <p className="sm:ml-5 text-grey"><a href="https://portfoilo-cyan.vercel.app/" target="blank" className="underline text-green">View Project</a> </p>
      </div>
      <div className="border flex  flex-col sm:flex-row">
      <img src={Portfoilo} className="h-80 "  />
      <h3 className="font-bold sm:ml-5 text-white">JOB PORTAL </h3>
      <p  className="sm:ml-5 text-grey"> <a href="https://job-portal-0.netlify.app/" target="blank" className="underline text-green">View Project</a> </p>

      </div>

    </div>
   </div>
   <hr className="text-white"/>

   </>
 }