import img from  '../assets/main.png';
import { DiCss3 ,DiHtml5 ,DiJsBadge,DiMongodb ,DiVisualstudio,DiNodejs,DiNpm   } from "react-icons/di";
import { SiTailwindcss,SiGithub ,SiRedux  } from "react-icons/si";
import { SiExpress,SiPostman  ,SiReact } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";

export default function About(){
    return  <>
    <div className='bg-pink'>
      <h2 className="text-center font-bold text-4xl ">About</h2>
      <div className=' rounded-full  flex flex-col sm:flex-row text-lg  '>
        <img src={img} alt="image" className='rounded-full sm:h-56 w-56 ml-24 sm:ml-10' />
        <p className='sm:ml-20 sm:mt-16'>Learning web development since 2021. <br /> Gained knowledge about different framework of javascript. <br />
        Learned Mern Stack at <b>Mindrisers: Institution Of Technology.</b>
        </p>
      </div> 
    </div>

     <div className='w-full h-screen snap-center flex justify-center bg-pink'>


      <div >
        <div className="border sm:rounded-full p-2 m-12 text-center hover:ring-2 ">
            <p className="font-bold text-3xl  font-mono mb-5  ">  Skills </p>
            <div className=" space-x-1 justify-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "  >
                <div  >
                <p className="font-bold font-mono text-xl">Font-End</p>
                <ul className="flex space-x-4 justify-center text-3xl  ">
                    
                    <li> <DiHtml5/></li>
                    <li> <DiCss3/></li>
                    <li> <DiJsBadge/></li>
                    <li> <SiReact/></li>
                    <li> <SiTailwindcss/></li>
                </ul>
                </div>

                <div>
                <p className="font-bold font-mono text-xl">Back-End</p>

                <ul className="flex space-x-4 justify-center text-3xl ">
                    <li > <FaNodeJs/></li>
                    <li> <SiExpress/></li>
                    <li> <DiNpm/></li>
                    <li> <SiRedux /></li>
                    <li> <DiNodejs /></li>
                    
                </ul>
                </div>
                <div>

                <p className="font-bold font-mono text-xl">Database & Others</p>
                <ul className="flex space-x-4 justify-center text-3xl ">
                    <li> <DiMongodb/></li>
                    <li> <SiPostman/></li>
                    <li> <DiVisualstudio/></li>
                    <li> <FaFigma/></li>
                    

                </ul>
                </div>
            </div>
        </div>

        <div>


<div className="grid grid-cols-1 sm:grid-cols-2">

<div className="m-2 text-center">
<h2 className="font-bold font-mono text-xl">AIMS / GOALS  </h2>
<div className="vb"></div>
<ul className=" font-mono  space-y-10 mt-6  ">
<li className="text-lg"> Software developer</li>
<li className="text-lg"> Game developer</li>
<li className="text-lg"> App developer</li>
<li className="text-lg"> Animator </li>
</ul>
</div>

<div className="m-2 text-center  p-0.5">
<h2 className="font-bold font-mono text-xl">Education</h2>
<div className="vl"></div>
<ul className="space-y-10 mt-6 font-mono ">
    <li className="text-lg"> Secondary Education Examination (SEE) <span>: 2021 AD / 2077 BS</span></li>
    <li className="text-lg">NEB BOARD (SLC / +2) <span>: 2023 AD / 2079 BS</span></li>
    
</ul>
</div>
      </div>
      </div> 
       </div> 
        </div>





    </>
}