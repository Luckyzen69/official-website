 

 export default function Projects(){
   return <>
   <div className="w-full h-screen">
   <h2 className="text-center font-bold text-3xl m-2"> Projects</h2>
    
    <div className="   grid grid-cols-1 sm:grid-cols-2 ">
      <div className="border m-4">
      <iframe src="https://portfoilo-cyan.vercel.app/"  className=" border hover:ring-2 	w-full h-96  "></iframe>
      <h3 className="font-bold sm:ml-5">Portfoilo </h3>
      <p className="sm:ml-5">the link of website is: <a href="https://portfoilo-cyan.vercel.app/" className="underline text-green">https://portfoilo-cyan.vercel.app/</a> </p>
      </div>
      <div className="border m-4">
      <iframe src="https://job-portal-0.netlify.app/" frameborder="0" className=" border hover:ring-2 w-full h-96 "></iframe>
      <h3 className="font-bold sm:ml-5">Job Portal </h3>
      <p  className="sm:ml-5">the link of website is: <a href="https://job-portal-0.netlify.app/" className="underline text-green">https://job-portal-0.netlify.app/</a> </p>

      </div>

    </div>
   </div>
   </>
 }