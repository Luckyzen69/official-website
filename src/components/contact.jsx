 

 export default function Contact(){
   return <>
   <div className="w-full h-screen">
   <h2 className="text-center font-bold text-3xl"> Projects</h2>
    
    <div className="   grid grid-cols-1 sm:grid-cols-2 ">
      <div className="m-2">
      <iframe src="https://portfoilo-cyan.vercel.app/"  className=" border hover:ring-2 	w-5/6 h-96  m-5"></iframe>
      <p className="m-5">the link of website is: <a href="https://portfoilo-cyan.vercel.app/" className="underline text-green">https://portfoilo-cyan.vercel.app/</a> </p>
      </div>
      <div>
      <iframe src="https://job-portal-0.netlify.app/" frameborder="0" className=" border hover:ring-2 	w-5/6 h-96 m-5"></iframe>
      <p  className="m-5">the link of website is: <a href="https://job-portal-0.netlify.app/" className="underline text-green">https://job-portal-0.netlify.app/</a> </p>

      </div>

    </div>
   </div>
   </>
 }