import { IoMail } from "react-icons/io5";
import img from  '../assets/main.png';
import { FaLinkedin } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";


export default function Contact(){
    const sendMail=()=>{
       const emailAddress  ="thakurizen22@gmail.com";
    const mailtoUri = `mailto:${emailAddress}`
    window.location.href = mailtoUri;
}
    return<>
    <div className="bg-primary text-white p-4">

        <p className="text-2xl text-center flex justify-center">Let's connect:<HiCursorClick  className="mt-4 ml-3"/></p>

       <div className="flex flex-row justify-center">

        <div> 
        <img src={img} alt="pfp " className='rounded-full sm:h-32 w-32 ' />
        </div>

        <div>

       <button onClick={sendMail} className="flex text-grey underline m-5"><IoMail className="text-2xl mr-2 cursor-text text-white" />Thakurizen22@gmail.com </button>
       <p className="flex underline text-grey m-5"><FaLinkedin className=" text-xl text-white mr-2"/>Luckyzen</p>

        </div>
       </div>
    </div>
    </>
}