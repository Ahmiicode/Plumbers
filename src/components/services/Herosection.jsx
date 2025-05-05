import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from  '../../assets/service.png';
const Herosection = () => {
  return (
    <div className=' min-h-[400px] lg:min-h-[600px] bg-gray-50 relative overflow-hidden'>
    {/* Hero Background Image */}
    <div className="w-full h-[400px] md:h-[600px] relative bg-cover bg-top" 
      style={{ backgroundImage: `url(${heroImage})` }}>
   
   {/* Gradient Overlay */}
   <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/0 to-blue-900" />
   
   {/* Content Container */}
   <div className="absolute top-1/2 -translate-y-1/2 container ml-0 lg:ml-16 mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
     <div className="max-w-2xl xl:max-w-3xl">
       <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
       Reliable Plumbing <br/> Services for Every Need
       </h1>
       <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-[600px]">
       From minor leaks to major installations, our certified plumbers ensure quality, efficiency, and long-lasting solutions.
       </p>
       <div className="flex flex-col sm:flex-row gap-4 mt-8">
         <Link to='/booknow' >
         <button className="button-yellow px-8 py-3 text-lg w-full sm:w-auto">
           Book Now
         </button>
         </Link>
         <Link to='/contactus'>
         <button className="bg-white text font-semibold px-8 py-3 rounded-lg w-full sm:w-auto">
           Contact us
         </button>
         </Link>
       
       </div>
     </div>
   </div>
 </div>
</div>
  )
}

export default Herosection
